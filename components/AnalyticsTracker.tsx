'use client'

import { useEffect } from 'react'

const AnalyticsTracker = () => {
  useEffect(() => {
    const controller = new AbortController()

    const sendPageView = async () => {
      try {
        await fetch('/api/analytics/page-view', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: window.location.pathname }),
          signal: controller.signal,
        })
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.warn('Analytics tracker failed:', error)
        }
      }
    }

    sendPageView()

    return () => controller.abort()
  }, [])

  return null
}

export default AnalyticsTracker
