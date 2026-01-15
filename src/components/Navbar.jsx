"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { LogOut, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = !isHome || scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBackground} ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-black text-3xl text-white tracking-tighter group-hover:text-primary transition-all duration-300 italic">
                DRIVE<span className="text-primary not-italic">NOW</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Fleet', href: '/cars' },
              { name: 'About', href: '/about' },
              { name: 'My Bookings', href: '/bookings', private: true },
              { name: 'Contact', href: '/contact' },
            ]
            .filter(link => !link.private || session)
            .map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary ${
                  pathname === link.href ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
             {session ? (
               <div className="flex items-center gap-6">
                 <div className="hidden sm:flex items-center gap-3 bg-white/5 py-2 px-4 rounded-full border border-white/10">
                   <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-secondary font-bold">
                     {session.user?.name?.charAt(0)}
                   </div>
                   <span className="text-white text-[10px] font-bold uppercase tracking-widest">{session.user?.name}</span>
                 </div>
                 <button 
                   onClick={() => signOut()}
                   className="text-gray-400 hover:text-white transition-colors p-2"
                   title="Sign Out"
                 >
                   <LogOut className="w-5 h-5" />
                 </button>
               </div>
             ) : (
               <div className="flex items-center gap-2">
                 <Link 
                   href="/login" 
                   className="text-white hover:text-primary font-black text-[11px] uppercase tracking-widest px-6 py-2 transition-all duration-300 hidden sm:block"
                 >
                   Sign In
                 </Link>
                 <Link 
                   href="/cars" 
                   className="bg-primary hover:bg-lime-500 text-secondary font-black py-4 px-8 rounded-full text-[11px] uppercase tracking-widest transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-0.5"
                 >
                   Book Now
                 </Link>
               </div>
             )}
             
             {/* Mobile Menu Button */}
             <button 
               className="lg:hidden text-white p-2"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               {mobileMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-secondary border-t border-white/5 animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Fleet', href: '/cars' },
              { name: 'About', href: '/about' },
              { name: 'My Bookings', href: '/bookings', private: true },
              { name: 'Contact', href: '/contact' },
            ]
            .filter(link => !link.private || session)
            .map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="block px-3 py-4 text-sm font-bold text-gray-300 hover:text-primary uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!session && (
              <Link 
                href="/login" 
                className="block px-3 py-4 text-sm font-bold text-primary uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
