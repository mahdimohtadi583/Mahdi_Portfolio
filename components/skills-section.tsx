"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const skills = [
    { name: "React/Next.js", level: 95, color: "neon-blue" },
    { name: "TypeScript", level: 90, color: "neon-purple" },
    { name: "WebGL/Three.js", level: 85, color: "neon-pink" },
    { name: "Node.js", level: 88, color: "neon-blue" },
    { name: "Python", level: 82, color: "neon-purple" },
    { name: "UI/UX Design", level: 87, color: "neon-pink" },
    { name: "Cloud Architecture", level: 83, color: "neon-blue" },
    { name: "AI/ML Integration", level: 78, color: "neon-purple" },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "WebGL",
    "Three.js",
    "Framer Motion",
    "Tailwind CSS",
    "GraphQL",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-purple">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of cutting-edge technologies and creative skills that enable me to bring futuristic
            visions to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-neon-blue text-glow">Core Competencies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-morphism p-6 rounded-lg neon-border">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className={`text-${skill.color} font-bold`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out animate-glow`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-neon-pink text-glow">Technology Stack</h3>
            <Card className="glass-morphism neon-border p-8 h-full">
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 rounded-lg p-4 text-center hover:bg-neon-blue/20 transition-all duration-300 cursor-pointer animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-medium text-foreground">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold mb-4 text-neon-blue">Specializations</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Immersive 3D Web Experiences</p>
                  <p>• Real-time Data Visualization</p>
                  <p>• Progressive Web Applications</p>
                  <p>• AI-Powered User Interfaces</p>
                  <p>• Performance Optimization</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
