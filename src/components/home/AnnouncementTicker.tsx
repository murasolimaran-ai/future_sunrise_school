import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight, Pause, Play } from 'lucide-react';
import { TICKER_ANNOUNCEMENTS } from '../../data/schoolData';

export const AnnouncementTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Fallback items if TICKER_ANNOUNCEMENTS not present
  const items = TICKER_ANNOUNCEMENTS || [
    { id: '1', title: 'Admissions Open 2026–27: Enquire now for Pre-KG to Grade 11', link: '/admissions', tag: 'Admissions' },
    { id: '2', title: 'Silver Jubilee Annual Athletic Meet 2026 Schedule Announced', link: '/events', tag: 'Sports' },
    { id: '3', title: 'Mid-Term Assessment & Parent-Teacher Conclave Dates Released', link: '/announcements', tag: 'Academic' },
    { id: '4', title: 'Merit Scholarship Applications for Grade 11 Science & Commerce', link: '/admissions', tag: 'Scholarship' },
    { id: '5', title: 'Air-Conditioned Fleet Route Expansion: Kovur & Vandalur Sectors', link: '/campus/transportation', tag: 'Transport' },
    { id: '6', title: 'CBSE Regional Science & Robotics Expo Winners Honored', link: '/achievements', tag: 'Honor' }
  ];

  // Duplicate items for continuous infinite marquee looping
  const marqueeItems = [...items, ...items];

  return (
    <div
      className="w-full bg-[#FAF9F5] border-b-2 border-[#D4A72C]/40 text-xs overflow-hidden relative z-20 shadow-2xs"
      role="region"
      aria-label="Latest Institutional Announcements"
    >
      <div className="site-container flex items-stretch">
        
        {/* Fixed Left Badge: LATEST UPDATES */}
        <div className="bg-[#102A43] text-white px-3 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 shrink-0 z-10 shadow-md">
          <div className="w-2 h-2 rounded-full bg-[#D4A72C] animate-ping shrink-0" />
          <Megaphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A72C] shrink-0" />
          <span className="font-serif font-bold text-[11px] sm:text-xs tracking-wider uppercase whitespace-nowrap">
            LATEST UPDATES
          </span>
        </div>

        {/* Ticker Content Area */}
        <div
          className="flex-1 overflow-hidden relative flex items-center py-2 sm:py-2.5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle edge fade masks */}
          <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-[#FAF9F5] to-transparent z-5 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-[#FAF9F5] to-transparent z-5 pointer-events-none" />

          {/* Scrolling Track */}
          <div
            className={`flex items-center whitespace-nowrap ticker-track ${
              isPaused ? 'ticker-paused' : ''
            }`}
          >
            {marqueeItems.map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                to={item.link}
                className="inline-flex items-center gap-2 mx-4 sm:mx-6 text-slate-700 hover:text-[#102A43] group font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A72C] rounded px-1.5 py-0.5"
              >
                {item.tag && (
                  <span className="px-1.5 py-0.5 rounded bg-[#102A43]/10 text-[#102A43] font-semibold text-[10px] uppercase tracking-wide group-hover:bg-[#D4A72C]/20 transition-colors">
                    {item.tag}
                  </span>
                )}
                <span className="text-xs sm:text-[13px] group-hover:underline underline-offset-2">
                  {item.title}
                </span>
                <ArrowRight className="w-3 h-3 text-[#D4A72C] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                <span className="text-slate-300 ml-2 select-none" aria-hidden="true">•</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Pause/Play Toggle Button for Accessibility */}
        <div className="hidden sm:flex items-center px-3 bg-[#FAF9F5] border-l border-slate-200 shrink-0">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded text-slate-500 hover:text-[#102A43] hover:bg-slate-200/60 transition-colors"
            title={isPaused ? 'Resume ticker' : 'Pause ticker'}
            aria-label={isPaused ? 'Resume announcement ticker' : 'Pause announcement ticker'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </div>
  );
};
