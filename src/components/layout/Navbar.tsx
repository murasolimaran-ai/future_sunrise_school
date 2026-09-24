import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  Search,
  Menu,
  Sparkles,
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
import { useModal } from '../../context/ModalContext';
import { MobileMenu } from './MobileMenu';

// Detailed semantic icon mapping for each dropdown item
export const DROPDOWN_CONFIG: Record<
  string,
  {
    header: string;
    viewAllHref: string;
    viewAllLabel: string;
    columns: Array<
      Array<{
        title: string;
        href: string;
        icon: React.ComponentType<{ className?: string }>;
      }>
    >;
  }
> = {
  'About Us': {
    header: 'ABOUT OUR INSTITUTION',
    viewAllHref: '/about',
    viewAllLabel: 'View All About Us →',
    columns: [
      [
        { title: 'Our School', href: '/about', icon: Landmark },
        { title: 'Vision & Mission', href: '/about/vision-mission', icon: Compass },
        { title: 'History', href: '/about/history', icon: History },
        { title: "Principal's Message", href: '/about/principal-message', icon: Award }
      ],
      [
        { title: "Correspondent's Message", href: '/about/correspondent-message', icon: ScrollText },
        { title: 'Management', href: '/about/management', icon: Users },
        { title: 'School Leadership', href: '/about/school-leadership', icon: UserCheck }
      ]
    ]
  },
  Academics: {
    header: 'ACADEMIC EXCELLENCE & CURRICULUM',
    viewAllHref: '/academics',
    viewAllLabel: 'View All Academics →',
    columns: [
      [
        { title: 'Academics', href: '/academics', icon: GraduationCap },
        { title: 'Pre-Primary', href: '/academics/pre-primary', icon: Baby },
        { title: 'Primary', href: '/academics/primary', icon: BookOpen },
        { title: 'Middle School', href: '/academics/middle-school', icon: Compass },
        { title: 'Secondary', href: '/academics/secondary', icon: BookMarked },
        { title: 'Higher Secondary', href: '/academics/higher-secondary', icon: Award }
      ],
      [
        { title: 'Science', href: '/academics/higher-secondary/science', icon: Atom },
        { title: 'Commerce', href: '/academics/higher-secondary/commerce', icon: Calculator },
        { title: 'Computer Science', href: '/academics/higher-secondary/computer-science', icon: Code2 },
        { title: 'Curriculum', href: '/academics/curriculum', icon: FileText },
        { title: 'Teaching Methodology', href: '/academics/teaching-methodology', icon: Lightbulb },
        { title: 'Assessment', href: '/academics/assessment', icon: ClipboardCheck }
      ]
    ]
  },
  'Student Life': {
    header: 'STUDENT LIFE & CO-CURRICULAR',
    viewAllHref: '/student-life',
    viewAllLabel: 'View All Student Life →',
    columns: [
      [
        { title: 'Student Life', href: '/student-life', icon: HeartHandshake },
        { title: 'Sports', href: '/student-life/sports', icon: Trophy },
        { title: 'Clubs', href: '/student-life/clubs', icon: Compass },
        { title: 'Dance & Performing Arts', href: '/student-life/dance', icon: Drama },
        { title: 'Arts & Music', href: '/student-life/arts-music', icon: Palette }
      ],
      [
        { title: 'Technology', href: '/student-life/technology', icon: Bot },
        { title: 'Educational Tours', href: '/student-life/educational-tours', icon: MapPin },
        { title: 'Celebrations', href: '/student-life/celebrations', icon: PartyPopper },
        { title: 'Social Activities', href: '/student-life/social-activities', icon: HeartHandshake }
      ]
    ]
  },
  Campus: {
    header: 'CAMPUS & INFRASTRUCTURE',
    viewAllHref: '/campus',
    viewAllLabel: 'View All Campus →',
    columns: [
      [
        { title: 'Campus', href: '/campus', icon: Building2 },
        { title: 'Science Laboratory', href: '/campus/science-laboratory', icon: FlaskConical },
        { title: 'Library', href: '/campus/library', icon: Library },
        { title: 'Playground', href: '/campus/playground', icon: Trees },
        { title: 'Transportation', href: '/campus/transportation', icon: Bus }
      ],
      [
        { title: 'Smart Classrooms', href: '/campus/smart-classrooms', icon: Monitor },
        { title: 'Computer Laboratory', href: '/campus/computer-lab', icon: MonitorCog },
        { title: 'Sports Facilities', href: '/campus/sports', icon: Trophy },
        { title: 'Auditorium', href: '/campus/auditorium', icon: Drama },
        { title: 'Safety', href: '/campus/safety', icon: ShieldCheck }
      ]
    ]
  }
};

