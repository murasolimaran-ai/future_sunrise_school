import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { ACHIEVEMENTS_DATA } from '../../data/schoolData';
import { Award, Trophy, Medal, Star, Filter, Calendar } from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  const { category: urlCategory } = useParams<{ category?: string }>();

  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory || 'all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Honors' },
    { id: 'academic', label: 'Academic Excellence' },
    { id: 'sports', label: 'Sports & Athletics' },
    { id: 'cultural', label: 'Cultural & Performing Arts' },
    { id: 'competitions', label: 'National Competitions' },
    { id: 'awards', label: 'Institutional Awards' },
    { id: 'student-achievers', label: 'Star Achievers' }
  ];

  const years = ['all', '2026', '2025', '2024', '2023'];

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS_DATA.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchYr = selectedYear === 'all' || item.year.toString() === selectedYear;
      return matchCat && matchYr;
    });
  }, [selectedCategory, selectedYear]);

  return (
    <div>
      <PageHero
        eyebrow="RECOGNITION & HONORS"
        title="School Honors & Student Laurels"
        subtitle="Celebrating outstanding national and international accolades achieved by our scholars and mentors."
        breadcrumbs={[{ label: 'Achievements' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container space-y-10">
          
          {/* Filter Toolbar */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
            
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#D4A72C]" />
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[#102A43] text-white shadow-xs'
                      : 'bg-[#F8F6F0] text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Year Filter */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D4A72C]" />
                Year:
              </span>
              {years.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    selectedYear === yr
                      ? 'bg-[#D4A72C] text-[#102A43] font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {yr === 'all' ? 'All Years' : yr}
                </button>
              ))}

              <span className="ml-auto text-xs text-slate-400 font-mono">
                Showing {filteredAchievements.length} record(s)
              </span>
            </div>

          </div>

          {/* Achievements Grid */}
          {filteredAchievements.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
              <p className="font-serif text-lg font-bold text-[#102A43]">No records found matching filters</p>
              <p className="text-xs text-slate-500 mt-1">Try resetting the category or year filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAchievements.map((ach) => (
                <div
                  key={ach.id}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-[#D4A72C] transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#102A43]/5 text-[#102A43] font-mono font-bold text-xs">
                        {ach.year}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A72C]">
                        {ach.level} Level
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-[#102A43] flex items-center justify-center mb-4 text-[#D4A72C]">
                      <Trophy className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#102A43] mb-2 leading-snug">
                      {ach.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-800 mb-2">
                      Conferred Upon: <span className="text-[#102A43] font-bold">{ach.recipient}</span>
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-wider">
                    <span>{ach.category.replace('-', ' ')}</span>
                    <span className="text-emerald-700 font-semibold">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
