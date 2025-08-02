import React from 'react'

export default function Header() {
  const currentDate = new Date().toLocaleDateString('zh-CN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10" style={{backgroundColor: 'rgb(255, 255, 255, 0.5)'}}>
      <div className="container mx-auto px-4 py-3 flex items-center">
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-2">
            <i className="fa fa-pie-chart text-green-500 text-3xl"></i>
            <h1 className="text-4xl font-bold text-gray-800">一号厂房物流仓库数据展示板</h1>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-lg text-gray-600">
            <i className="fa fa-calendar-o mr-2"></i>
            <span>{currentDate}</span>
          </div>
        </div>
      </div>
    </header>
  )
}