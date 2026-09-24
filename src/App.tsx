/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { UtilityBar } from './components/layout/UtilityBar';
import { Navbar } from './components/layout/Navbar';
import { BreadcrumbNavigation } from './components/layout/Breadcrumb';
import { Footer } from './components/layout/Footer';
import { AdmissionModal } from './components/modals/AdmissionModal';
import { SearchModal } from './components/modals/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import {
  AboutSchoolPage,
  VisionMissionPage,
  HistoryPage,
  PrincipalMessagePage,
  CorrespondentMessagePage,
  ManagementPage,
  LeadershipPage
} from './pages/about/AboutPages';
import {
  AcademicsOverviewPage,
  StageDetailPage,
  HigherSecondaryStreamPage,
  CurriculumPage,
  MethodologyPage,
  AssessmentPage
} from './pages/academics/AcademicsPages';
import {
  StudentLifeOverviewPage,
  ExtraCurricularPage,
  SportsPage,
  ClubsPage,
  ClubDetailPage,
  ArtsMusicPage,
  DancePerformingArtsPage,
  TechnologyPage,
  EducationalToursPage,
  CelebrationsPage,
  SocialActivitiesPage
} from './pages/student-life/StudentLifePages';
import {
  CampusOverviewPage,
  FacilityDetailPage
} from './pages/campus/CampusPages';
import { AchievementsPage } from './pages/achievements/AchievementsPage';
import {
  EventsListPage,
  EventDetailPage
} from './pages/events/EventsPages';
import { GalleryPage } from './pages/gallery/GalleryPage';
import {
  AdmissionsOverviewPage,
  AdmissionProcessPage,
  AdmissionEligibilityPage,
  AdmissionDocumentsPage,
  AdmissionFaqPage
} from './pages/admissions/AdmissionsPages';
import {
  NewsListPage,
  NewsDetailPage
} from './pages/news/NewsPages';
import {
  FacultyPage,
  AlumniPage,
  ResultsPage,
  AcademicCalendarPage,
  AnnouncementsPage,
  DownloadsPage,
  FaqPage,
  PoliciesPage,
  NotFoundPage
} from './pages/info/InstitutionalPages';
import { ContactPage } from './pages/contact/ContactPage';

