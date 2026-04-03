"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

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
    <section id="contact" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-glow text-neon-blue animate-on-scroll">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-on-scroll">
            Ready to bring your futuristic vision to life? Let's collaborate and build the next generation of digital
            experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll">
            <Card className="glass-morphism neon-border p-8 animate-glow">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple text-glow">Get In Touch</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center animate-glow">
                    <Mail className="text-neon-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">alex.chen@futuristicdev.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center animate-glow">
                    <Phone className="text-neon-purple" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center animate-glow">
                    <MapPin className="text-neon-pink" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h4 className="text-lg font-semibold mb-4 text-neon-blue">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center hover:bg-neon-blue/30 transition-colors animate-glow"
                  >
                    <Github className="text-neon-blue" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-neon-purple/20 rounded-lg flex items-center justify-center hover:bg-neon-purple/30 transition-colors animate-glow"
                  >
                    <Linkedin className="text-neon-purple" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-neon-pink/20 rounded-lg flex items-center justify-center hover:bg-neon-pink/30 transition-colors animate-glow"
                  >
                    <Twitter className="text-neon-pink" size={20} />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-on-scroll">
            <Card className="glass-morphism neon-border p-8 animate-glow">
              <h3 className="text-2xl font-bold mb-6 text-neon-pink text-glow">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-morphism border-neon-blue/30 focus:border-neon-blue"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-morphism border-neon-blue/30 focus:border-neon-blue"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-morphism border-neon-purple/30 focus:border-neon-purple"
                    placeholder="Project collaboration"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-morphism border-neon-pink/30 focus:border-neon-pink min-h-32"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white py-3 animate-glow"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Alex Chen. Crafted with passion for the future of web development.
          </p>
        </div>
      </div>
    </section>
  )
}
