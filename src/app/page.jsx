import HeroCarousel from '@/components/HeroCarousel';
import FeaturedCars from '@/components/FeaturedCars';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default async function LandingPage() {
  // Fetch featured cars server-side
  let featuredCars = [];
  try {
     // Direct import for better performance and no fetch overhead
     const { default: carsData } = await import('@/data/cars.json');
     featuredCars = carsData.slice(0, 6);
     /* 
     // old fetch logic
     const res = await fetch('http://localhost:4000/api/cars', { cache: 'no-store' });
     if (res.ok) {
       featuredCars = await res.json();
       featuredCars = featuredCars.slice(0, 6);
     }
     */
  } catch (e) {
    console.error("Error fetching cars", e);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />
      <FeaturedCars cars={featuredCars} />
      <AboutSection />
      <BenefitsSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
}
