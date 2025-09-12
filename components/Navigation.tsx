'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="h-[161px] absolute top-0 left-0 right-0 z-50 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="home" className="block">
              <Image
                src="/images/images-rpm-logo.svg"
                alt="Ready Player Me"
                width={200}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="bg-black rounded-full px-6 py-2">
              <div className="flex items-center gap-2">
                <div className="relative px-3.5 group">
                  <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-sm font-medium cursor-pointer">
                    <span>Products</span>
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </button>
                </div>
                <div className="relative px-3.5 group">
                  <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-sm font-medium cursor-pointer">
                    <span>Developers</span>
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </button>
                </div>
                <div className="relative px-3.5 group">
                  <Link
                    href="https://forum.readyplayer.me/"
                    className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Forums</span>
                  </Link>
                </div>
                <div className="relative px-3.5 group">
                  <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors text-sm font-medium cursor-pointer">
                    <span>Resources</span>
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <button
              className="px-6 py-2 text-white font-medium text-sm rounded-full transition-all duration-300 hover:opacity-90"
              style={{ background: '#6542FF' }}
            >
              Log in
            </button>
          </div>
          
          <div className="lg:hidden">
            <button
              className="text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <button className="block w-full text-left text-white hover:text-gray-300 transition-colors text-sm font-medium py-2">
              Products
            </button>
            <button className="block w-full text-left text-white hover:text-gray-300 transition-colors text-sm font-medium py-2">
              Developers
            </button>
            <Link
              href="https://forum.readyplayer.me/"
              className="block text-white hover:text-gray-300 transition-colors text-sm font-medium py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forums
            </Link>
            <button className="block w-full text-left text-white hover:text-gray-300 transition-colors text-sm font-medium py-2">
              Resources
            </button>
            <button
              className="w-full px-6 py-2 text-white font-medium text-sm rounded-full transition-all duration-300 hover:opacity-90 mt-4"
              style={{ background: '#6542FF' }}
            >
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}