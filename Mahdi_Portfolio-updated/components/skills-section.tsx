"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const skills = [
    { name: "React / Next.js", level: 90, color: "neon-blue" },
    { name: "TypeScript", level: 85, color: "neon-purple" },
    { name: "Tailwind CSS", level: 92, color: "neon-pink" },
    { name: "JavaScript (ES6+)", level: 88, color: "neon-blue" },
    { name: "HTML / CSS", level: 95, color: "neon-purple" },
    { name: "UI/UX Design", level: 80, color: "neon-pink" },
    { name: "Git & GitHub", level: 85, color: "neon-blue" },
    { name: "REST APIs", level: 82, color: "neon-purple" },
  ]

  const technologies = [
    "React", "Next.js", "TypeScript", "JavaScript",
    "Tailwind CSS", "HTML5", "CSS3", "Git",
    "GitHub", "Framer Motion", "REST API", "Vercel",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.3 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-purple">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My front-end toolkit — focused on modern technologies and clean, performant interfaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-neon-blue text-glow">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-morphism p-4 rounded-lg neon-border hover:border-neon-purple/60 transition-all duration-300 group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground group-hover:text-neon-blue transition-colors">{skill.name}</span>
                    <span className={`text-${skill.color} font-bold`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                        boxShadow: `0 0 8px var(--${skill.color})`,
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
                  <div key={index}
                    className="bg-secondary/50 rounded-lg p-4 text-center hover:bg-neon-blue/20 hover:scale-105 transition-all duration-300 cursor-pointer border border-transparent hover:border-neon-blue/30"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-sm font-medium text-foreground">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold mb-4 text-neon-blue">Specializations</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Responsive & Mobile-First Design</p>
                  <p>• Component-Based Architecture</p>
                  <p>• Performance Optimization</p>
                  <p>• UI/UX Implementation</p>
                  <p>• Team Collaboration & Version Control</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
