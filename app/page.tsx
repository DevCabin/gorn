/**
 * Main Chat Interface Component
 * Provides a unified interface for interacting with both Claude AI and Notion database
 */

'use client'

import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      const data = await res.json()
      setResponse(data.message)
    } catch (error) {
      console.error('Error:', error)
      setResponse('An error occurred while fetching the response.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Chat with Claude</h1>
        
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            rows={4}
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            disabled={loading || !message}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        {response && (
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="font-bold mb-2">Response:</h2>
            <p className="whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </main>
  )
} 