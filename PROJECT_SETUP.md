# OpsGuardian Project Setup

## 🛡️ Project Structure

```
ops-guardian/
├── pages/                  # Next.js pages
│   ├── api/               # API routes
│   │   └── health.ts     # System health check endpoint
│   ├── _app.tsx          # Custom App component
│   ├── _document.tsx     # Custom Document
│   └── index.tsx         # Main dashboard page
├── components/            # React components
│   ├── DashboardLayout.tsx
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── StatusCard.tsx
│   └── LogPanel.tsx
├── scripts/              # CLI tools
│   └── monitor.ts       # System monitoring script
├── styles/              # Global styles
│   └── globals.css
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    ├── tailwind.config.ts
    └── postcss.config.js
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 CLI Tools

### System Monitor

Run the monitoring script:

```bash
npx ts-node scripts/monitor.ts [interval_seconds]
```

Example:
```bash
npx ts-node scripts/monitor.ts 5
```

This will check system metrics every 5 seconds and alert on high usage.

## 🌐 API Endpoints

### GET /api/health

Returns system health status and metrics.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "systemInfo": {
    "cpuUsage": "45%",
    "memoryUsage": "68%",
    "activeAlerts": 2,
    "autoResolved": 15
  }
}
```

## 📱 Features

- **Real-time Dashboard** - Monitor system status at a glance
- **Status Cards** - Quick overview of key metrics
- **Activity Logs** - Track system events and actions
- **Responsive Design** - Works on desktop and mobile
- **Dark Mode Support** - Built-in dark theme
- **API Integration Ready** - Easy to connect to backend services

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom color palette** defined in `tailwind.config.ts`
- **Dark mode** support out of the box

## 🔐 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📦 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library

## 🤝 Contributing

This is the foundation for the OpsGuardian self-healing AI SRE system. Future enhancements will include:

- Kestra integration for log summarization
- Oumi fine-tuned model for severity assessment
- Real-time system monitoring
- Automated issue resolution
- Integration with external monitoring tools

## 📝 License

This project is part of the OpsGuardian AI SRE initiative.
