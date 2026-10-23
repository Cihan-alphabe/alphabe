"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { languages, navItems, type NavItem } from "@/data/navigation"

/* eslint-disable @next/next/no-img-element */

const DESKTOP_NAV = "(min-width: 1101px)"

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [language, setLanguage] = useState<(typeof languages)[number]["code"]>(
    "EN"
  )
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const isLight =
    pathname === "/company" ||
    pathname === "/career" ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
    (pathname.startsWith("/knowledge/") && pathname !== "/knowledge")

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_NAV)
    const sync = () => {
      setIsDesktop(media.matches)
      if (media.matches) setMobileOpen(false)
    }
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("is-navOpen", mobileOpen)
    return () => document.body.classList.remove("is-navOpen")
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname])

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  function closeMobile() {
    setMobileOpen(false)
    setOpenMenu(null)
  }

  return (
    <header
      className={`Header${mobileOpen ? " is-open" : ""}${isLight ? " Header--light" : ""}`}
      ref={headerRef}
    >
      <div className="container Header-inner">
        <Link
          href="/"
          className="Header-brand"
          aria-label="Alphabe home"
          onClick={closeMobile}
        >
          <span className="Header-logo">
            <img
              className="Header-logoMark"
              src="/images/logo/mark.svg"
              alt=""
            />
            <img
              className="Header-logoWordmark"
              src="/images/logo/wordmark.svg"
              alt="alphabe"
            />
          </span>
          <span className="Header-tagline">The Ultimate Betting Platform</span>
        </Link>

        <div
          id="mobile-nav"
          className={`Header-menu${mobileOpen ? " is-open" : ""}`}
          aria-hidden={isDesktop ? undefined : !mobileOpen}
        >
          <nav className="Header-nav" aria-label="Primary">
            {navItems.map((item) => (
              <HeaderNavItem
                key={item.label}
                item={item}
                open={openMenu === item.label}
                isDesktop={isDesktop}
                onOpen={() => setOpenMenu(item.label)}
                onClose={() =>
                  setOpenMenu((current) =>
                    current === item.label ? null : current
                  )
                }
                onToggle={() =>
                  setOpenMenu((current) =>
                    current === item.label ? null : item.label
                  )
                }
                onNavigate={closeMobile}
              />
            ))}
          </nav>

          <div className="Header-actions">
            <div
              className={`Header-langWrap${openMenu === "lang" ? " is-open" : ""}`}
              onMouseEnter={() => {
                if (isDesktop) setOpenMenu("lang")
              }}
              onMouseLeave={() => {
                if (isDesktop) {
                  setOpenMenu((current) =>
                    current === "lang" ? null : current
                  )
                }
              }}
            >
              <button
                type="button"
                className="Header-lang"
                aria-label="Language"
                aria-expanded={openMenu === "lang"}
                aria-haspopup="listbox"
                onClick={() =>
                  setOpenMenu((current) => (current === "lang" ? null : "lang"))
                }
              >
                <img src="/images/icons/globe.svg" alt="" />
                {language}
                <img src="/images/icons/caret.svg" alt="" />
              </button>
              <div
                className="Header-dropdown Header-dropdown--lang"
                role="listbox"
              >
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    role="option"
                    aria-selected={language === item.code}
                    className={`Header-dropdownLink${language === item.code ? " is-active" : ""}`}
                    onClick={() => {
                      setLanguage(item.code)
                      setOpenMenu(null)
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <Link
              href="/lets-to-business"
              className="Header-cta"
              onClick={closeMobile}
            >
              Let’s to Business
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="Header-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => {
            setOpenMenu(null)
            setMobileOpen((open) => !open)
          }}
        >
          {mobileOpen ? (
            <svg
              className="Header-toggleIcon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              className="Header-toggleIcon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 9h14M5 15h14" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

function HeaderNavItem({
  item,
  open,
  isDesktop,
  onOpen,
  onClose,
  onToggle,
  onNavigate,
}: {
  item: NavItem
  open: boolean
  isDesktop: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
  onNavigate: () => void
}) {
  const menuId = useId()

  if (!item.children?.length) {
    return (
      <Link href={item.href} className="Header-link" onClick={onNavigate}>
        {item.label}
      </Link>
    )
  }

  return (
    <div
      className={`Header-item${open ? " is-open" : ""}`}
      onMouseEnter={() => {
        if (isDesktop) onOpen()
      }}
      onMouseLeave={() => {
        if (isDesktop) onClose()
      }}
    >
      <button
        type="button"
        className="Header-link"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={onToggle}
      >
        {item.label}
        <img src="/images/icons/nav-grid.svg" alt="" />
      </button>
      <div className="Header-dropdown" id={menuId} role="menu">
        {item.children.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            className="Header-dropdownLink"
            role="menuitem"
            onClick={onNavigate}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
