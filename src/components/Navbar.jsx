'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dvwctezb3/image/upload/v1776640914/20260419_114329_eyz2hd.png"
              alt="PrudoDev Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors text-sm">
              Accueil
            </Link>

            {/* Services dropdown */}
            <div className="dropdown-trigger relative">
              <button className="text-gray-800 font-medium hover:text-yellow-500 transition-colors text-sm flex items-center gap-1">
                Services
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link href="/services/site" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-yellow-50 transition-colors group">
                  <span className="text-lg">🌐</span>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Site Vitrine / E-commerce</p>
                    <p className="text-gray-400 text-xs">Design moderne & SEO optimisé</p>
                  </div>
                </Link>
                <Link href="/services/google-ads" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-yellow-50 transition-colors group">
                  <span className="text-lg">📈</span>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Publicité Google Ads</p>
                    <p className="text-gray-400 text-xs">Campagnes ciblées & rentables</p>
                  </div>
                </Link>
              </div>
            </div>

            <Link href="/#portfolio" className="text-gray-800 font-medium hover:text-yellow-500 transition-colors text-sm">
              Portfolio
            </Link>
            <Link href="/contact" className="bg-[#F0B429] text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors">
              Me contacter
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-gray-800 font-medium py-3 px-4 rounded-xl hover:bg-gray-50 text-sm" onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>

          <button
            className="text-gray-800 font-medium py-3 px-4 rounded-xl hover:bg-gray-50 text-sm text-left flex items-center justify-between"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {servicesOpen && (
            <div className="ml-4 flex flex-col gap-1">
              <Link href="/services/site" className="text-gray-600 py-2 px-4 rounded-xl hover:bg-gray-50 text-sm" onClick={() => setMenuOpen(false)}>
                🌐 Site Vitrine / E-commerce
              </Link>
              <Link href="/services/google-ads" className="text-gray-600 py-2 px-4 rounded-xl hover:bg-gray-50 text-sm" onClick={() => setMenuOpen(false)}>
                📈 Publicité Google Ads
              </Link>
            </div>
          )}

          <Link href="/#portfolio" className="text-gray-800 font-medium py-3 px-4 rounded-xl hover:bg-gray-50 text-sm" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
          <Link href="/contact" className="bg-[#F0B429] text-black font-semibold text-sm px-5 py-3 rounded-full text-center mt-2" onClick={() => setMenuOpen(false)}>
            Me contacter
          </Link>
        </div>
      </div>
    </>
  )
}

