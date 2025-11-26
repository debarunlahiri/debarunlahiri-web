'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { trackLinkClick } from '@/lib/analytics-client'

interface YouTubeVideo {
  videoId: string
  title: string
  thumbnail: string
  views?: string
  published?: string
  duration?: string
}

const YouTubeGallery = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    let isMounted = true

    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube/videos', { cache: 'no-store' })

        if (!response.ok) {
          throw new Error('Failed to load videos')
        }

        const data = await response.json()
        if (isMounted) {
          setVideos(data.videos ?? [])
        }
      } catch (err) {
        if (isMounted) {
          setError((err as Error).message)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchVideos()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const element = scrollContainerRef.current
    if (!element) return

    const updateScrollButtons = () => {
      setCanScrollLeft(element.scrollLeft > 16)
      setCanScrollRight(element.scrollLeft + element.clientWidth < element.scrollWidth - 16)
    }

    updateScrollButtons()
    element.addEventListener('scroll', updateScrollButtons, { passive: true })
    window.addEventListener('resize', updateScrollButtons)

    return () => {
      element.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [videos])

  const scrollByAmount = (direction: 'left' | 'right') => {
    const element = scrollContainerRef.current
    if (!element) return
    const scrollAmount = element.clientWidth * 0.8
    element.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  if (isLoading) {
    return (
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
          My YouTube Videos
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading videos…</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
          My YouTube Videos
        </h2>
        <p className="text-sm text-red-500">Unable to load videos right now.</p>
      </section>
    )
  }

  if (videos.length === 0) {
    return null
  }

  return (
    <section className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
        My YouTube Videos
      </h2>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-none pb-4 -mx-4 sm:-mx-6"
        >
          <div className="px-4 sm:px-6 flex gap-4 sm:gap-6 min-w-max">
            {videos.map((video) => (
              <a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                onClick={() =>
                  trackLinkClick({
                    href: `https://www.youtube.com/watch?v=${video.videoId}`,
                    label: 'YouTube Video',
                  })
                }
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                  />
                  {video.duration && (
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-2 py-0.5 rounded">
                      {video.duration}
                    </span>
                  )}
                </div>

                <div className="p-3 sm:p-4 flex flex-col gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    {video.views && <p>{video.views}</p>}
                    {video.published && <p>{video.published}</p>}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        {canScrollLeft && (
          <button
            type="button"
            aria-label="Scroll videos left"
            onClick={() => scrollByAmount('left')}
            className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900/80 dark:bg-gray-700/80 hover:bg-gray-900 text-white rounded-full p-2 sm:p-3 shadow-lg transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {canScrollRight && (
          <button
            type="button"
            aria-label="Scroll videos right"
            onClick={() => scrollByAmount('right')}
            className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-900/80 dark:bg-gray-700/80 hover:bg-gray-900 text-white rounded-full p-2 sm:p-3 shadow-lg transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  )
}

export default YouTubeGallery
