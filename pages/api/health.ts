import type { NextApiRequest, NextApiResponse } from 'next'

type HealthData = {
  status: string
  timestamp: string
  systemInfo: {
    cpuUsage: string
    memoryUsage: string
    activeAlerts: number
    autoResolved: number
  }
}

type ErrorData = {
  error: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthData | ErrorData>
) {
  if (req.method === 'GET') {
    const healthData: HealthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      systemInfo: {
        cpuUsage: '45%',
        memoryUsage: '68%',
        activeAlerts: 2,
        autoResolved: 15,
      },
    }
    
    res.status(200).json(healthData)
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
