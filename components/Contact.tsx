'use client'

import { Mail, Github, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section className="mb-6 sm:mb-8 pt-4 sm:pt-6 border-t-2 border-gray-300 dark:border-gray-600 mt-6 sm:mt-8">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        <a
          href="mailto:debarunlahiri2016@gmail.com"
          className="flex items-center justify-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Mail size={16} className="flex-shrink-0" />
          <span className="break-all">debarunlahiri2016@gmail.com</span>
        </a>
        
        <a
          href="https://github.com/debarunlahiri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Github size={16} className="flex-shrink-0" />
          <span>github.com/debarunlahiri</span>
        </a>
        
        <a
          href="tel:+919205225428"
          className="flex items-center justify-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Phone size={16} className="flex-shrink-0" />
          <span>+91-9205225428</span>
        </a>
      </div>
      
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4 sm:mt-6">
        2024 Debarun Lahiri. All Rights Reserved.
      </p>
    </section>
  )
}

export default Contact
