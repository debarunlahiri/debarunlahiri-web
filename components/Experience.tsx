'use client'

const Experience = () => {
  const experiences = [
    {
      company: 'Samsung Display Noida',
      role: 'Senior Assistant Engineer',
      location: 'Noida, UP, India',
      period: 'Dec 2022 – Present',
      achievements: [
        'Developed and maintained Android applications used in manufacturing operations, with a focus on stability, usability, and smooth day-to-day usage.',
        'Built an OCR-based Android feature using ML Kit to capture text from documents and reduce manual data entry work.',
        'Worked on camera integration, runtime permissions, API integration, app debugging, crash fixes, and version-related changes in Android applications.',
        'Improved existing Android app screens and workflows using Kotlin, XML layouts, RecyclerView, ViewModel, and LiveData.',
        'Designed and developed an internal web portal to make manufacturing data easier to access and improve the overall user experience.',
        'Contributed to an NLP-based chatbot to help users get quick answers to common queries and reduce dependency on manual support.',
        'Worked closely with manufacturing users, engineers, and internal teams to understand requirements, fix issues, and support production processes.'
      ]
    },
    {
      company: 'TraqIQ',
      role: 'Software Engineer',
      location: 'Noida, UP, India',
      period: 'Nov 2021 – Dec 2022',
      achievements: [
        'Worked on backend development using Spring Boot and helped build APIs for payment, user, and business-related workflows.',
        'Integrated Paytm Payment Gateway into Spring Boot applications to support secure and smooth online payment processing.',
        'Developed responsive web interfaces and improved page performance using lazy loading, asynchronous data fetching, and optimized UI rendering.',
        'Built and maintained a hybrid mobile application using React Native, supporting smooth usage across both Android and iOS platforms.',
        'Connected mobile and web applications with backend APIs to handle data flow, transactions, and user actions.',
        'Fixed bugs, improved existing features, and worked on application stability based on user feedback and testing.',
        'Collaborated with team members to understand requirements, deliver features, and support regular product updates.'
      ]
    },
    {
      company: 'Bnext IT Solutions',
      role: 'Android Developer',
      location: 'Noida, UP, India',
      period: 'May 2021 – Nov 2021',
      achievements: [
        'Developed and improved Android application features with a focus on smooth performance and better user experience.',
        'Worked on testing, debugging, and fixing issues to improve app stability across different Android devices.',
        'Integrated OneSignal push notifications to send real-time updates and improve user engagement.',
        'Implemented Google Play in-app payment integration to support secure transactions inside the application.',
        'Worked on UI changes, API integration, bug fixes, and regular app updates based on project requirements.',
        'Collaborated with the team to understand requirements, resolve technical issues, and deliver features on time.'
      ]
    },
    {
      company: 'Grepix Infotech Private Limited',
      role: 'Android Developer',
      location: 'Noida, UP, India',
      period: 'Jan 2020 – Feb 2021',
      achievements: [
        'Developed Android applications for mobile and tablet devices with a focus on clean UI, usability, and smooth performance.',
        'Built and improved app screens using XML layouts, RecyclerView, Activities, Fragments, and reusable Android components.',
        'Integrated Google Maps APIs to support location-based features such as live tracking, route display, and navigation.',
        'Worked with REST APIs to fetch, display, and update application data in real time.',
        'Handled runtime permissions, location services, background updates, and device compatibility issues across different Android versions.',
        'Tested, debugged, and fixed app issues to improve stability and user experience.',
        'Worked closely with backend developers and project teams to understand requirements and deliver Android features on time.'
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
