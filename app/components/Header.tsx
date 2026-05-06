'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Plateformes', href: '/#casinos' },
    { name: 'Guide', href: '/#guide' },
    { name: 'À Propos', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* Top responsible gambling warning bar */}
      <div className="w-full bg-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-3 max-w-6xl">
          <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black border-2 border-orange-500" style={{ background: '#f97316' }}>
            18
          </div>
          <p className="text-gray-800 text-xs sm:text-sm font-medium text-center leading-tight">
            Réservé à un public majeur. Privilégiez toujours une utilisation responsable et raisonnée.
          </p>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b" style={{ background: 'rgba(13, 8, 32, 0.97)', borderColor: 'rgba(214, 31, 105, 0.15)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3.5">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <Logo />
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/70 hover:text-white transition-colors font-semibold tracking-wide text-sm px-4 py-2 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t mt-2 pt-4" style={{ borderColor: 'rgba(214, 31, 105, 0.15)' }}>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/70 hover:text-white transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
