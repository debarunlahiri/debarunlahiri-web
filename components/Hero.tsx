'use client'

import { Mail, Github, Phone, Download } from 'lucide-react'
import { trackLinkClick } from '@/lib/analytics-client'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/Debarun_Lahiri_Resume.pdf'
    link.download = 'Debarun_Lahiri_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    trackLinkClick({ href: '/Debarun_Lahiri_Resume.pdf', label: 'Download Resume' })
  }

  const handlePrintResume = () => {
    trackLinkClick({ href: 'print', label: 'Print Resume' })
    window.print()
  }

  return (
    <section className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-gray-900 dark:border-gray-100">
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Debarun Lahiri
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4">
          Senior Software Engineer
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm mb-4">
        <a
          href="mailto:debarunlahiri2016@gmail.com"
          onClick={() =>
            trackLinkClick({ href: 'mailto:debarunlahiri2016@gmail.com', label: 'Email Hero' })
          }
          className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Mail size={16} className="flex-shrink-0" />
          <span className="break-all">debarunlahiri2016@gmail.com</span>
        </a>
        
        <a
          href="https://github.com/debarunlahiri"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackLinkClick({ href: 'https://github.com/debarunlahiri', label: 'GitHub Hero' })
          }
          className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Github size={16} className="flex-shrink-0" />
          <span>github.com/debarunlahiri</span>
        </a>
        
        <a
          href="tel:+919205225428"
          onClick={() => trackLinkClick({ href: 'tel:+919205225428', label: 'Phone Hero' })}
          className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Phone size={16} className="flex-shrink-0" />
          <span>+91-9205225428</span>
        </a>
      </div>

      {/* Download Resume Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
        <button
          onClick={handleDownloadResume}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg text-sm"
        >
          <Download size={18} />
          <span>Download Resume</span>
        </button>
        
        <button
          onClick={handlePrintResume}
          className="flex items-center gap-2 px-6 py-2.5 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg text-sm print:hidden"
        >
          <Download size={18} />
          <span>Print/Save as PDF</span>
        </button>
      </div>
    </section>
  )
}

export default Hero

