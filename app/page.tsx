'use client'

import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import ClientProjects from '@/components/ClientProjects'
import Education from '@/components/Education'
import GitHubProjects from '@/components/GitHubProjects'
import YouTubeGallery from '@/components/YouTubeGallery'
import Contact from '@/components/Contact'
import ThemeToggle from '@/components/ThemeToggle'
import AnalyticsTracker from '@/components/AnalyticsTracker'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <ThemeToggle />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <AnalyticsTracker />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ClientProjects />
        <GitHubProjects />
        <YouTubeGallery />
        <Contact />
      </div>
    </main>
  )
}

