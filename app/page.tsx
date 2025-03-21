/**
 * Main Chat Interface Component
 * Provides a unified interface for interacting with both Claude AI and Notion database
 */

'use client'

import React, { useState, ChangeEvent } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      setResponse(data.message)
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred while fetching the response.')
      setResponse('')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Chat with Claude</h1>
        
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            value={message}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
            rows={4}
            placeholder="Type your message here..."
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !message.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded mb-4">
            {error}
          </div>
        )}

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