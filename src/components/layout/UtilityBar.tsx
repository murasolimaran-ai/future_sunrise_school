import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  ChevronDown,
  X,
  CalendarDays,
  FileText,
  Award,
  Megaphone,
  UserCheck,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';
import { useModal } from '../../context/ModalContext';
import {
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon
} from '../ui/SocialIcons';

export const UtilityBar: React.FC = () => {
  const [morePanelOpen, setMorePanelOpen] = useState(false);
  const [desktopMoreDropdown, setDesktopMoreDropdown] = useState(false);
  const { openAdmissionModal } = useModal();

  // Close more panel on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMorePanelOpen(false);
        setDesktopMoreDropdown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Body scroll locking when mobile utility panel is open
  useEffect(() => {
    if (morePanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [morePanelOpen]);

  return (
    <>
      {/* Top Utility Bar Container */}
      <div
        className="w-full bg-[#102A43] text-white border-b border-white/10 text-xs py-1.5 px-3 sm:px-6 relative z-50 selection:bg-[#D4A72C]/30"
        role="region"
        aria-label="Campus quick utility bar"
      >
        <div className="site-container flex items-center justify-between gap-3">
          
          {/* LEFT: Institutional Admissions Open Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={openAdmissionModal}
              className="inline-flex items-center gap-1.5 font-semibold text-[#D4A72C] hover:text-white transition-colors cursor-pointer group"
              title="Admissions Open 2026–27 - Click to Enquire"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4A72C] animate-pulse shrink-0" />
              <span className="tracking-wide text-[11px] sm:text-xs">Admissions Open 2026–27</span>
              <span className="hidden md:inline-block text-white/50 group-hover:text-white transition-colors">
                · Apply Now →
              </span>
            </button>
          </div>

          {/* RIGHT (Desktop Layout) */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-medium text-white/85">
            {/* Phone */}
            <a
              href={`tel:${SCHOOL_INFO.generalContact.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-[#D4A72C] transition-colors py-1"
              title="Call School Reception"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>{SCHOOL_INFO.generalContact.phone}</span>
            </a>

            <span className="text-white/20 select-none">|</span>

            {/* Email */}
            <a
              href={`mailto:${SCHOOL_INFO.generalContact.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#D4A72C] transition-colors py-1"
              title="Send Inquiry Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>{SCHOOL_INFO.generalContact.email}</span>
            </a>

            <span className="text-white/20 select-none">|</span>

            {/* Social Media Links with UNCOMPROMISED OFFICIAL BRAND COLORS */}
            <div className="flex items-center gap-1.5" aria-label="Official Social Channels">
              <a
                href={SCHOOL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-90 hover:scale-110 transition-transform"
                title="Future Sunrise on Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>

              <a
                href={SCHOOL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-90 hover:scale-110 transition-transform"
                title="Future Sunrise on YouTube"
                aria-label="YouTube"
              >
                <YouTubeIcon size={16} />
              </a>

              <a
                href={SCHOOL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-90 hover:scale-110 transition-transform"
                title="Future Sunrise on Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>

              <a
                href={SCHOOL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:opacity-90 hover:scale-110 transition-transform"
                title="Future Sunrise on LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
            </div>

            <span className="text-white/20 select-none">|</span>

            {/* Parent Portal */}
            <Link
              to="/info/parent-portal"
              className="inline-flex items-center gap-1 hover:text-[#D4A72C] transition-colors py-1"
              title="Parent ERP & Portal"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>Parent Portal</span>
            </Link>

            <span className="text-white/20 select-none">|</span>

            {/* Desktop More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDesktopMoreDropdown(!desktopMoreDropdown)}
                className="inline-flex items-center gap-1 py-1 hover:text-[#D4A72C] transition-colors focus:outline-none cursor-pointer"
                aria-expanded={desktopMoreDropdown}
                aria-label="More institutional resources"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopMoreDropdown ? 'rotate-180' : ''}`} />
              </button>

              {desktopMoreDropdown && (
                <div
                  className="absolute right-0 top-full mt-1.5 w-56 bg-white text-[#263238] rounded-lg shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseLeave={() => setDesktopMoreDropdown(false)}
                >
                  <Link
                    to="/academic-calendar"
                    onClick={() => setDesktopMoreDropdown(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs hover:bg-[#F8F6F0] hover:text-[#102A43] font-medium"
                  >
                    <CalendarDays className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Academic Calendar</span>
                  </Link>

                  <Link
                    to="/downloads"
                    onClick={() => setDesktopMoreDropdown(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs hover:bg-[#F8F6F0] hover:text-[#102A43] font-medium"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Downloads & Forms</span>
                  </Link>

                  <Link
                    to="/results"
                    onClick={() => setDesktopMoreDropdown(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs hover:bg-[#F8F6F0] hover:text-[#102A43] font-medium"
                  >
                    <Award className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Board Results</span>
                  </Link>

                  <Link
                    to="/announcements"
                    onClick={() => setDesktopMoreDropdown(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs hover:bg-[#F8F6F0] hover:text-[#102A43] font-medium"
                  >
                    <Megaphone className="w-3.5 h-3.5 text-[#D4A72C]" />
                    <span>Announcements & Circulars</span>
                  </Link>

                  <div className="my-1 border-t border-slate-100" />

                  <a
                    href={`https://wa.me/${SCHOOL_INFO.generalContact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 text-xs hover:bg-[#F8F6F0] text-emerald-700 font-semibold"
                  >
                    <WhatsAppIcon size={14} />
                    <span>WhatsApp Helpdesk</span>
                  </a>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT (Mobile & Tablet Layout: Section 04) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Call */}
            <a
              href={`tel:${SCHOOL_INFO.generalContact.phone}`}
              className="inline-flex items-center gap-1 min-h-[32px] px-2 rounded hover:bg-white/10 text-white/90 font-medium text-[11px] sm:text-xs transition-colors"
              title="Call school"
            >
              <Phone className="w-3 h-3 text-[#D4A72C]" />
              <span>Call</span>
            </a>

            <span className="text-white/20 select-none">|</span>

            {/* Email */}
            <a
              href={`mailto:${SCHOOL_INFO.generalContact.email}`}
              className="inline-flex items-center gap-1 min-h-[32px] px-2 rounded hover:bg-white/10 text-white/90 font-medium text-[11px] sm:text-xs transition-colors"
              title="Email school"
            >
              <Mail className="w-3 h-3 text-[#D4A72C]" />
              <span>Email</span>
            </a>

            <span className="text-white/20 select-none">|</span>

            {/* More Trigger Button */}
            <button
              onClick={() => setMorePanelOpen(true)}
              className="inline-flex items-center gap-1 min-h-[32px] px-2.5 rounded bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] sm:text-xs transition-colors cursor-pointer"
              aria-expanded={morePanelOpen}
              aria-label="Open mobile utility menu"
            >
              <span>More</span>
              <ChevronDown className="w-3 h-3 text-[#D4A72C]" />
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE UTILITY PANEL (Section 04: Compact panel with ~44px touch targets) */}
      {morePanelOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Campus Quick Access Utilities"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMorePanelOpen(false);
          }}
        >
          <div className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-in slide-in-from-bottom-6 duration-200">
            
            {/* Panel Header */}
            <div className="px-5 py-3.5 bg-[#102A43] text-white flex items-center justify-between border-b-2 border-[#D4A72C]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4A72C]" />
                <span className="font-serif font-bold text-sm tracking-wide">Campus Quick Access</span>
              </div>
              <button
                onClick={() => setMorePanelOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Quick Links with 44px touch targets */}
            <div className="p-4 overflow-y-auto space-y-1.5 text-xs text-slate-700">
              
              <div className="grid grid-cols-2 gap-2 pb-2">
                {/* Call School */}
                <a
                  href={`tel:${SCHOOL_INFO.generalContact.phone}`}
                  className="min-h-[44px] flex items-center gap-2 px-3 rounded-lg bg-[#F8F6F0] hover:bg-slate-200/70 text-[#102A43] font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4A72C] shrink-0" />
                  <span>Call School</span>
                </a>

                {/* Email Us */}
                <a
                  href={`mailto:${SCHOOL_INFO.generalContact.email}`}
                  className="min-h-[44px] flex items-center gap-2 px-3 rounded-lg bg-[#F8F6F0] hover:bg-slate-200/70 text-[#102A43] font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4A72C] shrink-0" />
                  <span>Email Us</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SCHOOL_INFO.generalContact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>

                {/* Find Us */}
                <Link
                  to="/contact"
                  onClick={() => setMorePanelOpen(false)}
                  className="min-h-[44px] flex items-center gap-2 px-3 rounded-lg bg-[#F8F6F0] hover:bg-slate-200/70 text-[#102A43] font-semibold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#D4A72C] shrink-0" />
                  <span>Find Us</span>
                </Link>
              </div>

              <div className="border-t border-slate-100 pt-2 space-y-1">
                {/* Academic Calendar */}
                <Link
                  to="/academic-calendar"
                  onClick={() => setMorePanelOpen(false)}
                  className="min-h-[44px] flex items-center justify-between px-3 rounded-lg hover:bg-[#F8F6F0] font-medium text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-4 h-4 text-[#102A43]" />
                    <span>Academic Calendar 2026–27</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
                </Link>

                {/* Downloads */}
                <Link
                  to="/downloads"
                  onClick={() => setMorePanelOpen(false)}
                  className="min-h-[44px] flex items-center justify-between px-3 rounded-lg hover:bg-[#F8F6F0] font-medium text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#102A43]" />
                    <span>Downloads & Circulars</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
                </Link>

                {/* Results */}
                <Link
                  to="/results"
                  onClick={() => setMorePanelOpen(false)}
                  className="min-h-[44px] flex items-center justify-between px-3 rounded-lg hover:bg-[#F8F6F0] font-medium text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-[#102A43]" />
                    <span>Board Results & Distinction</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
                </Link>

                {/* Announcements */}
                <Link
                  to="/announcements"
                  onClick={() => setMorePanelOpen(false)}
                  className="min-h-[44px] flex items-center justify-between px-3 rounded-lg hover:bg-[#F8F6F0] font-medium text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Megaphone className="w-4 h-4 text-[#102A43]" />
                    <span>Announcements & Notices</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
                </Link>

                {/* Parent Portal */}
                <Link
                  to="/info/parent-portal"
                  onClick={() => setMorePanelOpen(false)}
                  className="min-h-[44px] flex items-center justify-between px-3 rounded-lg hover:bg-[#F8F6F0] font-medium text-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-4 h-4 text-[#102A43]" />
                    <span>Parent Portal Login</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>

              {/* Official Social Media Row */}
              <div className="border-t border-slate-200/80 pt-3 mt-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                  Official Channels
                </span>
                <div className="flex items-center justify-around py-1">
                  <a
                    href={SCHOOL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-transform active:scale-95"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={24} />
                  </a>
                  <a
                    href={SCHOOL_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-transform active:scale-95"
                    aria-label="YouTube"
                  >
                    <YouTubeIcon size={24} />
                  </a>
                  <a
                    href={SCHOOL_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-transform active:scale-95"
                    aria-label="Facebook"
                  >
                    <FacebookIcon size={24} />
                  </a>
                  <a
                    href={SCHOOL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-transform active:scale-95"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={24} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
