import { Headset, BadgePercent, ShieldCheck } from 'lucide-react';
import { BorderBeam } from "@/registry/magicui/border-beam";

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-background text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-16">
           <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in-up">
             Our Promise
           </div>
           <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white mt-2">Why Choose DriveNow?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-secondary border border-white/5 flex items-center justify-center mb-8 shadow-lg group-hover:bg-primary transition-all duration-300 relative z-10 text-primary group-hover:text-secondary">
              <Headset className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-white relative z-10">24/7 Support</h3>
            <p className="text-gray-400 leading-relaxed text-lg relative z-10">Our dedicated team is always here to assist you, ensuring a seamless experience anytime, anywhere.</p>
            
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-blue-500 to-transparent"
            />
          </div>

          {/* Feature 2 */}
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-secondary border border-white/5 flex items-center justify-center mb-8 shadow-lg group-hover:bg-primary transition-all duration-300 relative z-10 text-primary group-hover:text-secondary">
              <BadgePercent className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-white relative z-10">Best Price Guarantee</h3>
            <p className="text-gray-400 leading-relaxed text-lg relative z-10">We offer the most competitive rates in the market, providing luxury without the hidden fees.</p>
            
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-blue-500 to-transparent"
            />
          </div>

          {/* Feature 3 */}
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-secondary border border-white/5 flex items-center justify-center mb-8 shadow-lg group-hover:bg-primary transition-all duration-300 relative z-10 text-primary group-hover:text-secondary">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-white relative z-10">Premium Quality</h3>
            <p className="text-gray-400 leading-relaxed text-lg relative z-10">Every vehicle in our fleet is meticulously maintained and inspected for your safety and comfort.</p>
            
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-red-500 to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-blue-500 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
