export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavItem {
  title: string;
  href: string;
  children?: NavSubItem[];
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  heading: string;
  headingLine1?: string;
  headingLine2?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AcademicStage {
  id: string;
  slug: string;
  title: string;
  ageGroup: string;
  grades: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  subjects: string[];
  image: string;
  overview?: string;
  features?: string[];
}

export interface CampusFacility {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  keyFeatures: string[];
  equipment: string[];
  safetySpecs: string[];
  studentActivities: string[];
  image: string;
  overview?: string;
}

export interface AchievementItem {
  id: string;
  year: number;
  category: 'academic' | 'sports' | 'cultural' | 'competitions' | 'awards' | 'student-achievers';
  title: string;
  recipient: string;
  gradeLevel: string;
  description: string;
  level: string; // 'National' | 'State' | 'District' | 'International'
  badgeText?: string;
}

export interface SchoolEvent {
  id: string;
  slug: string;
  title: string;
  category: 'academic' | 'cultural' | 'sports' | 'celebrations';
  date: string; // ISO format or display format 'March 28, 2026'
  time: string;
  venue: string;
  isUpcoming: boolean;
  year: number;
  shortDesc: string;
  description: string;
  highlights: string[];
  participants: string;
  results?: string[];
  image: string;
  overview?: string;
  audience?: string;
}

export interface GalleryAlbum {
  id: string;
  slug: string;
  title: string;
  category: 'campus' | 'events' | 'sports' | 'activities' | 'academics';
  date: string;
  coverImage: string;
  photoCount: number;
  photos: {
    url: string;
    caption: string;
  }[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: 'School News' | 'Academic' | 'Sports' | 'Achievements' | 'Activities' | 'Announcements';
  publishDate: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  category: 'Principal' | 'Academic Leadership' | 'Teaching Faculty' | 'Administrative Staff' | 'Support Staff';
  designation: string;
  department: string;
  qualification: string;
  experienceYears: number;
  image?: string;
  bio?: string;
}

export interface ClubItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  introduction: string;
  objectives: string[];
  activities: string[];
  projects: string[];
  competitions: string[];
  achievements: string[];
  image: string;
  meetingTime?: string;
  facultyAdvisor?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Transport' | 'Fees' | 'School Timings' | 'Uniform' | 'Exams' | 'Activities';
}

export interface DownloadDocument {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  format: 'PDF' | 'DOCX';
  lastUpdated: string;
}

export interface ExamResultYear {
  year: number;
  passPercentage: string;
  distinctionPercentage: string;
  schoolAverage: string;
  highestScore: string;
  toppers: {
    name: string;
    stream: string;
    percentage: string;
    rank: string;
  }[];
  subjectToppers: {
    subject: string;
    studentName: string;
    score: string;
  }[];
}

export interface AnnouncementItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'School Announcements' | 'Exam Notices' | 'Holidays' | 'Parent Meetings' | 'Circulars' | 'Important Notices';
  priority: 'High' | 'Normal';
  content: string;
  attachmentName?: string;
}
