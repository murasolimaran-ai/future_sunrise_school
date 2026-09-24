import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { CAMPUS_FACILITIES, SCHOOL_INFO } from '../../data/schoolData';
import { FallbackImage } from '../../components/ui/FallbackImage';
import { useModal } from '../../context/ModalContext';
import { ArrowRight, CheckCircle2, Shield, Phone, Sparkles } from 'lucide-react';

export const CampusOverviewPage: React.FC = () => {
  const { openAdmissionModal } = useModal();

  return (
    <div>
      <PageHero
        eyebrow="WORLD-CLASS INFRASTRUCTURE"
        title="Campus & Learning Environments"
        subtitle="A collegiate 12-acre architectural sanctuary engineered for academic discovery, safety, and athletic excellence."
        breadcrumbs={[{ label: 'Campus' }]}
        bgImage="/images/hero_school_campus_1790234182884.jpg"
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif fluid-h2 font-bold text-[#102A43]">
              Spaces Designed to Inspire Excellence
            </h2>
            <p className="fluid-body text-[#263238] leading-relaxed">
              Every facility across our Kovur, Rathinamangalam, and RedHills campuses conforms to strict international child-safety codes, natural ventilation standards, and modern ergonomic norms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CAMPUS_FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:border-[#102A43] transition-all flex flex-col group"
              >
                <div className="h-52 overflow-hidden relative">
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

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-[#D4A72C] font-bold uppercase tracking-wider mb-1">
                      {fac.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {fac.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {fac.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A72C] shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/campus/${fac.slug}`}
                    className="text-xs font-bold text-[#102A43] hover:text-[#D4A72C] flex items-center gap-1 pt-3 border-t border-slate-100"
                  >
                    <span>Full Specifications & Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#102A43] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Visit Our Campus In Person</h3>
              <p className="text-xs sm:text-sm text-white/80">Guided campus walkthroughs are hosted every Tuesday, Thursday, and Saturday morning.</p>
            </div>
            <button
              onClick={openAdmissionModal}
              className="px-6 py-3 bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap"
            >
              Book Campus Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const FacilityDetailPage: React.FC<{ facilitySlugOverride?: string }> = ({ facilitySlugOverride }) => {
  const params = useParams<{ facilitySlug?: string }>();
  const slug = facilitySlugOverride || params.facilitySlug || 'smart-classrooms';
  const facility = CAMPUS_FACILITIES.find((f) => f.slug === slug) || CAMPUS_FACILITIES[0];
  const { openAdmissionModal } = useModal();

  return (
    <div>
      <PageHero
        eyebrow="CAMPUS FACILITY"
        title={facility.title}
        subtitle={facility.tagline}
        breadcrumbs={[
          { label: 'Campus', href: '/campus' },
          { label: facility.title }
        ]}
        bgImage={facility.image}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#102A43] mb-3">
                  Overview & Design Philosophy
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {facility.overview}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#102A43] mb-3">
                  Technical Specifications & Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {facility.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3.5 bg-[#F8F6F0] rounded-lg border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-800 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#102A43] mb-3">
                  Safety, Supervision & Compliance
                </h3>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-900 leading-relaxed flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Strict Hygiene & Protection Protocol</span>
                    <span>
                      Monitored under round-the-clock CCTV surveillance with certified lab assistants, ergonomic anti-fatigue flooring, and continuous air quality monitoring conforming to CBSE guidelines.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with Image & CTA */}
            <div className="md:col-span-4 space-y-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3]">
                <FallbackImage
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 rounded-xl bg-[#F8F6F0] border border-slate-200 space-y-3 text-xs">
                <span className="font-serif font-bold text-sm text-[#102A43] block">Interested in Enrolling?</span>
                <p className="text-slate-600 leading-relaxed">
                  Experience our classrooms and labs firsthand during an in-person admissions walkthrough.
                </p>
                <button
                  onClick={openAdmissionModal}
                  className="w-full py-2.5 bg-[#102A43] hover:bg-[#1D3A5F] text-white font-semibold rounded-lg transition-colors"
                >
                  Schedule Visit
                </button>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-[#102A43] uppercase tracking-wider block">Other Facilities</span>
                <ul className="space-y-1.5 text-slate-600">
                  {CAMPUS_FACILITIES.filter((f) => f.slug !== facility.slug).slice(0, 5).map((f) => (
                    <li key={f.id}>
                      <Link to={`/campus/${f.slug}`} className="hover:text-[#D4A72C] transition-colors">
                        • {f.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
