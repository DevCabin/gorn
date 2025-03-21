/**
 * Main Chat Interface Component
 * Provides a unified interface for interacting with both Claude AI and Notion database
 */

'use client'

import { useState, FormEvent } from 'react'
import type { FC } from 'react'

// Type definitions for Notion search results
interface NotionResult {
  title: string
  url: string
  content: string
}

// Type definition for chat messages
interface Message {
  role: 'user' | 'assistant'
  content: string
  source?: 'notion' | 'claude'
  results?: NotionResult[]
}

const Home: FC = () => {
  // State management for messages, input, and loading state
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Handles form submission for chat messages
   * Routes the query to the API and handles the response
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    setMessages(prev => [...prev, { role: 'user', content: input }])
    setInput('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, messages })
      })
      
      if (!response.ok) {
        throw new Error('Failed to get response')
      }
      
      const data = await response.json()
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.message,
        source: data.source,
        results: data.results
      }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, there was an error processing your request.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Renders Notion search results with clickable links
   */
  const renderNotionResults = (results: NotionResult[]) => {
    return (
      <div className="mt-2 space-y-2">
        {results.map((result, idx) => (
          <div key={idx} className="bg-gray-700 p-3 rounded">
            <a 
              href={result.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              {result.title}
            </a>
            <p className="text-sm text-gray-300 mt-1">{result.content}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">AI Assistant</h1>
        
        {/* Chat message history */}
        <div className="space-y-4 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-blue-600 ml-12' 
                  : `bg-gray-800 mr-12 ${
                      message.source === 'notion' ? 'border-l-4 border-purple-500' : ''
                    }`
              }`}
            >
              {/* Source indicator for responses */}
              {message.source && (
                <div className="text-xs text-gray-400 mb-1">
                  Source: {message.source}
                </div>
              )}
              <div className="prose prose-invert">
              {message.content}
              </div>
              {/* Render Notion results if available */}
              {message.results && renderNotionResults(message.results)}
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-center">
              <div className="animate-pulse text-gray-400">Processing...</div>
            </div>
          )}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question or search Notion..."
            className="flex-1 p-2 rounded bg-gray-800 text-white"
            disabled={isLoading}
          />
          <button 
            type="submit"
            className={`px-4 py-2 rounded ${
              isLoading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Send'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default Home 