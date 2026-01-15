import Link from 'next/link';
import CarCard from '@/components/CarCard';

export default function FeaturedCars({ cars }) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in-up">
            Luxury Fleet
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">Choose Your Ride</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.length > 0 ? cars.map((car) => (
            <CarCard key={car.id} car={car} />
          )) : (
            <p className="text-center col-span-3 text-gray-500">Loading fleet...</p>
          )}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/cars" 
            className="inline-block border border-gray-700 text-white hover:border-primary hover:text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
