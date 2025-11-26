'use client'

import { Download, Archive } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { trackLinkClick } from '@/lib/analytics-client'

interface DownloadItem {
  name: string
  description: string
  url: string
  size?: string
  type: string
}

const downloads: DownloadItem[] = [
  {
    name: 'STT Models',
    description: 'Speech-to-Text models package',
    url: 'https://w7iwagn6bmq3hd4t.public.blob.vercel-storage.com/stt-models.zip',
    type: 'application/zip',
  },
]

export default function DownloadsPage() {
  const handleDownload = async (item: DownloadItem) => {
    trackLinkClick({ 
      href: item.url, 
      label: `Download ${item.name}` 
    })
    
    try {
      const response = await fetch(item.url, { mode: 'cors' })
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = item.name.toLowerCase().replace(/\s+/g, '-') + '.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Download error:', error)
      window.open(item.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <ThemeToggle />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Downloads
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Available files and resources for download
          </p>
        </div>

        <div className="space-y-4">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-gray-50 dark:bg-gray-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <Archive 
                      size={32} 
                      className="text-blue-600 dark:text-blue-400" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {item.description}
                    </p>
                    {item.size && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Size: {item.size}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Type: {item.type}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(item)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg whitespace-nowrap"
                >
                  <Download size={20} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {downloads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No downloads available at the moment.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

