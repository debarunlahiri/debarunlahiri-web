import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ message: 'Supabase not configured' }, { status: 500 })
  }

  let payload: { path?: string } = {}

  try {
    const text = await request.text()
    if (text) {
      payload = JSON.parse(text)
    }
  } catch (error) {
    console.warn('Analytics payload parse error:', error)
  }

  const headers = request.headers
  const rawIp =
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    headers.get('cf-connecting-ip') ||
    null

  const userAgent = headers.get('user-agent') ?? null
  const referer = headers.get('referer') ?? null
  const country = headers.get('x-vercel-ip-country') ?? headers.get('cf-ipcountry') ?? null
  const region =
    headers.get('x-vercel-ip-country-region') ?? headers.get('cf-region') ?? headers.get('cf-region-code') ?? null
  const city = headers.get('x-vercel-ip-city') ?? headers.get('cf-ipcity') ?? null

  const path = payload.path ?? '/'

  try {
    const { error } = await supabaseAdmin.from('page_views').insert({
      path,
      ip_address: rawIp,
      user_agent: userAgent,
      referer,
      country,
      region,
      city,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ message: 'Failed to record page view' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Page view recorded' })
  } catch (error) {
    console.error('Page view route error:', error)
    return NextResponse.json({ message: 'Unexpected error' }, { status: 500 })
  }
}
