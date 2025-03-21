import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY })

export async function POST(req: Request) {
  if (!process.env.CLAUDE_API_KEY) {
    return NextResponse.json(
      { error: 'Missing API key' },
      { status: 500 }
    )
  }

  try {
    const { message } = await req.json()
    
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
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 