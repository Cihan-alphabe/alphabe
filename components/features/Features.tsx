"use client"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { featureCards } from "@/data/features"

import "swiper/css"
import "swiper/css/navigation"

/* eslint-disable @next/next/no-img-element */

export function Features() {
  return (
    <section className="Features">
      <div className="container Features-layout">
        <div className="Features-copy">
          <p className="Features-kicker">Her adımda detaylandırdık</p>
          <h2 className="Features-title">
            <span>iGaming’de </span>
            Yeni ve Güçlü Altyapı
          </h2>
          <p className="Features-text">
            Alphabe, operasyonunuzu büyütmek için ihtiyaç duyduğunuz teknoloji,
            esneklik ve desteği tek bir güçlü iGaming altyapısında bir araya
            getirir.
          </p>
          <div className="Features-nav">
            <button
              type="button"
              className="Features-prev"
              aria-label="Previous"
            >
              <img src="/images/icons/features/arrow-left.svg" alt="" />
            </button>
            <button
              type="button"
              className="Features-next"
              aria-label="Next"
            >
              <img src="/images/icons/features/arrow-right.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="Features-slider">
          <Swiper
            className="Features-swiper"
            modules={[Navigation]}
            navigation={{
              prevEl: ".Features-prev",
              nextEl: ".Features-next",
            }}
            slidesPerView="auto"
            spaceBetween={20}
            grabCursor
          >
            {featureCards.map((card) => (
              <SwiperSlide key={card.title}>
                <article className="FeatureCard">
                  <div className="FeatureCard-icon">
                    <img src={card.icon} alt="" />
                  </div>
                  <h3 className="FeatureCard-title">{card.title}</h3>
                  <p className="FeatureCard-text">{card.text}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
