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
            entry.target.classList.add("animate-hologram")
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
      title: "Senior Full-Stack Developer",
      company: "TechNova Industries",
      description: "Leading development of next-gen AR/VR applications",
    },
    {
      year: "2022",
      title: "Frontend Architect",
      company: "Digital Dynamics",
      description: "Architected scalable React applications for Fortune 500 clients",
    },
    {
      year: "2020",
      title: "Creative Developer",
      company: "Pixel Perfect Studio",
      description: "Specialized in interactive web experiences and 3D visualizations",
    },
    {
      year: "2018",
      title: "Junior Developer",
      company: "StartUp Labs",
      description: "Built responsive web applications using modern JavaScript frameworks",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-blue animate-on-scroll">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-on-scroll">
            I'm a passionate developer who believes in pushing the boundaries of what's possible on the web. With over 6
            years of experience, I specialize in creating immersive digital experiences that captivate and inspire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <Card className="glass-morphism neon-border p-8 animate-glow">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple text-glow">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From crafting my first HTML page to building complex 4D interactive experiences, my journey has been
                driven by an insatiable curiosity for emerging technologies and a passion for creating digital art that
                moves people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that the future of web development lies in the seamless integration of cutting-edge
                technologies like WebGL, AI, and immersive design principles to create experiences that feel magical yet
                intuitive.
              </p>
            </Card>
          </div>

          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8 text-neon-pink text-glow">Career Timeline</h3>
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-neon-blue/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-blue rounded-full animate-glow" />
                <div className="glass-morphism p-6 rounded-lg neon-border">
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
