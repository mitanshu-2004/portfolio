'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import ScrollFade from './ScrollFade'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const GREETING: Message = {
  role: 'assistant',
  content: "Hi. Ask me about Mitanshu's projects or technical depth. I only answer from his portfolio source, so the numbers I share are traceable back to a repo.",
}

const STARTER_CHIPS = [
  "What's his strongest robotics project?",
  "What robot-learning data work has he done?",
  "How does the Nferent AI teleoperation work?",
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

    const FALLBACK = "Something went wrong. You can reach Mitanshu at mitanshug2004@gmail.com"

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      // Validation / error responses come back as JSON, not a stream.
      if (!res.ok || !res.body) {
        let msg = FALLBACK
        try {
          const data = await res.json()
          if (data?.error) msg = data.error
        } catch {
          // non-JSON body, keep the fallback
        }
        setMessages((prev) => [...prev, { role: 'assistant', content: msg }])
        return
      }

      // Stream the answer token by token into a single growing bubble.
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ''
      let started = false

      const flush = () => {
        setMessages((prev) => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: 'assistant', content: acc }
          return copy
        })
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        if (!started) {
          started = true
          setMessages((prev) => [...prev, { role: 'assistant', content: acc }])
        } else {
          flush()
        }
      }
      acc += decoder.decode()

      if (!started) {
        setMessages((prev) => [...prev, { role: 'assistant', content: acc || FALLBACK }])
      } else {
        flush()
      }
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: FALLBACK }])
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
            Ask anything about his work, projects, or experience.
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

            {/* Typing indicator — only until the first streamed token arrives */}
            {loading && messages[messages.length - 1]?.role === 'user' && (
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
              placeholder="Ask about skills or projects…"
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
