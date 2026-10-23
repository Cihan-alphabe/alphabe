"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { languages } from "@/data/navigation"
import { footerColumns, socialLinks } from "@/data/footer"

/* eslint-disable @next/next/no-img-element */

export function Footer() {
  const pathname = usePathname()
  const [language, setLanguage] = useState<(typeof languages)[number]["code"]>(
    "EN"
  )
  const [langOpen, setLangOpen] = useState(false)
  const [openCol, setOpenCol] = useState<string | null>(null)

  if (pathname === "/lets-to-business") return null

  return (
    <footer className="Footer" id="contact">
      <div className="container">
        <div className="Footer-banner">
          <div className="Footer-bannerArt" aria-hidden="true">
            <img
              className="Footer-bannerImg"
              src="/images/footer/banner.png"
              alt=""
            />
            <img
              className="Footer-bannerGrid"
              src="/images/footer/grid.svg"
              alt=""
            />
            <img
              className="Footer-bannerGlow"
              src="/images/footer/glow.svg"
              alt=""
            />
          </div>

          <Link href="/" className="Footer-logo" aria-label="Alphabe">
            <img src="/images/logo/mark.svg" alt="" />
            <img src="/images/logo/wordmark.svg" alt="alphabe" />
          </Link>

          <div className="Footer-bannerCopy">
            <h2 className="Footer-bannerTitle">
              <span>A Powerful</span>
              New Force in iGaming
            </h2>
            <p className="Footer-bannerText">
              Dreaming of running your own online casino and sportsbook without
              worrying about code, regulations, or payment complexities?
              Alphabe is the iGaming software provider that handles it all for
              you.
            </p>
          </div>

          <div className="Footer-bannerCta">
            <p className="Footer-bannerNote">
              * Let’s build the future of your brand together with a meeting.
            </p>
            <Link href="/lets-to-business" className="Btn Btn--lg">
              Let’s to Business
            </Link>
            <a className="Footer-email" href="mailto:sales@alphabe.io">
              sales@alphabe.io
            </a>
          </div>
        </div>

        <div className="Footer-main">
          <nav className="Footer-cols" aria-label="Footer">
            {footerColumns.map((column) => {
              const open = openCol === column.title
              const panelId = `footer-col-${column.title.toLowerCase()}`

              return (
                <div
                  key={column.title}
                  className={`Footer-col${open ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="Footer-colToggle"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenCol((current) =>
                        current === column.title ? null : column.title
                      )
                    }
                  >
                    {column.title}
                    <img
                      className="Footer-colCaret"
                      src="/images/icons/caret.svg"
                      alt=""
                    />
                  </button>
                  <div className="Footer-colLinks" id={panelId}>
                    {column.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="Footer-link"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </nav>

          <div className="Footer-touch">
            <h3 className="Footer-colTitle">Get in Touch</h3>
            <div className="Footer-socials">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="Footer-social"
                  aria-label={item.label}
                >
                  <img src={item.src} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="Footer-legal">
          <div className="Footer-policies">
            <Link href="/terms">Terms of Use</Link>
            <span />
            <Link href="/privacy">Privacy Policy</Link>
          </div>

          <div className="Footer-legalEnd">
            <div className="Footer-badges">
              <img src="/images/footer/age.svg" alt="18+" />
              <img src="/images/footer/ssl.svg" alt="SSL" />
            </div>

            <div
              className={`Footer-lang${langOpen ? " is-open" : ""}`}
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                type="button"
                className="Footer-langBtn"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((open) => !open)}
              >
                <img src="/images/icons/globe.svg" alt="" />
                {language}
                <img src="/images/icons/caret.svg" alt="" />
              </button>
              <div className="Footer-langMenu" role="listbox">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    role="option"
                    aria-selected={language === item.code}
                    className={`Footer-langOption${language === item.code ? " is-active" : ""}`}
                    onClick={() => {
                      setLanguage(item.code)
                      setLangOpen(false)
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="Footer-bottom">
          <p>The website is owned and operated by Alphabe.</p>
          <p>© 2026 Alphabe. All rights reserved.</p>
          <div className="Footer-meta">
            <span className="Footer-rg">
              Responsible
              <br />
              Gambling
            </span>
            <img
              className="Footer-aws"
              src="/images/footer/aws.svg"
              alt="Amazon Web Services"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
