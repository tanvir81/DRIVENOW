"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, LogIn, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AuthForm() {
  const [email, setEmail] = useState('user@drivenow.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError('Invalid credentials. Please use the demo info below.');
        setLoading(false);
      } else {
        setSuccess(true);
        setTimeout(() => {
          router.push('/cars'); 
          router.refresh(); 
        }, 1500);
      }
    } catch (err) {
      setError('An unexpected error occurred. Try again.');
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl flex items-center gap-3 text-sm"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">{error}</p>
          </motion.div>
        )}

        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-2xl flex items-center gap-3 text-sm"
          >
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">Welcome back! Redirecting...</p>
          </motion.div>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="name@example.com"
                required
                disabled={loading || success}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="••••••••"
                required
                disabled={loading || success}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || success}
          className={`w-full bg-primary hover:bg-lime-500 text-secondary font-extrabold py-5 rounded-2xl text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 ${
            (loading || success) ? 'opacity-70 grayscale cursor-not-allowed' : 'hover:-translate-y-1'
          }`}
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
          ) : success ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            <>
              <LogIn className="w-6 h-6" />
              Sign In
            </>
          )}
        </button>

        <div className="pt-6 border-t border-white/5">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest text-center">Demo Access</p>
            <div className="flex justify-around text-xs">
              <p className="text-gray-400">Email: <span className="text-primary font-bold">user@drivenow.com</span></p>
              <p className="text-gray-400">Pass: <span className="text-primary font-bold">123456</span></p>
            </div>
          </div>
        </div>
      </form>
    </div>
);
}
