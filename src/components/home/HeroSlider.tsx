import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../../data/schoolData';
import { useModal } from '../../context/ModalContext';
import { FallbackImage } from '../ui/FallbackImage';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openAdmissionModal } = useModal();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto slide every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile devices
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStartX(null);
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  const handleCtaClick = (e: React.MouseEvent, link: string) => {
    if (link === '#admission-modal') {
      e.preventDefault();
      openAdmissionModal();
    }
  };

  // Split heading into primary line and accented gold line
  const line1 = slide.headingLine1 || slide.heading.split('.')[0] + '.';
  const line2 = slide.headingLine2 || (slide.heading.includes('.') ? slide.heading.slice(slide.heading.indexOf('.') + 1).trim() : '');

  return (
    <section
      className="relative w-full overflow-hidden bg-[#102A43] min-h-[520px] sm:min-h-[560px] md:h-[clamp(560px,64vh,680px)] md:min-h-[560px] md:max-h-[700px] flex items-center focus:outline-none select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Future Sunrise International School highlights"
    >
      {/* 1. Background Photographs with subtle scale transition */}
      {HERO_SLIDES.map((s, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-800 ease-in-out motion-reduce:transition-none ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
            aria-hidden={!isActive}
          >
            <FallbackImage
              src={s.image}
              alt={s.heading}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`w-full h-full object-cover object-[center_20%] sm:object-[center_25%] md:object-[70%_center] xl:object-[68%_center] transition-transform duration-900 ease-out motion-reduce:transform-none ${
                isActive ? 'scale-100' : 'scale-[1.02]'
              }`}
            />
          </div>
        );
      })}

      {/* 2. Desktop & Tablet Left-to-Right Editorial Gradient Overlay */}
      {/* 0%-35%: Deep Navy (0.97 - 0.90) | 35%-60%: Cinematic dissolve (0.65 - 0.28) | 65%-100%: Clear Photographic (0.08 - 0.00) */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            'linear-gradient(90deg, rgba(16,42,67,0.97) 0%, rgba(16,42,67,0.90) 25%, rgba(16,42,67,0.65) 42%, rgba(16,42,67,0.28) 58%, rgba(16,42,67,0.08) 72%, rgba(16,42,67,0.00) 85%)'
        }}
        aria-hidden="true"
      />

      {/* 3. Mobile Vertical Bottom Gradient Overlay */}
      {/* Top 0%-40%: Light/transparent to keep students' faces clearly visible | Bottom 60%-100%: Deep Navy cradling the typography */}
      <div
        className="block md:hidden absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,42,67,0.05) 0%, rgba(16,42,67,0.25) 40%, rgba(16,42,67,0.82) 70%, rgba(16,42,67,0.98) 96%)'
        }}
        aria-hidden="true"
      />

      {/* 4. Responsive Inner Content Container: width: min(1200px, calc(100% - 48px)) */}
      <div className="relative z-10 w-[min(1200px,calc(100%-48px))] mx-auto h-full flex flex-col justify-end md:justify-center pt-36 pb-16 sm:pb-16 md:py-0">
        
        {/* Left Editorial Content Area (occupies 42%–48% on desktop, max-width 520px) */}
        <div
          key={slide.id}
          className="w-full max-w-[520px] md:w-[50%] lg:w-[46%] text-left space-y-3.5 sm:space-y-4 md:space-y-5 transition-all duration-600 ease-out motion-reduce:transition-none"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A43]/70 border border-[#D4A72C]/40 text-[#D4A72C] text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A72C]" />
            <span>{slide.eyebrow}</span>
          </div>

          {/* Main Heading in Playfair Display with Warm Gold Highlight */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-[46px] xl:text-[52px] font-bold text-white tracking-tight leading-[1.02] text-balance">
            <span className="block text-white">{line1}</span>
            {line2 && (
              <span className="block text-[#D4A72C] mt-1">{line2}</span>
            )}
          </h1>

          {/* Description */}
          <p className="text-[15px] sm:text-base text-white/90 font-normal leading-relaxed max-w-[480px]">
            {slide.description}
          </p>

          {/* Compact Aligned Buttons */}
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
            {slide.primaryCtaLink.startsWith('#') ? (
              <button
                onClick={(e) => handleCtaClick(e, slide.primaryCtaLink)}
                className="min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#D4A72C] hover:bg-[#c29620] active:scale-[0.98] text-[#102A43] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 group shrink-0"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <Link
                to={slide.primaryCtaLink}
                className="min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#D4A72C] hover:bg-[#c29620] active:scale-[0.98] text-[#102A43] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 group shrink-0"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}

            <button
              onClick={() => openAdmissionModal()}
              className="min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm border border-white/30 backdrop-blur-xs transition-all flex items-center justify-center gap-2 group shrink-0 shadow-sm"
            >
              <span>{slide.secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D4A72C]" />
            </button>
          </div>

        </div>
      </div>

      {/* 5. Slider Controls: Previous and Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#102A43]/65 hover:bg-[#102A43]/90 text-white border border-white/30 backdrop-blur-md shadow-lg flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#102A43]/65 hover:bg-[#102A43]/90 text-white border border-white/30 backdrop-blur-md shadow-lg flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* 6. Slide Indicators: Bottom Center */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 rounded-full bg-[#102A43]/55 backdrop-blur-md border border-white/15"
        role="tablist"
        aria-label="Hero slide navigation"
      >
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] ${
              index === currentSlide
                ? 'w-7 sm:w-8 h-2 bg-[#D4A72C] shadow-xs'
                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
