"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPos = (clientX / innerWidth - 0.5) * 20
      const yPos = (clientY / innerHeight - 0.5) * 20

      heroRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10" />

      <div ref={heroRef} className="relative z-10 text-center transition-transform duration-100 ease-out">
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full glass-morphism neon-border flex items-center justify-center animate-glow">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple animate-hologram" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-hologram">
          <span className="text-glow text-neon-blue">ALEX</span>{" "}
          <span className="text-glow text-neon-purple">CHEN</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-light mb-8 text-neon-pink text-glow">
          Futuristic Developer & Digital Architect
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting immersive digital experiences that blur the line between reality and imagination. Specializing in
          cutting-edge web technologies and 4D interactive design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button
            size="lg"
            className="bg-neon-blue hover:bg-neon-purple text-white px-8 py-4 text-lg neon-border animate-glow"
          >
            Explore My Universe
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background px-8 py-4 text-lg bg-transparent"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors duration-300 animate-glow">
            <Github size={32} />
          </a>
          <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors duration-300 animate-glow">
            <Linkedin size={32} />
          </a>
          <a href="#" className="text-neon-blue hover:text-neon-purple transition-colors duration-300 animate-glow">
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
