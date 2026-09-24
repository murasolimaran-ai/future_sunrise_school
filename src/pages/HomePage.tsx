import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/home/HeroSlider';
import { AnnouncementTicker } from '../components/home/AnnouncementTicker';
import {
  SCHOOL_INFO,
  contactData,
  QUICK_STATS,
  WHY_CHOOSE_ITEMS,
  ACADEMIC_STAGES,
  CAMPUS_FACILITIES,
  ACHIEVEMENTS_DATA,
  SCHOOL_EVENTS,
  NEWS_ARTICLES,
  GALLERY_ALBUMS
} from '../data/schoolData';
import { useModal } from '../context/ModalContext';
import { FallbackImage } from '../components/ui/FallbackImage';
import { Lightbox } from '../components/ui/Lightbox';
import {
  Award,
  Building,
  GraduationCap,
  Compass,
  ShieldCheck,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Phone,
  MessageSquare,
  Navigation,
  Trophy,
  Drama,
  Bot,
  Palette,
  Music,
  BookOpen
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-[#D4A72C]" />,
  Building: <Building className="w-6 h-6 text-[#D4A72C]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#D4A72C]" />,
  Compass: <Compass className="w-6 h-6 text-[#D4A72C]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#D4A72C]" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-[#D4A72C]" />
};

export const HomePage: React.FC = () => {
  const { openAdmissionModal } = useModal();

  // Gallery Preview Filter
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'campus' | 'events' | 'sports' | 'activities' | 'academics'>('all');
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Flatten gallery items for lightbox
  const galleryItems = GALLERY_ALBUMS.flatMap((album) =>
    album.photos.map((p) => ({
      ...p,
      albumCategory: album.category
    }))
  );

  const filteredGallery = galleryFilter === 'all'
    ? galleryItems.slice(0, 6)
    : galleryItems.filter((item) => item.albumCategory === galleryFilter).slice(0, 6);

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Horizontal Announcement Marquee Ticker */}
      <AnnouncementTicker />

      {/* 3. Quick Statistics Bar */}
      <section className="bg-[#102A43] text-white py-10 sm:py-14 border-y-2 border-[#D4A72C]/30 relative z-10">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {QUICK_STATS.map((stat, idx) => (
              <div key={stat.id} className={`flex flex-col items-center px-3 ${idx > 1 ? 'pt-6 sm:pt-0' : ''}`}>
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4A72C] tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm sm:text-base font-semibold text-white mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] sm:text-xs text-white/70 max-w-[200px] mt-1 line-clamp-2">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Welcome / About Section */}
      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#102A43]/10 bg-white aspect-[4/3] sm:aspect-[16/11]">
                <FallbackImage
                  src="/src/assets/images/hero_school_campus_1790234182884.jpg"
                  alt="Future Sunrise International School Heritage Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-lg border border-[#102A43]/10 text-xs text-[#102A43]">
                  <span className="font-bold font-serif text-sm block text-[#102A43]">Established 1999</span>
                  <span className="text-slate-600">A sprawling 12-acre serene academic ecosystem in Chennai</span>
                </div>
              </div>
              <div className="hidden sm:block absolute -bottom-5 -right-5 w-32 h-32 bg-[#D4A72C]/15 rounded-2xl -z-10" />
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#D4A72C]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                  WELCOME TO OUR SCHOOL
                </span>
              </div>

              <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight leading-tight text-balance">
                Building Knowledge. Shaping Character.
              </h2>

              <p className="fluid-body text-[#263238] leading-relaxed">
                For over twenty-five years, Future Sunrise International School has remained steadfast in its founding creed: cultivating curious minds, unwavering moral conviction, and compassionate global citizenship.
              </p>

              {/* 4 Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  { title: 'Experienced Faculty', desc: 'Over 100 dedicated mentors with master-level qualifications.' },
                  { title: 'Modern Learning Environment', desc: 'Interactive smart displays and advanced STEM research labs.' },
                  { title: 'Holistic Education', desc: 'Balanced integration of competitive sports, fine arts & coding.' },
                  { title: 'Safe & Supportive Campus', desc: '24/7 guarded security, CCTV, and pediatric health infirmary.' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#102A43]/10 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A72C] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#102A43]">{item.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#102A43] hover:bg-[#1D3A5F] text-white font-medium text-sm transition-colors shadow-sm"
                >
                  <span>Discover Our School</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose Our School */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#102A43]/10">
        <div className="site-container">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                DISTINCTIVE ADVANTAGES
              </span>
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
            </div>
            <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight">
              Why Choose Our School
            </h2>
            <p className="fluid-body text-[#263238]/80 text-balance">
              Every facet of our educational philosophy is engineered to inspire academic distinction and moral resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group p-6 sm:p-7 rounded-xl bg-[#F8F6F0] border border-[#102A43]/10 hover:border-[#D4A72C] transition-all duration-200 hover:-translate-y-1 shadow-2xs hover:shadow-md flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-[#102A43] flex items-center justify-center mb-5 group-hover:bg-[#1D3A5F] transition-colors shadow-2xs">
                  {iconMap[item.iconName] || <Award className="w-6 h-6 text-[#D4A72C]" />}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#102A43] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#263238]/80 leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Academic Highlights */}
      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#D4A72C]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                  LEARNING PATHWAYS
                </span>
              </div>
              <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight">
                Academic Programs
              </h2>
            </div>
            <Link
              to="/academics"
              className="text-xs sm:text-sm font-semibold text-[#102A43] hover:text-[#D4A72C] flex items-center gap-1 transition-colors"
            >
              <span>Explore All Curriculum Pathways</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {ACADEMIC_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="bg-white rounded-xl overflow-hidden border border-[#102A43]/10 hover:border-[#102A43] transition-all duration-200 hover:-translate-y-1 shadow-2xs hover:shadow-md flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative">
                  <FallbackImage
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#102A43]/80 backdrop-blur-xs text-white text-[10px] font-semibold rounded">
                    {stage.grades}
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#D4A72C] font-semibold uppercase tracking-wider block mb-1">
                      {stage.ageGroup}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#102A43] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {stage.shortDesc}
                    </p>
                  </div>

                  <Link
                    to={`/academics/${stage.slug}`}
                    className="text-xs font-semibold text-[#102A43] group-hover:text-[#D4A72C] flex items-center gap-1 transition-colors pt-2 border-t border-slate-100"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Principal Message Section */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#102A43]/10">
        <div className="site-container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Principal Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#102A43]/10 aspect-[3/4] bg-[#F8F6F0]">
                <FallbackImage
                  src="/src/assets/images/hero_classroom_learning_1790234194929.jpg"
                  alt="Principal Dr. Anandhi Ramachandran"
                  fallbackText="Dr. Anandhi Ramachandran, Principal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif font-bold text-base sm:text-lg">{SCHOOL_INFO.principal.name}</p>
                  <p className="text-[11px] text-[#D4A72C]">{SCHOOL_INFO.principal.designation}</p>
                </div>
              </div>
            </div>

            {/* Principal Message Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#D4A72C]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                  ACADEMIC LEADERSHIP
                </span>
              </div>

              <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight">
                Message from the Principal
              </h2>

              <blockquote className="font-serif italic text-base sm:text-lg text-[#102A43] border-l-3 border-[#D4A72C] pl-4 sm:pl-5 py-1 leading-relaxed">
                "{SCHOOL_INFO.principal.message}"
              </blockquote>

              <p className="text-xs sm:text-sm text-[#263238] leading-relaxed">
                At Future Sunrise International School, our teachers are not merely instructors; they are custodians of curiosity. We welcome every family to share in our legacy of ethical scholarship and personal flourishing.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about/principal-message"
                  className="px-5 py-2.5 rounded-lg bg-[#102A43] hover:bg-[#1D3A5F] text-white font-medium text-xs sm:text-sm transition-colors shadow-2xs"
                >
                  Read Full Message
                </Link>
                <button
                  onClick={openAdmissionModal}
                  className="text-xs sm:text-sm font-semibold text-[#102A43] hover:text-[#D4A72C] transition-colors"
                >
                  Schedule Campus Walkthrough →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Campus & Infrastructure Grid */}
      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                OUR INFRASTRUCTURE
              </span>
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
            </div>
            <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight">
              Campus Facilities
            </h2>
            <p className="fluid-body text-[#263238]/80 text-balance">
              Purpose-built architectural spaces engineered for collaboration, scientific discovery, and physical wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPUS_FACILITIES.slice(0, 6).map((fac) => (
              <Link
                key={fac.id}
                to={`/campus/${fac.slug}`}
                className="group rounded-xl overflow-hidden bg-white border border-[#102A43]/10 hover:border-[#102A43] transition-all duration-200 hover:-translate-y-1 shadow-2xs hover:shadow-md flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <FallbackImage
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-serif font-bold text-base sm:text-lg">
                    {fac.title}
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {fac.shortDesc}
                  </p>
                  <span className="text-xs font-semibold text-[#102A43] group-hover:text-[#D4A72C] flex items-center gap-1 transition-colors">
                    <span>View Facility Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/campus"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#102A43] text-[#102A43] hover:bg-[#102A43] hover:text-white font-medium text-xs sm:text-sm transition-colors"
            >
              <span>Explore Full Campus Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Student Life Overview */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#102A43]/10">
        <div className="site-container">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                CO-CURRICULAR LIFE
              </span>
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
            </div>
            <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight">
              Life at Future Sunrise
            </h2>
            <p className="fluid-body text-[#263238]/80 text-balance">
              Beyond examinations, our campus pulses with music, inter-house debates, sports championships, and maker clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                title: 'Sports & Athletics',
                desc: 'Cricket nets, FIFA football turf, athletic tracks & badminton arenas',
                path: '/student-life/sports',
                image: '/src/assets/images/sports_athletics_1790236923140.jpg',
                icon: Trophy,
                tag: 'Athletics'
              },
              {
                title: 'Dance & Performing Arts',
                desc: 'Bharatanatyam, contemporary theatre and festive stage productions',
                path: '/student-life/dance',
                image: '/src/assets/images/dance_performing_arts_1790236938143.jpg',
                icon: Drama,
                tag: 'Cultural'
              },
              {
                title: 'Da Vinci Robotics',
                desc: 'Mechatronics, microcontroller coding, sensors & rapid prototyping',
                path: '/student-life/clubs/robotics',
                image: '/src/assets/images/robotics_innovation_1790236952194.jpg',
                icon: Bot,
                tag: 'STEM'
              },
              {
                title: 'Arts & Visual Studios',
                desc: 'Canvas painting, clay sculpturing, printmaking & gallery exhibitions',
                path: '/student-life/arts-music',
                image: '/src/assets/images/arts_painting_studio_1790236966444.jpg',
                icon: Palette,
                tag: 'Visual Arts'
              },
              {
                title: 'Music & Symphony',
                desc: 'Carnatic vocals, Western orchestral instruments and choral ensembles',
                path: '/student-life/arts-music',
                image: '/src/assets/images/music_orchestra_1790236991828.jpg',
                icon: Music,
                tag: 'Acoustic'
              },
              {
                title: 'Science & Research Lab',
                desc: 'Hands-on titration, optics, biological taxonomy and physics setups',
                path: '/campus/science-laboratory',
                image: '/src/assets/images/science_laboratory_1790234213070.jpg',
                icon: Sparkles,
                tag: 'Discovery'
              },
              {
                title: 'Central Reading Library',
                desc: 'Over 22,000 reference volumes, digital journals and research alcoves',
                path: '/campus/library',
                image: '/src/assets/images/school_library_1790236979658.jpg',
                icon: BookOpen,
                tag: 'Scholastic'
              },
              {
                title: 'Student Community & Tours',
                desc: 'Heritage immersions, science expeditions and peer leadership councils',
                path: '/student-life/educational-tours',
                image: '/src/assets/images/hero_student_community_1790235798493.jpg',
                icon: Compass,
                tag: 'Expeditions'
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="rounded-xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#102A43] transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-md group flex flex-col justify-between"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#102A43] shadow-xs">
                      {item.tag}
                    </span>
                    <div className="absolute bottom-2.5 left-2.5 w-7 h-7 rounded-md bg-[#102A43]/80 backdrop-blur-xs flex items-center justify-center text-[#D4A72C]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#102A43] group-hover:text-[#1D4ED8] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D4A72C] group-hover:text-[#102A43] transition-colors">
                      <span>Explore Program</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Achievements Preview */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-white">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#D4A72C]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A72C]">
                  HONORS & RECOGNITIONS
                </span>
              </div>
              <h2 className="font-serif fluid-h2 font-bold text-white tracking-tight">
                Celebrating Our Achievers
              </h2>
            </div>
            <Link
              to="/achievements"
              className="text-xs sm:text-sm font-semibold text-[#D4A72C] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View All Honors & Archives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS_DATA.slice(0, 3).map((ach) => (
              <div
                key={ach.id}
                className="bg-white/5 border border-white/10 hover:border-[#D4A72C] p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#D4A72C] mb-3">
                    <span className="font-mono font-bold tracking-wider">{ach.year}</span>
                    <span className="capitalize px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-white">
                      {ach.level} Level
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-medium text-white/90 mb-2">
                    Recipient: <span className="text-[#D4A72C]">{ach.recipient}</span>
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Events & News */}
      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#D4A72C]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                  CHRONICLE & CALENDAR
                </span>
              </div>
              <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight">
                Latest Events & News
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold">
              <Link to="/events" className="text-[#102A43] hover:text-[#D4A72C] transition-colors">
                All Events →
              </Link>
              <Link to="/news" className="text-[#102A43] hover:text-[#D4A72C] transition-colors">
                News Desk →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 2 Events + 1 News item */}
            {SCHOOL_EVENTS.slice(0, 2).map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-xl overflow-hidden border border-[#102A43]/10 hover:border-[#102A43] transition-all hover:-translate-y-1 shadow-2xs hover:shadow-md flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative">
                  <FallbackImage
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-[#102A43]/90 text-[#D4A72C] text-[11px] font-bold rounded">
                    {evt.date}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      Event · {evt.category}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#102A43] group-hover:text-[#1D4ED8] transition-colors mb-2 leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {evt.shortDesc}
                    </p>
                  </div>
                  <Link
                    to={`/events/${evt.slug}`}
                    className="text-xs font-semibold text-[#102A43] group-hover:text-[#D4A72C] flex items-center gap-1 transition-colors pt-3 border-t border-slate-100"
                  >
                    <span>Event Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Latest News item */}
            {NEWS_ARTICLES.slice(0, 1).map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-xl overflow-hidden border border-[#102A43]/10 hover:border-[#102A43] transition-all hover:-translate-y-1 shadow-2xs hover:shadow-md flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative">
                  <FallbackImage
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-[#102A43]/90 text-white text-[11px] font-bold rounded">
                    {news.publishDate}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      Press Release · {news.category}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#102A43] group-hover:text-[#1D4ED8] transition-colors mb-2 leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {news.summary}
                    </p>
                  </div>
                  <Link
                    to={`/news/${news.slug}`}
                    className="text-xs font-semibold text-[#102A43] group-hover:text-[#D4A72C] flex items-center gap-1 transition-colors pt-3 border-t border-slate-100"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Gallery Preview Section with Lightbox */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#102A43]/10">
        <div className="site-container">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                VISUAL CHRONICLE
              </span>
              <span className="w-6 h-[2px] bg-[#D4A72C]" />
            </div>
            <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight">
              Campus & Student Gallery
            </h2>
            <p className="fluid-body text-[#263238]/80 text-balance">
              Memories etched in our classrooms, sports grounds, and annual convocations.
            </p>
          </div>

          {/* Interactive Filter Tabs (buttons with working state per Constitution) */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'campus', label: 'Campus' },
              { id: 'events', label: 'Events' },
              { id: 'sports', label: 'Sports' },
              { id: 'academics', label: 'Academics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setGalleryFilter(tab.id as any)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  galleryFilter === tab.id
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'bg-[#F8F6F0] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => openLightboxAt(idx)}
                className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer group shadow-2xs hover:shadow-md"
              >
                <FallbackImage
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                  <p className="text-white text-xs font-medium line-clamp-2 leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#102A43] text-[#102A43] hover:bg-[#102A43] hover:text-white font-medium text-xs sm:text-sm transition-colors"
            >
              <span>View Full Media Archives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Admission CTA Section */}
      <section className="relative py-20 sm:py-28 bg-[#102A43] text-white overflow-hidden">
        <div className="absolute inset-0">
          <FallbackImage
            src="/src/assets/images/hero_school_campus_1790234182884.jpg"
            alt="Admission Open"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102A43]/95 to-[#102A43]/90" />
        </div>

        <div className="site-container relative z-10 text-center max-w-2xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A72C] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ADMISSIONS OPEN FOR 2026–27</span>
          </div>

          <h2 className="font-serif fluid-h2 font-bold text-white tracking-tight">
            Start Your Child's Journey With Us
          </h2>

          <p className="fluid-body text-white/85 leading-relaxed text-balance">
            Discover a place where curiosity, confidence and character grow. Limited seats available across our Kovur, Rathinamangalam, and RedHills campuses.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openAdmissionModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/admissions"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center"
            >
              Admission Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Contact Section & Map Placeholder */}
      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-[2px] bg-[#D4A72C]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                    CAMPUS ASSISTANCE
                  </span>
                </div>
                <h2 className="font-serif fluid-h2 font-bold text-[#102A43] tracking-tight">
                  Get In Touch
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Our admissions and administrative offices welcome your inquiries. Reach out to schedule an in-person orientation.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#263238]">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="font-bold text-[#102A43] text-sm mb-1">{SCHOOL_INFO.branches[0].name}</p>
                  <p className="text-slate-600 leading-relaxed">{SCHOOL_INFO.branches[0].address}</p>
                  <p className="text-[#102A43] font-semibold mt-1">Tel: {SCHOOL_INFO.branches[0].phone}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4A72C] shrink-0" />
                  <span>General Office: {SCHOOL_INFO.generalContact.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D4A72C] shrink-0" />
                  <span>Office Hours: {SCHOOL_INFO.generalContact.hours}</span>
                </div>
              </div>

              {/* Action Buttons: Call, WhatsApp, Directions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={`tel:${SCHOOL_INFO.generalContact.phone}`}
                  className="min-h-[44px] px-3 py-2.5 bg-[#102A43] hover:bg-[#1D3A5F] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4A72C]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={contactData.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="min-h-[44px] px-3 py-2.5 bg-white border border-slate-300 hover:border-[#102A43] text-[#102A43] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4A72C]" />
                  <span>Directions</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Campus Map Interactive Representation */}
            <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-[#102A43]/15 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-serif font-bold text-sm text-[#102A43]">Campus Locations Map</span>
                <span className="text-xs text-slate-500">3 Integrated Campuses in Chennai</span>
              </div>

              {/* Styled Map Canvas Visual */}
              <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[340px] bg-slate-100 border border-slate-200 flex items-center justify-center">
                <FallbackImage
                  src="/src/assets/images/hero_school_campus_1790234182884.jpg"
                  alt="Campus Map Location"
                  className="w-full h-full object-cover opacity-60 filter grayscale-30"
                />
                <div className="absolute inset-0 bg-[#102A43]/20" />

                {/* Simulated Campus Location Pins */}
                <div className="absolute top-1/4 left-1/3 bg-white px-3 py-1.5 rounded-full shadow-lg border border-[#102A43] flex items-center gap-1.5 animate-bounce duration-1000">
                  <MapPin className="w-4 h-4 text-rose-600 fill-rose-600" />
                  <span className="text-xs font-bold text-[#102A43]">Kovur Main Campus</span>
                </div>

                <div className="absolute bottom-1/3 right-1/4 bg-white px-3 py-1.5 rounded-full shadow-lg border border-[#102A43] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-600 fill-rose-600" />
                  <span className="text-xs font-bold text-[#102A43]">Rathinamangalam</span>
                </div>

                <div className="absolute top-1/3 right-1/3 bg-white px-3 py-1.5 rounded-full shadow-lg border border-[#102A43] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-600 fill-rose-600" />
                  <span className="text-xs font-bold text-[#102A43]">RedHills Campus</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                {SCHOOL_INFO.branches.map((b) => (
                  <div key={b.id} className="p-2.5 bg-[#F8F6F0] rounded-lg border border-slate-200">
                    <p className="font-bold text-[#102A43]">{b.name}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{b.grades}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredGallery}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </div>
  );
};
