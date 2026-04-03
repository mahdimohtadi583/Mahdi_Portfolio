"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1 },
    )
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const timelineEvents = [
    {
      year: "2024",
      title: "Front-End Developer",
      company: "Freelance",
      description: "Building modern web apps and collaborating with teams on real-world projects",
    },
    {
      year: "2023",
      title: "React Developer",
      company: "Self-driven Projects",
      description: "Developed e-commerce UIs, dashboards, and landing pages using React & TypeScript",
    },
    {
      year: "2022",
      title: "Started Web Development",
      company: "Self-taught",
      description: "Learned HTML, CSS, JavaScript, then moved to React and modern front-end tools",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-blue animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
            I'm Mahdi, a Front-End Developer passionate about building clean, modern web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <Card className="glass-morphism neon-border p-8 animate-glow">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple text-glow">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Front-End Developer with experience in building modern, responsive web applications
                using React, Next.js, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm comfortable working on real-world projects, improving UI/UX, and collaborating with teams.
                I care about clean code, great user experience, and continuous growth.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: "Focus", value: "Front-End" },
                  { label: "Stack", value: "React / Next.js" },
                  { label: "Language", value: "TypeScript" },
                  { label: "Style", value: "Tailwind CSS" },
                ].map((item, i) => (
                  <div key={i} className="bg-secondary/30 rounded-lg p-3 border border-neon-blue/20">
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-neon-blue">{item.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <h3 className="text-2xl font-bold mb-8 text-neon-pink text-glow">My Journey</h3>
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-neon-blue/30 group">
                <div className="absolute -left-2 top-3 w-4 h-4 bg-neon-blue rounded-full animate-glow transition-transform duration-300 group-hover:scale-150" />
                <div className="glass-morphism p-6 rounded-lg neon-border transition-all duration-300 group-hover:border-neon-purple/60 group-hover:shadow-lg group-hover:shadow-neon-purple/20">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-neon-blue font-bold text-lg">{event.year}</span>
                    <span className="text-sm text-muted-foreground">{event.company}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-neon-purple">{event.title}</h4>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
