import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Debarun Lahiri - Senior Software Engineer',
  description: 'Portfolio of Debarun Lahiri - Android & Full Stack Developer with expertise in Java, Kotlin, Spring Boot, and Mobile Development',
  keywords: 'Debarun Lahiri, Software Engineer, Android Developer, Full Stack Developer, Java, Kotlin, Spring Boot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

