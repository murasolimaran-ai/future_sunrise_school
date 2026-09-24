import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO } from '../../data/schoolData';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export const Footer: React.FC = () => {
  const { openAdmissionModal } = useModal();

  return (
    <footer className="bg-[#102A43] text-white pt-16 pb-8 border-t-4 border-[#D4A72C]">
      <div className="site-container">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#D4A72C] text-[#102A43] flex items-center justify-center font-serif font-bold text-2xl shadow-md">
                FS
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white tracking-tight leading-snug">
                  Future Sunrise
                </h3>
                <p className="text-[11px] text-[#D4A72C] uppercase tracking-widest font-medium">
                  International School
                </p>
              </div>
            </div>

            <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
              Established in {SCHOOL_INFO.establishedYear}, {SCHOOL_INFO.name} provides world-class holistic education rooted in timeless academic heritage, moral discipline, and 21st-century inquiry.
            </p>

            <div className="pt-1 text-xs text-white/60">
              <p>{SCHOOL_INFO.affiliation}</p>
            </div>

            <button
              onClick={openAdmissionModal}
              className="mt-2 text-xs font-semibold text-[#D4A72C] hover:text-white transition-colors underline underline-offset-4 decoration-[#D4A72C]"
            >
              Enquire for 2026–27 Admissions →
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 pb-1.5 border-b border-white/10 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-[#D4A72C] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4A72C] transition-colors">About Our School</Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-[#D4A72C] transition-colors">Academics & Pedagogy</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#D4A72C] transition-colors">Admission Overview</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#D4A72C] transition-colors">School Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D4A72C] transition-colors">Photo & Video Gallery</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-[#D4A72C] transition-colors">Honors & Achievements</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4A72C] transition-colors">Contact Campus</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 pb-1.5 border-b border-white/10 inline-block">
              Academics
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <Link to="/academics/pre-primary" className="hover:text-[#D4A72C] transition-colors">Pre-Primary (Pre-KG to UKG)</Link>
              </li>
              <li>
                <Link to="/academics/primary" className="hover:text-[#D4A72C] transition-colors">Primary School (Grades 1 to 5)</Link>
              </li>
              <li>
                <Link to="/academics/middle-school" className="hover:text-[#D4A72C] transition-colors">Middle School (Grades 6 to 8)</Link>
              </li>
              <li>
                <Link to="/academics/secondary" className="hover:text-[#D4A72C] transition-colors">Secondary School (Grades 9 & 10)</Link>
              </li>
              <li>
                <Link to="/academics/higher-secondary" className="hover:text-[#D4A72C] transition-colors">Higher Secondary (Grades 11 & 12)</Link>
              </li>
              <li>
                <Link to="/academics/curriculum" className="hover:text-[#D4A72C] transition-colors">CBSE Curriculum Standards</Link>
              </li>
              <li>
                <Link to="/academic-calendar" className="hover:text-[#D4A72C] transition-colors">Academic Calendar</Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-[#D4A72C] transition-colors">Board Examination Results</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Timings */}
          <div className="space-y-3.5">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4 pb-1.5 border-b border-white/10 inline-block">
              Campus Contact
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
              <MapPin className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.branches[0].address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
              <Phone className="w-4 h-4 text-[#D4A72C] shrink-0" />
              <a href={`tel:${SCHOOL_INFO.generalContact.phone}`} className="hover:text-[#D4A72C] transition-colors">
                {SCHOOL_INFO.generalContact.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
              <Mail className="w-4 h-4 text-[#D4A72C] shrink-0" />
              <a href={`mailto:${SCHOOL_INFO.generalContact.email}`} className="hover:text-[#D4A72C] transition-colors">
                {SCHOOL_INFO.generalContact.email}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-white/70 pt-1">
              <Clock className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
              <div>
                <p>{SCHOOL_INFO.generalContact.hours}</p>
                <p className="text-[11px] text-white/50">{SCHOOL_INFO.generalContact.officeHours}</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/downloads"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4A72C] hover:text-white transition-colors"
              >
                <span>Download Prospectus & Circulars</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Social Media Row with OFFICIAL PLATFORM BRAND COLOURS */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10">
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
            Connect With Our Institutional Channels:
          </span>

          <div className="flex items-center gap-3">
            {/* Instagram - Official gradient background / brand icon */}
            <a
              href={SCHOOL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-sm text-white"
              style={{
                background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
              }}
              aria-label="Follow Future Sunrise International School on Instagram"
              title="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube - Official Red #FF0000 */}
            <a
              href={SCHOOL_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-sm text-white"
              style={{ backgroundColor: '#FF0000' }}
              aria-label="Subscribe to Future Sunrise International School on YouTube"
              title="YouTube"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook - Official Blue #1877F2 */}
            <a
              href={SCHOOL_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-sm text-white"
              style={{ backgroundColor: '#1877F2' }}
              aria-label="Connect with Future Sunrise International School on Facebook"
              title="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* LinkedIn - Official Blue #0A66C2 */}
            <a
              href={SCHOOL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-sm text-white"
              style={{ backgroundColor: '#0A66C2' }}
              aria-label="Follow Future Sunrise International School on LinkedIn"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link to="/policies" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="/policies" className="hover:text-white transition-colors">Child Safety Policy</Link>
            <span>·</span>
            <Link to="/policies" className="hover:text-white transition-colors">Code of Conduct</Link>
            <span>·</span>
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
