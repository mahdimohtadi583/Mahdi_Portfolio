"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "NeuroVision AR",
      description:
        "An immersive AR application that visualizes neural networks in 3D space, allowing researchers to interact with complex AI models through gesture controls.",
      image: "/futuristic-ar-neural-network-visualization.jpg",
      technologies: ["React", "Three.js", "WebXR", "TensorFlow.js", "WebGL"],
      category: "AR/VR",
      status: "Live",
      links: {
        demo: "#",
        github: "#",
        video: "#",
      },
    },
    {
      title: "Quantum Dashboard",
      description:
        "A real-time data visualization platform for quantum computing metrics, featuring holographic displays and 4D data representations.",
      image: "/quantum-computing-dashboard-holographic-interface.jpg",
      technologies: ["Next.js", "D3.js", "WebGL", "Socket.io", "Python"],
      category: "Data Visualization",
      status: "Live",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "CyberSpace Social",
      description:
        "A futuristic social platform where users interact in virtual 3D environments, complete with avatar customization and spatial audio.",
      image: "/futuristic-social-platform-3d-virtual-environment.jpg",
      technologies: ["React", "Three.js", "WebRTC", "Node.js", "MongoDB"],
      category: "Social Platform",
      status: "In Development",
      links: {
        github: "#",
        video: "#",
      },
    },
    {
      title: "AI Art Generator",
      description:
        "An advanced AI-powered art generation tool with real-time style transfer and interactive 3D preview capabilities.",
      image: "/ai-art-generator-interface-with-3d-preview.jpg",
      technologies: ["React", "Python", "TensorFlow", "WebGL", "FastAPI"],
      category: "AI/ML",
      status: "Live",
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

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

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-purple animate-on-scroll">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-on-scroll">
            Explore my portfolio of cutting-edge applications that push the boundaries of web technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-morphism neon-border overflow-hidden animate-on-scroll group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className={`${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border-green-400/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="border-neon-blue text-neon-blue">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-neon-blue text-glow group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-neon-purple/20 text-neon-purple border-neon-purple/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.links.demo && (
                    <Button size="sm" className="bg-neon-blue hover:bg-neon-purple text-white animate-glow">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background bg-transparent"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.links.video && (
                    <Button variant="ghost" size="sm" className="text-neon-blue hover:text-neon-purple">
                      <Play size={16} className="mr-2" />
                      Video
                    </Button>
                  )}
                </div>
              </div>

              {hoveredProject === index && (
                <div className="absolute inset-0 bg-neon-blue/5 animate-glow pointer-events-none" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
