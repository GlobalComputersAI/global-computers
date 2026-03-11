'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const SOFTWARE_PHONE = '+919752422686'
const HARDWARE_PHONE = '+919827164811'
const EMAIL = 'info@globalcomputers.net'
const WEBSITE = 'globalcomputers.net'

type NavItem = { name: string; href: string }

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks: NavItem[] = useMemo(
    () => [
      { name: 'IT Hardware', href: '/it-hardware-supply' },
      { name: 'Software Solutions', href: '/software-solutions' },
      { name: 'IT Workforce & AMC', href: '/it-workforce-amc' },
      { name: 'Projects', href: '/projects' },
      { name: 'About Us', href: '/about-us' },
      { name: 'Contact', href: '/contact-us' },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const headerClass = scrolled
    ? 'bg-white shadow-xl py-2'
    : 'bg-white/85 backdrop-blur-md py-4'

  return (
    <>
      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-slate-900 text-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-0 py-2 flex items-center justify-between text-[12px] font-semibold">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 opacity-90">
              <span className="text-blue-400">📍</span> PAN India Service
            </span>
            <span className="flex items-center gap-2 opacity-90">
              <span className="text-blue-400">🛡️</span> 20+ Years Trust (Since 2004)
            </span>
            <a
              href={`https://${WEBSITE}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 opacity-90 hover:text-blue-300 transition"
            >
              🌐 {WEBSITE}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href={`mailto:${EMAIL}`} className="hover:text-blue-300">
              {EMAIL}
            </a>
            <span className="w-px h-3 bg-slate-700" />
            <a
              href={`tel:${HARDWARE_PHONE}`}
              className="font-black text-emerald-300 hover:text-emerald-200 flex items-center gap-2"
            >
              🖥️ Hardware: +91 9827164811
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <motion.header
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${headerClass} border-b border-slate-100`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-0">
          {/* LOGO */}
          <Link href="/" className="flex items-center" aria-label="Homepage">
            <div className="relative h-12 w-[220px] md:h-14 md:w-[300px]">
              <Image
                src="/logo_header_svr.png"
                alt="Global Computers & IT Solutions"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-7 text-[13px] font-extrabold text-slate-700 uppercase">
              {navLinks.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-blue-600">
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact-us"
              className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-black hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition active:scale-95 uppercase"
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <span className="block w-8 h-1 bg-slate-900 rounded-full" />
              <span className="block w-8 h-1 bg-blue-600 rounded-full" />
              <span className="block w-5 h-1 bg-slate-900 rounded-full" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/80 z-[60] backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[88%] max-w-[380px] bg-white z-[70] shadow-2xl lg:hidden p-8 flex flex-col"
            >
              <div className="flex justify-between items-center">
                <span className="font-black text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-100 rounded-full"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black text-slate-900 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t pt-6">
                <a
                  href={`tel:${HARDWARE_PHONE}`}
                  className="block text-center bg-emerald-600 text-white p-4 rounded-2xl font-black"
                >
                  🖥️ Call Hardware: +91 9827164811
                </a>

                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 text-center border-2 border-slate-200 p-4 rounded-2xl font-black"
                >
                  Get Quote →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= MOBILE STICKY CTA ================= */}
      <div className="fixed bottom-0 inset-x-0 z-[55] lg:hidden">
        <div className="bg-white border-t px-3 py-3">
          <a
            href={`tel:${HARDWARE_PHONE}`}
            className="block text-center font-extrabold rounded-xl py-3 bg-emerald-600 text-white"
          >
            Call Hardware
          </a>
        </div>
      </div>

      <div className="h-20 lg:hidden" />
    </>
  )
}
