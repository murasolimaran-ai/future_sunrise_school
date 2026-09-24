import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import {
  Search,
  X,
  BookOpen,
  Building,
  Calendar,
  Trophy,
  Newspaper,
  Compass,
  ArrowRight
} from 'lucide-react';
import {
  ACADEMIC_STAGES,
  CAMPUS_FACILITIES,
  CLUBS_DATA,
  ACHIEVEMENTS_DATA,
  SCHOOL_EVENTS,
  NEWS_ARTICLES
} from '../../data/schoolData';

export const SearchModal: React.FC = () => {
  const { isSearchModalOpen, closeSearchModal } = useModal();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isSearchModalOpen) return null;

  const handleSelect = (url: string) => {
    closeSearchModal();
    navigate(url);
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedAcademics = ACADEMIC_STAGES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.shortDesc.toLowerCase().includes(q) ||
        a.subjects.some((s) => s.toLowerCase().includes(q))
    ).map((a) => ({
      title: a.title,
      desc: a.grades,
      url: `/academics/${a.slug}`,
      category: 'Academics'
    }));

    const matchedCampus = CAMPUS_FACILITIES.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.keyFeatures.some((k) => k.toLowerCase().includes(q))
    ).map((c) => ({
      title: c.title,
      desc: c.tagline,
      url: `/campus/${c.slug}`,
      category: 'Campus'
    }));

    const matchedClubs = CLUBS_DATA.filter(
      (cl) =>
        cl.name.toLowerCase().includes(q) ||
        cl.tagline.toLowerCase().includes(q) ||
        cl.introduction.toLowerCase().includes(q)
    ).map((cl) => ({
      title: cl.name,
      desc: cl.tagline,
      url: `/student-life/clubs/${cl.slug}`,
      category: 'Student Life'
    }));

    const matchedEvents = SCHOOL_EVENTS.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q)
    ).map((e) => ({
      title: e.title,
      desc: `${e.date} · ${e.venue}`,
      url: `/events/${e.slug}`,
      category: 'Events'
    }));

    const matchedAchievements = ACHIEVEMENTS_DATA.filter(
      (ach) =>
        ach.title.toLowerCase().includes(q) ||
        ach.recipient.toLowerCase().includes(q) ||
        ach.category.toLowerCase().includes(q)
    ).map((ach) => ({
      title: ach.title,
      desc: `${ach.recipient} (${ach.year})`,
      url: `/achievements/${ach.category}`,
      category: 'Achievements'
    }));

    const matchedNews = NEWS_ARTICLES.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q)
    ).map((n) => ({
      title: n.title,
      desc: `${n.publishDate} · ${n.category}`,
      url: `/news/${n.slug}`,
      category: 'News'
    }));

    return {
      academics: matchedAcademics,
      campus: matchedCampus,
      clubs: matchedClubs,
      events: matchedEvents,
      achievements: matchedAchievements,
      news: matchedNews,
      total:
        matchedAcademics.length +
        matchedCampus.length +
        matchedClubs.length +
        matchedEvents.length +
        matchedAchievements.length +
        matchedNews.length
    };
  }, [query]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-10 pt-16 sm:pt-20 bg-[#102A43]/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Search school website"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeSearchModal();
      }}
    >
      <div className="w-full max-w-[680px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-white">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search programs, labs, events, clubs, news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base sm:text-lg bg-transparent text-[#102A43] placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 mr-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={closeSearchModal}
            className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-[#102A43] bg-slate-100 rounded hover:bg-slate-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="overflow-y-auto p-4 sm:p-6 bg-[#F8F6F0]/50 flex-1 space-y-6">
          {!query.trim() ? (
            <div className="text-center py-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { label: 'Science Laboratory', url: '/campus/science-laboratory' },
                  { label: 'Admission Process', url: '/admissions/process' },
                  { label: 'Robotics Club', url: '/student-life/clubs/robotics' },
                  { label: 'Higher Secondary', url: '/academics/higher-secondary' },
                  { label: 'Board Results', url: '/results' },
                  { label: 'Academic Calendar', url: '/academic-calendar' }
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleSelect(item.url)}
                    className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[#102A43] hover:border-[#D4A72C] hover:text-[#D4A72C] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ) : results && results.total === 0 ? (
            <div className="text-center py-10">
              <p className="text-base font-serif font-semibold text-[#102A43]">No matching results found</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for "Science", "Admissions", "Library", or "Sports"</p>
            </div>
          ) : results ? (
            <div className="space-y-4">
              {results.academics.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Academic Programs</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.academics.map((item) => (
                      <div
                        key={item.title}
                        onClick={() => handleSelect(item.url)}
                        className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-[#102A43] cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#102A43] group-hover:text-[#D4A72C]">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#102A43] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.campus.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                    <Building className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Campus Facilities</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.campus.map((item) => (
                      <div
                        key={item.title}
                        onClick={() => handleSelect(item.url)}
                        className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-[#102A43] cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#102A43] group-hover:text-[#D4A72C]">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#102A43] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.clubs.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                    <Compass className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Student Clubs</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.clubs.map((item) => (
                      <div
                        key={item.title}
                        onClick={() => handleSelect(item.url)}
                        className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-[#102A43] cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#102A43] group-hover:text-[#D4A72C]">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#102A43] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.events.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>School Events</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.events.map((item) => (
                      <div
                        key={item.title}
                        onClick={() => handleSelect(item.url)}
                        className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-[#102A43] cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#102A43] group-hover:text-[#D4A72C]">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#102A43] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.achievements.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                    <Trophy className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Achievements</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.achievements.map((item) => (
                      <div
                        key={item.title}
                        onClick={() => handleSelect(item.url)}
                        className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-[#102A43] cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#102A43] group-hover:text-[#D4A72C]">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#102A43] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.news.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                    <Newspaper className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>News & Articles</span>
                  </div>
                  <div className="space-y-1.5">
                    {results.news.map((item) => (
                      <div
                        key={item.title}
                        onClick={() => handleSelect(item.url)}
                        className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-[#102A43] cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#102A43] group-hover:text-[#D4A72C]">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#102A43] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
