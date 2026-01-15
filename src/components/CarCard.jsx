import Link from 'next/link';

export default function CarCard({ car }) {
  // Parse features if available or default
  const specs = car.features || ["5 Seats", "Auto", "2 Bags"];
  const [seats, transmission, bags] = specs;

  return (
    <div className="relative group w-full mb-12"> {/* Added margin bottom for spacing */}
       {/* Image Container */}
       <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
       </div>
      
      {/* Floating Info Panel - Overlapping (Half on image) */}
      <div className="relative mx-4 -mt-8 z-10 bg-secondary rounded-2xl p-3 shadow-xl border border-gray-700/50 flex flex-row items-center justify-between">
        
        {/* Left Side: Info */}
        <div className="flex flex-col flex-1 min-w-0 mr-4">
          <h3 className="text-base font-bold text-white leading-tight mb-1 truncate">{car.name}</h3>
          
          {/* Added description */}
          <p className="text-[11px] text-gray-400 line-clamp-1 mb-2">
            {car.description}
          </p>

          {/* Icons/Specs */}
          <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
             <span className="flex items-center gap-1">
               {seats}
             </span>
             <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
             <span className="flex items-center gap-1">
               {transmission}
             </span>
          </div>
        </div>

        {/* Right Side: Action & Price */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="text-right">
             <span className="block text-primary font-bold text-base leading-none">${car.price}</span>
             <span className="text-gray-500 text-[8px] uppercase tracking-tighter">/day</span>
          </div>
          <Link 
            href={`/cars/${car.id}`}
            className="bg-primary hover:bg-lime-400 text-secondary font-bold text-xs py-2 px-4 rounded-full transition-colors duration-300 shadow-lg shadow-lime-900/20"
          >
            Details
          </Link>
        </div>

      </div>
    </div>
  );
}
