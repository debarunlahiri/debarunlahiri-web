'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-lg z-50 transform-gpu transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-gray-800" />
      ) : (
        <Sun size={20} className="text-yellow-400" />
      )}
    </button>
  )
}

export default ThemeToggle

