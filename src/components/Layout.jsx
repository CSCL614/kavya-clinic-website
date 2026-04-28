import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="relative z-10 flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
