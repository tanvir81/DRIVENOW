"use client";

import { useEffect, useState, use } from 'react';
import api from '@/lib/api';
import Link from 'next/link';

export default function CarDetailsPage({ params }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchCar = async () => {
      try {
        const response = await api.get(`/cars/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error('Failed to fetch car:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) {
     return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Car not found</p>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-12">
      {/* Hero Section with Image - Reduced height for better visibility */}
      <div className="relative h-[45vh] lg:h-[55vh] w-full overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"></div>
        
        {/* Floating Navigation */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/cars" className="flex items-center gap-2 text-white bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full hover:bg-primary hover:text-secondary transition-all duration-300 font-bold uppercase tracking-wider text-xs border border-white/10">
            <span className="text-lg">←</span> Back to Fleet
          </Link>
        </div>

        {/* Integrated Title Overlay for space efficiency */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="max-w-[1600px] mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-primary text-secondary font-bold tracking-widest uppercase text-[10px] mb-4 shadow-lg shadow-primary/20">
              {car.category || 'Luxury Fleet'}
            </span>
            <h1 className="text-5xl lg:text-8xl font-extrabold text-white font-heading leading-none uppercase tracking-tighter italic drop-shadow-2xl">
              {car.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 -mt-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content Side */}
          <div className="lg:w-2/3">
            <div className="space-y-10">
              <section className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-primary font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/30"></span> Vehicle Overview
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                  {car.description} experience the pinnacle of performance and craftsmanship. Every detail is engineered for those who demand excellence on every turn.
                </p>
              </section>

              <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {car.features && car.features.map((feature, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-md font-bold text-white uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </section>
            </div>
          </div>
          
          {/* Sticky Booking Sidebar */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-24 bg-secondary border border-gray-800 p-8 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-1 italic">Rental Experience</p>
                  <p className="text-4xl font-extrabold text-white">${car.price}<span className="text-gray-500 text-sm font-normal uppercase ml-2 tracking-tighter">/Day</span></p>
                </div>
                <div className="text-right">
                  <span className="bg-green-500/10 text-green-500 text-[10px] font-bold uppercase py-1 px-3 rounded-full border border-green-500/20">Available</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs py-3 border-b border-gray-800/50">
                  <span className="text-gray-400 uppercase tracking-wider">Premium Insurance</span>
                  <span className="text-white font-bold">INCLUDED</span>
                </div>
                <div className="flex justify-between text-xs py-3 border-b border-gray-800/50">
                  <span className="text-gray-400 uppercase tracking-wider">Cancellation</span>
                  <span className="text-white font-bold">24H FLEX</span>
                </div>
              </div>

              <Link 
                href={`/cars/book?carId=${car.id}`}
                className="block w-full text-center bg-white hover:bg-primary text-secondary hover:text-secondary font-extrabold py-5 rounded-2xl text-lg shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 mb-4 uppercase tracking-wider"
              >
                Instant Reservation
              </Link>
              <p className="text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold opacity-50">Secure checkout powered by DriveNow</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
