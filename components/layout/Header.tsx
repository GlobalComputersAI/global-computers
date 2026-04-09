'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const HARDWARE_PHONE = '+919827164811'
const EMAIL = 'infoglobalcomputersit@gmail.com'
const WEBSITE = 'globalcomputers.net'

type NavItem = { name: string; href: string }

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks: NavItem[] = useMemo(
    () => [
      { name: 'Hardware', href: '/it-hardware-supply' },
      { name: 'Software', href: '/software-solutions' },
      { name: 'AMC', href: '/it-workforce-amc' },
      { name: 'Products', href: '/projects' },
      { name: 'About', href: '/about-us' },
      { name: 'Contact', href: '/contact-us' },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow || ''
    }

    return () => {
      document.body.style.overflow = previousOverflow
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
    ? 'border-b border-slate-200 bg-white/95 shadow-md backdrop-blur-md'
    : 'border-b border-slate-100 bg-white/90 backdrop-blur-sm'

  return (
    <>
      {/* Top Bar */}
      <div className="hidden border-b border-slate-800 bg-slate-950 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[12px] xl:px-0">
          <div className="flex items-center gap-5 text-slate-300">
            <span>PAN India Service</span>
            <span className="text-slate-600">•</span>
            <span>Since 2004</span>
            <span className="text-slate-600">•</span>
            <a
              href={`https://${WEBSITE}`}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {WEBSITE}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="text-slate-300 transition hover:text-white"
            >
              {EMAIL}
            </a>
            <span className="h-3 w-px bg-slate-700" />
            <a
              href={`tel:${HARDWARE_PHONE}`}
              className="font-bold text-emerald-300 transition hover:text-emerald-200"
            >
              +91 9827164811
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 xl:px-0">
          <Link href="/" aria-label="Global Computers homepage" className="flex items-center">
            <div className="relative h-11 w-[190px] sm:h-12 sm:w-[220px] md:h-14 md:w-[280px]">
              <Image
                src="/logo_header_svr.png"
                alt="Global Computers & IT Solutions"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, 280px"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-6 text-sm font-bold text-slate-700">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact-us"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-blue-700"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-900 transition hover:bg-slate-100 lg:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-7 rounded-full bg-slate-900" />
              <span className="block h-0.5 w-7 rounded-full bg-blue-600" />
              <span className="block h-0.5 w-5 rounded-full bg-slate-900" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed right-0 top-0 bottom-0 z-[70] flex w-[86%] max-w-[360px] flex-col bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-slate-900">Menu</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full bg-slate-100 p-2 text-slate-900 transition hover:bg-slate-200"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-slate-900 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto border-t border-slate-200 pt-6">
                <a
                  href={`tel:${HARDWARE_PHONE}`}
                  className="block rounded-2xl bg-emerald-600 px-4 py-4 text-center font-extrabold text-white transition hover:bg-emerald-700"
                >
                  Call Hardware
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-3 block rounded-2xl border border-slate-200 px-4 py-4 text-center font-bold text-slate-700 transition hover:bg-slate-50 break-all"
                >
                  Email Us
                </a>

                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 block rounded-2xl border border-blue-200 bg-blue-50 px-4 py-4 text-center font-extrabold text-blue-700 transition hover:bg-blue-100"
                >
                  Get Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Call Bar */}
      <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-slate-200 bg-white/95 px-3 py-3 backdrop-blur md:hidden">
        <a
          href={`tel:${HARDWARE_PHONE}`}
          className="block rounded-xl bg-emerald-600 py-3 text-center text-sm font-extrabold text-white transition hover:bg-emerald-700"
        >
          Call Hardware
        </a>
      </div>

      {/* Bottom spacing for mobile sticky bar */}
      <div className="h-[76px] md:hidden" />
    </>
  )
}