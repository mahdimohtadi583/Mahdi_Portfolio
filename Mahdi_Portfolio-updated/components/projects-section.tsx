"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A futuristic personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features neon animations, glass morphism design, and smooth scroll interactions.",
      image: "",
      gradient: "from-neon-blue/30 to-neon-purple/30",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web App",
      status: "Live",
      links: { github: "https://github.com/mahdimohtadi583/Mahdi_Portfolio" },
    },
    {
      title: "E-Commerce UI",
      description:
        "A modern, fully responsive e-commerce front-end with product listings, cart functionality, and smooth checkout flow. Built with React and styled with Tailwind CSS.",
      image: "",
      gradient: "from-neon-purple/30 to-neon-pink/30",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Context API"],
      category: "E-Commerce",
      status: "In Development",
      links: { github: "#" },
    },
    {
      title: "Dashboard UI",
      description:
        "A clean analytics dashboard with real-time data charts, dark mode, and responsive layout. Designed for clarity and fast interaction.",
      image: "",
      gradient: "from-neon-pink/30 to-neon-blue/30",
      technologies: ["React", "Recharts", "TypeScript", "Tailwind CSS"],
      category: "Dashboard",
      status: "Live",
      links: { demo: "#", github: "#" },
    },
    {
      title: "Landing Page Collection",
      description:
        "A set of high-converting landing pages for various niches — SaaS, agency, and product launches. Pixel-perfect designs with smooth animations.",
      image: "",
      gradient: "from-neon-blue/20 to-neon-pink/20",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "UI/UX",
      status: "Live",
      links: { demo: "#", github: "#" },
    },
  ]

  const [tilt, setTilt] = useState<{ [key: number]: { x: number; y: number } }>({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20
    setTilt((prev) => ({ ...prev, [index]: { x, y } }))
  }

  const handleMouseLeave = (index: number) => {
    setTilt((prev) => ({ ...prev, [index]: { x: 0, y: 0 } }))
  }

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

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-purple animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
            A selection of projects I've built — focused on clean code, great UX, and modern tech.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                className="glass-morphism neon-border overflow-hidden group cursor-pointer h-full"
                style={{
                  transform: tilt[index]
                    ? `perspective(1000px) rotateX(${tilt[index].y}deg) rotateY(${tilt[index].x}deg) scale(1.02)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                  transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
                  boxShadow: tilt[index]
                    ? "0 25px 50px rgba(0,0,0,0.4), 0 0 30px var(--neon-blue)"
                    : "none",
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Gradient banner instead of image */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-6xl font-bold text-white/10 select-none">{project.title[0]}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className={`${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border-green-400/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
                    }`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="border-neon-blue text-neon-blue backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-neon-blue text-glow group-hover:text-neon-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/40 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.links.demo && (
                      <Button size="sm" className="bg-neon-blue hover:bg-neon-purple text-white animate-glow transition-all duration-300">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button variant="outline" size="sm" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background bg-transparent transition-all duration-300"
                        onClick={() => window.open(project.links.github, "_blank")}>
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
