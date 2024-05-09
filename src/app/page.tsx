"use client"

import React, { useEffect, useRef, useState } from "react"
import { Header } from "@/components/Header"
import { FirstContent } from "@/components/FirstContent"
import { SecondContent } from "@/components/SecondContent"
import { ThirdContent } from "@/components/ThirdContent"
import { LyricsContent } from "@/components/LyricsContent"

export default function Home() {
  const firstRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<HTMLDivElement>(null)
  const lyricsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(1)
  const [blurMenu, setBlurMenu] = useState<boolean>(false)

  const handleScroll = (i: number) => {
    switch (i) {
      case 1:
        return firstRef?.current?.scrollIntoView({ behavior: "smooth" })
      case 2:
        return videosRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      case 3:
        return lyricsRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      case 4:
        return contactRef?.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScrollPosition = () => {
      const scrollPosition = window.scrollY
      if (
        scrollPosition + 50 >= firstRef!.current!.offsetTop &&
        scrollPosition + 50 <= videosRef!.current!.offsetTop
      ) {
        setActiveMenuItem(1)
      } else if (
        scrollPosition + 50 >= videosRef!.current!.offsetTop &&
        scrollPosition + 50 < lyricsRef!.current!.offsetTop
      ) {
        setActiveMenuItem(2)
      } else if (
        scrollPosition + 50 >= lyricsRef!.current!.offsetTop &&
        scrollPosition + 50 < contactRef!.current!.offsetTop
      ) {
        setActiveMenuItem(3)
      } else if (scrollPosition + 50 >= contactRef!.current!.offsetTop) {
        setActiveMenuItem(4)
      }
      if (scrollPosition > 40) {
        setBlurMenu(true)
      } else {
        setBlurMenu(false)
      }
    }

    window.addEventListener("scroll", handleScrollPosition)
    return () => {
      window.removeEventListener("scroll", handleScrollPosition)
    }
  }, [])

  const handleWhatsapp = () => {
    const phoneNumber = "+5527996658616"
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`)
  }

  return (
    <>
      <Header
        blurMenu={blurMenu}
        activeMenuItem={activeMenuItem}
        scrollTo={handleScroll}
      />
      <main className="w-full h-full">
        <section
          ref={firstRef}
          className="boxParallax bg1 flex flex-col justify-center items-center gap-6"
        >
          <FirstContent />
        </section>
        <section className="text-[#E8E7E7] bg-[#3D71B7] text-justify py-20 flex flex-col gap-4">
          <SecondContent />
        </section>
        <section
          ref={videosRef}
          className="boxParallax bg2 flex flex-col justify-center items-center"
        >
          <h3 className="text-[72px] xl:text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7] select-none">
            VÍDEOS
          </h3>
        </section>
        <section className="text-[#777] bg-[#C6EFAB] text-justify py-20 px-4 xl:px-[144px] 2xl:px-[432px] flex flex-col justify-center xl:flex-row xl:justify-between gap-4 xl:gap-8 items-center">
          <ThirdContent />
        </section>
        <section
          ref={lyricsRef}
          className="boxParallax bg3 flex flex-col justify-center items-center"
        >
          <h3 className="text-[72px] xl:text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7] select-none">
            LETRAS
          </h3>
        </section>
        <section className="text-[#1B1C1C] bg-[#E8E7E7] py-20 px-4 md:px-16 lg:px-[74px] xl:px-[144px] 2xl:px-[432px] flex flex-col justify-between gap-8">
          <LyricsContent />
        </section>
        <section
          ref={contactRef}
          className="boxParallax bg4 flex flex-col justify-center items-center"
        >
          <h3 className="text-[72px] xl:text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7] select-none">
            Contato
          </h3>
          <div className="flex flex-col gap-8 justify-center items-center p-16 bg-transparent backdrop-blur-lg lg:w-[35%] rounded-full">
            <div className="flex gap-2 text-[#E8E7E7] font-semibold text-xl cursor-text">
              <span className="select-none">E-mail:</span>
              <span className="font-normal">laikanoespaco2@gmail.com</span>
            </div>
            <div
              className="flex gap-2 text-[#E8E7E7] font-semibold text-xl cursor-pointer"
              onClick={handleWhatsapp}
            >
              <span className="select-none">WhatsApp:</span>
              <span className="font-normal">+55 (27) 99665-8616</span>
            </div>
          </div>
        </section>
        <section className="w-full p-2 bg-[#E8E7E7]" />
        <footer className="text-[#E8E7E7] bg-[#1B1C1C] text-center p-10 gap-4">
          <p>Todos os direitos reservados - 2024</p>
        </footer>
      </main>
    </>
  )
}
