import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { ACADEMIC_STAGES } from '../../data/schoolData';
import { FallbackImage } from '../../components/ui/FallbackImage';
import { useModal } from '../../context/ModalContext';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Brain,
  FlaskConical,
  BarChart,
  Code
} from 'lucide-react';

export const AcademicsOverviewPage: React.FC = () => {
  const { openAdmissionModal } = useModal();

  return (
    <div>
      <PageHero
        eyebrow="ACADEMIC EXCELLENCE"
        title="Comprehensive Learning Framework"
        subtitle="From early childhood inquiry to senior secondary scientific and commercial mastery."
        breadcrumbs={[{ label: 'Academics' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="max-w-3xl mb-12 space-y-3">
            <h2 className="font-serif fluid-h2 font-bold text-[#102A43]">
              Structured For Intellectual Rigor & Discovery
            </h2>
            <p className="fluid-body text-[#263238] leading-relaxed">
              Affiliated with the Central Board of Secondary Education (CBSE), our curriculum is thoughtfully progressive. We develop conceptual mastery rather than rote memorization, blending foundational literacy with experiential scientific laboratory experiments, public debate, and creative expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACADEMIC_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#102A43] shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <FallbackImage
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#102A43] text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {stage.grades}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs text-[#D4A72C] font-bold uppercase tracking-wider block mb-1">
                      {stage.ageGroup}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#102A43] mb-2">{stage.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{stage.shortDesc}</p>

                    <div className="space-y-1.5 mb-4">
                      <p className="text-[11px] font-bold uppercase text-slate-400">Key Focus Disciplines:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.subjects.map((s) => (
                          <span key={s} className="px-2 py-0.5 bg-[#F8F6F0] text-slate-700 text-xs rounded border border-slate-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/academics/${stage.slug}`}
                      className="text-xs font-bold text-[#102A43] hover:text-[#D4A72C] flex items-center gap-1 transition-colors"
                    >
                      <span>Detailed Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={openAdmissionModal}
                      className="text-xs text-[#D4A72C] hover:text-[#102A43] font-semibold"
                    >
                      Enquire →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-[#102A43] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-white">Looking for Higher Secondary Streams?</h3>
              <p className="text-sm text-white/80">Explore our specialized Science, Commerce, and Computer Science cohorts for Grades 11 & 12.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/academics/higher-secondary"
                className="px-5 py-2.5 bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-xs sm:text-sm rounded-lg transition-colors"
              >
                View Streams Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const StageDetailPage: React.FC<{ stageSlugOverride?: string }> = ({ stageSlugOverride }) => {
  const params = useParams<{ stageSlug?: string }>();
  const slug = stageSlugOverride || params.stageSlug || 'primary';
  const stage = ACADEMIC_STAGES.find((s) => s.slug === slug) || ACADEMIC_STAGES[1];
  const { openAdmissionModal } = useModal();

  return (
    <div>
      <PageHero
        eyebrow={`CURRICULAR STAGE · ${stage.grades}`}
        title={stage.title}
        subtitle={stage.shortDesc}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: stage.title }
        ]}
        bgImage={stage.image}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h2 className="font-serif fluid-h3 font-bold text-[#102A43] mb-3">
                  Pedagogical Focus & Methodology
                </h2>
                <p className="text-sm sm:text-base text-[#263238] leading-relaxed">
                  {stage.overview || stage.fullDesc}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#102A43] mb-3">
                  Curriculum Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(stage.features || stage.highlights || []).map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8F6F0] border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#102A43] mb-3">
                  Core Subjects & Disciplines
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stage.subjects.map((sub) => (
                    <span key={sub} className="px-3 py-1.5 bg-[#102A43] text-white text-xs sm:text-sm rounded-md font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Quick Meta Sidebar */}
            <div className="md:col-span-4 space-y-5">
              <div className="p-6 rounded-xl bg-[#F8F6F0] border border-[#102A43]/15 space-y-4">
                <h4 className="font-serif font-bold text-base text-[#102A43] pb-2 border-b border-slate-200">
                  Program Overview
                </h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 block">Grade Levels:</span>
                    <span className="font-bold text-[#102A43]">{stage.grades}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Target Age Group:</span>
                    <span className="font-bold text-[#102A43]">{stage.ageGroup}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">School Hours:</span>
                    <span className="font-bold text-[#102A43]">8:15 AM – 3:30 PM (Mon–Fri)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Affiliation:</span>
                    <span className="font-bold text-[#102A43]">CBSE Board Framework</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={openAdmissionModal}
                    className="w-full py-3 bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-xs rounded-lg transition-colors shadow-xs"
                  >
                    Enquire for {stage.grades} Admissions
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
                <h5 className="font-bold text-xs text-[#102A43] uppercase tracking-wider">Other Academic Stages</h5>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {ACADEMIC_STAGES.filter((s) => s.slug !== stage.slug).map((s) => (
                    <li key={s.id}>
                      <Link to={`/academics/${s.slug}`} className="hover:text-[#D4A72C] transition-colors">
                        • {s.title} ({s.grades})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Higher Secondary Specialized Streams Showcase if on Higher Secondary */}
          {stage.slug === 'higher-secondary' && (
            <div className="pt-8 border-t border-slate-200 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#102A43] text-center">
                Specialized Streams (Grades 11 & 12)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Science (Pure & Applied)',
                    icon: <FlaskConical className="w-6 h-6 text-[#D4A72C]" />,
                    slug: 'science',
                    desc: 'Physics, Chemistry, Mathematics, Biology, Computer Science. Rigorous preparation for JEE, NEET, and research careers.',
                    link: '/academics/higher-secondary/science'
                  },
                  {
                    title: 'Commerce & Economics',
                    icon: <BarChart className="w-6 h-6 text-[#D4A72C]" />,
                    slug: 'commerce',
                    desc: 'Accountancy, Business Studies, Economics, Applied Mathematics. Tailored for CA Foundation, CUET, and Finance leadership.',
                    link: '/academics/higher-secondary/commerce'
                  },
                  {
                    title: 'Computer Science & AI',
                    icon: <Code className="w-6 h-6 text-[#D4A72C]" />,
                    slug: 'computer-science',
                    desc: 'Python, SQL Databases, Data Structures, Mechatronics, Cyber Ethics. Designed for upcoming software engineers and data scientists.',
                    link: '/academics/higher-secondary/computer-science'
                  }
                ].map((stream) => (
                  <div key={stream.title} className="p-6 rounded-xl bg-[#F8F6F0] border border-slate-200 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#102A43] flex items-center justify-center mb-3">
                        {stream.icon}
                      </div>
                      <h4 className="font-serif font-bold text-lg text-[#102A43] mb-1">{stream.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{stream.desc}</p>
                    </div>
                    <Link
                      to={stream.link}
                      className="text-xs font-bold text-[#102A43] hover:text-[#D4A72C] flex items-center gap-1 pt-2 border-t border-slate-200"
                    >
                      <span>Stream Syllabus & Lab Work</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export const HigherSecondaryStreamPage: React.FC<{ streamType: 'science' | 'commerce' | 'computer-science' }> = ({ streamType }) => {
  const { openAdmissionModal } = useModal();

  const details = {
    science: {
      title: 'Higher Secondary: Science Stream',
      heroSubtitle: 'Rigorous empirical inquiry across Physics, Chemistry, Biology and Mathematics.',
      subjects: ['Physics (Theory & Practical)', 'Chemistry (Inorganic, Organic & Physical)', 'Mathematics / Applied Mathematics', 'Biology (Genetics, Physiology & Ecology)', 'English Core'],
      focus: 'Students conduct university-standard experimental laboratory investigations. We organize structured coaching modules for national engineering (JEE) and medical entrance (NEET) examinations with seasoned senior subject specialists.',
      careers: 'Medicine, Surgery, Bio-technology, Aerospace, Robotics, Civil and Mechanical Engineering, Pure Mathematical Research.'
    },
    commerce: {
      title: 'Higher Secondary: Commerce Stream',
      heroSubtitle: 'Business administration, micro and macroeconomics, accountancy, and finance.',
      subjects: ['Accountancy (Company Accounts & Analysis)', 'Business Studies (Principles & Marketing)', 'Economics (Indian Economic Development & Macro)', 'Applied Mathematics / Informatics Practices', 'English Core'],
      focus: 'Bridging financial theory with real-world case studies, stock market simulations, and auditing fundamentals. Dedicated guidance for CA-CPT, CLAT, CUET, and corporate law pathways.',
      careers: 'Chartered Accountancy (CA), Investment Banking, Corporate Law, Business Management, Economic Research, FinTech.'
    },
    'computer-science': {
      title: 'Higher Secondary: Computer Science & AI Stream',
      heroSubtitle: 'Algorithmic problem solving, Python programming, database management, and computing ethics.',
      subjects: ['Computer Science (Python & OOP)', 'Physics & Chemistry Core', 'Mathematics (Linear Algebra, Calculus & Probability)', 'SQL & Relational Database Design', 'English Core'],
      focus: 'Hands-on software architecture, git version control, data structures, and algorithmic efficiency. Students develop functional applications and machine learning demos in our high-performance labs.',
      careers: 'Software Engineering, AI/ML Research, Cloud Architecture, Cybersecurity, Computational Mathematics.'
    }
  }[streamType];

  return (
    <div>
      <PageHero
        eyebrow="GRADES 11 & 12 SPECIALIZATION"
        title={details.title}
        subtitle={details.heroSubtitle}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Higher Secondary', href: '/academics/higher-secondary' },
          { label: details.title }
        ]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-10">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#102A43] mb-3">Academic Orientation</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{details.focus}</p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-[#102A43] mb-3">Syllabus Subjects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {details.subjects.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#F8F6F0] border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A72C] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#102A43]">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-[#102A43] mb-3">Prospective Career Horizons</h3>
            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
              {details.careers}
            </p>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={openAdmissionModal}
              className="px-6 py-3 rounded-lg bg-[#D4A72C] hover:bg-[#B3881E] text-[#102A43] font-bold text-sm transition-colors shadow-sm"
            >
              Enquire for Grade 11 Stream Selection
            </button>
            <Link
              to="/academics/higher-secondary"
              className="text-xs sm:text-sm font-semibold text-[#102A43] hover:text-[#D4A72C] transition-colors"
            >
              ← Back to Higher Secondary Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CurriculumPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="ACADEMIC RIGOR"
        title="CBSE Curriculum Standards"
        subtitle="National educational benchmarks paired with holistic skill enhancement."
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Curriculum' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-4xl space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">Central Board of Secondary Education (CBSE)</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Future Sunrise International School adheres to the National Curriculum Framework (NCF) prescribed by NCERT and CBSE, New Delhi. Our curriculum emphasizes competency-based education, encouraging students to apply theoretical knowledge to solve real-world problems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#F8F6F0] rounded-lg text-center">
                <span className="font-serif font-bold text-lg text-[#102A43] block">100%</span>
                <span className="text-xs text-slate-500">Board Pass Rate</span>
              </div>
              <div className="p-4 bg-[#F8F6F0] rounded-lg text-center">
                <span className="font-serif font-bold text-lg text-[#102A43] block">42%</span>
                <span className="text-xs text-slate-500">Scored 90%+ in 2025</span>
              </div>
              <div className="p-4 bg-[#F8F6F0] rounded-lg text-center">
                <span className="font-serif font-bold text-lg text-[#102A43] block">1:15</span>
                <span className="text-xs text-slate-500">Teacher-Student Ratio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const MethodologyPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="PEDAGOGY & INSTRUCTION"
        title="Teaching Methodology"
        subtitle="Inquiry-driven, experiential, and student-centered learning methodologies."
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Teaching Methodology' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Inquiry-Based Learning', desc: 'Students actively formulate hypotheses, experiment, and derive solutions under faculty guidance.' },
              { title: 'Socratic Seminars', desc: 'Structured dialogue that challenges students to analyze diverse viewpoints and construct sound arguments.' },
              { title: 'Technology-Integrated Classrooms', desc: 'High-resolution interactive digital boards, 3D simulations, and blended learning management.' },
              { title: 'Differentiated Instruction', desc: 'Tailored pacing and remediation ensuring every child achieves mastery in foundational concepts.' }
            ].map((method) => (
              <div key={method.title} className="p-6 bg-[#F8F6F0] rounded-xl border border-slate-200">
                <h3 className="font-serif font-bold text-lg text-[#102A43] mb-2">{method.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const AssessmentPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="CONTINUOUS EVALUATION"
        title="Assessment & Evaluation"
        subtitle="Holistic formative and summative metrics measuring genuine student growth."
        breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Assessment & Evaluation' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container max-w-4xl space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">Assessment Policy</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              In accordance with CBSE guidelines, our assessment framework balances Periodic Tests, Notebook Submissions, Subject Enrichment Activities, and Term-End Summative Examinations. Parent-Teacher Conferences are convened at the end of each academic cycle to provide multi-dimensional developmental feedback.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
