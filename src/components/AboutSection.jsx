export default function AboutSection() {
  return (
    <section className="py-20 bg-background border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-16">
          <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in-up">
            Who We Are
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-6">Redefining Car Rental</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            At DriveNow, we believe that the journey is just as important as the destination. We offer a curated selection of top-tier vehicles to ensure your drive is nothing short of exceptional.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Whether you need a sleek sedan for business or a powerful SUV for a family getaway, we have the perfect car for you.
          </p>
        </div>
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-2xl h-[400px] group">
          <img 
            src="/2019_ford_gt_mk_ii_sports_car_road-wallpaper-1920x1080.jpg" 
            alt="Redefining Car Rental" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      </div>
    </section>
  );
}
