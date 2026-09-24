import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { GALLERY_ALBUMS } from '../../data/schoolData';
import { FallbackImage } from '../../components/ui/FallbackImage';
import { Lightbox } from '../../components/ui/Lightbox';
import { Play, Sparkles, Filter } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { category: urlCategory } = useParams<{ category?: string }>();
  const [selectedTab, setSelectedTab] = useState<string>(urlCategory || 'all');
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Flatten all photos for lightbox navigation
  const allPhotos = GALLERY_ALBUMS.flatMap((album) =>
    album.photos.map((p) => ({
      ...p,
      albumCategory: album.category,
      albumTitle: album.title
    }))
  );

  const filteredPhotos = selectedTab === 'all'
    ? allPhotos
    : selectedTab === 'video'
    ? []
    : allPhotos.filter((p) => p.albumCategory === selectedTab);

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="MEDIA ARCHIVES"
        title="School Photo & Video Gallery"
        subtitle="Visual memories celebrating scholastic inquiry, championship triumphs, and campus celebrations."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container space-y-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-white p-3 rounded-xl border border-slate-200 max-w-2xl mx-auto">
            {[
              { id: 'all', label: 'All Media' },
              { id: 'campus', label: 'Campus & Facilities' },
              { id: 'events', label: 'Events & Conclaves' },
              { id: 'sports', label: 'Sports Tournaments' },
              { id: 'activities', label: 'Student Activities' },
              { id: 'academics', label: 'Academic Life' },
              { id: 'video', label: 'Video Showcase' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'bg-[#F8F6F0] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Video Showcase Tab */}
          {selectedTab === 'video' ? (
            <div className="space-y-6">
              <div className="max-w-3xl mx-auto text-center space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#102A43]">Virtual Campus Video Tours</h3>
                <p className="text-xs sm:text-sm text-slate-600">Experience our laboratories, athletic courts, and student symposiums in motion.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { title: 'Future Sunrise School - 25th Silver Jubilee Film', duration: '4:18', desc: 'A cinematic retrospective of our 25-year educational journey.' },
                  { title: 'Annual Tarang Cultural Conclave Highlights', duration: '6:45', desc: 'Over 800 students performing Carnatic symphonies and theatrical plays.' },
                  { title: 'STEM & Robotics Lab Walkthrough', duration: '3:20', desc: 'Hands-on demonstrations in 3D printing and automated IoT prototyping.' },
                  { title: 'Campus Athletic Ground Tour', duration: '2:50', desc: 'Explore our cricket nets, badminton arena, and football academy.' }
                ].map((vid) => (
                  <div key={vid.title} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs group">
                    <div className="h-48 bg-[#102A43] relative flex items-center justify-center overflow-hidden">
                      <FallbackImage
                        src="/src/assets/images/hero_school_campus_1790234182884.jpg"
                        alt={vid.title}
                        className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute w-12 h-12 rounded-full bg-[#D4A72C] text-[#102A43] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-0.5 fill-current" />
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-[10px] font-mono rounded">
                        {vid.duration}
                      </span>
                    </div>
                    <div className="p-4 space-y-1">
                      <h4 className="font-serif font-bold text-sm text-[#102A43]">{vid.title}</h4>
                      <p className="text-xs text-slate-600">{vid.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Photo Grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightboxAt(idx)}
                  className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer group shadow-2xs hover:shadow-md border border-slate-200"
                >
                  <FallbackImage
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-white text-xs font-medium line-clamp-2 leading-snug">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredPhotos}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
};
