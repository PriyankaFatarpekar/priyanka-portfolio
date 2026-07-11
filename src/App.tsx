import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { portfolio } from './data/portfolio'

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.title = portfolio.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', portfolio.meta.description)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-30% 0px -45% 0px', threshold: [0.1, 0.3, 0.6] },
    )

    document.querySelectorAll('[data-section]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(portfolio.profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-surface-base text-ink-primary antialiased dark:bg-surface-dark-base dark:text-ink-dark-primary">
      <ScrollProgress progress={scrollProgress} />
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-60 dark:opacity-80">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-primary/15 blur-3xl" />
        <div className="absolute -right-28 top-1/3 h-80 w-80 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-dot-grid" />
      </div>

      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(true)}
        onCloseMenu={() => setMenuOpen(false)}
        onToggleTheme={() => setIsDark((current) => !current)}
      />

      <main id="top" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact copied={copied} onCopyEmail={copyEmail} />
      </main>

      <Footer />
    </div>
  )
}

export default App

