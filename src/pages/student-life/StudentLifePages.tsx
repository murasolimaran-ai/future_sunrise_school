import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHero } from '../../components/layout/PageHero';
import { CLUBS_DATA, SCHOOL_INFO } from '../../data/schoolData';
import {
  ArrowRight,
  CheckCircle2,
  Trophy,
  Users,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Music,
  Drama,
  Palette,
  Bot,
  Compass
} from 'lucide-react';

export const StudentLifeOverviewPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="BEYOND THE CLASSROOM"
        title="Student Life & Co-Curriculars"
        subtitle="Cultivating character, athletic sportsmanship, and artistic expression through dynamic activities."
        breadcrumbs={[{ label: 'Student Life' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif fluid-h2 font-bold text-[#102A43]">
              A Vibrant Campus Experience
            </h2>
            <p className="fluid-body text-[#263238] leading-relaxed">
              At Future Sunrise International School, learning flourishes inside and outside lecture halls. With 20+ clubs, professional athletic coaching, performing arts conservatories, and social service initiatives, each child finds their unique sphere of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sports & Athletics',
                desc: 'Cricket academy, FIFA-dimension turf, indoor badminton courts, and 400m track.',
                link: '/student-life/sports',
                image: '/images/sports_athletics_1790236923140.jpg',
                tag: 'Athletics'
              },
              {
                title: 'Dance & Performing Arts',
                desc: 'Bharatanatyam classical training, contemporary choreography, and theatrical drama.',
                link: '/student-life/dance',
                image: '/images/dance_performing_arts_1790236938143.jpg',
                tag: 'Dance & Stage'
              },
              {
                title: 'Student Clubs & Societies',
                desc: 'Robotics, Coding, Debate, Eco Warriors, Mathematics, and Photography guilds.',
                link: '/student-life/clubs',
                image: '/images/robotics_innovation_1790236952194.jpg',
                tag: 'Guilds & Societies'
              },
              {
                title: 'Visual & Performing Arts',
                desc: 'Classical Carnatic vocal, Western symphony, canvas painting, and sculpturing.',
                link: '/student-life/arts-music',
                image: '/images/music_orchestra_1790236991828.jpg',
                tag: 'Arts & Music'
              },
              {
                title: 'Technology & Innovation',
                desc: 'Maker spaces, 3D printing labs, AI hackathons, and IoT prototyping workshops.',
                link: '/student-life/technology',
                image: '/images/robotics_innovation_1790236952194.jpg',
                tag: 'Innovation'
              },
              {
                title: 'Educational Expeditions',
                desc: 'Annual heritage immersions, NASA space camps, and ecology field studies.',
                link: '/student-life/educational-tours',
                image: '/images/hero_student_community_1790235798493.jpg',
                tag: 'Expeditions'
              }
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xs hover:border-[#102A43] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#102A43]">
                    {card.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#102A43] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>
                  <Link
                    to={card.link}
                    className="text-xs font-bold text-[#102A43] group-hover:text-[#D4A72C] flex items-center justify-between pt-3 border-t border-slate-100 transition-colors"
                  >
                    <span>Explore Activity</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const SportsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="PHYSICAL VIGOR"
        title="Athletics & Sports Program"
        subtitle="Instilling discipline, teamwork, endurance, and championship sportsmanship."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Sports & Athletics' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl space-y-12">
          
          {/* Featured Hero Photo */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="/images/sports_athletics_1790236923140.jpg"
              alt="Future Sunrise School Sports Arena and Athletics"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43]">
              Championship Athletics Facilities & Coaching
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our 12-acre campus features a full-sized football turf, 4 all-weather cricket practice nets with bowling machines, 3 floodlit synthetic badminton courts, a basketball arena, and a 400m athletic running track. All sporting events are managed by certified coaches with state and national credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { sport: 'Cricket Academy', details: 'Professional turf wickets, bowling machines and conditioning clinics.' },
              { sport: 'Football & Athletics', details: 'Inter-school tournament training on natural grass and tournament turf.' },
              { sport: 'Badminton & Table Tennis', details: 'Indoor air-conditioned wooden-floor courts with certified trainers.' },
              { sport: 'Basketball & Volleyball', details: 'Regulation courts with electronic scoring and spectator gallery.' },
              { sport: 'Chess & Martial Arts', details: 'Grandmaster-guided chess clinics and Shotokan Karate belt grading.' },
              { sport: 'Yoga & Physical Conditioning', details: 'Daily morning pranayama and posture alignment for all age groups.' }
            ].map((item) => (
              <div key={item.sport} className="p-5 bg-[#F8F6F0] rounded-xl border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#102A43] text-[#D4A72C] flex items-center justify-center font-bold text-xs">
                  <Trophy className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-base text-[#102A43]">{item.sport}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const DancePerformingArtsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="STAGE & CULTURE"
        title="Dance & Performing Arts"
        subtitle="Classical Bharatanatyam, contemporary movement, and theatrical drama on our proscenium stage."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Dance & Performing Arts' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl space-y-12">
          
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="/images/dance_performing_arts_1790236938143.jpg"
              alt="Future Sunrise Indian Classical Dance and Performing Arts"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A43]">
              Theatrical Grandeur & Classical Traditions
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our Performing Arts conservatory immerses students in the rhythmic heritage of Indian classical dance, Western choreography, and classical drama. Under the tutelage of veteran gurus, students master Natya Shastra traditions, facial expressions (Abhinaya), rhythm (Tala), and theatrical stage presence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F8F6F0] rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-serif font-bold text-lg text-[#102A43]">Bharatanatyam Conservatory</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured certification training from Adavu fundamentals to Arangetram preparation with live Carnatic accompaniment.
              </p>
            </div>
            <div className="p-6 bg-[#F8F6F0] rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-serif font-bold text-lg text-[#102A43]">Dramatic Arts & Theatre</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shakespearean adaptations, street plays addressing social awareness, and musical proscenium theatre productions.
              </p>
            </div>
            <div className="p-6 bg-[#F8F6F0] rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-serif font-bold text-lg text-[#102A43]">Annual Tarang Gala</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our flagship three-day cultural conclave giving over 650 student artists a professional stage with computerized lighting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ClubsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="SPECIAL INTEREST SOCIETIES"
        title="Student Clubs & Guilds"
        subtitle="Empowering student initiative through student-led academic, artistic, and technological societies."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Clubs & Societies' }]}
      />

      <section className="py-16 sm:py-24 bg-[#F8F6F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLUBS_DATA.map((club) => (
              <div
                key={club.id}
                className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-2xs hover:border-[#102A43] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={club.image}
                    alt={club.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#102A43] text-[#D4A72C]">
                    {club.meetingTime}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#102A43] mb-1 group-hover:text-[#1D4ED8] transition-colors">
                      {club.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2">{club.tagline}</p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {club.introduction}
                    </p>
                  </div>
                  <Link
                    to={`/student-life/clubs/${club.slug}`}
                    className="text-xs font-bold text-[#102A43] group-hover:text-[#D4A72C] flex items-center justify-between pt-3 border-t border-slate-100 transition-colors"
                  >
                    <span>Club Details & Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const ClubDetailPage: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const club = CLUBS_DATA.find((c) => c.slug === clubId) || CLUBS_DATA[0];

  return (
    <div>
      <PageHero
        eyebrow="STUDENT SOCIETY"
        title={club.name}
        subtitle={club.tagline}
        breadcrumbs={[
          { label: 'Student Life', href: '/student-life' },
          { label: 'Clubs', href: '/student-life/clubs' },
          { label: club.name }
        ]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-10">
          
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#102A43] mb-3">About the Society</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{club.introduction}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#F8F6F0] rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block">Faculty Advisor:</span>
              <span className="font-serif font-bold text-base text-[#102A43]">{club.facultyAdvisor}</span>
            </div>
            <div className="p-5 bg-[#F8F6F0] rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 block">Schedule & Timings:</span>
              <span className="font-bold text-sm text-[#102A43]">{club.meetingTime}</span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-[#102A43] mb-3">Key Activities & Competitions</h3>
            <div className="space-y-2">
              {club.activities.map((act, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A72C] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700">{act}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/student-life/clubs"
              className="text-xs sm:text-sm font-semibold text-[#102A43] hover:text-[#D4A72C] inline-flex items-center gap-1.5"
            >
              ← Back to All Clubs & Societies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ArtsMusicPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="CREATIVE EXPRESSION"
        title="Visual & Performing Arts Conservatory"
        subtitle="Nurturing musical cadence, theatrical poise, orchestral symphony, and aesthetic imagination."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Arts & Music' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src="/images/music_orchestra_1790236991828.jpg"
                alt="Future Sunrise School Orchestra and Music Suite"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 bg-white space-y-1">
                <h4 className="font-serif font-bold text-lg text-[#102A43]">Symphony & Vocal Conservatory</h4>
                <p className="text-xs text-slate-600">Carnatic classical vocal training, Western violin, flute, keyboard and orchestral performances.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src="/images/arts_painting_studio_1790236966444.jpg"
                alt="Future Sunrise Fine Arts and Painting Studio"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 bg-white space-y-1">
                <h4 className="font-serif font-bold text-lg text-[#102A43]">Fine Arts & Painting Studio</h4>
                <p className="text-xs text-slate-600">Oil painting, watercolor landscapes, clay modeling, ceramic pottery, and student art gallery exhibits.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">Holistic Artistic Development</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our Department of Fine Arts offers dedicated studios for watercolor, oil painting, pottery, and digital design. In performing arts, students receive formal training in Carnatic vocal music, Western choir, keyboard, mridangam, violin, and classical Bharatanatyam dance under certified masters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const TechnologyPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="FUTURE-READY SKILLS"
        title="Technology, AI & Innovation"
        subtitle="Preparing young thinkers for artificial intelligence, automated robotics, and digital ethics."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Technology & Innovation' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl space-y-12">
          
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <img
              src="/images/robotics_innovation_1790236952194.jpg"
              alt="Future Sunrise School Robotics Lab and Maker Space"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">Maker Spaces & Applied AI Coding</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Starting from Grade 3, our scholars are introduced to visual block coding, advancing to Python, microcontroller programming (Arduino & Raspberry Pi), sensor integration, 3D rapid printing, and computer vision algorithms in middle and secondary school.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const EducationalToursPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="OUTDOOR LEARNING"
        title="Educational Expeditions & Field Studies"
        subtitle="Broadening horizons through historical excursions, nature treks, and scientific research conclaves."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Educational Tours' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl space-y-12">
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <img
              src="/images/hero_student_community_1790235798493.jpg"
              alt="Future Sunrise Student Expeditions"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">Empirical Learning Beyond Campus</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Annual study excursions take students to the Vikram Sarabhai Space Centre, astronomical observatories in Kavalur, heritage sanctuaries in Thanjavur, and ecological wetlands in Vedanthangal, cementing classroom concepts with live empirical experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CelebrationsPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="CAMPUS TRADITIONS"
        title="School Celebrations & Festivals"
        subtitle="Uniting students, parents, and faculty in jubilation, cultural harmony, and gratitude."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Celebrations' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-5xl space-y-12">
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <img
              src="/images/dance_performing_arts_1790236938143.jpg"
              alt="Future Sunrise School Cultural Celebrations"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102A43]">Vibrant Institutional Calendar</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Our campus calendar is enriched by grand celebrations of Independence Day, Republic Day, Pongal, Diwali, Christmas, Teacher’s Day, Children’s Day, and the flagship Tarang Annual Performing Arts Conclave.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const SocialActivitiesPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="COMMUNITY OUTREACH"
        title="Social Welfare & Community Outreach"
        subtitle="Engendering empathy through meaningful rural tutoring, health camps, and eco stewardship."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Social Activities' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-8">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Through the Interact Club and Eco Brigade, scholars lead paper recycling drives, tree plantations in local villages, digital literacy camps for senior citizens, and flood-relief fundraisers.
          </p>
        </div>
      </section>
    </div>
  );
};

export const ExtraCurricularPage: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="HOLISTIC EXPANSION"
        title="Extra-Curricular Activities"
        subtitle="Comprehensive co-curricular development across speech, theater, and athletic sports."
        breadcrumbs={[{ label: 'Student Life', href: '/student-life' }, { label: 'Extra-Curricular Activities' }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="site-container max-w-4xl space-y-8">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Every afternoon between 3:30 PM and 5:00 PM, classrooms transition into creative workshops where students cultivate hobbies into lifelong passions under seasoned master instructors.
          </p>
        </div>
      </section>
    </div>
  );
};
