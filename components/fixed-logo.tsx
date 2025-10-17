"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function FixedLogo() {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state to visible
      if (logoRef.current) gsap.set(logoRef.current, { opacity: 1 })

      // Logo animation on page load
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={logoRef}
      className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-4 md:left-6 lg:top-4 lg:left-8 xl:top-4 xl:left-8 z-[100]"
    >
      <Image
        src="/logo.png"
        alt="La Solution en Énergie"
        width={180}
        height={60}
        className="object-contain w-[100px] h-auto sm:w-[130px] md:w-[140px] lg:w-[150px] xl:w-[160px]"
        priority
      />
    </div>
  )
}
