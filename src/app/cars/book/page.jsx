"use client";
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import api from '@/lib/api';
import BookingForm from '@/components/BookingForm';
import Link from 'next/link';

function BookContent() {
  const searchParams = useSearchParams();
  const carId = searchParams.get('carId');
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!carId) return;
    const fetchCar = async () => {
      try {
        const response = await api.get(`/cars/${carId}`);
        setCar(response.data);
      } catch (err) {
        console.error("Failed to fetch car", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [carId]);

  if (!carId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white p-8">
        <h1 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter italic">No Car Selected</h1>
        <p className="text-gray-400 mb-8 max-w-md text-center">Your journey starts with a choice. Go back to our fleet and pick the machine that speaks to you.</p>
        <Link href="/cars" className="bg-primary hover:bg-lime-500 text-secondary px-10 py-4 rounded-full font-extrabold uppercase tracking-widest transition-all shadow-lg shadow-primary/20">
          Return to Fleet
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Car Summary Card - Modern & High-End */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1 sticky top-32">
            <div className="bg-secondary p-10 rounded-[48px] border border-gray-800 shadow-2xl relative overflow-hidden group">
              {/* Decorative Gradient Overlay */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                   <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Reservation Details</span>
                   <span className="px-4 py-1.5 bg-white/5 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.1em] border border-white/10">
                     {car?.category || 'Luxury'}
                   </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 font-heading uppercase italic tracking-tighter leading-none">
                  Your <span className="text-primary italic">Selection</span>
                </h2>
                
                <div className="rounded-[32px] overflow-hidden mb-10 h-[350px] border border-white/5 shadow-2xl">
                  <img 
                    src={car?.image} 
                    alt={car?.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-gray-800 pb-6">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1 italic">Hand-Chosen Vehicle</p>
                      <p className="text-white font-extrabold text-3xl uppercase tracking-tighter">{car?.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Base Rate</span>
                    <div className="text-right">
                       <span className="text-primary font-extrabold text-3xl tracking-tighter">${car?.price}</span>
                       <span className="text-gray-500 text-[10px] uppercase ml-2 tracking-widest">/ Day</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/5 mt-8 backdrop-blur-sm">
                    <p className="text-gray-400 text-sm leading-relaxed italic">
                      "Experience automotive perfection with the {car?.name}. Meticulously maintained and ready for your next adventure."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Booking Form - Sleek & Modern */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2">
            <div className="mb-16">
               <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 font-heading tracking-tight leading-[0.85] uppercase italic">
                 Secure Your <br /> <span className="text-primary">Dreams.</span>
               </h1>
               <div className="h-1 w-24 bg-primary mb-8 rounded-full"></div>
               <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                 Complete the form below to lock in your reservation for the <span className="text-white font-bold">{car?.name}</span>. Our concierge team will handle the rest.
               </p>
            </div>
            
            <BookingForm carId={carId} carPrice={car?.price} carName={car?.name} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    }>
      <BookContent />
    </Suspense>
  );
}
