'use client'

import { ExternalLink, Star, GitFork, Code } from 'lucide-react'

const GitHubProjects = () => {
  const projects = [
    {
      name: 'aria-web',
      fullName: 'debarunlahiri/aria-web',
      description: 'A modern, real-time AI chatbot powered by Google Gemini with a sleek, responsive interface. Features streaming responses, conversational context awareness, and markdown support with syntax highlighting.',
      stars: 0,
      forks: 0,
      language: 'TypeScript',
      languageColor: '#3178c6',
      url: 'https://github.com/debarunlahiri/aria-web',
      liveUrl: 'https://aria-web-alpha.vercel.app',
      topics: ['nextjs', 'typescript', 'ai', 'chatbot', 'gemini', 'react', 'tailwindcss']
    },
    {
      name: 'Imager',
      fullName: 'debarunlahiri/Imager',
      description: 'Advanced Android image processing app with AI-powered features. Includes grayscale conversion, text extraction with OCR, deepfake detection, background removal, and document scanning using OpenCV and TensorFlow Lite.',
      stars: 0,
      forks: 0,
      language: 'C++',
      languageColor: '#f34b7d',
      url: 'https://github.com/debarunlahiri/Imager',
      topics: ['android', 'java', 'kotlin', 'opencv', 'tensorflow', 'ocr', 'image-processing', 'ml']
    },
    {
      name: 'AIOMediaDownloader',
      fullName: 'debarunlahiri/AIOMediaDownloader',
      description: 'All-in-One media downloader for Android. Download videos, images, and media from various social media platforms with a clean and intuitive interface.',
      stars: 0,
      forks: 0,
      language: 'Java',
      languageColor: '#b07219',
      url: 'https://github.com/debarunlahiri/AIOMediaDownloader',
      topics: ['android', 'java', 'media-downloader', 'social-media']
    }
  ]

  return (
    <section className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
        Personal Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <Code size={18} className="text-gray-600 dark:text-gray-400 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-blue-600 dark:text-blue-400 group-hover:underline truncate">
                    {project.name}
                  </h3>
                </div>
              </div>
              <ExternalLink size={16} className="text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2" />
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {/* Topics/Tags */}
            {project.topics && project.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.topics.slice(0, 4).map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              {/* Language */}
              <div className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.languageColor }}
                />
                <span>{project.language}</span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                <Star size={14} />
                <span>{project.stars}</span>
              </div>

              {/* Forks */}
              <div className="flex items-center gap-1">
                <GitFork size={14} />
                <span>{project.forks}</span>
              </div>
            </div>

            {/* Live Link (if available) */}
            {project.liveUrl && (
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Live Demo</span>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>

      {/* View More Link */}
      <div className="mt-6 text-center">
        <a
          href="https://github.com/debarunlahiri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>View all projects on GitHub</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  )
}

export default GitHubProjects

