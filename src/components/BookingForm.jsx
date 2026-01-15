"use client";

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import api from '@/lib/api';
import { Calendar, Clock, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function BookingForm({ carId, carPrice, carName }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState(1);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // Calculate total price dynamically
  const totalPrice = useMemo(() => {
    return duration * (carPrice || 0);
  }, [duration, carPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await api.post('/bookings', {
        carId,
        date,
        duration,
        userId: session?.user?.email || 'guest'
      });
      setStatus('success');
      setTimeout(() => {
        router.push('/cars');
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-secondary/50 backdrop-blur-xl p-12 rounded-[40px] border border-primary/20 text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40 animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-secondary" />
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-4 uppercase italic tracking-tighter">Reservation Confirmed!</h2>
        <p className="text-gray-400 text-lg mb-8">
          Your <span className="text-primary font-bold">{carName}</span> is being prepared. <br />
          Redirecting you to the fleet gallery...
        </p>
        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-primary h-full animate-[progress_3s_linear_forwards]"></div>
        </div>
        
        <style jsx>{`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-secondary/30 backdrop-blur-md p-8 md:p-12 rounded-[48px] border border-gray-800 shadow-2xl relative">
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-2xl flex items-center gap-4 animate-shake">
            <span className="text-xl">⚠️</span>
            <p className="font-bold text-sm">Communication error. Please re-authenticate and try again.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Date Picker Section */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">
              <Calendar className="w-4 h-4 text-white" /> Pick-up Date
            </label>
            <div className="relative group">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all group-hover:bg-black/60"
              />
            </div>
          </div>

          {/* Duration Section */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">
              <Clock className="w-4 h-4 text-white" /> Duration (Days)
            </label>
            <div className="relative group">
              <input
                type="number"
                min="1"
                max="30"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all group-hover:bg-black/60"
              />
            </div>
          </div>
        </div>

        {/* Pricing Breakdown Panel */}
        <div className="bg-white/5 border border-white/5 rounded-[32px] p-8 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 tracking-wide font-medium">Daily Rental Rate</span>
            <span className="text-white font-bold">${carPrice}</span>
          </div>
          <div className="flex justify-between items-center text-sm pb-4 border-b border-white/5">
            <span className="text-gray-400 tracking-wide font-medium">Platform Fee</span>
            <span className="text-primary font-bold">WAVED</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <div>
               <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">Estimated Total</p>
               <h3 className="text-white text-4xl font-extrabold tracking-tighter uppercase italic">Total <span className="text-primary">Due</span></h3>
            </div>
            <div className="text-right">
              <span className="text-5xl font-extrabold text-white tracking-tighter">${totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full relative group overflow-hidden bg-primary py-6 rounded-3xl font-extrabold text-secondary uppercase tracking-[0.2em] text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4 ${
            status === 'loading' ? 'grayscale cursor-wait opacity-80' : ''
          }`}
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
              Verifying Reservation...
            </>
          ) : (
            <>
              <CreditCard className="w-6 h-6" />
              Confirm My Ride
            </>
          )}
        </button>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 pt-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
          <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-primary" /> Encrypted Payment
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold tracking-widest uppercase">
            <CheckCircle2 className="w-4 h-4 text-primary" /> Instant Confirmation
          </div>
        </div>

      </form>
      <style jsx>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }
        /* Style for better date input field appearance */
        input[type="date"] {
          position: relative;
        }
      `}</style>
    </div>
  );
}
