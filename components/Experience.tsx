'use client'

const Experience = () => {
  const experiences = [
    {
      company: 'Samsung Display Noida',
      role: 'Senior Assistant Engineer',
      location: 'Ghaziabad, India',
      period: 'Dec 2022 – Present',
      achievements: [
        'OCR System Development: As Tech Lead, led the design and implementation of an Optical Character Recognition (OCR) system using ML Kit. The system significantly improved data extraction efficiency by 20%, enabling faster decision-making and reducing manual effort in data processing.',
        'Web Portal Design and Implementation: Designed and developed a user-centric web portal that streamlined business operations and enhanced the user experience by optimizing the layout, navigation, and overall usability. Resulted in a 15% increase in platform functionality and a smoother interface.',
        'NLP ChatBot Development: Lead the development of a natural language processing-powered chatbot, which reduced customer response time by 40%. This tool provided real-time assistance, improving customer satisfaction and automating routine inquiries.',
        'Cross-functional Collaboration for Manufacturing Optimization: Collaborated with cross-functional teams, including engineers and product managers, to deliver solutions that improved manufacturing efficiency by 15%, leading to a reduction in production downtime and a more optimized workflow.'
      ]
    },
    {
      company: 'TraqIQ',
      role: 'Software Engineer',
      location: 'Ghaziabad, India',
      period: 'Nov 2021 – Dec 2022',
      achievements: [
        'Paytm Payment Gateway Integration: Integrated Paytm Payment Gateway into Spring Boot applications, ensuring secure and seamless transactions for thousands of users. This integration improved payment processing efficiency and significantly reduced transaction failures.',
        'UI Performance Optimization: Developed dynamic, responsive user interfaces, reducing page load times by 30%. Leveraged frontend optimization techniques, including lazy loading and asynchronous data fetching, to enhance the overall performance and user experience.',
        'Hybrid Mobile App Development: Developed a high-performance, cross-platform hybrid mobile app using Ionic Framework, ensuring responsive design and functionality across both iOS and Android platforms. The app streamlined internal processes and enhanced user engagement.'
      ]
    },
    {
      company: 'Bnext IT Solutions',
      role: 'Android Developer',
      location: 'Ghaziabad, India',
      period: 'May 2021 – Nov 2021',
      achievements: [
        'App Performance Optimization: Enhanced mobile app performance, leading to a 25% increase in user retention by identifying and fixing key bottlenecks and bugs through rigorous testing and debugging.',
        'OneSignal Integration for Notifications: Integrated OneSignal for push notifications and Google Play Payment Gateway, ensuring seamless transaction processing and real-time communication with users.'
      ]
    },
    {
      company: 'Grepix Infotech Private Limited',
      role: 'Android Developer',
      location: 'Ghaziabad, India',
      period: 'Jan 2020 – Feb 2021',
      achievements: [
        'Responsive UI Development: Designed and developed responsive mobile and tablet applications, improving accessibility for users across various devices. The design improvements increased user engagement and app usage.',
        'Google Maps API Integration: Integrated Google Maps APIs into mobile apps to enhance functionality with real-time location-based services, providing users with enhanced navigation and location tracking features.'
      ]
    },
    {
      company: 'Rounderlabs Private Limited',
      role: 'Android Developer',
      location: 'Ghaziabad, India',
      period: 'Jun 2019 – Dec 2019',
      achievements: [
        'Authentication Services: Implemented multiple authentication services including mobile, Facebook, Google and email login, greatly improving app security and providing users with multiple secure login options.',
        'Video Streaming Optimization: Worked on optimizing a video streaming application, improving its performance by reducing buffering times and ensuring smoother playback even with lower network speeds.'
      ]
    }
  ]

  return (
    <section className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
        Experience
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{exp.company}</h3>
                <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">{exp.role}</p>
              </div>
              <div className="sm:text-right text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-1.5 sm:space-y-2 ml-4 sm:ml-4">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm list-disc leading-relaxed">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
