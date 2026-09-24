import React from 'react';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { FallbackImage } from '../ui/FallbackImage';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  breadcrumbs: _breadcrumbs,
  bgImage = '/src/assets/images/hero_school_campus_1790234182884.jpg'
}) => {
  return (
    <section className="relative w-full py-14 sm:py-20 md:py-24 bg-[#102A43] overflow-hidden text-white border-b-2 border-[#D4A72C]">
      {/* Background with measured darkening scrim */}
      <div className="absolute inset-0 z-0">
        <FallbackImage
          src={bgImage}
          alt={title}
          loading="eager"
          className="w-full h-full object-cover object-center opacity-25 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102A43]/90 to-[#102A43]/80" />
      </div>

      <div className="site-container relative z-10">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          {/* Eyebrow */}
          {eyebrow && (
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#D4A72C]">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif fluid-h2 font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl font-normal leading-relaxed pt-1">
              {subtitle}
            </p>
          )}

          <div className="w-12 h-1 bg-[#D4A72C] rounded-xs mt-4" />
        </div>
      </div>
    </section>
  );
};
