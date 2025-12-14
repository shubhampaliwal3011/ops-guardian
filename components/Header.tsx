import { useState, useEffect } from 'react'

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    // Set initial time
    setCurrentTime(new Date().toLocaleTimeString())
    
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              System Monitoring
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Last updated: {currentTime || 'Loading...'}
            </span>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors">
              Refresh
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
