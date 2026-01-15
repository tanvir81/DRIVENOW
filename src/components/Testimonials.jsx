import ChromaGrid from "./ChromaGrid";

export default function Testimonials() {
  const reviews = [
    {
      image: "/reviewer-1.jpg",
      title: "Alex Johnson",
      subtitle:
        '"Pristine condition and flawless service. Best Tesla rental yet!"',
      handle: "Verified Client",
      location: "New York, NY",
      borderColor: "#84cc16",
      gradient: "linear-gradient(145deg, #84cc16, #111827)",
      url: "#",
    },
    {
      image: "/reviewer-2.jpg",
      title: "Sarah Williams",
      subtitle: '"Outstanding support. They made the process quick and easy."',
      handle: "Elite Member",
      location: "London, UK",
      borderColor: "#3b82f6",
      gradient: "linear-gradient(180deg, #3b82f6, #111827)",
      url: "#",
    },
    {
      image: "/reviewer-3.jpg",
      title: "Michael Brown",
      subtitle: '"McLaren for the weekend was unforgettable. Great prices!"',
      handle: "Verified Client",
      location: "Dubai, UAE",
      borderColor: "#f59e0b",
      gradient: "linear-gradient(210deg, #f59e0b, #111827)",
      url: "#",
    },
    {
      image: "/reviewer-4.jpg",
      title: "Emily Davis",
      subtitle:
        '"Luxury and performance combined. Highly recommend this service!"',
      handle: "Verified Client",
      location: "Dubai, UAE",
      borderColor: "#f59e0b",
      gradient: "linear-gradient(210deg, #f59e0b, #111827)",
      url: "#",
    },
  ];

  return (
    <section className="py-24 bg-background border-t border-gray-800 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-6 animate-fade-in-up">
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white mt-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore feedback from our global community of performance
            enthusiasts.
          </p>
        </div>

        <div className="min-h-[600px] md:h-[500px] relative w-full">
          <ChromaGrid
            items={reviews}
            radius={200}
            damping={0.5}
            fadeOut={0.8}
            ease="power4.out"
          />
        </div>
      </div>
    </section>
  );
}