// Scroll to top upon route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F8F6F0] text-[#263238] antialiased selection:bg-[#D4A72C]/30 selection:text-[#102A43]">
          {/* Top Institutional Utility Bar (Admissions, Contacts, Official Socials, Quick Utilities) */}
          <UtilityBar />

          {/* Main Top Header */}
          <Navbar />

          {/* Institutional Breadcrumb Navigation (Appears on all subpages, excluded on Home) */}
          <BreadcrumbNavigation />

          {/* Main Content Router */}
          <main className="flex-1 w-full">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* About Us */}
              <Route path="/about" element={<AboutSchoolPage />} />
              <Route path="/about/vision-mission" element={<VisionMissionPage />} />
              <Route path="/about/history" element={<HistoryPage />} />
              <Route path="/about/principal-message" element={<PrincipalMessagePage />} />
              <Route path="/about/correspondent-message" element={<CorrespondentMessagePage />} />
              <Route path="/about/management" element={<ManagementPage />} />
              <Route path="/about/school-leadership" element={<LeadershipPage />} />

              {/* Academics */}
              <Route path="/academics" element={<AcademicsOverviewPage />} />
              <Route path="/academics/pre-primary" element={<StageDetailPage stageSlugOverride="pre-primary" />} />
              <Route path="/academics/primary" element={<StageDetailPage stageSlugOverride="primary" />} />
              <Route path="/academics/middle-school" element={<StageDetailPage stageSlugOverride="middle-school" />} />
              <Route path="/academics/secondary" element={<StageDetailPage stageSlugOverride="secondary" />} />
              <Route path="/academics/higher-secondary" element={<StageDetailPage stageSlugOverride="higher-secondary" />} />
              <Route path="/academics/higher-secondary/science" element={<HigherSecondaryStreamPage streamType="science" />} />
              <Route path="/academics/higher-secondary/commerce" element={<HigherSecondaryStreamPage streamType="commerce" />} />
              <Route path="/academics/higher-secondary/computer-science" element={<HigherSecondaryStreamPage streamType="computer-science" />} />
              <Route path="/academics/curriculum" element={<CurriculumPage />} />
              <Route path="/academics/teaching-methodology" element={<MethodologyPage />} />
              <Route path="/academics/assessment" element={<AssessmentPage />} />
              <Route path="/academics/:stageSlug" element={<StageDetailPage />} />

              {/* Student Life */}
              <Route path="/student-life" element={<StudentLifeOverviewPage />} />
              <Route path="/student-life/extra-curricular" element={<ExtraCurricularPage />} />
              <Route path="/student-life/sports" element={<SportsPage />} />
              <Route path="/student-life/clubs" element={<ClubsPage />} />
              <Route path="/student-life/clubs/:clubId" element={<ClubDetailPage />} />
              <Route path="/student-life/arts-music" element={<ArtsMusicPage />} />
              <Route path="/student-life/dance" element={<DancePerformingArtsPage />} />
              <Route path="/student-life/technology" element={<TechnologyPage />} />
              <Route path="/student-life/educational-tours" element={<EducationalToursPage />} />
              <Route path="/student-life/celebrations" element={<CelebrationsPage />} />
              <Route path="/student-life/social-activities" element={<SocialActivitiesPage />} />

              {/* Campus */}
              <Route path="/campus" element={<CampusOverviewPage />} />
              <Route path="/campus/smart-classrooms" element={<FacilityDetailPage facilitySlugOverride="smart-classrooms" />} />
              <Route path="/campus/science-laboratory" element={<FacilityDetailPage facilitySlugOverride="science-laboratory" />} />
              <Route path="/campus/computer-lab" element={<FacilityDetailPage facilitySlugOverride="computer-lab" />} />
              <Route path="/campus/library" element={<FacilityDetailPage facilitySlugOverride="library" />} />
              <Route path="/campus/sports" element={<FacilityDetailPage facilitySlugOverride="sports" />} />
              <Route path="/campus/playground" element={<FacilityDetailPage facilitySlugOverride="playground" />} />
              <Route path="/campus/auditorium" element={<FacilityDetailPage facilitySlugOverride="auditorium" />} />
              <Route path="/campus/transportation" element={<FacilityDetailPage facilitySlugOverride="transportation" />} />
              <Route path="/campus/canteen" element={<FacilityDetailPage facilitySlugOverride="canteen" />} />
              <Route path="/campus/safety" element={<FacilityDetailPage facilitySlugOverride="safety" />} />
              <Route path="/campus/:facilitySlug" element={<FacilityDetailPage />} />

              {/* Achievements */}
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/achievements/:category" element={<AchievementsPage />} />

              {/* Events */}
              <Route path="/events" element={<EventsListPage />} />
              <Route path="/events/upcoming" element={<EventsListPage filterTab="upcoming" />} />
              <Route path="/events/past" element={<EventsListPage filterTab="past" />} />
              <Route path="/events/:slug" element={<EventDetailPage />} />

              {/* Gallery */}
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/gallery/:category" element={<GalleryPage />} />

              {/* Admissions */}
              <Route path="/admissions" element={<AdmissionsOverviewPage />} />
              <Route path="/admissions/process" element={<AdmissionProcessPage />} />
              <Route path="/admissions/eligibility" element={<AdmissionEligibilityPage />} />
              <Route path="/admissions/documents" element={<AdmissionDocumentsPage />} />
              <Route path="/admissions/faq" element={<AdmissionFaqPage />} />

              {/* News */}
              <Route path="/news" element={<NewsListPage />} />
              <Route path="/news/:slug" element={<NewsDetailPage />} />

              {/* Institutional & Information Pages */}
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/alumni" element={<AlumniPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
              <Route path="/announcements" element={<AnnouncementsPage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Fallback 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Institutional Footer */}
          <Footer />

          {/* Global Modals */}
          <AdmissionModal />
          <SearchModal />
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
}
