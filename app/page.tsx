"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Bug,
  CheckCircle,
  Code,
  Database,
  Github,
  Linkedin,
  Mail,
  Phone,
  Target,
  TestTube,
  Zap,
  Download,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Portfolio() {
  const { toast } = useToast()
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    })
    setContactForm({ name: "", email: "", message: "" })
  }

  // Handle resume download
  const handleResumeDownload = () => {
    // In a real app, this would download an actual PDF
    toast({
      title: "Resume Downloaded",
      description: "Almer Delos Reyes's resume has been downloaded to your device.",
    })
    // Simulate download
    const link = document.createElement("a")
    link.href = "/resume/Almer_QA.pdf" // Replace with actual resume PDF
    link.download = "Almer_QA.pdf"
    link.click()
  }

  // Handle email click
  const handleEmailClick = () => {
    window.location.href =
      "mailto:almer.main@email.com?subject=QA Opportunity&body=Hi Almer, I would like to discuss a QA opportunity with you."
  }

  // Handle phone click
  const handlePhoneClick = () => {
    window.location.href = "tel:+639667121742"
  }

  // Handle social media clicks
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/adr27/", "_blank")
  }

  const handleGitHubClick = () => {
    window.open("https://github.com/alexjohnson-qa", "_blank")
  }

  // Handle project links
  const handleProjectView = (projectName: string) => {
    toast({
      title: "Project Details",
      description: `Opening ${projectName} case study...`,
    })
    // In a real app, this would navigate to a detailed project page
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => scrollToSection("hero")}>
            Almer Delos Reyes
          </h1>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/image/myImage.jpg"
              alt="Almer Delos Reyes"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Almer Delos Reyes</h1>
          <p className="text-2xl text-gray-600 mb-6">Quality Assurance Software Tester</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Passionate about ensuring software quality through comprehensive testing strategies, automation, and
            continuous improvement. 5+ years of experience in manual and automated testing.
          </p>
          <div className="flex justify-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                  <DialogDescription>Send me a message and I'll get back to you as soon as possible.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" onClick={handleResumeDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" onClick={handleLinkedInClick} className="hover:bg-blue-50">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a dedicated QA Software Tester with over 5 years of experience in ensuring software quality across
                web, mobile, and API applications. My expertise spans both manual and automated testing, with a strong
                focus on creating robust test strategies that catch issues early in the development cycle.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe in the power of thorough testing to deliver exceptional user experiences. My approach combines
                technical expertise with strong analytical skills to identify potential issues and work collaboratively
                with development teams to resolve them efficiently.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Manual Testing</Badge>
                <Badge variant="secondary">Automation Testing</Badge>
                <Badge variant="secondary">API Testing</Badge>
                <Badge variant="secondary">Performance Testing</Badge>
                <Badge variant="secondary">Mobile Testing</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">99.5%</h3>
                  <p className="text-sm text-gray-600">Bug Detection Rate</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">50+</h3>
                  <p className="text-sm text-gray-600">Projects Tested</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <TestTube className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">10,000+</h3>
                  <p className="text-sm text-gray-600">Test Cases Written</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">5+</h3>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bug className="w-5 h-5 mr-2 text-emerald-600" />
                  Testing Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Functional Testing
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Regression Testing
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Integration Testing
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    User Acceptance Testing
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Smoke Testing
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Sanity Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-emerald-600" />
                  Automation Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Selenium WebDriver
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Cypress
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Playwright
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    TestNG
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Jest
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Postman
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-emerald-600" />
                  Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Java
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Python
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    SQL
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    REST APIs
                  </Badge>
                  <Badge variant="outline" className="hover:bg-emerald-50 cursor-pointer">
                    Git
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Mid QA Engineer</CardTitle>
                <CardDescription>Lumawig Inc. • April 2021 - November 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Lead QA efforts for multiple web and mobile applications</li>
                  <li>Implemented automated testing framework reducing testing time by 80%</li>
                  <li>Mentored junior QA engineers and established testing best practices</li>
                  <li>Collaborated with cross-functional teams in Agile development environment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Assistant Instructor</CardTitle>
                <CardDescription>DICT • 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Helped instructor and mentored students in digital jobs skills training</li>
                  <li>Checking of students answers for accuracy and completeness</li>
                  <li>Preparing presentations for students</li>
                  <li>Providing feedback and guidance to students</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>E-commerce Platform Testing</CardTitle>
                <CardDescription>Comprehensive testing suite for online retail platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Developed and executed complete testing strategy for a high-traffic e-commerce platform, including
                  payment processing, inventory management, and user account features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Selenium</Badge>
                  <Badge>API Testing</Badge>
                  <Badge>Performance Testing</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleProjectView("E-commerce Platform Testing")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleGitHubClick}>
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Mobile Banking App QA</CardTitle>
                <CardDescription>Security-focused testing for financial mobile application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Led QA efforts for a mobile banking application, focusing on security testing, transaction validation,
                  and cross-platform compatibility across iOS and Android.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Mobile Testing</Badge>
                  <Badge>Security Testing</Badge>
                  <Badge>Cypress</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleProjectView("Mobile Banking App QA")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleGitHubClick}>
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and challenging projects. Let's discuss how I can help ensure the
            quality of your software products.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={handleEmailClick}>
              <Mail className="w-4 h-4 mr-2" />
              almer.main@gmail.com
            </Button>
            <Button variant="outline" size="lg" onClick={handlePhoneClick}>
              <Phone className="w-4 h-4 mr-2" />
              (+63) 9667121742
            </Button>
             
          </div>
          <Separator className="my-8" />
          <div className="flex justify-center space-x-4">
            
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Almer Delos Reyes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
