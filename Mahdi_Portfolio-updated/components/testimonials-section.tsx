"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechNova Industries",
      company: "TechNova Industries",
      avatar: "/professional-woman-avatar-futuristic.jpg",
      content:
        "Alex transformed our vision into reality with incredible precision. His expertise in 3D web technologies and attention to detail resulted in an application that exceeded all our expectations.",
      rating: 5,
      project: "NeuroVision AR Platform",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      company: "Digital Dynamics",
      avatar: "/professional-man-avatar-futuristic.jpg",
      content:
        "Working with Alex was a game-changer for our team. His ability to blend cutting-edge technology with stunning visual design is unmatched. The results speak for themselves.",
      rating: 5,
      project: "Interactive Brand Experience",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Pixel Perfect Studio",
      avatar: "/professional-woman-avatar-creative.jpg",
      content:
        "Alex brings a unique combination of technical expertise and creative vision. His work on our quantum dashboard project was nothing short of extraordinary.",
      rating: 5,
      project: "Quantum Data Visualization",
    },
    {
      name: "David Kim",
      role: "Founder & CEO",
      company: "StartUp Labs",
      avatar: "/professional-man-avatar-startup-founder.jpg",
      content:
        "The immersive experiences Alex creates are truly next-level. His understanding of emerging technologies and user experience design is phenomenal.",
      rating: 5,
      project: "VR Social Platform",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-pink animate-on-scroll">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-on-scroll">
            Hear what industry leaders say about working with me and the impact of our collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-morphism neon-border p-8 md:p-12 animate-on-scroll animate-glow">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center gap-6">
              <img
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full neon-border animate-glow"
              />
              <div className="text-center">
                <h4 className="text-lg font-bold text-neon-blue text-glow">{testimonials[currentTestimonial].name}</h4>
                <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                <p className="text-sm text-neon-purple">{testimonials[currentTestimonial].company}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Project: {testimonials[currentTestimonial].project}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background bg-transparent"
              >
                <ChevronLeft size={16} />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-neon-blue animate-glow"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background bg-transparent"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
