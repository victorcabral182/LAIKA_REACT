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

  return (
    <>
      <Header
        blurMenu={blurMenu}
        activeMenuItem={activeMenuItem}
        scrollTo={handleScroll}
      />
      <div className="w-full h-full">
        <div
          ref={firstRef}
          className="boxParallax bg1 flex flex-col justify-center items-center gap-6"
        >
          <FirstContent />
        </div>
        <div className="text-[#E8E7E7] bg-[#3D71B7] text-justify py-20 px-[400px] flex flex-col gap-4">
          <SecondContent />
        </div>
        <div
          ref={videosRef}
          className="boxParallax bg2 flex flex-col justify-center items-center"
        >
          <h3 className="text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7]">
            VÍDEOS
          </h3>
        </div>
        <div className="text-[#777] bg-[#C6EFAB] text-justify py-20 px-[400px] flex justify-between gap-8 items-center">
          <ThirdContent />
        </div>
        <div
          ref={lyricsRef}
          className="boxParallax bg3 flex flex-col justify-center items-center"
        >
          <h3 className="text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7]">
            LETRAS
          </h3>
        </div>
        <div className="text-[#1B1C1C] bg-[#E8E7E7] text-justify py-20 px-[400px] flex flex-col justify-between gap-8">
          <LyricsContent />
        </div>
        <div ref={contactRef} className="boxParallax bg4" />
        <div className="w-full p-2 bg-[#E8E7E7]" />
        <div className="text-[#E8E7E7] bg-[#1B1C1C] text-center p-10 gap-4">
          <p>Todos os direitos reservados - 2024</p>
        </div>
      </div>
    </>
  )
}
