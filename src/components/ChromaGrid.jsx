"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex  justify-center items-center gap-6 md:gap-12 px-4 py-8 ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-full max-w-[350px] md:w-[350px] rounded-[24px] overflow-hidden border-2 border-white/5 transition-all duration-500 cursor-pointer bg-[#111827] hover:border-white/40 hover:scale-[1.01] shadow-2xl z-10"
          style={{
            "--card-border": c.borderColor || "transparent",
            "--spotlight-color": "rgba(255,255,255,0.03)",
          }}
        >
          {/* Default Subtle Corner Glow */}
          <div
            className="absolute top-0 right-0 w-32 h-32 transition-all duration-700 pointer-events-none z-20"
            style={{
              background: `radial-gradient(circle at top right, ${c.borderColor}33, transparent 70%)`,
              opacity: 0.3,
            }}
          />

          {/* Hover Expanded Corner Glow */}
          <div
            className="absolute top-0 right-0 w-48 h-48 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-20"
            style={{
              background: `radial-gradient(circle at top right, ${c.borderColor}99, transparent 80%)`,
            }}
          />

          {/* Active Border Glow */}
          <div
            className="absolute inset-0 border-2 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"
            style={{ borderColor: c.borderColor }}
          />

          {/* Spotlight Effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-40 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />

          {/* Image Container */}
          <div className="relative z-10 p-5 pb-0 box-border">
            <div className="aspect-[4/5] overflow-hidden rounded-[18px] relative bg-neutral-800">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
              />
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-700" />
            </div>
          </div>

          {/* Content */}
          <footer className="relative z-10 p-6 text-white font-sans flex flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h3 className="m-0 text-xl font-bold font-heading">{c.title}</h3>
              {c.handle && (
                <span className="text-[11px] font-medium text-white/40 group-hover:text-white transition-colors duration-500">
                  {c.handle}
                </span>
              )}
            </div>
            <p className="m-0 text-white/50 text-[13px] leading-relaxed mt-1 group-hover:text-white/80 transition-colors duration-500">
              {c.subtitle}
            </p>
          </footer>

          {/* Base Color Glow on Hover */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-0"
            style={{
              background: `linear-gradient(to top, ${c.borderColor}, transparent)`,
            }}
          />
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.1) 30%,rgba(0,0,0,0.2) 45%,rgba(0,0,0,0.3) 60%,rgba(0,0,0,0.4) 75%,rgba(0,0,0,0.5) 88%,rgba(0,0,0,0.8) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.1) 30%,rgba(0,0,0,0.2) 45%,rgba(0,0,0,0.3) 60%,rgba(0,0,0,0.4) 75%,rgba(0,0,0,0.5) 88%,rgba(0,0,0,0.8) 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.9) 30%,rgba(255,255,255,0.7) 45%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0.3) 75%,rgba(255,255,255,0.1) 88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.9) 30%,rgba(255,255,255,0.7) 45%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0.3) 75%,rgba(255,255,255,0.1) 88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
