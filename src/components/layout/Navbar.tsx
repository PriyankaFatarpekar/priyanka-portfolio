import { Menu, Moon, Sun, X } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

type NavbarProps = {
  activeSection: string
  isDark: boolean
  menuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
  onToggleTheme: () => void
}

export function Navbar({ activeSection, isDark, menuOpen, onToggleMenu, onCloseMenu, onToggleTheme }: NavbarProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-edge/80 bg-surface-card/80 backdrop-blur-xl dark:border-edge-dark/80 dark:bg-surface-dark-card/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3 font-display font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white shadow-lg shadow-brand-primary/20">
              {portfolio.profile.initials}
            </span>
            <span className="hidden sm:inline">{portfolio.profile.name}</span>
          </a>

          <div className="desktop-nav items-center gap-8">
            {portfolio.nav.map((item) => {
              const id = item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${activeSection === id ? 'text-brand-primary after:scale-x-100' : 'text-ink-secondary dark:text-ink-dark-secondary'}`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button className="icon-button" type="button" onClick={onToggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
              {isDark ? <Moon className="h-5 w-5" aria-hidden="true" /> : <Sun className="h-5 w-5" aria-hidden="true" />}
            </button>
            <button className="icon-button mobile-menu-button" type="button" onClick={onToggleMenu} aria-label="Open menu">
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[80] bg-surface-card/95 px-6 py-5 backdrop-blur-xl dark:bg-surface-dark-card/95 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-bold">{portfolio.profile.initials}</span>
            <button className="icon-button" type="button" onClick={onCloseMenu} aria-label="Close menu">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-16 grid gap-6">
            {portfolio.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={onCloseMenu} className="font-display text-3xl font-bold">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
