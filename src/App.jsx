import { useEffect } from "react"
import SocialBar from "./components/SocialBar"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  const apiUrl = import.meta.env.VITE_API_URL

  // Generate or retrieve session ID
  const getSessionId = () => {
    let sessionId = sessionStorage.getItem('portfolio_session_id')
    if (!sessionId) {
      sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2)
      sessionStorage.setItem('portfolio_session_id', sessionId)
    }
    return sessionId
  }

  // Track page views and session data
  const trackPageView = async () => {
    const sessionData = {
      type: 'pageview',
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform,
      sessionId: getSessionId(),
      cookiesEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack,
      hardwareConcurrency: navigator.hardwareConcurrency,
      maxTouchPoints: navigator.maxTouchPoints || 0,
      connection: navigator.connection ? {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt
      } : null
    }

    try {
      await fetch(`${apiUrl}/analytics/pageview`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sessionData)
      })
    } catch (err) {
      console.error('Analytics error:', err)
    }
  }

  // Track custom events
  const trackEvent = async (eventName, eventData = {}) => {
    const eventPayload = {
      type: 'event',
      event: eventName,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
      url: window.location.href,
      ...eventData
    }

    try {
      await fetch(`${apiUrl}/analytics/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventPayload)
      })
    } catch (err) {
      console.error('Event tracking error:', err)
    }
  }

  // Track scroll depth
  const trackScrollDepth = () => {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
    
    const milestones = [25, 50, 75, 100]
    milestones.forEach(milestone => {
      if (scrollPercent >= milestone && !window[`scrolled${milestone}`]) {
        window[`scrolled${milestone}`] = true
        trackEvent('scroll_depth', { depth: milestone })
      }
    })
  }

  // Track time spent on page
  const trackTimeOnPage = () => {
    const startTime = Date.now()
    
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      // Use sendBeacon for reliable tracking on page unload
      if (navigator.sendBeacon) {
        const data = JSON.stringify({
          type: 'event',
          event: 'time_on_page',
          timestamp: new Date().toISOString(),
          sessionId: getSessionId(),
          url: window.location.href,
          seconds: timeSpent
        })
        navigator.sendBeacon(`${apiUrl}/analytics/event`, data)
      }
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('pagehide', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('pagehide', handleBeforeUnload)
    }
  }

  // Throttle function for scroll events
  const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  useEffect(() => {
    // Track initial page view
    trackPageView()

    // Set up scroll tracking
    const handleScroll = throttle(trackScrollDepth, 1000)
    window.addEventListener('scroll', handleScroll)

    // Track time on page
    const cleanupTimeTracking = trackTimeOnPage()

    // Track click events
    const handleClick = (event) => {
      const target = event.target
      const elementInfo = {
        tagName: target.tagName,
        className: target.className,
        id: target.id,
        textContent: target.textContent?.slice(0, 100),
        href: target.href || null,
        position: { x: event.clientX, y: event.clientY }
      }
      
      trackEvent('click', elementInfo)
    }

    document.addEventListener('click', handleClick)

    // Track visibility changes (user switching tabs)
    const handleVisibilityChange = () => {
      trackEvent('visibility_change', {
        hidden: document.hidden,
        visibilityState: document.visibilityState
      })
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Track mouse movement (sample every 5 seconds)
    let lastMouseMove = 0
    const handleMouseMove = throttle((event) => {
      const now = Date.now()
      if (now - lastMouseMove > 5000) {
        trackEvent('mouse_activity', {
          x: event.clientX,
          y: event.clientY,
          timestamp: now
        })
        lastMouseMove = now
      }
    }, 5000)

    document.addEventListener('mousemove', handleMouseMove)

    // Track keyboard activity
    let lastKeyPress = 0
    const handleKeyPress = throttle(() => {
      const now = Date.now()
      if (now - lastKeyPress > 5000) {
        trackEvent('keyboard_activity', { timestamp: now })
        lastKeyPress = now
      }
    }, 5000)

    document.addEventListener('keypress', handleKeyPress)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('keypress', handleKeyPress)
      cleanupTimeTracking?.()
    }
  }, [])

  return (
    <div className="bg-gray-950 text-white">
      <SocialBar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  )
}

export default App