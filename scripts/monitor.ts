#!/usr/bin/env node

/**
 * OpsGuardian CLI Monitor Tool
 * This script simulates system monitoring and can be extended for real monitoring tasks
 */

interface SystemMetrics {
  timestamp: string
  cpuUsage: number
  memoryUsage: number
  diskUsage: number
}

class SystemMonitor {
  private checkInterval: number

  constructor(intervalSeconds: number = 5) {
    this.checkInterval = intervalSeconds * 1000
  }

  private generateMetrics(): SystemMetrics {
    return {
      timestamp: new Date().toISOString(),
      cpuUsage: Math.floor(Math.random() * 100),
      memoryUsage: Math.floor(Math.random() * 100),
      diskUsage: Math.floor(Math.random() * 100),
    }
  }

  private checkThresholds(metrics: SystemMetrics): void {
    const alerts: string[] = []

    if (metrics.cpuUsage > 80) {
      alerts.push(`⚠️  HIGH CPU USAGE: ${metrics.cpuUsage}%`)
    }
    if (metrics.memoryUsage > 85) {
      alerts.push(`⚠️  HIGH MEMORY USAGE: ${metrics.memoryUsage}%`)
    }
    if (metrics.diskUsage > 90) {
      alerts.push(`⚠️  HIGH DISK USAGE: ${metrics.diskUsage}%`)
    }

    if (alerts.length > 0) {
      console.log('\n🚨 ALERTS:')
      alerts.forEach((alert) => console.log(alert))
    }
  }

  public start(): void {
    console.log('🛡️  OpsGuardian System Monitor Started')
    console.log(`📊 Checking every ${this.checkInterval / 1000} seconds...\n`)

    setInterval(() => {
      const metrics = this.generateMetrics()
      
      console.log('─'.repeat(50))
      console.log(`⏰ ${metrics.timestamp}`)
      console.log(`CPU Usage:    ${metrics.cpuUsage}%`)
      console.log(`Memory Usage: ${metrics.memoryUsage}%`)
      console.log(`Disk Usage:   ${metrics.diskUsage}%`)
      
      this.checkThresholds(metrics)
    }, this.checkInterval)
  }
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2)
  const interval = args[0] ? parseInt(args[0]) : 5

  if (isNaN(interval) || interval < 1) {
    console.error('❌ Invalid interval. Please provide a positive number of seconds.')
    process.exit(1)
  }

  const monitor = new SystemMonitor(interval)
  monitor.start()
}

export default SystemMonitor
