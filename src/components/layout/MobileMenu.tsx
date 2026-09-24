import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  Plus,
  Minus,
  Search,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  Building2,
  FlaskConical,
  Library,
  Trees,
  Bus,
  Monitor,
  MonitorCog,
  Trophy,
  Drama,
  ShieldCheck,
  Landmark,
  Compass,
  History,
  Award,
  ScrollText,
  Users,
  UserCheck,
  GraduationCap,
  Baby,
  BookOpen,
  BookMarked,
  Atom,
  Calculator,
  Code2,
  FileText,
  Lightbulb,
  ClipboardCheck,
  HeartHandshake,
  Palette,
  Bot,
  MapPin,
  PartyPopper
} from 'lucide-react';
import { contactData } from '../../data/schoolData';
import { useModal } from '../../context/ModalContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileSubItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MobileSection {
  title: string;
  href: string;
  viewAllHref: string;
  viewAllLabel: string;
  children?: MobileSubItem[];
}

const MOBILE_NAV_SECTIONS: MobileSection[] = [
  {
    title: 'Home',
    href: '/',
    viewAllHref: '/',
    viewAllLabel: 'Home'
  },
  {
    title: 'About Us',
    href: '/about',
    viewAllHref: '/about',
    viewAllLabel: 'View All About Us →',
    children: [
      { title: 'Our School', href: '/about', icon: Landmark },
      { title: 'Vision & Mission', href: '/about/vision-mission', icon: Compass },
      { title: 'History', href: '/about/history', icon: History },
      { title: "Principal's Message", href: '/about/principal-message', icon: Award },
      { title: "Correspondent's Message", href: '/about/correspondent-message', icon: ScrollText },
      { title: 'Management', href: '/about/management', icon: Users },
      { title: 'School Leadership', href: '/about/school-leadership', icon: UserCheck }
    ]
  },
  {
    title: 'Academics',
    href: '/academics',
    viewAllHref: '/academics',
    viewAllLabel: 'View All Academics →',
    children: [
      { title: 'Academics', href: '/academics', icon: GraduationCap },
      { title: 'Pre-Primary', href: '/academics/pre-primary', icon: Baby },
      { title: 'Primary', href: '/academics/primary', icon: BookOpen },
      { title: 'Middle School', href: '/academics/middle-school', icon: Compass },
      { title: 'Secondary', href: '/academics/secondary', icon: BookMarked },
      { title: 'Higher Secondary', href: '/academics/higher-secondary', icon: Award },
      { title: 'Science', href: '/academics/higher-secondary/science', icon: Atom },
      { title: 'Commerce', href: '/academics/higher-secondary/commerce', icon: Calculator },
      { title: 'Computer Science', href: '/academics/higher-secondary/computer-science', icon: Code2 },
      { title: 'Curriculum', href: '/academics/curriculum', icon: FileText },
      { title: 'Teaching Methodology', href: '/academics/teaching-methodology', icon: Lightbulb },
      { title: 'Assessment', href: '/academics/assessment', icon: ClipboardCheck }
    ]
  },
  {
    title: 'Student Life',
    href: '/student-life',
    viewAllHref: '/student-life',
    viewAllLabel: 'View All Student Life →',
    children: [
      { title: 'Student Life', href: '/student-life', icon: HeartHandshake },
      { title: 'Sports', href: '/student-life/sports', icon: Trophy },
      { title: 'Clubs', href: '/student-life/clubs', icon: Compass },
      { title: 'Dance & Performing Arts', href: '/student-life/dance', icon: Drama },
      { title: 'Arts & Music', href: '/student-life/arts-music', icon: Palette },
      { title: 'Technology', href: '/student-life/technology', icon: Bot },
      { title: 'Educational Tours', href: '/student-life/educational-tours', icon: MapPin },
      { title: 'Celebrations', href: '/student-life/celebrations', icon: PartyPopper },
      { title: 'Social Activities', href: '/student-life/social-activities', icon: HeartHandshake }
    ]
  },
  {
    title: 'Campus',
    href: '/campus',
    viewAllHref: '/campus',
    viewAllLabel: 'View All Campus →',
    children: [
      { title: 'Campus', href: '/campus', icon: Building2 },
      { title: 'Smart Classrooms', href: '/campus/smart-classrooms', icon: Monitor },
      { title: 'Science Laboratory', href: '/campus/science-laboratory', icon: FlaskConical },
      { title: 'Computer Laboratory', href: '/campus/computer-lab', icon: MonitorCog },
      { title: 'Library', href: '/campus/library', icon: Library },
      { title: 'Sports Facilities', href: '/campus/sports', icon: Trophy },
      { title: 'Playground', href: '/campus/playground', icon: Trees },
      { title: 'Auditorium', href: '/campus/auditorium', icon: Drama },
      { title: 'Transportation', href: '/campus/transportation', icon: Bus },
      { title: 'Safety', href: '/campus/safety', icon: ShieldCheck }
    ]
  },
  {
    title: 'Achievements',
    href: '/achievements',
    viewAllHref: '/achievements',
    viewAllLabel: 'Achievements'
  },
  {
    title: 'Events',
    href: '/events',
    viewAllHref: '/events',
    viewAllLabel: 'Events'
  },
  {
    title: 'Gallery',
    href: '/gallery',
    viewAllHref: '/gallery',
    viewAllLabel: 'Gallery'
  },
  {
    title: 'Admissions',
    href: '/admissions',
    viewAllHref: '/admissions',
    viewAllLabel: 'Admissions'
  },
  {
    title: 'Contact',
    href: '/contact',
    viewAllHref: '/contact',
    viewAllLabel: 'Contact'
  }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  const { openAdmissionModal, openSearchModal } = useModal();

  if (!isOpen) return null;

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  const handleAdmissionClick = () => {
    onClose();
    openAdmissionModal();
  };

  const handleSearchClick = () => {
    onClose();
    openSearchModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#102A43]/80 backdrop-blur-sm xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-[420px] h-full ml-auto bg-white flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-250">
        {/* Drawer Header */}
        <div className="px-5 py-4 bg-[#102A43] text-white flex items-center justify-between border-b-2 border-[#D4A72C]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-[#D4A72C] text-[#102A43] flex items-center justify-center font-serif font-bold text-lg shadow-xs">
              FS
            </div>
            <div>
              <span className="font-serif text-sm font-bold tracking-tight block text-white leading-tight">
                Future Sunrise
              </span>
              <span className="text-[10px] text-white/70 block uppercase tracking-widest">
                International School
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleSearchClick}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Search website"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Drawer Quick Action Button */}
        <div className="p-4 bg-[#F8F6F0] border-b border-slate-200">
          <button
            onClick={handleAdmissionClick}
            className="w-full min-h-[46px] bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#102A43]" />
            <span>Admission Enquiry 2026–27</span>
          </button>
        </div>

        {/* Navigation Accordion List */}
        <nav className="flex-1 overflow-y-auto px-4 py-3 divide-y divide-slate-100">
          {MOBILE_NAV_SECTIONS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedSection === item.title;

            if (!hasChildren) {
              return (
                <div key={item.title} className="py-1">
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between min-h-[44px] px-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-[#102A43] bg-[#102A43]/5 font-semibold'
                        : 'text-slate-700 hover:text-[#102A43] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.title}</span>
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.title} className="py-1">
                <button
                  onClick={() => toggleSection(item.title)}
                  aria-expanded={isExpanded ? 'true' : 'false'}
                  className={`w-full flex items-center justify-between min-h-[44px] px-3 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                    isExpanded
                      ? 'text-[#102A43] bg-[#102A43]/5'
                      : 'text-slate-800 hover:text-[#102A43] hover:bg-slate-50'
                  }`}
                >
                  <span className="uppercase tracking-wide text-xs">{item.title}</span>
                  {isExpanded ? (
                    <div className="flex items-center gap-1 text-[#D4A72C] text-xs font-bold">
                      <Minus className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                      <Plus className="w-4 h-4" />
                    </div>
                  )}
                </button>

                {/* Sub-items: PURE ICON + TITLE. NO DESCRIPTIONS */}
                {isExpanded && item.children && (
                  <div className="mt-1 ml-2 pl-2 border-l-2 border-[#D4A72C]/40 space-y-1 py-1 animate-in fade-in duration-150">
                    {item.children.map((subItem) => {
                      const Icon = subItem.icon;
                      const isSubActive = location.pathname === subItem.href;

                      return (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          onClick={onClose}
                          className={`flex items-center gap-2.5 py-2.5 px-2.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                            isSubActive
                              ? 'text-[#102A43] bg-[#F8F6F0] font-semibold border-l-2 border-[#D4A72C]'
                              : 'text-slate-700 hover:text-[#102A43] hover:bg-slate-100'
                          }`}
                        >
                          <Icon className={`w-4 h-4 shrink-0 ${isSubActive ? 'text-[#D4A72C]' : 'text-slate-500'}`} />
                          <span className="truncate">{subItem.title}</span>
                        </Link>
                      );
                    })}

                    {/* Section View All Bottom Link */}
                    <Link
                      to={item.viewAllHref}
                      onClick={onClose}
                      className="flex items-center justify-between py-2.5 px-2.5 mt-2 bg-[#102A43]/5 hover:bg-[#102A43]/10 text-[#102A43] font-bold text-xs rounded-md transition-colors"
                    >
                      <span>{item.viewAllLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4A72C]" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer Footer Contact with Primary Phone: +91 98765 43210 */}
        <div className="p-4 bg-[#F8F6F0] border-t border-slate-200 text-xs text-slate-700 space-y-2">
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#D4A72C] shrink-0" />
            <a href={contactData.phoneHref} className="hover:text-[#102A43] font-bold">
              {contactData.phone}
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#D4A72C] shrink-0" />
            <a href={`mailto:${contactData.admissionEmail}`} className="hover:text-[#102A43]">
              {contactData.admissionEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
