import { useEffect, useState, Suspense, lazy } from 'react';
import banner1 from '../../assets/Dashboard/banner1.png';
import banner2 from '../../assets/Dashboard/banner2.png';
import banner3 from '../../assets/Dashboard/banner3.png';
import banner4 from '../../assets/Dashboard/banner4.png';

const Searchbar = lazy(() => import('../Searchbar/searchbar'));
const Card = lazy(() => import('../Card/card'));
const sliderImages = [banner1, banner2, banner3, banner4];

export default function Dashboard() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <div className="p-4 w-full max-w-[95vw] min-h-[75vh] mx-auto">
          {/* Image Slider */}
          <div className="w-full rounded-xl overflow-hidden shadow-2xl mb-16 relative">
            <img
              src={sliderImages[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-[60vh] object-cover transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-y-1/2 left-4 text-white text-4xl font-bold drop-shadow-lg">
              <span>🌈 Got something to trade for ?</span>
            </div>
          </div>

          {/* Searchbar */}
          <div className="mb-8">
            <Searchbar />
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </Suspense >
    </div >
  );
}
