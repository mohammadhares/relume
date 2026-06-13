import { useState, useEffect, useCallback } from 'react';

interface CarouselProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  animationDuration?: number;
  showIndicators?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ 
  autoPlay = true, 
  autoPlayInterval = 5000,
  animationDuration = 700,
  showIndicators = true
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Reliable image sources (working URLs)
  const imageSources: string[] = [
    'https://picsum.photos/id/1015/1200/600', // Mountain landscape
    'https://picsum.photos/id/104/1200/600',  // Waterfall
    'https://picsum.photos/id/107/1200/600',  // Grass field
    'https://picsum.photos/id/116/1200/600',  // Mountain lake
    'https://picsum.photos/id/15/1200/600',   // Green leaves
    'https://picsum.photos/id/169/1200/600',  // Sunrise
    'https://picsum.photos/id/20/1200/600',   // Typewriter
    'https://picsum.photos/id/26/1200/600',   // Venice
    'https://picsum.photos/id/28/1200/600',   // River
    'https://picsum.photos/id/42/1200/600',   // Piano
    'https://picsum.photos/id/57/1200/600',   // Mountain road
    'https://picsum.photos/id/66/1200/600',   // Forest
    'https://picsum.photos/id/7/1200/600',    // Mountain village
    'https://picsum.photos/id/96/1200/600',   // Mountains
    'https://picsum.photos/id/91/1200/600',   // Night sky
  ];

  // Shuffle function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize random images
  useEffect(() => {
    const shuffled = shuffleArray(imageSources);
    setRandomImages(shuffled.slice(0, 5));
  }, []);

  const goToPrevious = useCallback(() => {
    if (isAnimating || randomImages.length === 0) return;
    setIsAnimating(true);
    setDirection('left');
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? randomImages.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 50);
    }, 50);
  }, [isAnimating, randomImages.length]);

  const goToNext = useCallback(() => {
    if (isAnimating || randomImages.length === 0) return;
    setIsAnimating(true);
    setDirection('right');
    setTimeout(() => {
      setActiveIndex((prev) => (prev === randomImages.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 50);
    }, 50);
  }, [isAnimating, randomImages.length]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setDirection(index > activeIndex ? 'right' : 'left');
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 50);
  }, [isAnimating, activeIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || randomImages.length === 0) return;
    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, randomImages, goToNext]);

  // Pause auto-play on hover
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (!autoPlay || randomImages.length === 0) return;
    if (isHovered) return;
    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, randomImages, goToNext, isHovered]);

  if (randomImages.length === 0) {
    return (
      <div className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-base md:h-96 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-medium">Loading stunning images...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="animation-carousel" 
      className="relative w-full group"
      data-carousel="static"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Main Container */}
      <div className="relative h-56 overflow-hidden rounded-base md:h-96 shadow-2xl">
        {randomImages.map((img, idx) => {
          let animationClass = '';
          const isActive = idx === activeIndex;
          const isPrev = idx === (activeIndex - 1 + randomImages.length) % randomImages.length;
          const isNext = idx === (activeIndex + 1) % randomImages.length;
          
          if (isActive) {
            animationClass = 'opacity-100 translate-x-0 z-10';
          } else if (isPrev && direction === 'right') {
            animationClass = 'opacity-0 -translate-x-full z-0';
          } else if (isNext && direction === 'left') {
            animationClass = 'opacity-0 translate-x-full z-0';
          } else if (isPrev && direction === 'left') {
            animationClass = 'opacity-0 translate-x-full z-0';
          } else if (isNext && direction === 'right') {
            animationClass = 'opacity-0 -translate-x-full z-0';
          } else {
            animationClass = 'opacity-0 z-0';
          }
          
          return (
            <div
              key={idx}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-${animationDuration} ease-in-out ${animationClass}`}
              style={{ 
                transitionDuration: `${animationDuration}ms`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-carousel-item={idx === activeIndex ? 'active' : ''}
            >
              {/* Zoom effect on active image */}
              <div className={`w-full h-full ${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-[2000ms] ease-out`}>
                <img
                  src={img}
                  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                  alt={`Beautiful scenery ${idx + 1}`}
                  loading="lazy"
                />
              </div>
              
              {/* Gradient Overlay for better text visibility */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Previous Button - Enhanced Yellow Theme with Animation */}
      <button
        type="button"
        className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={goToPrevious}
        disabled={isAnimating}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/90 hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300 group-focus:ring-4 group-focus:ring-yellow-300/50 group-focus:outline-none backdrop-blur-sm shadow-lg hover:shadow-xl">
          <svg className="w-6 h-6 text-white transform group-hover:-translate-x-0.5 transition-transform duration-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m15 19-7-7 7-7" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      
      {/* Next Button - Enhanced Yellow Theme with Animation */}
      <button
        type="button"
        className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNext}
        disabled={isAnimating}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/90 hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300 group-focus:ring-4 group-focus:ring-yellow-300/50 group-focus:outline-none backdrop-blur-sm shadow-lg hover:shadow-xl">
          <svg className="w-6 h-6 text-white transform group-hover:translate-x-0.5 transition-transform duration-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m9 5 7 7-7 7" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      {/* Dots/Indicators - Animated */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {randomImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`group relative transition-all duration-300 ${
                idx === activeIndex 
                  ? 'w-8' 
                  : 'w-2 hover:w-4'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              disabled={isAnimating}
            >
              <span className={`block h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 w-8' 
                  : 'bg-white/60 group-hover:bg-yellow-300/80 w-2'
              }`}></span>
              {idx === activeIndex && (
                <span className="absolute inset-0 h-2 rounded-full bg-yellow-400 animate-ping opacity-40"></span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Slide Counter Badge - Optional */}
      <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
        {activeIndex + 1} / {randomImages.length}
      </div>

      {/* Play/Pause Indicator - Shows when auto-play is active */}
      {autoPlay && isHovered && (
        <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white animate-fade-in">
          ⏸️ Paused
        </div>
      )}
    </div>
  );
};

export default Carousel;