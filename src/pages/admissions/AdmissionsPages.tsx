import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { useModal } from '../../context/ModalContext';
import {
  Sparkles,
  CheckCircle2,
  FileText,
  Calendar,
  Phone,
  ArrowRight,
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const AdmissionsOverviewPage: React.FC = () => {
  const { openAdmissionModal } = useModal();

  return (
    <div>
      <PageHero
        eyebrow="ACADEMIC SESSION 2026–27"
        title="Admissions Overview & Guidelines"
        subtitle="Welcoming aspiring young minds into an environment that nurtures curiosity, character, and scholarship."
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-5xl space-y-12">
          
          {/* Top Announcement Banner */}
          <div className="bg-[#102A43] text-white p-6 sm:p-8 rounded-2xl border-2 border-[#D4A72C] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
                <Sparkles className="w-4 h-4" />
                <span>ADMISSIONS NOW OPEN</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Enrolment Open for Pre-KG to Grade 12
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Seats are allocated on a rolling merit basis. Early applications are advised for Pre-Primary and Grade 11 Science/Commerce streams.
              </p>
            </div>
            <button
              onClick={openAdmissionModal}
              className="px-6 py-3.5 bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-sm sm:text-base rounded-lg transition-colors whitespace-nowrap shadow-lg shrink-0"
            >
              Fill Admission Enquiry Form
            </button>
          </div>

          {/* Quick Sub-navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: '5-Step Admission Process', desc: 'Step-by-step walkthrough from registration to enrolment.', link: '/admissions/process' },
              { title: 'Age Eligibility Criteria', desc: 'Official cutoff dates and grade placement benchmarks.', link: '/admissions/eligibility' },
              { title: 'Document Checklist', desc: 'Complete list of required certificates and ID proofs.', link: '/admissions/documents' },
              { title: 'Admissions FAQ', desc: 'Answers regarding bus routes, fees, uniforms, and tests.', link: '/admissions/faq' }
            ].map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#102A43] transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-serif font-bold text-base text-[#102A43] group-hover:text-[#1D4ED8] transition-colors mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{card.desc}</p>
                </div>
                <span className="text-xs font-bold text-[#D4A72C] group-hover:text-[#102A43] flex items-center gap-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {/* Why Apply to Future Sunrise */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#102A43]">
              What We Look For in Our Scholars
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We practice an inclusive admissions approach that seeks curious, inquisitive, and enthusiastic learners. We value diverse talents — whether in scientific analysis, literary debate, athletics, or artistic performance. Our educators partner closely with parents to nurture the unique temperament and strengths of each child.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#F8F6F0] rounded-lg">
                <span className="font-bold text-sm text-[#102A43] block mb-1">Pre-Primary (Pre-KG to UKG)</span>
                <p className="text-xs text-slate-600">Gentle conversational interaction with child and parents. No formal written tests.</p>
              </div>
              <div className="p-4 bg-[#F8F6F0] rounded-lg">
                <span className="font-bold text-sm text-[#102A43] block mb-1">Primary & Middle (Gr 1 to 8)</span>
                <p className="text-xs text-slate-600">Foundational literacy and mathematical proficiency assessment for grade placement.</p>
              </div>
              <div className="p-4 bg-[#F8F6F0] rounded-lg">
                <span className="font-bold text-sm text-[#102A43] block mb-1">Secondary & Senior (Gr 9 to 12)</span>
                <p className="text-xs text-slate-600">Past academic performance records, aptitude assessment, and faculty counseling.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export const AdmissionProcessPage: React.FC = () => {
  const { openAdmissionModal } = useModal();

  const steps = [
    {
      num: '01',
      title: 'Online Enquiry & Campus Tour',
      desc: 'Submit our simple online admission enquiry form or visit the admissions office. Our counselors will schedule an individualized campus walkthrough.'
    },
    {
      num: '02',
      title: 'Application Form Submission',
      desc: 'Obtain the official admissions prospectus & application docket. Submit the completed application alongside requisite previous academic marks.'
    },
    {
      num: '03',
      title: 'Student Interaction / Skill Assessment',
      desc: 'Pre-Primary applicants engage in a warm conversational playgroup visit. Grades 1–11 undergo a basic diagnostic assessment in English and Mathematics.'
    },
    {
      num: '04',
      title: 'Provisional Offer of Enrolment',
      desc: 'Upon review by the Academic Admissions Committee, a formal letter of provisional enrolment is issued to parents within 48 hours.'
    },
    {
      num: '05',
      title: 'Document Verification & Welcome Kit',
      desc: 'Complete fee clearance, submit transfer certificate & medical forms, and collect the Future Sunrise student orientation kit and uniform specifications.'
    }
  ];

  return (
    <div>
      <PageHero
        eyebrow="ADMISSION STEPS"
        title="5-Step Admission Journey"
        subtitle="A transparent, respectful, and streamlined admissions roadmap for prospective families."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Admission Process' }
        ]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-10">
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xl bg-[#F8F6F0] border border-slate-200 flex flex-col sm:flex-row items-start gap-5 hover:border-[#102A43] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#102A43] text-[#D4A72C] flex items-center justify-center font-serif font-bold text-xl shrink-0 shadow-2xs">
                  {step.num}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-lg text-[#102A43]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#102A43] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif font-bold text-lg text-white">Begin Step 01 Today</p>
              <p className="text-xs text-white/80">Submit your admission enquiry to get contacted by our counselors.</p>
            </div>
            <button
              onClick={openAdmissionModal}
              className="px-6 py-3 bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-xs rounded-lg transition-colors whitespace-nowrap"
            >
              Start Admission Enquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AdmissionEligibilityPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="CRITERIA & AGE LIMITS"
        title="Admission Eligibility Criteria"
        subtitle="Official age guidelines as of 31st May 2026 as prescribed by the Department of School Education."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Eligibility Criteria' }
        ]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-8">
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-[#102A43] text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Grade Level</th>
                  <th className="px-5 py-3.5">Minimum Age (As of May 31, 2026)</th>
                  <th className="px-5 py-3.5">Prerequisite Qualification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {[
                  { grade: 'Pre-KG', age: '2.5 Years +', prereq: 'None (Conversational readiness)' },
                  { grade: 'LKG', age: '3.5 Years +', prereq: 'Informal preschool exposure preferred' },
                  { grade: 'UKG', age: '4.5 Years +', prereq: 'Successful completion of LKG' },
                  { grade: 'Grade 1', age: '5.5 Years +', prereq: 'Successful completion of UKG' },
                  { grade: 'Grades 2 to 8', age: 'Appropriate progression', prereq: 'Pass certificate & Report card from recognized school' },
                  { grade: 'Grade 9', age: '13+ Years', prereq: 'Passed Grade 8 with CBSE/State/ICSE board' },
                  { grade: 'Grade 10', age: '14+ Years', prereq: 'Direct admission subject to CBSE registration transfer approval' },
                  { grade: 'Grade 11', age: '15+ Years', prereq: 'Passed Grade 10 Board Examinations with qualifying cutoff' },
                  { grade: 'Grade 12', age: '16+ Years', prereq: 'Transfer case subject to CBSE regional approval' }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F6F0]/50'}>
                    <td className="px-5 py-3 font-semibold text-[#102A43]">{row.grade}</td>
                    <td className="px-5 py-3 font-mono text-slate-600">{row.age}</td>
                    <td className="px-5 py-3 text-slate-600">{row.prereq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AdmissionDocumentsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="REQUIRED VERIFICATION"
        title="Document Checklist"
        subtitle="Mandatory certificates required during formal enrolment confirmation."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Documents Checklist' }
        ]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-4xl space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">Checklist for Enrolment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Original Birth Certificate (issued by Municipal Authority)',
                'Transfer Certificate (TC) countersigned by the competent educational authority',
                'Previous year academic report card / transcript (for Grade 2 onwards)',
                'Aadhaar Card copies of student, father, and mother',
                'Recent passport-size photographs of the student (4 copies)',
                'Recent passport-size photographs of both parents (2 copies each)',
                'Immunization and medical fitness certificate from a certified pediatrician',
                'Community certificate (if applicable for government documentation records)'
              ].map((doc, idx) => (
                <div key={idx} className="p-3 bg-[#F8F6F0] rounded-lg border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AdmissionFaqPage: React.FC = () => {
  const { openAdmissionModal } = useModal();

  const faqs = [
    {
      q: 'What is the teacher-to-student ratio at Future Sunrise?',
      a: 'We maintain a strict 1:15 ratio in Pre-Primary classes and 1:25 in Primary through Senior Secondary, ensuring attentive individualized mentoring.'
    },
    {
      q: 'Does the school provide dedicated bus transportation?',
      a: 'Yes, our fleet of 25+ air-conditioned GPS-tracked buses serves over 45 designated routes across Chennai, monitored by onboard female attendants.'
    },
    {
      q: 'When does the academic session commence?',
      a: 'The 2026–27 academic session commences in the first week of June 2026. Pre-Primary transition orientation begins in the last week of May.'
    },
    {
      q: 'Are scholarship schemes available for meritorious students?',
      a: 'Yes, the Sundaramurthy Educational Trust confers merit-cum-means tuition fee concessions of up to 50% for state and national Olympiad achievers and state-level athletes entering Grades 9 and 11.'
    }
  ];

  return (
    <div>
      <PageHero
        eyebrow="PARENT INQUIRIES"
        title="Admission Frequently Asked Questions"
        subtitle="Transparent answers regarding fees, admissions schedules, and campus life."
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Admissions FAQ' }
        ]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 bg-[#F8F6F0] rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#102A43] flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#D4A72C] shrink-0 mt-0.5" />
                <span>{f.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 pl-7 leading-relaxed">{f.a}</p>
            </div>
          ))}

          <div className="pt-6 text-center">
            <p className="text-xs text-slate-500 mb-3">Have a specific question not covered here?</p>
            <button
              onClick={openAdmissionModal}
              className="px-6 py-3 bg-[#102A43] text-white font-bold text-xs sm:text-sm rounded-lg hover:bg-[#1D3A5F] transition-colors"
            >
              Contact Admissions Counselor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
