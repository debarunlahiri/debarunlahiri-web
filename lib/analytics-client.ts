'use client'

interface LinkPayload {
  href: string
  label?: string
  path?: string
}

const postJson = (url: string, payload: unknown) => {
  const body = JSON.stringify(payload)

  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
    const blob = new Blob([body], { type: 'application/json' })
    navigator.sendBeacon(url, blob)
    return Promise.resolve()
  }

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch((error) => {
    console.warn(`Analytics request to ${url} failed`, error)
  })
}

export const trackLinkClick = ({ href, label, path }: LinkPayload) => {
  if (typeof window === 'undefined') return

  postJson('/api/analytics/link-click', {
    href,
    label,
    path: path ?? window.location.pathname,
  })
}
