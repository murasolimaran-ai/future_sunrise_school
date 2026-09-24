import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { SCHOOL_EVENTS } from '../../data/schoolData';
import { FallbackImage } from '../../components/ui/FallbackImage';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Share2 } from 'lucide-react';

export const EventsListPage: React.FC<{ filterTab?: 'upcoming' | 'past' }> = ({ filterTab }) => {
  const [tab, setTab] = useState<'all' | 'upcoming' | 'past'>(filterTab || 'all');
  const [catFilter, setCatFilter] = useState<string>('all');

  const filteredEvents = SCHOOL_EVENTS.filter((e) => {
    const matchTab = tab === 'all' ? true : tab === 'upcoming' ? e.isUpcoming : !e.isUpcoming;
    const matchCat = catFilter === 'all' ? true : e.category.toLowerCase() === catFilter.toLowerCase();
    return matchTab && matchCat;
  });

  return (
    <div>
      <PageHero
        eyebrow="CAMPUS HAPPENINGS"
        title="School Events & Conclaves"
        subtitle="Chronicle of annual sporting meets, academic exhibitions, music festivals, and founder celebrations."
        breadcrumbs={[{ label: 'Events' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container space-y-8">
          
          {/* Tabs Toolbar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTab('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  tab === 'all' ? 'bg-[#102A43] text-white' : 'bg-[#F8F6F0] text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setTab('upcoming')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  tab === 'upcoming' ? 'bg-[#102A43] text-white' : 'bg-[#F8F6F0] text-slate-700 hover:bg-slate-200'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setTab('past')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  tab === 'past' ? 'bg-[#102A43] text-white' : 'bg-[#F8F6F0] text-slate-700 hover:bg-slate-200'
                }`}
              >
                Past Archives
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold uppercase">Category:</span>
              <select
                value={catFilter}
                onChange={(e) => setCatFilter(e.target.value)}
                className="px-3 py-1.5 bg-[#F8F6F0] border border-slate-200 rounded-md text-xs font-medium text-[#102A43]"
              >
                <option value="all">All Categories</option>
                <option value="Sports">Sports</option>
                <option value="Academic">Academic</option>
                <option value="Cultural">Cultural</option>
                <option value="Community">Community</option>
              </select>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:border-[#102A43] transition-all hover:-translate-y-1 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <FallbackImage
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#102A43] text-[#D4A72C] text-xs font-bold rounded">
                    {evt.date}
                  </div>
                  {evt.isUpcoming && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-bold uppercase rounded tracking-wider">
                      Upcoming
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
                      {evt.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#102A43] group-hover:text-[#1D4ED8] transition-colors mb-2 leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {evt.shortDesc}
                    </p>

                    <div className="space-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#D4A72C]" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#D4A72C]" />
                        <span className="line-clamp-1">{evt.venue}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/events/${evt.slug}`}
                    className="text-xs font-bold text-[#102A43] group-hover:text-[#D4A72C] flex items-center gap-1 pt-3 border-t border-slate-100"
                  >
                    <span>Read Full Program Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const evt = SCHOOL_EVENTS.find((e) => e.slug === slug) || SCHOOL_EVENTS[0];

  return (
    <div>
      <PageHero
        eyebrow={`EVENT · ${evt.category}`}
        title={evt.title}
        subtitle={`${evt.date} · ${evt.venue}`}
        breadcrumbs={[
          { label: 'Events', href: '/events' },
          { label: evt.title }
        ]}
        bgImage={evt.image}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9]">
                <FallbackImage
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-[#102A43] mb-3">About the Event</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                  {evt.overview}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#102A43] mb-3">Event Highlights</h3>
                <div className="space-y-2">
                  {evt.highlights.map((h, i) => (
                    <div key={i} className="p-3 bg-[#F8F6F0] rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium">
                      • {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Meta Sidebar */}
            <div className="md:col-span-4 p-6 rounded-xl bg-[#F8F6F0] border border-[#102A43]/15 space-y-4 text-xs sm:text-sm">
              <h4 className="font-serif font-bold text-base text-[#102A43] pb-2 border-b border-slate-200">
                Event Logistics
              </h4>

              <div>
                <span className="text-slate-500 block">Date:</span>
                <span className="font-bold text-[#102A43]">{evt.date}</span>
              </div>

              <div>
                <span className="text-slate-500 block">Time:</span>
                <span className="font-bold text-[#102A43]">{evt.time}</span>
              </div>

              <div>
                <span className="text-slate-500 block">Venue:</span>
                <span className="font-bold text-[#102A43]">{evt.venue}</span>
              </div>

              <div>
                <span className="text-slate-500 block">Audience:</span>
                <span className="font-bold text-[#102A43]">{evt.audience}</span>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <Link
                  to="/events"
                  className="text-xs font-bold text-[#102A43] hover:text-[#D4A72C] block text-center"
                >
                  ← Back to All Events
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
