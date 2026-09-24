import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { useModal } from '../../context/ModalContext';
import {
  GraduationCap,
  Award,
  Calendar,
  Download,
  FileText,
  HelpCircle,
  ShieldAlert,
  Search,
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const FacultyPage: React.FC = () => {
  const [deptFilter, setDeptFilter] = useState('all');

  const facultyMembers = [
    { name: 'Dr. Anandhi Ramachandran', role: 'Principal & Academic Director', dept: 'Administration', qual: 'Ph.D., M.Ed., M.Sc.', exp: '24 Years' },
    { name: 'Mr. S. Krishnamurthy', role: 'Vice Principal & Senior Physics Dean', dept: 'Sciences', qual: 'M.Sc. Physics, B.Ed.', exp: '19 Years' },
    { name: 'Mrs. V. Revathi', role: 'Headmistress (Primary)', dept: 'Primary', qual: 'M.A. English, B.Ed.', exp: '16 Years' },
    { name: 'Dr. K. Balasubramanian', role: 'Dean of Chemistry', dept: 'Sciences', qual: 'Ph.D. Organic Chem, M.Sc.', exp: '14 Years' },
    { name: 'Mrs. S. Meenakshi', role: 'Senior Mathematics Specialist', dept: 'Mathematics', qual: 'M.Sc. Applied Maths, M.Ed.', exp: '18 Years' },
    { name: 'Mr. N. Arun Prasad', role: 'Head of Computer Science & AI', dept: 'Technology', qual: 'M.Tech CSE, B.E.', exp: '12 Years' },
    { name: 'Mrs. Gayathri Raman', role: 'Senior Commerce & Accountancy Lead', dept: 'Commerce', qual: 'M.Com, M.Phil, B.Ed.', exp: '15 Years' },
    { name: 'Capt. R. Murali (Retd.)', role: 'Director of Physical Education', dept: 'Sports', qual: 'M.P.Ed., NIS Coach', exp: '21 Years' },
    { name: 'Mrs. Ananya Sen', role: 'Head of English & Literature', dept: 'Humanities', qual: 'M.A. English Lit, B.Ed.', exp: '11 Years' }
  ];

  const filteredFaculty = deptFilter === 'all'
    ? facultyMembers
    : facultyMembers.filter((f) => f.dept.toLowerCase() === deptFilter.toLowerCase());

  return (
    <div>
      <PageHero
        eyebrow="SCHOLARLY MENTORS"
        title="Faculty & Academic Directorate"
        subtitle="Over 100 dedicated educators with post-graduate qualifications and passion for student flourishing."
        breadcrumbs={[{ label: 'Faculty Directory' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container space-y-8">
          {/* Department filter */}
          <div className="flex flex-wrap gap-2 justify-center bg-white p-3 rounded-xl border border-slate-200 max-w-2xl mx-auto">
            {['all', 'Sciences', 'Mathematics', 'Technology', 'Commerce', 'Humanities', 'Sports', 'Primary'].map((d) => (
              <button
                key={d}
                onClick={() => setDeptFilter(d)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold capitalize transition-colors ${
                  deptFilter === d ? 'bg-[#102A43] text-white' : 'bg-[#F8F6F0] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {d === 'all' ? 'All Departments' : d}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((fac) => (
              <div key={fac.name} className="p-6 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-[#102A43] transition-all">
                <div className="w-12 h-12 rounded-full bg-[#102A43] text-[#D4A72C] flex items-center justify-center font-serif font-bold text-lg mb-4 shadow-2xs">
                  {fac.name.split(' ')[1]?.charAt(0) || 'B'}
                </div>
                <h3 className="font-serif font-bold text-base text-[#102A43]">{fac.name}</h3>
                <p className="text-xs font-semibold text-[#D4A72C] mb-2">{fac.role}</p>
                <div className="space-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <p>Qualifications: <span className="text-slate-700">{fac.qual}</span></p>
                  <p>Teaching Experience: <span className="text-slate-700">{fac.exp}</span></p>
                  <p>Department: <span className="text-slate-700">{fac.dept}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const AlumniPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="GLOBAL AMBASSADORS"
        title="Future Sunrise Alumni Network"
        subtitle="Graduates leading in medicine, software research, civil administration, and entrepreneurship across the globe."
        breadcrumbs={[{ label: 'Alumni' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Vikramaditya Rao (Batch 2008)', role: 'Senior Neurosurgeon', place: 'AIIMS New Delhi', desc: 'Graduated CBSE Class 12 with 98.2%. Mentors current biology scholars.' },
              { name: 'Pooja Narayanan (Batch 2014)', role: 'Staff AI Scientist', place: 'DeepMind London', desc: 'Represented India at the International Olympiad in Informatics in Grade 11.' },
              { name: 'G. Karthik IPS (Batch 2012)', role: 'Superintendent of Police', place: 'Indian Police Service', desc: 'School Head Boy 2011–12 and state champion in 400m athletics.' }
            ].map((alum) => (
              <div key={alum.name} className="p-6 bg-[#F8F6F0] rounded-xl border border-slate-200 space-y-2">
                <span className="font-serif font-bold text-base text-[#102A43] block">{alum.name}</span>
                <span className="text-xs font-semibold text-[#D4A72C] block">{alum.role} · {alum.place}</span>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">{alum.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const ResultsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="ACADEMIC OUTCOMES"
        title="CBSE Board Examination Results"
        subtitle="Consistent 100% pass record with distinction across Grades 10 & 12."
        breadcrumbs={[{ label: 'Board Results' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-4xl space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-4xl font-bold text-[#102A43] block">100%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase mt-1 block">Class 10 & 12 Pass Rate</span>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-4xl font-bold text-[#D4A72C] block">498/500</span>
              <span className="text-xs font-semibold text-slate-500 uppercase mt-1 block">School Highest Score (2025)</span>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <span className="font-serif text-4xl font-bold text-[#102A43] block">142</span>
              <span className="text-xs font-semibold text-slate-500 uppercase mt-1 block">Centum (100/100) Grades</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AcademicCalendarPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="ANNUAL SCHEDULE"
        title="Academic Calendar 2026–27"
        subtitle="Key term dates, assessments, cultural fests, and scheduled vacation breaks."
        breadcrumbs={[{ label: 'Academic Calendar' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-6">
          {[
            { month: 'June 2026', desc: 'School re-opens for Term I (June 3); Orientation for Pre-Primary & Grade 1.' },
            { month: 'August 2026', desc: 'Periodic Assessment I (Aug 10–18); Independence Day Celebrations (Aug 15).' },
            { month: 'October 2026', desc: 'Term I Summative Examinations (Oct 5–16); Dussehra Vacation (Oct 19–27).' },
            { month: 'November 2026', desc: 'Annual Tarang Cultural Conclave (Nov 14–15); National Science Exhibition.' },
            { month: 'January 2027', desc: 'Pongal Celebrations (Jan 13); Pre-Board Examinations for Grades 10 & 12.' },
            { month: 'February 2027', desc: 'Annual Athletic Meet (Feb 6); CBSE Practical Examinations.' },
            { month: 'March 2027', desc: 'Annual Term-End Examinations (Mar 12–25); Results Declaration (Mar 31).' }
          ].map((item) => (
            <div key={item.month} className="p-5 bg-[#F8F6F0] rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span className="font-serif font-bold text-base text-[#102A43] sm:w-44">{item.month}</span>
              <p className="text-xs sm:text-sm text-slate-700 flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const AnnouncementsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="OFFICIAL NOTICES"
        title="School Circulars & Announcements"
        subtitle="Timely bulletins for parents, students, and transport updates."
        breadcrumbs={[{ label: 'Announcements' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-4xl space-y-4">
          {[
            { date: 'September 20, 2026', title: 'Admissions Open for Academic Session 2026–27', category: 'Admissions' },
            { date: 'September 12, 2026', title: 'CBSE Regional Science Conclave 2026 Selection List', category: 'Academic' },
            { date: 'August 28, 2026', title: 'Inter-School Football Championship Finals Fixture', category: 'Sports' },
            { date: 'August 14, 2026', title: 'Independence Day Commemoration Schedule & Bus Timings', category: 'Event' }
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-4 shadow-2xs">
              <div>
                <span className="text-[11px] font-mono text-[#D4A72C] font-semibold">{item.date} · {item.category}</span>
                <h3 className="font-serif font-bold text-base text-[#102A43] mt-0.5">{item.title}</h3>
              </div>
              <button className="text-xs font-semibold text-[#102A43] hover:text-[#D4A72C] flex items-center gap-1 shrink-0">
                <span>View Circular</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const DownloadsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="PUBLIC DOCUMENTS"
        title="School Downloads & Resources"
        subtitle="Official school prospectus, syllabus outlines, leave forms, and transport routes."
        breadcrumbs={[{ label: 'Downloads' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-4">
          {[
            { name: 'Future Sunrise School Prospectus 2026–27', size: '4.8 MB PDF', desc: 'Detailed brochure with curriculum pathways and campus amenities.' },
            { name: 'Admission Application Docket & Medical Certificate', size: '1.2 MB PDF', desc: 'Official admission form for offline submission.' },
            { name: 'CBSE Syllabus Handbook (Grades 9–12)', size: '2.5 MB PDF', desc: 'Subject-wise learning outcomes and question paper pattern.' },
            { name: 'School Bus Route Map & Transport Guidelines', size: '3.1 MB PDF', desc: 'Pickup and drop timings across all 45 bus routes.' }
          ].map((item, i) => (
            <div key={i} className="p-5 bg-[#F8F6F0] rounded-xl border border-slate-200 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#102A43]">{item.name}</h4>
                <p className="text-xs text-slate-600">{item.desc} · <span className="font-mono text-slate-500">{item.size}</span></p>
              </div>
              <button className="px-4 py-2 bg-[#102A43] text-white hover:bg-[#1D3A5F] text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shrink-0">
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const FaqPage: React.FC = () => {
  const { openAdmissionModal } = useModal();

  return (
    <div>
      <PageHero
        eyebrow="PARENT CLARIFICATIONS"
        title="Frequently Asked Questions"
        subtitle="Common questions concerning school policies, pedagogy, and student wellness."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-4xl space-y-4">
          {[
            { q: 'What curriculum board does Future Sunrise International School follow?', a: 'Future Sunrise is affiliated with the Central Board of Secondary Education (CBSE), New Delhi, following the National Curriculum Framework (NCF).' },
            { q: 'What foreign and Indian languages are offered?', a: 'English is the medium of instruction. Second and third language options include Tamil, Hindi, Sanskrit, and French.' },
            { q: 'How does the school ensure student safety?', a: 'Our campus features biometric turnstiles, 100% CCTV coverage, background-verified staff, a full-time resident nurse, and an infirmary.' },
            { q: 'What are the school operating hours?', a: 'Pre-Primary operates from 8:30 AM to 12:30 PM. Grades 1 to 12 operate from 8:15 AM to 3:30 PM, Monday through Friday.' }
          ].map((f, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-2xs">
              <h3 className="font-serif font-bold text-base text-[#102A43] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#D4A72C] shrink-0" />
                <span>{f.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 pl-6 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const PoliciesPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="INSTITUTIONAL GOVERNANCE"
        title="School Policies & Child Protection"
        subtitle="Standard operating procedures safeguarding student safety, privacy, and conduct."
        breadcrumbs={[{ label: 'Policies' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-6 rounded-xl bg-[#F8F6F0] border border-slate-200 space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#102A43]">Child Protection & Anti-Bullying Policy</h3>
            <p>
              Future Sunrise International School enforces zero tolerance toward verbal, physical, or cyber-bullying. A dedicated Child Protection Committee meets fortnightly to review campus well-being and grievance registers.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F8F6F0] border border-slate-200 space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#102A43]">Data Privacy & Parental Information</h3>
            <p>
              Information gathered through the admission portal is preserved with enterprise encryption solely for academic communications and statutory CBSE register compliance. We never disclose parent data to commercial third parties.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 text-center site-container">
      <div className="max-w-lg mx-auto space-y-6">
        <span className="font-serif font-bold text-7xl text-[#102A43]">404</span>
        <h1 className="font-serif text-3xl font-bold text-[#102A43]">Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The educational page or resource you are looking for might have moved, been renamed, or is temporarily unavailable.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="min-h-[44px] px-6 py-2.5 bg-[#102A43] hover:bg-[#1D3A5F] text-white font-bold text-xs sm:text-sm rounded-lg inline-flex items-center justify-center transition-colors shadow-xs"
          >
            Return Home
          </Link>
          <Link
            to="/academics"
            className="min-h-[44px] px-6 py-2.5 bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-xs sm:text-sm rounded-lg inline-flex items-center justify-center transition-colors shadow-xs"
          >
            Explore Academics
          </Link>
          <Link
            to="/contact"
            className="min-h-[44px] px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#102A43] font-bold text-xs sm:text-sm rounded-lg inline-flex items-center justify-center transition-colors border border-slate-300/80"
          >
            Contact School
          </Link>
        </div>
      </div>
    </div>
  );
};
