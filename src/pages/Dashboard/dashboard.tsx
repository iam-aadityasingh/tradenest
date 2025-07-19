import '../../index.css';
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

  const cardData = [
    { title: 'Food Card - 0', description: 'Description for Food Card', category: 'food', color: 'food-card' },
    { title: 'Creative Card - 0', description: 'Description for Creative Card', category: 'fashion', color: 'creative-card'  },
    { title: 'Goods Card - 0', description: 'Description for Goods Card', category: 'electronics', color: 'goods-card'  },
    { title: 'Food Card - 1', description: 'Description for Food Card', category: 'food', color: 'food-card' },
    { title: 'Creative Card - 1', description: 'Description for Creative Card', category: 'fashion', color: 'creative-card'  },
    { title: 'Goods Card - 1', description: 'Description for Goods Card', category: 'electronics', color: 'goods-card'  },
  ];

  return (
    <div className="dashboard-container">
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <div className="p-4 w-full max-w-[95vw] min-h-[75vh] mx-auto">
          {/* Image Slider */}
          <div className="w-full top-3 rounded-xl overflow-hidden shadow-2xl mb-15 relative hover:translate-y-5 transition-transform duration-500 ease-in-out">
            <img
              src={sliderImages[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-[60vh] object-cover transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-y-3/4 left-4 text-white text-4xl font-bold drop-shadow-lg">
              <span>🌈 Got something to trade for ?</span>
            </div>
          </div>

          {/* Searchbar */}
          <div className="mb-8">
            <Searchbar />
          </div>

          <div
            className="
              grid 
              gap-6 
              md:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              2xl:grid-cols-5
              justify-items-center
            "
          >
            {cardData.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} category={card.category} color={card.color} />
            ))}
          </div>
        </div>
      </Suspense >
    </div >
  );
}