import React, { useState, useEffect } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              เทคโนโลยีและนวัตกรรม
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              หน้าแรก
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              เกี่ยวกับเรา
            </Link>
            <Link href="/service" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              บริการของเรา
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              ติดต่อเรา
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              หน้าแรก
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              เกี่ยวกับเรา
            </Link>
            <Link href="/service" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              บริการของเรา
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
              ติดต่อเรา
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
