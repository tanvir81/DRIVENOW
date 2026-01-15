import SpotlightCard from "./SpotlightCard";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Choose Your Car",
      description: "Browse our extensive fleet and find the perfect match for your journey."
    },
    {
      id: "02",
      title: "Book Online",
      description: "Secure your reservation in just a few clicks with our easy booking system."
    },
    {
      id: "03",
      title: "Hit the Road",
      description: "Pick up your car or get it delivered, and enjoy the ultimate driving experience."
    }
  ];

  return (
    <section className="py-20 bg-background text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
         <div className="text-center mb-16">
           <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in-up">
             Simple Process
           </div>
           <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white mt-2">How It Works</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {steps.map((step) => (
             <SpotlightCard key={step.id} className="text-center group border-white/5 hover:border-primary/20">
               <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary group-hover:text-primary transition-all duration-500 shadow-xl backdrop-blur-md">
                 <span className="text-3xl font-black font-heading">{step.id}</span>
               </div>
               <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors duration-300">{step.title}</h3>
               <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
             </SpotlightCard>
           ))}
         </div>
      </div>
    </section>
  );
}
