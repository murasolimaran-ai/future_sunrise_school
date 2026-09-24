import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { SCHOOL_INFO } from '../../data/schoolData';
import { FallbackImage } from '../../components/ui/FallbackImage';
import { useModal } from '../../context/ModalContext';
import { CheckCircle2, Award, BookOpen, Compass, Shield, Users, HeartHandshake } from 'lucide-react';

export const AboutSchoolPage: React.FC = () => {
  const { openAdmissionModal } = useModal();

  return (
    <div>
      <PageHero
        eyebrow="ABOUT OUR INSTITUTION"
        title="Twenty-Five Years of Scholarly Heritage"
        subtitle="A revered sanctuary of academic excellence, personal integrity, and visionary purpose."
        breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'About School' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#D4A72C]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#102A43]">
                  OUR CORE PHILOSOPHY
                </span>
              </div>
              <h2 className="font-serif fluid-h2 font-bold text-[#102A43]">
                Cultivating Intellect, Character, and Compassion
              </h2>
              <p className="fluid-body text-[#263238] leading-relaxed">
                Founded in 1999, Future Sunrise International School was established to offer students a rigorous academic foundation integrated with timeless ethical values. What began as a modest academy with 60 students has flourished into a premier institution across three sprawling campuses.
              </p>
              <p className="text-sm sm:text-base text-[#263238]/85 leading-relaxed">
                Our curriculum fosters disciplined intellectual habits, empirical scientific curiosity, and expressive verbal mastery. We believe that true learning transcends exam scores, producing graduates who lead with empathy, courage, and intellectual rigor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: 'CBSE Affiliated Rigor', desc: 'Syllabus enhanced with national Olympiad frameworks' },
                  { title: 'Moral Foundation', desc: 'Universal ethical character mentorship woven into classes' },
                  { title: 'State-of-the-Art Labs', desc: 'Research-grade physics, chemistry, bio and AI suites' },
                  { title: 'Athletic Distinction', desc: 'Championship training in athletics, football, and cricket' }
                ].map((item) => (
                  <div key={item.title} className="p-3.5 bg-white rounded-lg border border-[#102A43]/10">
                    <h4 className="font-bold text-xs sm:text-sm text-[#102A43] mb-0.5">{item.title}</h4>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={openAdmissionModal}
                  className="px-6 py-3 rounded-lg bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-sm transition-colors shadow-sm"
                >
                  Apply for Admission
                </button>
                <Link
                  to="/about/vision-mission"
                  className="text-xs sm:text-sm font-semibold text-[#102A43] hover:text-[#D4A72C] transition-colors"
                >
                  Read Our Vision & Mission →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <FallbackImage
                  src="/src/assets/images/hero_school_campus_1790234182884.jpg"
                  alt="Future Sunrise International School Heritage Grounds"
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="p-5 bg-white space-y-2">
                  <p className="font-serif font-bold text-base text-[#102A43]">Kovur Main Campus Grounds</p>
                  <p className="text-xs text-slate-600">
                    12 acres of serene green quadrangles, colonnaded heritage architecture, and collegiate athletic grounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const VisionMissionPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="GUIDING PRINCIPLES"
        title="Vision, Mission & Core Values"
        subtitle="The foundational pillars that guide our institutional stewardship and student development."
        breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'Vision & Mission' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-[#F8F6F0] border border-[#102A43]/15 space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#102A43] text-[#D4A72C] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#102A43]">Our Vision</h2>
              <p className="text-sm sm:text-base text-[#263238] leading-relaxed">
                To be a benchmark institution of global education that kindles intellectual curiosity, fosters cultural roots, and empowers young women and men to contribute meaningfully to society as ethical innovators and enlightened leaders.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F6F0] border border-[#102A43]/15 space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#102A43] text-[#D4A72C] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#102A43]">Our Mission</h2>
              <p className="text-sm sm:text-base text-[#263238] leading-relaxed">
                To provide a stimulating learning environment where high academic expectations are harmonized with creative expression, moral discipline, and physical vigor. We nurture each child’s unique potential through individualized mentorship and modern facilities.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#102A43]">Our Core Institutional Values</h3>
              <p className="text-xs sm:text-sm text-slate-600">The enduring tenets that inspire daily interactions across our community.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {[
                { title: 'Satya (Integrity)', desc: 'Honesty in academic work, personal conduct, and moral transparency.' },
                { title: 'Vidya (Scholarly Rigor)', desc: 'Uncompromising pursuit of empirical knowledge and conceptual depth.' },
                { title: 'Karuna (Empathy)', desc: 'Active kindness, inclusion, and service toward all members of society.' },
                { title: 'Dhairya (Courage)', desc: 'Resilience when confronting challenges and intellectual curiosity.' },
                { title: 'Samyak (Balance)', desc: 'Equilibrium among intellectual pursuits, sports, arts, and stillness.' },
                { title: 'Seva (Community Service)', desc: 'Stewardship of the environment and dedication to social welfare.' }
              ].map((val) => (
                <div key={val.title} className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#102A43] transition-colors">
                  <h4 className="font-serif font-bold text-base text-[#102A43] mb-1">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const HistoryPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="OUR MILESTONES"
        title="School History & Heritage"
        subtitle="A quarter-century chronology of educational excellence, expansion, and national achievements."
        breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'School History' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-4xl">
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-[2px] before:bg-[#102A43]/20">
            {[
              { year: '1999', title: 'The Founding Inception', desc: 'Established with 60 students and 7 visionary teachers in Kovur under the patronage of the Educational Trust.' },
              { year: '2005', title: 'CBSE Affiliation Granted', desc: 'Received formal affiliation from the Central Board of Secondary Education and inaugurated the senior science laboratory.' },
              { year: '2012', title: 'Grand Auditorium & Sports Complex', desc: 'Unveiled our 1,200-seat proscenium auditorium and synthetic athletic tracks.' },
              { year: '2018', title: 'Multi-Campus Expansion', desc: 'Inaugurated the Rathinamangalam and Angadu (RedHills) branches to serve growing residential corridors.' },
              { year: '2022', title: 'National Green Campus Citation', desc: 'Ranked among India’s Top 10 Eco-Schools for 100% solar operations and rainwater recharging.' },
              { year: '2026', title: 'Silver Jubilee Milestone', desc: 'Celebrating 25 illustrious years with over 1,500 active scholars, 100+ faculty, and alumni across leading global universities.' }
            ].map((milestone, idx) => (
              <div key={milestone.year} className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6">
                  <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-[#D4A72C] transition-colors">
                    <span className="font-mono text-sm font-bold text-[#D4A72C] block mb-1">{milestone.year}</span>
                    <h3 className="font-serif text-lg font-bold text-[#102A43] mb-2">{milestone.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>

                <div className="absolute left-2.5 sm:left-1/2 -translate-x-1/2 top-4 w-5 h-5 rounded-full bg-[#102A43] border-4 border-[#D4A72C]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const PrincipalMessagePage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="ACADEMIC LEADERSHIP"
        title="Message from the Principal"
        subtitle="Reflections on pedagogical stewardship, student potential, and educational values."
        breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: "Principal's Message" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4 space-y-4">
              <div className="rounded-xl overflow-hidden border-2 border-slate-200 shadow-md aspect-[3/4] bg-[#F8F6F0]">
                <FallbackImage
                  src="/src/assets/images/hero_classroom_learning_1790234194929.jpg"
                  alt="Principal Dr. Anandhi Ramachandran"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 bg-[#F8F6F0] rounded-lg border border-slate-200">
                <h3 className="font-serif font-bold text-base text-[#102A43]">{SCHOOL_INFO.principal.name}</h3>
                <p className="text-xs text-[#D4A72C] font-medium">{SCHOOL_INFO.principal.designation}</p>
                <p className="text-[11px] text-slate-500 mt-2">Ph.D. Educational Psychology (Madras Univ), M.Ed., M.Sc.</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5 text-sm sm:text-base text-[#263238] leading-relaxed">
              <div className="border-l-4 border-[#D4A72C] pl-5 py-1">
                <p className="font-serif italic text-lg sm:text-xl text-[#102A43]">
                  "{SCHOOL_INFO.principal.message}"
                </p>
              </div>

              <div className="whitespace-pre-line space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
                {SCHOOL_INFO.principal.fullLetter}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="font-serif font-bold text-[#102A43]">{SCHOOL_INFO.principal.name}</p>
                <p className="text-xs text-slate-500">Principal & Academic Director · {SCHOOL_INFO.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CorrespondentMessagePage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="MANAGEMENT VISION"
        title="Message from the Correspondent"
        subtitle="Strategic institutional direction and dedication to accessible, world-class education."
        breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: "Correspondent's Message" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-3xl space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F6F0] border border-[#102A43]/15 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">{SCHOOL_INFO.correspondent.name}</h2>
            <p className="text-xs uppercase tracking-widest text-[#D4A72C] font-semibold">{SCHOOL_INFO.correspondent.designation}</p>
            <blockquote className="font-serif italic text-base sm:text-lg text-[#102A43] border-l-3 border-[#D4A72C] pl-4 py-1">
              "{SCHOOL_INFO.correspondent.message}"
            </blockquote>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              When we laid the foundation of Future Sunrise International School in 1999, our aspiration was clear: to build an educational institution that parents could trust unconditionally for academic rigor and moral clarity.
            </p>
            <p>
              Today, as we look at our alumni pursuing medicine, aerospace engineering, civil services, and corporate leadership across the world, we feel humbled. Our investments in solar-powered green campuses, high-precision STEM laboratories, and teacher pedagogical development remain uncompromising.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ManagementPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="GOVERNANCE & TRUSTEES"
        title="Board of Management"
        subtitle="Distinguished educationists, philanthropists, and administrators steering our institution."
        breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'Management' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Sri R. Sundaramurthy, B.E., M.B.A.', role: 'Managing Trustee & Correspondent', desc: 'Industrialist and philanthropist with 30 years steering educational trusts.' },
              { name: 'Dr. Anandhi Ramachandran, Ph.D.', role: 'Academic Director & Principal', desc: 'Eminent educationist and former state advisor on curriculum modernization.' },
              { name: 'Dr. K. S. Narayanan, M.D.', role: 'Trustee - Health & Child Welfare', desc: 'Senior pediatrician guiding campus health protocols and student wellness.' },
              { name: 'Mrs. Jayalakshmi Sundaramurthy', role: 'Trustee - Cultural & Community Affairs', desc: 'Patron of classical arts supervising cultural programs and scholarships.' },
              { name: 'Prof. M. Venkatesan, Ph.D.', role: 'Trustee - STEM & Research', desc: 'Former Dean of Sciences advising on advanced laboratory and computer infrastructure.' },
              { name: 'Mr. C. Raghavan, F.C.A.', role: 'Trustee - Finance & Audit', desc: 'Chartered Accountant ensuring fiscal transparency and regulatory adherence.' }
            ].map((member) => (
              <div key={member.name} className="p-6 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-[#102A43] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#102A43] text-[#D4A72C] flex items-center justify-center font-serif font-bold text-sm mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-serif font-bold text-base text-[#102A43] mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-[#D4A72C] mb-2">{member.role}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const LeadershipPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="ACADEMIC STEWARDS"
        title="School Leadership Team"
        subtitle="Experienced coordinators and department deans shaping daily classroom excellence."
        breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'School Leadership' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Anandhi Ramachandran', role: 'Principal & Head of School', dept: 'Institutional Direction' },
              { name: 'Mr. S. Krishnamurthy', role: 'Vice Principal', dept: 'Senior Secondary & Examination Dean' },
              { name: 'Mrs. V. Revathi', role: 'Headmistress', dept: 'Primary & Middle School' },
              { name: 'Mrs. Deepa Sridhar', role: 'Registrar', dept: 'Admissions & Campus Operations' },
              { name: 'Capt. R. Murali (Retd.)', role: 'Director of Athletics', dept: 'Sports Complex & Physical Education' },
              { name: 'Mr. N. Arun Prasad', role: 'Chief Technology Coordinator', dept: 'Digital Learning & STEM Labs' }
            ].map((leader) => (
              <div key={leader.name} className="p-5 rounded-xl bg-[#F8F6F0] border border-slate-200">
                <h3 className="font-serif font-bold text-base text-[#102A43]">{leader.name}</h3>
                <p className="text-xs font-semibold text-[#D4A72C] mt-0.5">{leader.role}</p>
                <p className="text-xs text-slate-500 mt-1">{leader.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
