"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import CarCard from '@/components/CarCard';

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Pagination & Filter Logic
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Supercar", "Sports", "Hypercar", "Luxury"];

  const filteredCars = filter === "All" 
    ? cars 
    : cars.filter(car => car.category === filter);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Discover Perfection</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white mt-2">Our Luxury Fleet</h1>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                 filter === cat 
                 ? 'bg-primary text-black shadow-lg shadow-lime-900/20 scale-105' 
                 : 'bg-secondary/50 text-gray-400 hover:text-white hover:bg-secondary border border-gray-700'
               }`}
             >
               {cat}
             </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
             <button 
               onClick={() => paginate(currentPage - 1)}
               disabled={currentPage === 1}
               className={`px-6 py-2 rounded-full font-bold transition-colors ${currentPage === 1 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-secondary text-white hover:bg-primary hover:text-black border border-gray-700'}`}
             >
               Previous
             </button>
             
             <div className="flex space-x-2">
               {[...Array(totalPages)].map((_, index) => (
                 <button
                   key={index}
                   onClick={() => paginate(index + 1)}
                   className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-all ${currentPage === index + 1 ? 'bg-primary text-black scale-110' : 'bg-gray-800 text-gray-400 hover:bg-secondary hover:text-white'}`}
                 >
                   {index + 1}
                 </button>
               ))}
             </div>

             <button 
               onClick={() => paginate(currentPage + 1)}
               disabled={currentPage === totalPages}
               className={`px-6 py-2 rounded-full font-bold transition-colors ${currentPage === totalPages ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-secondary text-white hover:bg-primary hover:text-black border border-gray-700'}`}
             >
               Next
             </button>
          </div>
        )}

      </div>
    </div>
  );
}
