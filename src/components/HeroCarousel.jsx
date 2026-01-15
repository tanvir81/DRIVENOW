"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveDown, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/2018_ferrari_red_car-wallpaper-1920x1080.jpg",
  "/mclaren_p1_3-wallpaper-1920x1080.jpg",
  "/2019_ford_gt_mk_ii_supercar-wallpaper-1920x1080.jpg"
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black group/hero">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <img
            src={img}
            alt={`Luxury Car ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60"></div>
        </div>
      ))}

      {/* Manual Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-30 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/hero:opacity-100 transition-all duration-300 hover:bg-primary hover:text-background"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-30 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/hero:opacity-100 transition-all duration-300 hover:bg-primary hover:text-background"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 text-center">
        <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in-up">
           Premium Car Rental
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight text-white mb-6 animate-fade-in-up drop-shadow-2xl">
          Drive Your <span className="text-primary italic">Dream</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100 font-medium">
          Experience the thrill of the open road with our premium fleet of luxury and performance vehicles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up delay-200">
          <Link
            href="/cars"
            className="w-full sm:w-auto p-[2px] rounded-full button-glow-container transition-all duration-300 transform hover:scale-105 active:scale-95 group/btn"
          >
            <div className="button-beam"></div>
            <div className="bg-secondary group-hover/btn:bg-neutral-800 text-white font-black py-5 px-10 rounded-full text-lg shadow-2xl shadow-black/50 relative z-10 block text-center border border-white/5">
              EXPLORE THE FLEET
            </div>
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto bg-white/5 backdrop-blur-md border-2 border-white/10 hover:border-white text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 hover:bg-white/10"
          >
            MEMBER LOGIN
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 ${
              index === current ? "h-8 w-1.5 bg-primary" : "h-4 w-1 bg-white/20 hover:bg-white/40"
            } rounded-full`}
          />
        ))}
      </div>
    </section>
  );
}
