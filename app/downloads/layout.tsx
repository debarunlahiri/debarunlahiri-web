import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Downloads - Debarun Lahiri',
  description: 'Download available files and resources including STT models and other packages',
}

export default function DownloadsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

