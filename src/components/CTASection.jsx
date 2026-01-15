import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-background border-t border-gray-800 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Grid - Bento Style */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
              {/* Large Featured Image (2/3 width) */}
              <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden group">
                <img 
                  src="/2018_ferrari_red_car-wallpaper-1920x1080.jpg" 
                  alt="Luxury Ferrari" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Top Right Image (1/3 width) */}
              <div className="relative col-span-1 row-span-1 rounded-3xl overflow-hidden group">
                <img 
                  src="/2016_mclaren_570s_gt4-wallpaper-1920x1080.jpg" 
                  alt="Performance McLaren" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Bottom Right Image (1/3 width) */}
              <div className="relative col-span-1 row-span-1 rounded-3xl overflow-hidden group">
                <img 
                  src="/ferrari_458_white_car-wallpaper-1920x1080.jpg" 
                  alt="Elegant White Ferrari" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="animate-fade-in-up">
              <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in-up">
                Premium Fleet
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 font-heading leading-tight">
                Ready to Start Your <br /> <span className="text-primary">Journey?</span>
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-400 leading-relaxed">
                Don't wait. Book your dream car today and experience the difference of driving with DriveNow. We provide world-class service and a fleet that exceeds expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/cars" 
                  className="inline-block p-[2px] rounded-full button-glow-container transition-all duration-300 transform hover:scale-105 group/btn animate-neon-pulse"
                >
                  <div className="button-beam"></div>
                  <div className="bg-secondary group-hover/btn:bg-neutral-800 text-white font-black py-5 px-10 rounded-full text-lg shadow-2xl shadow-black/50 relative z-10 block text-center border border-white/5">
                    Book Your Ride Now
                  </div>
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-block bg-transparent border-2 border-gray-700 hover:border-white text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 text-center"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
