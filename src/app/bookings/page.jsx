"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import { Calendar, Clock, Car, CheckCircle2, ChevronRight, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsRes, carsRes] = await Promise.all([
          api.get('/bookings'),
          api.get('/cars')
        ]);
        setBookings(bookingsRes.data);
        setCars(carsRes.data);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getCarDetails = (carId) => {
    return cars.find(c => c.id === carId) || {};
  };

  const handleCancel = async (bookingId) => {
    const result = await Swal.fire({
      title: 'CANCEL RESERVATION?',
      text: "This action cannot be undone. Are you sure you want to cancel this premium booking?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#84cc16',
      cancelButtonColor: '#222222',
      confirmButtonText: 'YES, CANCEL IT',
      cancelButtonText: 'KEEP RENTAL',
      background: '#1a1a1a',
      color: '#fff',
      borderRadius: '24px',
      customClass: {
        popup: 'border border-white/10 shadow-2xl',
        title: 'font-heading font-black italic tracking-tighter text-3xl',
        confirmButton: 'rounded-xl font-bold uppercase tracking-widest text-xs px-8 py-4',
        cancelButton: 'rounded-xl font-bold uppercase tracking-widest text-xs px-8 py-4 border border-white/10'
      }
    });

    if (!result.isConfirmed) return;
    
    // Store current state for potential rollback
    const previousBookings = [...bookings];
    
    // Optimistic Update: Remove card instantly
    setBookings(prev => prev.filter(b => b.id !== bookingId));

    try {
      await api.delete(`/bookings/${bookingId}`);
      toast.success("Reservation cancelled successfully");
    } catch (err) {
      console.error("Failed to cancel booking", err);
      toast.error("The reservation could not be cancelled.");
      // Rollback UI
      setBookings(previousBookings);
    }
  };

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
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="animate-fade-in-up"
           >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Reservation History</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white font-heading uppercase italic tracking-tighter leading-none">
                My <span className="text-primary italic">Bookings</span>
              </h1>
           </motion.div>
           <Link href="/cars" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm">
             Rent Another Vehicle <ChevronRight className="w-4 h-4" />
           </Link>
        </div>

        {bookings.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/30 border border-gray-800 rounded-[40px] p-20 text-center"
          >
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5">
              <Car className="w-10 h-10 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">No Bookings Yet</h2>
            <p className="text-gray-500 mb-10 max-w-sm mx-auto">Your journey is waiting to begin. Explore our fleet and make your first reservation today.</p>
            <Link href="/cars" className="bg-primary text-secondary px-10 py-4 rounded-full font-extrabold uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              Explore Fleet
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {bookings.map((booking) => {
                const car = getCarDetails(booking.carId);
                
                return (
                  <motion.div 
                    key={booking.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    className="bg-secondary/40 border border-gray-800 rounded-[40px] overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-2xl"
                  >
                    {/* Car Image Header */}
                    <div className="h-48 relative overflow-hidden">
                      <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500/20 text-green-500 text-[10px] font-bold uppercase py-1.5 px-3 rounded-full border border-green-500/30 backdrop-blur-md">
                          {booking.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                           <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-1 italic">Confirmed Rental</p>
                           <h3 className="text-white font-extrabold text-2xl uppercase tracking-tighter">{car.name}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-primary font-bold text-xl tracking-tighter">${car.price * (booking.duration || 1)}</p>
                          <p className="text-gray-500 text-[9px] uppercase tracking-widest">Total Paid</p>
                        </div>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-gray-800/50">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary border border-white/5">
                            <Calendar className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-[10px] uppercase font-medium tracking-widest">Pick-up Date</p>
                            <p className="text-white font-bold">{booking.date}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary border border-white/5">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-gray-500 text-[10px] uppercase font-medium tracking-widest">Duration</p>
                            <p className="text-white font-bold">{booking.duration} Days</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 p-4 rounded-2xl border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Digital keys will be sent {booking.duration > 1 ? "shortly before" : "2h before"} pickup.
                        </div>
                        
                        <button 
                          onClick={() => handleCancel(booking.id)}
                          className="w-full py-4 rounded-2xl border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"
                        >
                          <Trash2 className="w-3 h-3" />
                          Cancel Reservation
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

      </div>
    </div>
  );
}
