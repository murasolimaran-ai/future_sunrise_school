import React, { useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import {
  ACADEMIC_STAGES,
  CAMPUS_FACILITIES,
  CLUBS_DATA,
  SCHOOL_EVENTS,
  NEWS_ARTICLES
} from '../../data/schoolData';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

// Dictionary of known static route paths to institutional human-readable labels
const STATIC_ROUTE_TITLES: Record<string, string> = {
  // About
  '/about': 'About Us',
  '/about/vision-mission': 'Vision & Mission',
  '/about/history': 'Heritage & History',
  '/about/principal-message': "Principal's Desk",
  '/about/correspondent-message': "Correspondent's Desk",
  '/about/management': 'Trust & Management',
  '/about/school-leadership': 'Leadership Team',

  // Academics
  '/academics': 'Academics',
  '/academics/pre-primary': 'Pre-Primary',
  '/academics/primary': 'Primary School',
  '/academics/middle-school': 'Middle School',
  '/academics/secondary': 'Secondary School',
  '/academics/higher-secondary': 'Higher Secondary',
  '/academics/higher-secondary/science': 'Science Stream',
  '/academics/higher-secondary/commerce': 'Commerce Stream',
  '/academics/higher-secondary/computer-science': 'Computer Science & AI',
  '/academics/curriculum': 'CBSE Curriculum',
  '/academics/teaching-methodology': 'Teaching Methodology',
  '/academics/assessment': 'Assessment & Evaluation',

  // Student Life
  '/student-life': 'Student Life',
  '/student-life/extra-curricular': 'Extra-Curricular',
  '/student-life/sports': 'Sports & Athletics',
  '/student-life/clubs': 'Clubs & Societies',
  '/student-life/arts-music': 'Arts & Music',
  '/student-life/technology': 'Technology & Innovation',
  '/student-life/educational-tours': 'Educational Expeditions',
  '/student-life/celebrations': 'Campus Celebrations',
  '/student-life/social-activities': 'Social Welfare',

  // Campus
  '/campus': 'Campus & Facilities',
  '/campus/smart-classrooms': 'Smart Classrooms',
  '/campus/science-laboratory': 'Science Laboratories',
  '/campus/computer-lab': 'Computer Labs',
  '/campus/library': 'Central Library',
  '/campus/sports': 'Sports Arena',
  '/campus/playground': 'Athletic Grounds',
  '/campus/auditorium': 'Main Auditorium',
  '/campus/transportation': 'Transport Fleet',
  '/campus/canteen': 'Campus Dining',
  '/campus/safety': 'Safety & CCTV',

  // Achievements
  '/achievements': 'Achievements & Honors',
  '/achievements/academic': 'Academic Excellence',
  '/achievements/sports': 'Sports Laurels',
  '/achievements/cultural': 'Cultural & Performing Arts',
  '/achievements/competitions': 'National Competitions',
  '/achievements/awards': 'Institutional Awards',
  '/achievements/student-achievers': 'Star Achievers',

  // Events
  '/events': 'Events & Conclaves',
  '/events/upcoming': 'Upcoming Events',
  '/events/past': 'Past Archives',

  // Gallery
  '/gallery': 'Media Gallery',
  '/gallery/campus': 'Campus & Facilities',
  '/gallery/events': 'Events & Conclaves',
  '/gallery/sports': 'Sports Tournaments',
  '/gallery/activities': 'Student Activities',
  '/gallery/academics': 'Academic Life',
  '/gallery/video': 'Video Showcase',

  // Admissions
  '/admissions': 'Admissions',
  '/admissions/process': 'Admission Process',
  '/admissions/eligibility': 'Eligibility Criteria',
  '/admissions/documents': 'Document Checklist',
  '/admissions/faq': 'Admissions FAQ',

  // News
  '/news': 'News Desk',

  // Institutional
  '/faculty': 'Faculty Directory',
  '/alumni': 'Alumni Network',
  '/results': 'Board Results',
  '/academic-calendar': 'Academic Calendar',
  '/announcements': 'Notices & Circulars',
  '/downloads': 'Downloads & Forms',
  '/faq': 'Frequently Asked Questions',
  '/policies': 'School Policies',
  '/contact': 'Contact Us'
};

// Helper to convert hyphenated slug to title case
function formatSlugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Resolve dynamic or nested labels
function resolveBreadcrumbTitle(fullPath: string, segment: string): string {
  if (STATIC_ROUTE_TITLES[fullPath]) {
    return STATIC_ROUTE_TITLES[fullPath];
  }

  // Dynamic club
  if (fullPath.startsWith('/student-life/clubs/')) {
    const club = CLUBS_DATA.find((c) => c.slug === segment);
    if (club) return club.name;
  }

  // Dynamic event
  if (fullPath.startsWith('/events/')) {
    const event = SCHOOL_EVENTS.find((e) => e.slug === segment);
    if (event) return event.title;
  }

  // Dynamic news
  if (fullPath.startsWith('/news/')) {
    const article = NEWS_ARTICLES.find((a) => a.slug === segment);
    if (article) return article.title;
  }

  // Dynamic facility
  if (fullPath.startsWith('/campus/')) {
    const facility = CAMPUS_FACILITIES.find((f) => f.slug === segment);
    if (facility) return facility.title;
  }

  // Dynamic academic stage
  if (fullPath.startsWith('/academics/')) {
    const stage = ACADEMIC_STAGES.find((s) => s.slug === segment);
    if (stage) return stage.title;
  }

  return formatSlugToTitle(segment);
}

/**
 * Global Breadcrumb Navigation Component
 * Appears on all subpages (excluded on Home).
 * Fully responsive within .site-container.
 * Emits Google-compliant Schema.org BreadcrumbList JSON-LD and microdata.
 */
export const BreadcrumbNavigation: React.FC<BreadcrumbProps> = ({ items: customItems }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Exclude Home page
  const isHomePage = location.pathname === '/' || location.pathname === '';

  // Generate breadcrumb items from URL if not provided manually
  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    if (customItems && customItems.length > 0) {
      return customItems;
    }

    if (isHomePage) return [];

    const segments = location.pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [];
    let currentPath = '';

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      const label = resolveBreadcrumbTitle(currentPath, segment);

      items.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });

    return items;
  }, [location.pathname, customItems, isHomePage]);

  // Inject or update Schema.org BreadcrumbList JSON-LD into <head>
  useEffect(() => {
    if (isHomePage || breadcrumbItems.length === 0) {
      const existing = document.getElementById('schema-breadcrumb-jsonld');
      if (existing) existing.remove();
      return;
    }

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${origin}/`
        },
        ...breadcrumbItems.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: item.label,
          ...(item.href ? { item: `${origin}${item.href}` } : { item: `${origin}${location.pathname}` })
        }))
      ]
    };

    let script = document.getElementById('schema-breadcrumb-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'schema-breadcrumb-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData, null, 2);

    return () => {
      const el = document.getElementById('schema-breadcrumb-jsonld');
      if (el) el.remove();
    };
  }, [location.pathname, breadcrumbItems, isHomePage]);

  // Do not render on Home page
  if (isHomePage || breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <div
      className="w-full bg-[#FAF9F5] border-b border-slate-200/80 shadow-2xs relative z-20"
      role="region"
      aria-label="Breadcrumb Navigation Bar"
    >
      <div className="site-container py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Breadcrumb Trail with Microdata */}
          <nav
            aria-label="Breadcrumb"
            className="flex-1 min-w-0"
          >
            <ol
              itemScope
              itemType="https://schema.org/BreadcrumbList"
              className="flex items-center flex-wrap gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-slate-600 leading-snug"
            >
              {/* Home Link */}
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center gap-1 shrink-0"
              >
                <Link
                  to="/"
                  itemProp="item"
                  className="inline-flex items-center gap-1 text-[#102A43] hover:text-[#D4A72C] transition-colors py-1 px-1.5 -ml-1.5 rounded hover:bg-slate-200/50 font-medium"
                >
                  <Home className="w-3.5 h-3.5 text-[#D4A72C] shrink-0" />
                  <span itemProp="name" className="font-semibold">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>

              {/* Breadcrumb Hierarchy Items */}
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                const position = index + 2;

                return (
                  <li
                    key={index}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                    className="flex items-center gap-1 sm:gap-1.5 min-w-0"
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 text-slate-400 shrink-0 select-none"
                      aria-hidden="true"
                    />

                    {item.href && !isLast ? (
                      <Link
                        to={item.href}
                        itemProp="item"
                        className="truncate max-w-[130px] sm:max-w-[180px] md:max-w-none text-slate-600 hover:text-[#102A43] hover:underline underline-offset-2 transition-colors font-medium py-1 px-1 rounded hover:bg-slate-200/50"
                        title={item.label}
                      >
                        <span itemProp="name">{item.label}</span>
                      </Link>
                    ) : (
                      <span
                        className="truncate max-w-[150px] sm:max-w-[220px] md:max-w-xs lg:max-w-none font-bold text-[#102A43]"
                        aria-current="page"
                        title={item.label}
                      >
                        <span itemProp="name">{item.label}</span>
                      </span>
                    )}

                    <meta itemProp="position" content={position.toString()} />
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Quick Back Navigator Button for Mobile & Desktop */}
          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              aria-label="Go back to previous page"
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-[#102A43] hover:bg-slate-200/60 px-2 sm:px-2.5 py-1 rounded transition-colors"
            >
              <ArrowLeft className="w-3 h-3 text-[#D4A72C]" />
              <span className="hidden xs:inline">Back</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

// Also export as default Breadcrumb for component compatibility
export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return <BreadcrumbNavigation {...props} />;
};
