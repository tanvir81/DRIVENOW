"use client";
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-12 text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mt-2">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Visit Our Showroom</h2>
              <p className="text-gray-400 text-lg mb-8">
                Come experience our fleet in person. We are located in the heart of the city, easily accessible from all major highways.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Address Card */}
                <div className="group bg-secondary p-6 rounded-2xl border border-gray-700 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-lime-900/20 flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-primary/50">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1 text-white group-hover:text-primary transition-colors">Visit Us</h3>
                    <p className="text-gray-400 leading-relaxed max-w-xs">123 Luxury Lane, <br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group bg-secondary p-6 rounded-2xl border border-gray-700 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-lime-900/20 flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-primary/50">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1 text-white group-hover:text-primary transition-colors">Call Us</h3>
                    <p className="text-gray-400 leading-relaxed">+1 (555) 123-4567</p>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group bg-secondary p-6 rounded-2xl border border-gray-700 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-lime-900/20 flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-primary/50">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1 text-white group-hover:text-primary transition-colors">Email Us</h3>
                    <p className="text-gray-400 leading-relaxed">concierge@drivenow.com</p>
                    <p className="text-gray-400 leading-relaxed">support@drivenow.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 md:p-12 rounded-3xl border border-gray-700 shadow-2xl">
            <h2 className="text-3xl font-bold font-heading mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Your Name</label>
                   <input 
                     type="text" 
                     name="name" 
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full bg-[#111] border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                     placeholder="John Doe"
                     required
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Email Address</label>
                   <input 
                     type="email" 
                     name="email" 
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full bg-[#111] border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                     placeholder="john@example.com"
                     required
                   />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Subject</label>
                 <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                 >
                    <option value="">Select a Topic</option>
                    <option value="Rental Inquiry">Rental Inquiry</option>
                    <option value="Corporate Fleet">Corporate Fleet</option>
                    <option value="Support">Customer Support</option>
                    <option value="Other">Other</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-bold uppercase tracking-wide text-gray-400">Message</label>
                 <textarea 
                   name="message" 
                   value={formData.message}
                   onChange={handleChange}
                   rows="5"
                   className="w-full bg-[#111] border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                   placeholder="How can we help you?"
                   required
                 ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-lime-500 text-black font-bold py-4 rounded-xl text-lg uppercase tracking-wider transition-transform transform hover:scale-[1.02] shadow-lg shadow-lime-900/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
