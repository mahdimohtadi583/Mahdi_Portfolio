"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const TITLES = [
  "Front-End Developer",
  "React & Next.js Engineer",
  "UI/UX Enthusiast",
  "TypeScript Developer",
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [displayedTitle, setDisplayedTitle] = useState("")
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const xPos = (e.clientX / window.innerWidth - 0.5) * 15
      const yPos = (e.clientY / window.innerHeight - 0.5) * 15
      heroRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const current = TITLES[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40)
    } else {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % TITLES.length)
    }

    setDisplayedTitle(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, titleIndex])

  const shapes = [
    { left: "10%", top: "15%", size: 60, color: "var(--neon-blue)", delay: "0s", round: true },
    { left: "75%", top: "25%", size: 90, color: "var(--neon-purple)", delay: "0.5s", round: false },
    { left: "20%", top: "70%", size: 45, color: "var(--neon-pink)", delay: "1s", round: true },
    { left: "85%", top: "60%", size: 70, color: "var(--neon-blue)", delay: "1.5s", round: false },
    { left: "50%", top: "80%", size: 50, color: "var(--neon-purple)", delay: "2s", round: true },
    { left: "5%",  top: "45%", size: 80, color: "var(--neon-pink)", delay: "2.5s", round: false },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapes.map((s, i) => (
          <div key={i} className="absolute" style={{ left: s.left, top: s.top, animationDelay: s.delay, animation: `float ${4 + i * 0.7}s ease-in-out infinite`, opacity: 0.18 }}>
            <div style={{
              width: s.size, height: s.size,
              borderRadius: s.round ? "50%" : "14px",
              border: `2px solid ${s.color}`,
              boxShadow: `0 0 18px ${s.color}, 0 0 40px ${s.color}40`,
              transform: `rotate(${i * 25}deg)`,
            }} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10" />

      <div ref={heroRef} className="relative z-10 text-center transition-transform duration-100 ease-out px-6">
        <div className="mb-8 animate-float">
          <div className="w-36 h-36 mx-auto mb-8 rounded-full glass-morphism neon-border flex items-center justify-center animate-glow">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
              <span className="text-4xl font-bold text-white">MM</span>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-glow text-neon-blue">MAHDI</span>{" "}
          <span className="text-glow text-neon-purple">MOHTADI</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-light mb-8 text-neon-pink text-glow min-h-[2.5rem]">
          {displayedTitle}<span className="animate-pulse">|</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Building modern, responsive web applications with React, Next.js, TypeScript, and Tailwind CSS.
          Focused on clean UI/UX and real-world impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button size="lg" className="bg-neon-blue hover:bg-neon-purple text-white px-8 py-4 text-lg neon-border animate-glow transition-all duration-300"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background px-8 py-4 text-lg bg-transparent transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a href="https://github.com/mahdimohtadi583" target="_blank" rel="noreferrer" className="text-neon-blue hover:text-neon-purple transition-all duration-300 hover:scale-125 inline-block">
            <Github size={32} />
          </a>
          <a href="#" className="text-neon-blue hover:text-neon-purple transition-all duration-300 hover:scale-125 inline-block">
            <Linkedin size={32} />
          </a>
          <a href="#" className="text-neon-blue hover:text-neon-purple transition-all duration-300 hover:scale-125 inline-block">
            <Mail size={32} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-neon-blue animate-glow" size={32} />
      </div>
    </section>
  )
}
