import React from 'react'
import Header from './Header'
import ChartsSection from './ChartsSection'
import Footer from './Footer'

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-[url('/src/images/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-lg">
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow w-full px-4 py-6">
            <ChartsSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}