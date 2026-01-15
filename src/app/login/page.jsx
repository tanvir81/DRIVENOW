import AuthForm from '@/components/AuthForm';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10"></div>
        <img 
          src="/2018_ferrari_red_car-wallpaper-1920x1080.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-xl px-4 sm:px-6">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 group"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all">
            <ChevronLeft className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </Link>

        {/* Login Card */}
        <div className="bg-secondary/40 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
          {/* Subtle Border Glow */}
          <div className="absolute inset-0 border border-primary/20 rounded-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="text-center mb-10">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Secure Access</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-heading uppercase italic tracking-tighter leading-none mb-4">
              Welcome <span className="text-primary italic">Back</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base px-4">
              Enter your credentials to manage your premium rentals.
            </p>
          </div>

          <AuthForm />
        </div>

        {/* Footer Link */}
        <p className="mt-8 text-center text-gray-500 text-sm">
          Don't have an account? <Link href="/contact" className="text-white hover:text-primary font-bold transition-colors underline decoration-primary/30 underline-offset-4">Contact us</Link> for membership.
        </p>
      </div>
    </div>
  );
}
