'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import ScrollFade from './ScrollFade'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const GREETING: Message = {
  role: 'assistant',
  content: "Hi! I'm here to answer questions about Mitanshu's background, projects, and availability. What would you like to know?",
}

const STARTER_CHIPS = [
  "What has he built with ROS2?",
  "What's his strongest domain?",
  "Is he open to internships?",
]

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [chipsVisible, setChipsVisible] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to latest message — only after user has sent at least one message
  useEffect(() => {
    if (messages.length <= 1) return
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const userMsg: Message = { role: 'user', content: trimmed }
    const nextMessages = [...messages, userMsg]

    setMessages(nextMessages)
    setInput('')
    setLoading(true)
    setChipsVisible(false)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      const data = await res.json()

      // Both answer and error land as an assistant bubble
      const replyContent: string = data.answer ?? data.error ?? "Something went wrong. You can reach Mitanshu at mitanshug2004@gmail.com"
      setMessages((prev) => [...prev, { role: 'assistant', content: replyContent }])
    } catch {
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: "Something went wrong. You can reach Mitanshu at mitanshug2004@gmail.com",
      }])
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [messages, loading])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <section id="chat" aria-label="Ask about Mitanshu">
      <div className="container">
        <ScrollFade>
          <span className="section-label">ASK</span>
        </ScrollFade>

        <ScrollFade>
          <h2 className="chat-heading">Have a question?</h2>
          <p className="hero-descriptor">
            Ask anything about Mitanshu's experience, skills, or availability.
          </p>

          {/* Message window */}
          <div className="chat-window" role="log" aria-live="polite" aria-label="Conversation">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message chat-message--${msg.role}`}>
                {msg.role === 'assistant' && (
                  <span className="chat-avatar" aria-hidden="true">MG</span>
                )}
                <div className={`chat-bubble chat-bubble--${msg.role}`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="chat-message chat-message--assistant" aria-label="Typing">
                <span className="chat-avatar" aria-hidden="true">MG</span>
                <div className="chat-bubble chat-bubble--assistant chat-typing">
                  <span className="chat-dot" />
                  <span className="chat-dot" />
                  <span className="chat-dot" />
                </div>
              </div>
            )}

            <div ref={bottomRef} aria-hidden="true" />
          </div>

          {/* Suggestion chips — shown until first user message */}
          {chipsVisible && (
            <div className="chat-chips" aria-label="Suggested questions">
              {STARTER_CHIPS.map((chip) => (
                <button
                  key={chip}
                  className="chat-chip"
                  onClick={() => sendMessage(chip)}
                  disabled={loading}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Input row */}
          <div className="chat-input-row">
            <input
              ref={inputRef}
              className="chat-input"
              type="text"
              placeholder="Ask about skills, projects, availability…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              aria-label="Your message"
              maxLength={500}
            />
            <button
              className={`chat-send${!input.trim() || loading ? ' chat-send--disabled' : ''}`}
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              ↑
            </button>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
