"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        <div className="mb-8 inline-flex p-6 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 animate-pulse">
          <AlertCircle size={64} strokeWidth={1.5} />
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 animate-fade-in-up">
          Something Went Wrong
        </h2>
        
        <p className="text-white/60 text-lg mb-12 max-w-md mx-auto animate-fade-in-up delay-100">
          A breakdown occurred while trying to load this page. Our technical team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 group"
          >
            <RefreshCcw className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" />
            TRY AGAIN
          </button>
          
          <Link 
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary/50 hover:bg-secondary border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            <Home className="w-5 h-5" />
            GO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
