import { useState, useEffect } from 'react'

interface LogEntry {
  id: number
  timestamp: string
  level: 'info' | 'warning' | 'error' | 'success'
  message: string
  action?: string
}

export default function LogPanel() {
  const [logs, setLogs] = useState<LogEntry[]>([])

  useEffect(() => {
    // Set logs on client side only to avoid hydration issues
    const currentTime = new Date().toLocaleTimeString()
    setLogs([
      {
        id: 1,
        timestamp: currentTime,
        level: 'success',
        message: 'System health check passed',
        action: 'AUTO-RESOLVED',
      },
      {
        id: 2,
        timestamp: currentTime,
        level: 'warning',
        message: 'High memory usage detected (85%)',
        action: 'MONITORING',
      },
      {
        id: 3,
        timestamp: currentTime,
        level: 'info',
        message: 'Database backup completed successfully',
      },
      {
        id: 4,
        timestamp: currentTime,
        level: 'error',
        message: 'API endpoint timeout - /api/users',
        action: 'INVESTIGATING',
      },
    ])
  }, [])

  const levelColors = {
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Recent Activity Logs
      </h2>
      <div className="space-y-3">
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 min-w-[80px]">
              {log.timestamp}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${levelColors[log.level]}`}>
              {log.level}
            </span>
            <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">
              {log.message}
            </span>
            {log.action && (
              <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                {log.action}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
