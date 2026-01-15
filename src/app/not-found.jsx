"use client";

import Link from "next/link";
import { MoveLeft, Car } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-xl w-full text-center relative z-10">
        <div className="relative inline-block mb-8">
          <h1 className="text-9xl md:text-[12rem] font-heading font-black text-white/5 select-none animate-fade-in-up">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/20 p-6 rounded-3xl backdrop-blur-xl border border-primary/30 rotate-12 animate-bounce">
                <Car className="w-16 h-16 text-primary" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 animate-fade-in-up delay-100">
          Oops! Road Blocked.
        </h2>
        
        <p className="text-white/60 text-lg mb-12 max-w-md mx-auto animate-fade-in-up delay-200">
          The page you're looking for has drifted off course. Let's get you back on the right track.
        </p>

        <div className="animate-fade-in-up delay-300">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 group"
          >
            <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            BACK TO HOMEPAGE
          </Link>
        </div>
      </div>
    </div>
  );
}
