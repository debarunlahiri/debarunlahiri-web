import { NextResponse } from 'next/server'

const DEFAULT_HANDLE = 'DebarunLahiri'

const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const YOUTUBE_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'

interface YouTubeVideo {
  videoId: string
  title: string
  thumbnail: string
  views?: string
  published?: string
  duration?: string
}

const formatNumber = (value?: string) => {
  if (!value) return undefined
  const num = Number(value)
  if (Number.isNaN(num)) return value
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B views`
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M views`
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K views`
  return `${num} views`
}

const formatDuration = (isoDuration?: string) => {
  if (!isoDuration) return undefined
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return undefined
  const [, hours, minutes, seconds] = match
  const hh = hours ? `${hours}:` : ''
  const mm = minutes ? `${hours ? minutes.padStart(2, '0') : minutes}:` : hours ? '00:' : ''
  const ss = seconds ? seconds.padStart(2, '0') : '00'
  return `${hh}${mm}${ss}`
}

async function getChannelId(apiKey: string, handle: string): Promise<string | null> {
  const url = new URL(YOUTUBE_SEARCH_URL)
  url.searchParams.set('part', 'snippet')
  url.searchParams.set('q', handle)
  url.searchParams.set('type', 'channel')
  url.searchParams.set('maxResults', '1')
  url.searchParams.set('key', apiKey)

  const response = await fetch(url.toString(), { next: { revalidate: 3600 } })
  if (!response.ok) {
    console.error('YouTube channel lookup failed', await response.text())
    return null
  }

  const data = await response.json()
  return data.items?.[0]?.id?.channelId ?? null
}

async function getPopularVideos(apiKey: string, channelId: string, maxResults = 12): Promise<YouTubeVideo[]> {
  const searchUrl = new URL(YOUTUBE_SEARCH_URL)
  searchUrl.searchParams.set('part', 'snippet')
  searchUrl.searchParams.set('channelId', channelId)
  searchUrl.searchParams.set('order', 'viewCount')
  searchUrl.searchParams.set('type', 'video')
  searchUrl.searchParams.set('maxResults', String(maxResults))
  searchUrl.searchParams.set('key', apiKey)

  const searchResponse = await fetch(searchUrl.toString(), { cache: 'no-store' })
  if (!searchResponse.ok) {
    console.error('YouTube popular videos search failed', await searchResponse.text())
    return []
  }

  const searchData = await searchResponse.json()
  const items = searchData.items ?? []
  if (items.length === 0) return []

  const videoIds = items.map((item: any) => item.id?.videoId).filter(Boolean)
  if (videoIds.length === 0) return []

  const videosUrl = new URL(YOUTUBE_VIDEOS_URL)
  videosUrl.searchParams.set('part', 'contentDetails,statistics')
  videosUrl.searchParams.set('id', videoIds.join(','))
  videosUrl.searchParams.set('key', apiKey)

  const videosResponse = await fetch(videosUrl.toString(), { cache: 'no-store' })
  if (!videosResponse.ok) {
    console.error('YouTube video details fetch failed', await videosResponse.text())
    return []
  }

  const videosData = await videosResponse.json()
  const statsMap: Record<string, any> = {}
  for (const item of videosData.items ?? []) {
    statsMap[item.id] = item
  }

  const videos: YouTubeVideo[] = []
  for (const item of items) {
    const videoId = item.id?.videoId
    if (!videoId) continue

    const snippet = item.snippet ?? {}
    const details = statsMap[videoId] ?? {}

    const thumbnails = snippet.thumbnails ?? {}
    const thumbnail =
      thumbnails.maxres?.url ||
      thumbnails.standard?.url ||
      thumbnails.high?.url ||
      thumbnails.medium?.url ||
      thumbnails.default?.url

    videos.push({
      videoId,
      title: snippet.title ?? 'Untitled video',
      thumbnail,
      published: snippet.publishedAt ? new Date(snippet.publishedAt).toLocaleDateString() : undefined,
      views: formatNumber(details.statistics?.viewCount),
      duration: formatDuration(details.contentDetails?.duration),
    })
  }

  return videos.filter((video) => Boolean(video.thumbnail))
}

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY
  const handle = process.env.YOUTUBE_CHANNEL_HANDLE ?? DEFAULT_HANDLE
  const channelIdEnv = process.env.YOUTUBE_CHANNEL_ID ?? null

  if (!apiKey) {
    return NextResponse.json(
      { message: 'YouTube API key not configured' },
      { status: 500 }
    )
  }

  try {
    const channelId = channelIdEnv || (await getChannelId(apiKey, handle))
    if (!channelId) {
      return NextResponse.json(
        { message: 'Unable to resolve YouTube channel' },
        { status: 500 }
      )
    }

    const videos = await getPopularVideos(apiKey, channelId)

    return NextResponse.json({ videos })
  } catch (error) {
    console.error('YouTube fetch error:', error)
    return NextResponse.json(
      { message: 'Unexpected error fetching YouTube videos' },
      { status: 500 }
    )
  }
}
