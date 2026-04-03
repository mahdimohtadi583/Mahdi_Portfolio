"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechNova Industries",
      location: "San Francisco, CA",
      period: "2024 - Present",
      description:
        "Leading the development of next-generation AR/VR web applications using cutting-edge technologies. Architected scalable microservices handling 1M+ daily users.",
      achievements: [
        "Increased application performance by 40% through advanced optimization techniques",
        "Led a team of 8 developers in building immersive 3D web experiences",
        "Implemented AI-driven user personalization features",
      ],
      technologies: ["React", "Next.js", "WebGL", "Three.js", "Node.js", "AWS"],
    },
    {
      title: "Frontend Architect",
      company: "Digital Dynamics",
      location: "New York, NY",
      period: "2022 - 2024",
      description:
        "Architected and developed scalable React applications for Fortune 500 clients. Specialized in creating high-performance, accessible user interfaces.",
      achievements: [
        "Delivered 15+ enterprise-level applications",
        "Reduced bundle size by 60% through advanced code splitting",
        "Established design system used across 20+ projects",
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Webpack", "Docker"],
    },
    {
      title: "Creative Developer",
      company: "Pixel Perfect Studio",
      location: "Los Angeles, CA",
      period: "2020 - 2022",
      description:
        "Specialized in creating interactive web experiences and 3D visualizations for creative agencies and entertainment companies.",
      achievements: [
        "Created award-winning interactive campaigns for major brands",
        "Developed custom WebGL shaders for unique visual effects",
        "Collaborated with designers to push creative boundaries",
      ],
      technologies: ["Three.js", "GSAP", "WebGL", "Canvas API", "Vue.js"],
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
    <section id="experience" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-blue animate-on-scroll">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-on-scroll">
            A journey through innovative companies where I've helped shape the future of digital experiences.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-morphism neon-border p-8 animate-on-scroll animate-glow">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="text-neon-blue" size={20} />
                    <h3 className="text-xl font-bold text-neon-purple text-glow">{exp.title}</h3>
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-neon-pink">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 animate-glow" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-neon-blue">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
