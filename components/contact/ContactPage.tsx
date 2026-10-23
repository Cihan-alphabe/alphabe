"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import Link from "next/link"

import { contactCountries, contactSubjects } from "@/data/contact"
import { socialLinks } from "@/data/footer"

/* eslint-disable @next/next/no-img-element */

export function ContactPage() {
  const [subject, setSubject] = useState(contactSubjects[0])
  const [country, setCountry] = useState(contactCountries[0].code)
  const [openMenu, setOpenMenu] = useState<"subject" | "country" | null>(null)
  const [marketing, setMarketing] = useState(false)
  const [privacy, setPrivacy] = useState(true)
  const formRef = useRef<HTMLFormElement>(null)
  const selectedCountry =
    contactCountries.find((item) => item.code === country) ?? contactCountries[0]

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!formRef.current?.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <main className="Contact">
      <div className="Contact-art" aria-hidden="true">
        <div className="Contact-artFrame">
          <div className="Contact-artSpin">
            <img src="/images/footer/banner.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container Contact-layout">
        <div className="Contact-intro">
          <h1 className="Contact-title">
            Let’s to
            <br />
            Business
          </h1>
          <p className="Contact-lead">
            İhtiyaçlarınız, işletmeniz veya altyapıyla ilgili aklınıza takılan
            her şeyi sorabilirsiniz.
          </p>
          <p className="Contact-text">
            Fill out the form to get started, and our team will be in touch
            shortly with more information. You can also contact us with any
            questions or suggestions.
          </p>
          <div className="Contact-socials">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="Contact-social"
                aria-label={item.label}
              >
                <img src={item.src} alt="" />
              </a>
            ))}
          </div>

          <div className="Contact-legal">
            <p>© 2026 Alphabe. All rights reserved.</p>
            <div>
              <Link href="/terms">Terms of Use</Link>
              <span />
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <form className="Contact-form" ref={formRef} onSubmit={onSubmit}>
          <h2>Write us</h2>
          <input type="hidden" name="subject" value={subject} />
          <input type="hidden" name="country" value={country} />

          <div className="Contact-field">
            <span>
              Konu <i>*</i>
            </span>
            <div
              className={`Contact-select${openMenu === "subject" ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="Contact-selectBtn"
                aria-haspopup="listbox"
                aria-expanded={openMenu === "subject"}
                onClick={() =>
                  setOpenMenu((current) =>
                    current === "subject" ? null : "subject"
                  )
                }
              >
                {subject}
                <img src="/images/icons/caret.svg" alt="" />
              </button>
              <div className="Contact-selectMenu" role="listbox">
                {contactSubjects.map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="option"
                    aria-selected={subject === item}
                    className={`Contact-selectOption${subject === item ? " is-active" : ""}`}
                    onClick={() => {
                      setSubject(item)
                      setOpenMenu(null)
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="Contact-row">
            <label className="Contact-field">
              <span>
                Name Surname <i>*</i>
              </span>
              <input name="name" placeholder="Jacop Hernandez" required />
            </label>
            <label className="Contact-field">
              <span>
                Phone Number <i>*</i>
              </span>
              <span
                className={`Contact-phone${openMenu === "country" ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="Contact-code"
                  aria-label="Country code"
                  aria-haspopup="listbox"
                  aria-expanded={openMenu === "country"}
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === "country" ? null : "country"
                    )
                  }
                >
                  <span className="Contact-flag">{selectedCountry.flag}</span>
                  {selectedCountry.code}
                  <img src="/images/icons/caret.svg" alt="" />
                </button>
                <div
                  className="Contact-selectMenu Contact-selectMenu--code"
                  role="listbox"
                >
                  {contactCountries.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      role="option"
                      aria-selected={country === item.code}
                      className={`Contact-selectOption${country === item.code ? " is-active" : ""}`}
                      onClick={() => {
                        setCountry(item.code)
                        setOpenMenu(null)
                      }}
                    >
                      <span className="Contact-flag">{item.flag}</span>
                      {item.code}
                      <em>{item.label}</em>
                    </button>
                  ))}
                </div>
                <input name="phone" type="tel" required />
              </span>
            </label>
          </div>

          <div className="Contact-row">
            <label className="Contact-field">
              <span>
                E-Mail <i>*</i>
              </span>
              <input name="email" type="email" placeholder="Jac|" required />
            </label>
            <label className="Contact-field">
              <span>Telegram Username</span>
              <input name="telegram" placeholder="Username" />
            </label>
          </div>

          <label className="Contact-field">
            <span>Your Message</span>
            <textarea name="message" rows={5} placeholder="Message" />
          </label>

          <label className="Contact-check">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(event) => setMarketing(event.target.checked)}
            />
            <span>
              Alphabe&apos;den ürün güncellemeleri, haberler ve teklifler de
              dahil olmak üzere pazarlama e-postaları ve diğer iletişimleri
              almayı kabul ediyorum.
            </span>
          </label>

          <label className="Contact-check">
            <input
              type="checkbox"
              checked={privacy}
              onChange={(event) => setPrivacy(event.target.checked)}
              required
            />
            <span>
              Alphabe Gizlilik Politikasını okudum ve kabul ettim. <i>*</i>
            </span>
          </label>

          <button type="submit" className="Btn">
            Send
          </button>
        </form>
      </div>
    </main>
  )
}
