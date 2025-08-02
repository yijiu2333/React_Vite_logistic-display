import React, { useEffect } from 'react'
import Dashboard from './components/Dashboard'

function App() {
  useEffect(() => {
      const checkAndRefresh = () => {
        const now = new Date()
        console.log('每分钟刷新页面...', now.toLocaleTimeString())
        window.location.reload()
      }
      
      const interval = setInterval(checkAndRefresh, 60000) // 每分钟刷新一次
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-300 font-inter" style={{backgroundColor: 'rgb(228, 231, 235)'}}>
      <Dashboard />
    </div>
  )
}

export default App