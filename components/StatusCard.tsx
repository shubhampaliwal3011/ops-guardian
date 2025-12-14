interface StatusCardProps {
  title: string
  value: string
  status: 'success' | 'warning' | 'danger'
  icon: string
}

export default function StatusCard({ title, value, status, icon }: StatusCardProps) {
  const statusColors = {
    success: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
    warning: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
    danger: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
  }

  const textColors = {
    success: 'text-green-800 dark:text-green-300',
    warning: 'text-yellow-800 dark:text-yellow-300',
    danger: 'text-red-800 dark:text-red-300',
  }

  return (
    <div className={`p-6 rounded-lg border-2 ${statusColors[status]} transition-all hover:shadow-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className={`text-2xl font-bold mt-2 ${textColors[status]}`}>{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  )
}
