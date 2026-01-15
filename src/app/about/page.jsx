import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-12 text-white">
      {/* Hero Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 mb-20">
        <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
           <img 
             src="/2016_mclaren_570s_gt4-wallpaper-1920x1080.jpg" 
             alt="About DriveNow" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center p-12">
             <div className="max-w-2xl">
               <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
               <h1 className="text-5xl md:text-6xl font-extrabold font-heading mb-6 leading-tight">
                 Driving the Future of <br/><span className="text-primary">Luxury Rental</span>
               </h1>
               <p className="text-xl text-gray-300 max-w-xl">
                 We don't just rent cars; we curate experiences. DriveNow was born from a passion for engineering excellence and the open road.
               </p>
             </div>
           </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Mission</span>
            <h2 className="text-4xl font-extrabold font-heading mb-6">Unmatched Quality & Service</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At DriveNow, we believe that the journey is just as important as the destination. We offer a curated selection of top-tier vehicles to ensure your drive is nothing short of exceptional.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From the roar of a V8 engine to the silent power of an electric hypercar, our fleet represents the pinnacle of automotive engineering. Every vehicle is meticulously maintained and inspected to guarantee safety and performance.
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-gray-800 pt-8">
              <div>
                <span className="block text-4xl font-extrabold text-white mb-1">50+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Exotic Cars</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-white mb-1">2k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Happy Clients</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-white mb-1">24/7</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Support</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg transform transition-transform hover:-translate-y-2 duration-500">
                  <img src="/ferrari_458_italia_blue-wallpaper-1920x1080.jpg" alt="Fleet 1" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 shadow-lg transform transition-transform hover:-translate-y-2 duration-500 bg-gray-800 flex items-center justify-center">
                   <span className="text-gray-600 font-bold uppercase rotate-90 tracking-widest">Performance</span>
                </div>
             </div>
             <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 shadow-lg transform transition-transform hover:-translate-y-2 duration-500 bg-secondary flex items-center justify-center p-8 text-center">
                  <p className="italic text-gray-400">"The only way to do great work is to love what you do."</p>
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg transform transition-transform hover:-translate-y-2 duration-500">
                  <img src="/2019_ford_gt_mk_ii_supercar-wallpaper-1920x1080.jpg" alt="Fleet 2" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Team Section Placeholder */}
      <div className="bg-secondary/30 py-24">
         <div className="max-w-[1600px] mx-auto px-4 sm:px-8 text-center">
           <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Team</span>
           <h2 className="text-4xl font-extrabold font-heading mb-16">Meet the Experts</h2>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { id: 1, name: "Alexander Hunt", role: "CEO & Founder", image: "/member-1.jpg" },
                { id: 2, name: "Sarah Jenkins", role: "Head of Operations", image: "/member-2.jpg" },
                { id: 3, name: "Michael Chen", role: "Fleet Manager", image: "/member-3.jpg" },
                { id: 4, name: "Emily Davis", role: "Client Relations", image: "/member-4.jpg" }
              ].map((member) => (
                <div key={member.id} className="group">
                  <div className="bg-gray-800 rounded-full w-48 h-48 mx-auto mb-6 overflow-hidden border-4 border-transparent group-hover:border-primary transition-all duration-300 shadow-xl group-hover:shadow-lime-900/40">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <span className="text-primary text-sm flex items-center justify-center gap-2 font-bold tracking-wide uppercase">{member.role}</span>
                </div>
              ))}
           </div>
         </div>
      </div>

    </div>
  );
}
