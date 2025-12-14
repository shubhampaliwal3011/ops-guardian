import Head from 'next/head'
import DashboardLayout from '@/components/DashboardLayout'
import StatusCard from '@/components/StatusCard'
import LogPanel from '@/components/LogPanel'

export default function Home() {
  return (
    <>
      <Head>
        <title>OpsGuardian - Self-Healing AI SRE</title>
        <meta name="description" content="AI-powered system monitoring and self-healing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            OpsGuardian Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time system monitoring and AI-powered self-healing
          </p>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatusCard 
              title="System Status"
              value="Healthy"
              status="success"
              icon="🟢"
            />
            <StatusCard 
              title="Active Alerts"
              value="2"
              status="warning"
              icon="⚠️"
            />
            <StatusCard 
              title="Auto-Resolved"
              value="15"
              status="success"
              icon="✅"
            />
            <StatusCard 
              title="CPU Usage"
              value="45%"
              status="success"
              icon="📊"
            />
          </div>

          {/* Log Panel */}
          <LogPanel />
        </div>
      </DashboardLayout>
    </>
  )
}