const TOP_NAV_LINKS = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about', hasDropdown: true },
  { title: 'Academics', href: '/academics', hasDropdown: true },
  { title: 'Student Life', href: '/student-life', hasDropdown: true },
  { title: 'Campus', href: '/campus', hasDropdown: true },
  { title: 'Achievements', href: '/achievements' },
  { title: 'Events', href: '/events' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Admissions', href: '/admissions' },
  { title: 'Contact', href: '/contact' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { openAdmissionModal, openSearchModal } = useModal();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-[#F8F6F0]/95 backdrop-blur-md border-b ${
          isScrolled
            ? 'py-2.5 shadow-sm border-[#102A43]/15 bg-white/95'
            : 'py-3 sm:py-3.5 border-[#102A43]/10'
        }`}
      >
        <div className="site-container flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none"
            aria-label="Future Sunrise International School Home"
          >
            {/* Heritage Crest Seal */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#102A43] text-[#D4A72C] flex items-center justify-center font-serif font-bold text-lg sm:text-xl shadow-sm border border-[#D4A72C]/40 group-hover:bg-[#1D3A5F] transition-colors">
              FS
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#102A43] group-hover:text-[#1D4ED8] transition-colors leading-tight">
                Future Sunrise
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#263238]/80 uppercase">
                International School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Switches cleanly at xl to prevent awkward wrapping) */}
          <nav
            ref={navRef}
            className="hidden xl:flex items-center gap-1 2xl:gap-1.5"
            aria-label="Main institutional navigation"
          >
            {TOP_NAV_LINKS.map((item) => {
              const dropdownConfig = item.hasDropdown ? DROPDOWN_CONFIG[item.title] : null;
              const hasChildren = Boolean(dropdownConfig);
              
              // Check if currently active
              const isDirectActive = location.pathname === item.href;
              const isChildActive =
                hasChildren &&
                dropdownConfig?.columns.some((col) =>
                  col.some((sub) => location.pathname === sub.href)
                );
              const isActive = isDirectActive || isChildActive;
              const isOpen = activeDropdown === item.title;

              if (!hasChildren || !dropdownConfig) {
                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-2 2xl:px-2.5 py-1.5 text-xs 2xl:text-sm font-semibold rounded-md transition-colors relative whitespace-nowrap ${
                      isActive
                        ? 'text-[#102A43]'
                        : 'text-[#263238]/85 hover:text-[#102A43] hover:bg-black/5'
                    }`}
                  >
                    <span>{item.title}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D4A72C] rounded-full" />
                    )}
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                >
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.title)}
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-haspopup="true"
                    aria-label={`${item.title} navigation menu`}
                    className={`flex items-center gap-1 px-2 2xl:px-2.5 py-1.5 text-xs 2xl:text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      isActive || isOpen
                        ? 'text-[#102A43] bg-black/5'
                        : 'text-[#263238]/85 hover:text-[#102A43] hover:bg-black/5'
                    }`}
                  >
                    <span>{item.title}</span>
                    {isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5 text-[#D4A72C]" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-[#263238]/60" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D4A72C] rounded-full" />
                    )}
                  </button>

                  {/* Desktop Dropdown Menu Panel: NO DESCRIPTIONS - PURE ICON + TITLE */}
                  {isOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-white rounded-xl shadow-xl border border-[#102A43]/15 border-t-2 border-t-[#D4A72C] p-4 sm:p-5 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
                      style={{
                        width: 'min(620px, calc(100vw - 32px))'
                      }}
                      role="menu"
                    >
                      {/* Section Header */}
                      <div className="text-[11px] font-bold text-[#102A43]/70 uppercase tracking-widest pb-3 border-b border-slate-100">
                        {dropdownConfig.header}
                      </div>

                      {/* 2-Column Grid */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 py-3">
                        {dropdownConfig.columns.map((column, colIdx) => (
                          <div key={colIdx} className="space-y-1">
                            {column.map((subItem) => {
                              const Icon = subItem.icon;
                              const isSubActive = location.pathname === subItem.href;

                              return (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                  aria-current={isSubActive ? 'page' : undefined}
                                  className={`group flex items-center gap-3 px-3.5 py-3 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                                    isSubActive
                                      ? 'bg-[#F8F6F0] text-[#102A43] font-semibold border-l-2 border-[#D4A72C]'
                                      : 'text-[#263238] hover:bg-[#F8F6F0] hover:text-[#102A43] hover:translate-x-0.5'
                                  }`}
                                >
                                  <Icon
                                    className={`w-[18px] h-[18px] shrink-0 transition-colors duration-200 ${
                                      isSubActive
                                        ? 'text-[#D4A72C]'
                                        : 'text-slate-500 group-hover:text-[#D4A72C]'
                                    }`}
                                  />
                                  <span className="truncate">{subItem.title}</span>
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>

                      {/* Bottom Institutional Link */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={dropdownConfig.viewAllHref}
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-bold text-[#102A43] hover:text-[#1D4ED8] flex items-center gap-1.5 transition-colors group"
                        >
                          <span>{dropdownConfig.viewAllLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D4A72C] group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger Button */}
            <button
              onClick={openSearchModal}
              className="p-2 sm:p-2.5 rounded-full text-[#102A43] hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] cursor-pointer"
              aria-label="Search school website"
              title="Search website"
            >
              <Search className="w-5 h-5 text-[#102A43]" />
            </button>

            {/* Admission Enquiry Primary CTA Button */}
            <button
              onClick={openAdmissionModal}
              className="min-h-[40px] sm:min-h-[44px] px-3.5 sm:px-5 py-2 rounded-lg bg-[#D4A72C] hover:bg-[#102A43] text-[#102A43] hover:text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-xs hover:shadow-md flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-inherit" />
              <span>Admission Enquiry</span>
            </button>

            {/* Mobile / Tablet Menu Button (Visible below xl) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 rounded-lg text-[#102A43] hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] cursor-pointer"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
