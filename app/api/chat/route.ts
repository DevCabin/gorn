import { NextResponse } from 'next/server'
import { Client } from '@notionhq/client'
import Anthropic from '@anthropic-ai/sdk'

// Initialize clients
const notion = new Client({ auth: process.env.NOTION_API_KEY })
const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY })

// Helper to determine if query is Notion-related
function isNotionQuery(message: string): boolean {
  const notionKeywords = ['document', 'page', 'database', 'find in', 'search for', 'look up']
  return notionKeywords.some(keyword => message.toLowerCase().includes(keyword))
}

export async function POST(req: Request) {
  if (!process.env.NOTION_API_KEY || !process.env.CLAUDE_API_KEY || !process.env.NOTION_DATABASE_ID) {
    return NextResponse.json(
      { error: 'Missing required environment variables' },
      { status: 500 }
    )
  }

  try {
    const { message, messages } = await req.json()
    
    if (isNotionQuery(message)) {
      // Search Notion
      const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
          or: [
            {
              property: "title",
              rich_text: {
                contains: message.toLowerCase()
              }
            },
            {
              property: "content",
              rich_text: {
                contains: message.toLowerCase()
              }
            }
          ]
        },
        page_size: 5
      })
      
      // Format Notion results
      const results = await Promise.all(response.results.map(async (page: any) => {
        const pageContent = await notion.pages.retrieve({ page_id: page.id })
        return {
          title: page.properties.title?.title[0]?.plain_text || 'Untitled',
          url: page.url,
          content: pageContent.properties.content?.rich_text[0]?.plain_text || 'No content'
        }
      }))

      if (results.length === 0) {
        // If no results in Notion, fall back to Claude
        const completion = await anthropic.messages.create({
          model: 'claude-3-opus-20240229',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `I couldn't find anything in the Notion database for: "${message}". Please provide a general response.`
            }
          ]
        })

        return NextResponse.json({ 
          message: completion.content[0].text,
          source: 'claude'
        })
      }

      return NextResponse.json({ 
        message: `Found in Notion:\n${JSON.stringify(results, null, 2)}`,
        source: 'notion',
        results
      })
    } else {
      // Use Claude
      const completion = await anthropic.messages.create({
        model: 'claude-3-opus-20240229',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      })

      return NextResponse.json({ 
        message: completion.content[0].text,
        source: 'claude'
      })
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 