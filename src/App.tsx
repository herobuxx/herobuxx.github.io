// App.tsx
import { useState, useEffect, useRef } from 'react'
import './App.css'
import { 
  ChevronDown,
  ChevronUp,
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Code,
  GraduationCap,
  Users,
  Cpu,
  Database,
  Server,
  Terminal,
  FileCode,
  Smartphone,
  Globe,
  Cloud,
  GitBranch,
  Award,
  BookOpen,
  MapPin
} from 'lucide-react'

const sections = [
  {
    id: 'hero',
    title: 'Home',
    content: (
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-4">COMPUTER ENGINEERING STUDENT</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            <span className="block text-gray-100">Alifffathur</span>
            <span className="block text-gray-400">Muhammad Revan</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 mb-8">
            Building scalable systems with modern technologies
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://github.com/herobuxx" target="_blank" rel="noopener noreferrer" className="px-4 md:px-6 py-2 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span className="text-sm md:text-base">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/herobuxx" target="_blank" rel="noopener noreferrer" className="px-4 md:px-6 py-2 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <span className="text-sm md:text-base">LinkedIn</span>
          </a>
          <a href="mailto:herobuxx@gmail.com" className="px-4 md:px-6 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm md:text-base">Contact</span>
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'profile',
    title: 'Profile',
    content: (
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-light">Profile</h2>
          </div>
          <div className="space-y-4 md:space-y-6 text-gray-400 text-sm md:text-base">
            <p>
              A fourth-year Computer Engineering student at <span className="text-gray-300">Universitas Logistik dan Bisnis Internasional (ULBI)</span> with hands-on experience in backend and full-stack development.
            </p>
            <p>
              Strong background in Linux system administration, cloud platforms, DevOps practices, and microservices architecture.
            </p>
            <p>
              Passionate about building scalable, reliable software systems.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="p-4 md:p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <span className="font-medium text-sm md:text-base">Education</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">ULBI - D4 Teknik Informatika</p>
            <p className="text-xs md:text-sm text-gray-500">GPA: 3.41/4.00</p>
          </div>
          <div className="p-4 md:p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <span className="font-medium text-sm md:text-base">Location</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">Bandung, Indonesia</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'experience',
    title: 'Experience',
    content: (
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-light">Experience</h2>
        </div>
        <div className="space-y-4 md:space-y-6">
          {[
            {
              role: "Intern Backend Developer",
              company: "PT GITS Indonesia",
              period: "July 2025 - Present",
              description: "Develop and maintain backend services using Go and RESTful APIs.",
              icon: <Server className="w-4 h-4" />
            },
            {
              role: "Full Stack Developer",
              company: "DTI ULBI",
              period: "2023 - 2024",
              description: "Designed production applications for academic systems.",
              icon: <FileCode className="w-4 h-4" />
            },
            {
              role: "Freelance Developer",
              company: "Freelance",
              period: "2022 - Present",
              description: "Developed POS systems and websites for clients.",
              icon: <Globe className="w-4 h-4" />
            }
          ].map((exp, index) => (
            <div key={index} className="p-4 md:p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-800 rounded flex items-center justify-center">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base">{exp.role}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{exp.company}</p>
                  </div>
                </div>
                <span className="text-xs md:text-sm text-gray-500 px-2 md:px-3 py-1 bg-gray-800 rounded inline-block mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'projects',
    title: 'Projects',
    content: (
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <Code className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-light">Projects</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {[
            {
              title: "APPESI",
              description: "Thesis defense management system",
              tech: ["Go", "Fiber", "MongoDB"],
              icon: <BookOpen className="w-4 h-4" />
            },
            {
              title: "Lulusan",
              description: "Automated transcript generation",
              tech: ["Go", "Chromedp"],
              icon: <GraduationCap className="w-4 h-4" />
            },
            {
              title: "iTeung Chatbot",
              description: "Class management automation",
              tech: ["Go", "Fiber", "MongoDB"],
              icon: <Terminal className="w-4 h-4" />
            },
            {
              title: "SyncroApp",
              description: "Project collaboration platform",
              tech: ["Go", "Fiber", "MongoDB"],
              icon: <Users className="w-4 h-4" />
            },
            {
              title: "Halcyon",
              description: "Android distribution",
              tech: ["Android", "AOSP", "Linux"],
              icon: <Smartphone className="w-4 h-4" />,
              link: "https://hlcyn.co"
            },
            {
              title: "conquerOS",
              description: "Android ROM for Snapdragon",
              tech: ["Android", "Optimization"],
              icon: <Cpu className="w-4 h-4" />,
              link: "https://github.com/conquerOS"
            }
          ].map((project, index) => {
            const Component = project.link ? 'a' : 'div'
            const props = project.link ? {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {}
            
            return (
              <Component
                key={index}
                {...props}
                className="p-4 md:p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors group"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gray-700 transition-colors">
                  {project.icon}
                </div>
                <h3 className="font-medium text-sm md:text-base mb-1 md:mb-2">{project.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-800 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </Component>
            )
          })}
        </div>
      </div>
    )
  },
  {
    id: 'skills',
    title: 'Skills',
    content: (
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-light">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Technical</h3>
            <div className="space-y-3 md:space-y-4">
              {[
                { skill: "Go", level: 90 },
                { skill: "React", level: 80 },
                { skill: "MongoDB", level: 85 },
                { skill: "Linux", level: 90 },
                { skill: "Docker", level: 75 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs md:text-sm mb-1">
                    <span className="text-gray-400">{item.skill}</span>
                    <span className="text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1">
                    <div 
                      className="bg-gray-300 h-1 rounded-full transition-all duration-700"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Areas</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {[
                { icon: <Server className="w-4 h-4" />, title: "Backend" },
                { icon: <Database className="w-4 h-4" />, title: "Database" },
                { icon: <Cloud className="w-4 h-4" />, title: "Cloud" },
                { icon: <GitBranch className="w-4 h-4" />, title: "DevOps" },
                { icon: <Smartphone className="w-4 h-4" />, title: "Android" },
                { icon: <Terminal className="w-4 h-4" />, title: "System" }
              ].map((area, index) => (
                <div key={index} className="p-3 md:p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-800 rounded flex items-center justify-center mb-1 md:mb-2">
                    {area.icon}
                  </div>
                  <span className="text-xs md:text-sm">{area.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 md:mb-6">
            <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-light mb-3 md:mb-4">Get in Touch</h2>
          <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
            Interested in collaborating or discussing opportunities?
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          <a
            href="mailto:herobuxx@gmail.com"
            className="block p-3 md:p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
          >
            <span className="font-medium text-sm md:text-base">herobuxx@gmail.com</span>
          </a>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <a href="https://github.com/herobuxx" target="_blank" rel="noopener noreferrer" className="px-3 md:px-4 py-1.5 md:py-2 border border-gray-700 rounded hover:border-gray-500 transition-colors text-xs md:text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com/in/alifffathur" target="_blank" rel="noopener noreferrer" className="px-3 md:px-4 py-1.5 md:py-2 border border-gray-700 rounded hover:border-gray-500 transition-colors text-xs md:text-sm">
              LinkedIn
            </a>
            <a href="https://t.me/herobuxx" target="_blank" rel="noopener noreferrer" className="px-3 md:px-4 py-1.5 md:py-2 border border-gray-700 rounded hover:border-gray-500 transition-colors text-xs md:text-sm">
              Telegram
            </a>
          </div>
        </div>
      </div>
    )
  }
]

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [animationDirection, setAnimationDirection] = useState<'in' | 'out'>('in')
  const touchStartY = useRef(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) return
      
      setIsTransitioning(true)
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setAnimationDirection('out')
        setTimeout(() => {
          setCurrentSection(prev => prev + 1)
          setAnimationDirection('in')
          setTimeout(() => setIsTransitioning(false), 300)
        }, 300)
      } else if (e.deltaY < 0 && currentSection > 0) {
        setAnimationDirection('out')
        setTimeout(() => {
          setCurrentSection(prev => prev - 1)
          setAnimationDirection('in')
          setTimeout(() => setIsTransitioning(false), 300)
        }, 300)
      } else {
        setIsTransitioning(false)
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return
      
      const touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartY.current - touchEndY
      
      // Minimum swipe distance to trigger navigation
      if (Math.abs(deltaY) < 50) return
      
      setIsTransitioning(true)
      
      if (deltaY > 0 && currentSection < sections.length - 1) {
        // Swiped up - go to next section
        setAnimationDirection('out')
        setTimeout(() => {
          setCurrentSection(prev => prev + 1)
          setAnimationDirection('in')
          setTimeout(() => setIsTransitioning(false), 300)
        }, 300)
      } else if (deltaY < 0 && currentSection > 0) {
        // Swiped down - go to previous section
        setAnimationDirection('out')
        setTimeout(() => {
          setCurrentSection(prev => prev - 1)
          setAnimationDirection('in')
          setTimeout(() => setIsTransitioning(false), 300)
        }, 300)
      } else {
        setIsTransitioning(false)
      }
    }

    window.addEventListener('wheel', handleWheel)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSection, isTransitioning])

  const navigateTo = (index: number) => {
    if (isTransitioning || index === currentSection) return
    
    setIsTransitioning(true)
    setAnimationDirection('out')
    
    setTimeout(() => {
      setCurrentSection(index)
      setAnimationDirection('in')
      setTimeout(() => setIsTransitioning(false), 300)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-3 md:top-8 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
        <div className="flex items-center justify-center gap-1 md:gap-2 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full px-2 md:px-4 py-1.5 md:py-2 max-w-md mx-auto">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => navigateTo(index)}
              className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm transition-colors ${
                currentSection === index 
                  ? 'bg-gray-800' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Section Content with Animation */}
      <div className="relative h-screen">
        {sections.map((section, index) => (
          index === currentSection && (
            <div
              key={section.id}
              className={`absolute inset-0 flex items-center justify-center px-4 md:px-6 ${
                animationDirection === 'in' ? 'animate-fade-in' : 'animate-fade-out'
              }`}
            >
              <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-0">
                {section.content}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-3 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 md:gap-4">
        <button
          onClick={() => navigateTo(currentSection - 1)}
          disabled={currentSection === 0 || isTransitioning}
          className={`p-1.5 md:p-2 rounded-full border border-gray-800 hover:border-gray-700 transition-colors ${
            currentSection === 0 ? 'opacity-30 cursor-not-allowed' : ''
          }`}
        >
          <ChevronUp className="w-3 h-3 md:w-5 md:h-5" />
        </button>
        
        <div className="flex items-center gap-0.5 md:gap-1">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full transition-all ${
                index === currentSection 
                  ? 'w-2 md:w-4 bg-gray-300' 
                  : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => navigateTo(currentSection + 1)}
          disabled={currentSection === sections.length - 1 || isTransitioning}
          className={`p-1.5 md:p-2 rounded-full border border-gray-800 hover:border-gray-700 transition-colors ${
            currentSection === sections.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
          }`}
        >
          <ChevronDown className="w-3 h-3 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  )
}

export default App