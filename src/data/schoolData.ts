import {
  AcademicStage,
  AchievementItem,
  AnnouncementItem,
  CampusFacility,
  ClubItem,
  DownloadDocument,
  ExamResultYear,
  FacultyMember,
  FaqItem,
  GalleryAlbum,
  HeroSlide,
  NavItem,
  NewsArticle,
  SchoolEvent,
  StatItem,
  WhyChooseItem
} from '../types';

export const SCHOOL_INFO = {
  name: 'Future Sunrise International School',
  shortName: 'Future Sunrise',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  tagline: 'Shaping Minds. Building Futures.',
  establishedYear: 1999,
  affiliation: 'CBSE Affiliated · Affiliation No. 1930482',
  principal: {
    name: 'Dr. Anandhi Ramachandran, Ph.D., M.Ed.',
    designation: 'Principal & Academic Director',
    message: 'At Future Sunrise International School, we envision education as a continuous voyage of intellectual discovery and moral refinement. Our duty is not merely to prepare young minds for standardized assessments, but to cultivate independent thinkers who act with empathy, integrity, and visionary purpose.',
    fullLetter: `Welcome to Future Sunrise International School, an institution grounded in the timeless traditions of academic discipline and modern inquiry. Over the past twenty-five years, our campus has flourished into a sanctuary of learning where every child's innate potential is recognized, nurtured, and elevated.

We believe that true education harmonizes the pursuit of knowledge with the cultivation of character. Our dedicated faculty mentors students to question deeply, collaborate selflessly, and face a rapidly evolving global society with quiet confidence and moral clarity.

From our research-grade science and robotics laboratories to our Olympic-standard athletic fields, we provide the infrastructure necessary for complete personal growth. We invite every parent and guardian to partner with us as we shape the leaders and compassionate thinkers of tomorrow.`
  },
  correspondent: {
    name: 'Sri R. Sundaramurthy, B.E., M.B.A.',
    designation: 'Correspondent & Managing Trustee',
    message: 'Institutions endure when they are founded on noble purpose. Our commitment remains unwavering: providing accessible, world-class education rooted in traditional values.'
  },
  branches: [
    {
      id: 'kovur',
      name: 'Kovur - Main Campus',
      address: 'No. 42, Heritage Boulevard, Kovur, Chennai - 600128',
      phone: '+91 98765 43210',
      email: 'admissions.kovur@futuresunrise.edu.in',
      grades: 'Pre-KG to Grade 12'
    },
    {
      id: 'rathinamangalam',
      name: 'Rathinamangalam Campus',
      address: 'Vandalur-Kelambakkam Expressway, Rathinamangalam, Chennai - 600127',
      phone: '+91 98765 43210',
      email: 'admissions.rathi@futuresunrise.edu.in',
      grades: 'Pre-KG to Grade 10'
    },
    {
      id: 'angadu',
      name: 'Angadu (RedHills) Campus',
      address: 'Near Puzhal Lake, Angadu Main Road, RedHills, Chennai - 600067',
      phone: '+91 98765 43210',
      email: 'admissions.angadu@futuresunrise.edu.in',
      grades: 'Pre-KG to Grade 8'
    }
  ],
  generalContact: {
    phone: '+91 98765 43210',
    phoneHref: 'tel:+919876543210',
    alternatePhone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    whatsappHref: 'https://wa.me/919876543210',
    email: 'info@futuresunrise.edu.in',
    admissionEmail: 'admissions@futuresunrise.edu.in',
    hours: 'Monday – Saturday: 8:00 AM – 4:30 PM',
    officeHours: 'Administrative Office: 8:30 AM – 3:30 PM',
    visitingHours: 'Principal Meeting by Appointment: 2:30 PM – 4:00 PM'
  },
  socials: {
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  }
};

export const contactData = {
  name: 'Future Sunrise International School',
  shortName: 'Future Sunrise',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'info@futuresunrise.edu.in',
  admissionEmail: 'admissions@futuresunrise.edu.in',
  address: 'No. 42, Heritage Boulevard, Kovur, Chennai - 600128',
  officeHours: 'Monday – Saturday: 8:00 AM – 4:30 PM',
  administrativeHours: 'Administrative Office: 8:30 AM – 3:30 PM',
  whatsapp: '+91 98765 43210',
  whatsappHref: 'https://wa.me/919876543210'
};

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About Us',
    href: '/about',
    children: [
      { title: 'Our School', href: '/about', description: 'Our legacy, values and institutional ethos' },
      { title: 'Vision & Mission', href: '/about/vision-mission', description: 'Core principles guiding our community' },
      { title: 'History', href: '/about/history', description: 'Twenty-five years of academic heritage' },
      { title: "Principal's Message", href: '/about/principal-message', description: 'Academic leadership and guidance' },
      { title: "Correspondent's Message", href: '/about/correspondent-message', description: 'Vision from the management board' },
      { title: 'Management', href: '/about/management', description: 'Board of trustees and institutional stewards' },
      { title: 'School Leadership', href: '/about/school-leadership', description: 'Academic coordinators and administrators' }
    ]
  },
  {
    title: 'Academics',
    href: '/academics',
    children: [
      { title: 'Academics', href: '/academics', description: 'Pedagogical approach and academic rigor' },
      { title: 'Pre-Primary', href: '/academics/pre-primary', description: 'Early childhood exploration and care' },
      { title: 'Primary', href: '/academics/primary', description: 'Foundational literacy, numeracy and discovery' },
      { title: 'Middle School', href: '/academics/middle-school', description: 'Conceptual depth and critical inquiry' },
      { title: 'Secondary', href: '/academics/secondary', description: 'Comprehensive preparation for board excellence' },
      { title: 'Higher Secondary', href: '/academics/higher-secondary', description: 'Specialized disciplines in Science, Commerce & CS' },
      { title: 'Science', href: '/academics/higher-secondary/science', description: 'Physics, Chemistry, Math & Biology suites' },
      { title: 'Commerce', href: '/academics/higher-secondary/commerce', description: 'Accountancy, Economics & Business Studies' },
      { title: 'Computer Science', href: '/academics/higher-secondary/computer-science', description: 'Python, AI, Data Science & Machine Learning' },
      { title: 'Curriculum', href: '/academics/curriculum', description: 'CBSE aligned progressive learning pathways' },
      { title: 'Teaching Methodology', href: '/academics/teaching-methodology', description: 'Inquiry-driven, experiential pedagogy' },
      { title: 'Assessment', href: '/academics/assessment', description: 'Continuous holistic developmental feedback' }
    ]
  },
  {
    title: 'Student Life',
    href: '/student-life',
    children: [
      { title: 'Student Life', href: '/student-life', description: 'Vibrant campus culture and balanced development' },
      { title: 'Sports', href: '/student-life/sports', description: 'Professional coaching in multi-sport arenas' },
      { title: 'Clubs', href: '/student-life/clubs', description: 'Specialized clubs from Robotics to Eco-Warriors' },
      { title: 'Arts & Music', href: '/student-life/arts-music', description: 'Carnatic, Western classical and visual studios' },
      { title: 'Dance & Performing Arts', href: '/student-life/dance', description: 'Bharatanatyam, contemporary dance and theatre' },
      { title: 'Technology', href: '/student-life/technology', description: 'AI, coding, maker spaces and prototyping' },
      { title: 'Educational Tours', href: '/student-life/educational-tours', description: 'Field expeditions and heritage immersions' },
      { title: 'Celebrations', href: '/student-life/celebrations', description: 'Cultural festivals and national observances' },
      { title: 'Social Activities', href: '/student-life/social-activities', description: 'Community outreach and environmental service' }
    ]
  },
  {
    title: 'Campus',
    href: '/campus',
    children: [
      { title: 'Campus', href: '/campus', description: 'Sprawling 12-acre serene academic ecosystem' },
      { title: 'Smart Classrooms', href: '/campus/smart-classrooms', description: 'Interactive touch displays and acoustic comfort' },
      { title: 'Science Laboratory', href: '/campus/science-laboratory', description: 'Physics, Chemistry, and Biology research suites' },
      { title: 'Computer Laboratory', href: '/campus/computer-lab', description: 'Dual high-speed AI and computing suites' },
      { title: 'Library', href: '/campus/library', description: 'Over 22,000 titles and digital academic journals' },
      { title: 'Sports Facilities', href: '/campus/sports', description: 'Synthetic tracks, basketball courts & indoor arenas' },
      { title: 'Playground', href: '/campus/playground', description: 'Expansive natural turf and primary play gardens' },
      { title: 'Auditorium', href: '/campus/auditorium', description: '1,200-seat acoustically engineered proscenium hall' },
      { title: 'Transportation', href: '/campus/transportation', description: 'GPS-tracked, CCTV monitored air-conditioned fleet' },
      { title: 'Safety', href: '/campus/safety', description: '24/7 security guard forces and smart card access' }
    ]
  },
  {
    title: 'Achievements',
    href: '/achievements'
  },
  {
    title: 'Events',
    href: '/events'
  },
  {
    title: 'Gallery',
    href: '/gallery'
  },
  {
    title: 'Admissions',
    href: '/admissions'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];

export const TICKER_ANNOUNCEMENTS = [
  { id: '1', title: 'Admissions Open 2026–27: Pre-KG through Grade 11 Online Applications Active', link: '/admissions', tag: 'Admissions' },
  { id: '2', title: 'Annual Sports Day 2026: Track and Field Finals Schedule Announced', link: '/events', tag: 'Sports' },
  { id: '3', title: 'Mid-Term Examination Schedule & Term Syllabus Circular Published', link: '/announcements', tag: 'Exams' },
  { id: '4', title: 'Parent Teacher Meeting & Scholastic Review This Saturday', link: '/announcements', tag: 'PTM' },
  { id: '5', title: 'Merit Scholarship Applications for Grade 11 Science & Commerce Open', link: '/admissions', tag: 'Scholarships' },
  { id: '6', title: 'School Bus & Transportation Route Updates for Kovur & Vandalur Sectors', link: '/campus/transportation', tag: 'Transport' },
  { id: '7', title: 'CBSE State Rank Holders & Centum Achievers Honored at Conclave', link: '/results', tag: 'Results' }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'ADMISSIONS OPEN 2026–27',
    heading: 'Shaping Minds. Building Futures.',
    headingLine1: 'Shaping Minds.',
    headingLine2: 'Building Futures.',
    description: 'Quality education that inspires curiosity, character and lifelong learning.',
    primaryCtaText: 'Explore Our School',
    primaryCtaLink: '/about',
    secondaryCtaText: 'Admission Enquiry',
    secondaryCtaLink: '#admission-modal',
    image: '/images/hero_school_campus_1790234182884.jpg'
  },
  {
    id: 'slide-2',
    eyebrow: 'ACADEMIC EXCELLENCE',
    heading: 'Learning Beyond the Classroom.',
    headingLine1: 'Learning Beyond',
    headingLine2: 'the Classroom.',
    description: 'Cultivating analytical intellect, scholarly rigour, and enduring passion for knowledge.',
    primaryCtaText: 'Academic Programs',
    primaryCtaLink: '/academics',
    secondaryCtaText: 'Admission Enquiry',
    secondaryCtaLink: '#admission-modal',
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'slide-3',
    eyebrow: 'INNOVATION & DISCOVERY',
    heading: 'Discover. Create. Achieve.',
    headingLine1: 'Discover. Create.',
    headingLine2: 'Achieve.',
    description: 'Empowering young innovators through robotics, advanced science laboratories, and collaborative research.',
    primaryCtaText: 'Explore Campus',
    primaryCtaLink: '/campus',
    secondaryCtaText: 'Admission Enquiry',
    secondaryCtaLink: '#admission-modal',
    image: '/images/science_laboratory_1790234213070.jpg'
  },
  {
    id: 'slide-4',
    eyebrow: 'VIBRANT COMMUNITY',
    heading: 'Every Child. Every Possibility.',
    headingLine1: 'Every Child.',
    headingLine2: 'Every Possibility.',
    description: 'A nurturing environment fostering holistic values, athletic sportsmanship, and global citizenship.',
    primaryCtaText: 'Student Life',
    primaryCtaLink: '/student-life',
    secondaryCtaText: 'Admission Enquiry',
    secondaryCtaLink: '#admission-modal',
    image: '/images/hero_student_community_1790235798493.jpg'
  }
];

export const QUICK_STATS: StatItem[] = [
  {
    id: 'stat-1',
    value: '25+',
    label: 'Years of Excellence',
    description: 'Fostering academic distinction and moral integrity since 1999'
  },
  {
    id: 'stat-2',
    value: '1500+',
    label: 'Enrolled Scholars',
    description: 'Thriving across our three integrated, modern campus locations'
  },
  {
    id: 'stat-3',
    value: '100+',
    label: 'Distinguished Faculty',
    description: 'Mentors holding postgraduate credentials and pedagogical mastery'
  },
  {
    id: 'stat-4',
    value: '99.4%',
    label: 'Academic Excellence',
    description: 'Consistent board distinction pass rate across Science & Commerce'
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'why-1',
    title: 'Academic Excellence',
    description: 'Structured CBSE curriculum enriched with national Olympiad mentorship, conceptual mastery, and personalized academic support.',
    iconName: 'Award'
  },
  {
    id: 'why-2',
    title: 'Modern Infrastructure',
    description: 'Smart digital classrooms, high-precision STEM laboratories, and research-grade computing facilities designed for active learning.',
    iconName: 'Building'
  },
  {
    id: 'why-3',
    title: 'Experienced Faculty',
    description: 'Empathetic educators with decades of combined pedagogical experience committed to nurturing each student’s unique strengths.',
    iconName: 'GraduationCap'
  },
  {
    id: 'why-4',
    title: 'Holistic Development',
    description: 'A vibrant co-curricular ecosystem bridging competitive sports, classical performing arts, debate societies, and community engagement.',
    iconName: 'Compass'
  },
  {
    id: 'why-5',
    title: 'Safe & Supportive Campus',
    description: '24/7 CCTV surveillance, biometric monitoring, trained infirmary nurses, and dedicated emotional wellbeing counselors.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'why-6',
    title: 'Innovation & Creativity',
    description: 'Dedicated Tinkering Labs, robotics suites, and coding bootcamps cultivating inventive thinking from an early age.',
    iconName: 'Lightbulb'
  }
];

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    id: 'pre-primary',
    slug: 'pre-primary',
    title: 'Pre-Primary School',
    ageGroup: 'Ages 3 – 5.5 Years',
    grades: 'Pre-KG, LKG & UKG',
    shortDesc: 'A nurturing, play-integrated foundation fostering natural wonder, social empathy, phonics, and motor dexterity.',
    fullDesc: 'Our Early Years program is rooted in child-centered exploration. In warm, vibrant learning spaces, children build early phonetic mastery, number sense, spatial awareness, and interpersonal kindness through sensory experiences and joyful discovery.',
    highlights: ['Montessori & play-way fusion', 'Phonics & expressive language immersion', 'Sensory exploration corners', 'Low 1:12 teacher-to-child ratio'],
    subjects: ['Foundational English', 'Early Numeracy', 'Environmental Awareness', 'Creative Arts', 'Kinesthetic Play'],
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'primary',
    slug: 'primary',
    title: 'Primary School',
    ageGroup: 'Ages 6 – 10 Years',
    grades: 'Grades 1 to 5',
    shortDesc: 'Structured foundational literacy, logical reasoning, scientific curiosity, and collaborative learning habits.',
    fullDesc: 'The Primary School years mark the transition to structured academic inquiry. Students develop strong literacy in languages, mathematical intuition, scientific observation, and artistic expression within a supportive, joyful classroom setting.',
    highlights: ['Theme-based integrated learning', 'Mental math & reading clubs', 'Introduction to computer fundamentals', 'Outdoor sports and physical education'],
    subjects: ['English Language & Literature', 'Mathematics', 'General Science', 'Social Studies', 'Second Language (Tamil/Hindi)', 'Information Technology', 'Visual Arts'],
    image: '/images/hero_school_campus_1790234182884.jpg'
  },
  {
    id: 'middle-school',
    slug: 'middle-school',
    title: 'Middle School',
    ageGroup: 'Ages 11 – 13 Years',
    grades: 'Grades 6 to 8',
    shortDesc: 'Deepening conceptual understanding, scientific experimentation, analytical reading, and self-directed study skills.',
    fullDesc: 'Middle School bridges elementary foundational learning with rigorous disciplinary studies. Students begin formal laboratory experiments, project-based investigations, and structured debates to cultivate analytical thinking and independent work habits.',
    highlights: ['Dedicated laboratory sessions in Science', 'Math Olympiad foundation batches', 'Coding and algorithmic problem solving', 'Inter-house competitions in sports and culture'],
    subjects: ['Advanced English', 'Mathematics & Geometry', 'Physics, Chemistry & Biology', 'History & Civics', 'Geography', 'Second & Third Language', 'Computer Science'],
    image: '/images/science_laboratory_1790234213070.jpg'
  },
  {
    id: 'secondary',
    slug: 'secondary',
    title: 'Secondary School',
    ageGroup: 'Ages 14 – 15 Years',
    grades: 'Grades 9 & 10',
    shortDesc: 'Rigorous CBSE board syllabus preparation, critical thinking, career orientation, and academic excellence.',
    fullDesc: 'Our Secondary curriculum prepares students for the CBSE All India Secondary School Examination (AISSE). Through systematic practice, remedial coaching, and concept-deepening workshops, students attain scholastic brilliance while preserving personal wellness.',
    highlights: ['CBSE board exam mastery strategies', 'Regular diagnostic chapter assessments', 'Individual academic mentoring sessions', 'Career discovery seminars and aptitude tests'],
    subjects: ['English Communicative', 'Mathematics (Standard / Basic)', 'Integrated Science', 'Social Sciences', 'Hindi / Tamil / Sanskrit', 'Information Technology'],
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'higher-secondary',
    slug: 'higher-secondary',
    title: 'Higher Secondary School',
    ageGroup: 'Ages 16 – 17 Years',
    grades: 'Grades 11 & 12',
    shortDesc: 'Specialized streams in Science, Commerce, and Computer Science with focused entrance exam coaching for JEE, NEET, and CA-CPT.',
    fullDesc: 'The Higher Secondary program provides focused specialization under eminent senior educators. Students receive rigorous preparation for CBSE Senior School Certificate Examinations (AISSCE) alongside integrated orientation for national competitive examinations.',
    highlights: ['Science (Physics, Chemistry, Math/Bio)', 'Commerce (Accountancy, Business, Economics)', 'Computer Science & AI Electives', 'Integrated competitive exam orientation'],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Accountancy', 'Business Studies', 'Economics', 'Applied Mathematics', 'English Core'],
    image: '/images/science_laboratory_1790234213070.jpg'
  }
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'smart-classrooms',
    slug: 'smart-classrooms',
    title: 'Smart Classrooms',
    tagline: 'Digitally enhanced collaborative learning environments',
    shortDesc: 'Equipped with 75" 4K interactive touchscreen panels, dual-band Wi-Fi, ergonomic furniture, and climate-friendly ventilation.',
    fullDesc: 'Every classroom at Future Sunrise is engineered as a responsive learning sanctuary. Featuring interactive digital whiteboards, high-resolution multimedia projectors, and custom ergonomic seating, educators seamlessly weave digital simulations, video lectures, and live assessments into everyday instruction.',
    keyFeatures: ['75-inch 4K multi-touch interactive panels', 'Acoustically treated walls for speech clarity', 'Ergonomic orthopedic student seating', 'High-volume fresh air ventilation systems'],
    equipment: ['Interactive smart displays', 'Document cameras for live demonstration', 'Wireless audio systems', 'Teacher workstation terminals'],
    safetySpecs: ['Dual exit doors in all rooms', 'Concealed fire-retardant wiring', 'First-aid kits on each corridor'],
    studentActivities: ['Interactive quizzes and peer presentations', 'Virtual field trips to museums and space centers', 'Collaborative group problem solving'],
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'science-laboratory',
    slug: 'science-laboratory',
    title: 'Science Laboratory',
    tagline: 'Research-grade suites for Physics, Chemistry, and Biology',
    shortDesc: 'State-of-the-art workstations with precision optical instruments, fume hoods, and individual apparatus sets.',
    fullDesc: 'Our expansive Science Laboratories provide safe, sophisticated spaces where theoretical concepts transform into empirical understanding. Under faculty supervision, scholars master scientific methodologies using research-grade glassware, digital sensor probes, and microscopes.',
    keyFeatures: ['Dedicated Physics, Chemistry, and Biology wings', 'Central safety eye-wash and emergency shower stations', 'Chemical-resistant granite worktops with gas & water outlets', 'Digital data loggers and spectrophotometers'],
    equipment: ['Compound binocular microscopes', 'Digital analytical balances (0.001g precision)', 'Fume hoods with exhaust scrubbers', 'Spectroscopes, optical benches, and galvanic sets'],
    safetySpecs: ['Automatic emergency gas shutoff valve', 'Fire extinguishers & sand buckets in every bay', 'Protective lab coats and safety goggles mandatory'],
    studentActivities: ['Titration and chemical synthesis experiments', 'Specimen microtomy and slide preparation', 'Projectile motion and circuit analysis'],
    image: '/images/science_laboratory_1790234213070.jpg'
  },
  {
    id: 'computer-lab',
    slug: 'computer-lab',
    title: 'Computer Laboratory',
    tagline: 'High-speed computing and artificial intelligence lab',
    shortDesc: 'Over 80 high-performance workstations configured with modern programming environments and robotics simulators.',
    fullDesc: 'Our computer laboratory offers a premier technological environment for students across all grades. From introductory coding with Python and Scratch to advanced database architecture, web development, and robotics interfacing, students receive hands-on instruction.',
    keyFeatures: ['80+ modern Core i7 workstations', 'High-speed 1 Gbps fiber optic internet', 'Centralized network storage with automated student backups', 'Dedicated AI and Data Science development tools'],
    equipment: ['Dell OptiPlex desktop workstations', 'Arduino & Raspberry Pi robotics hardware', 'Enterprise firewall and student-safe internet filter'],
    safetySpecs: ['Centralized uninterrupted power supply (UPS)', 'Static-free raised flooring', 'Surveillance and remote monitor management'],
    studentActivities: ['Competitive programming and algorithm design', 'Web development and mobile UI prototyping', 'Robotics sensor coding and automation experiments'],
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'library',
    slug: 'library',
    title: 'Library & Reading Suite',
    tagline: 'A peaceful sanctum housing over 22,000 literary and research volumes',
    shortDesc: 'Carefully curated collection spanning classical literature, encyclopedias, competitive exam materials, and digital journals.',
    fullDesc: 'The central library is the intellectual soul of our campus. Lined with rich teak bookshelves and silent reading alcoves, it fosters deep reflective study and a lifelong devotion to reading. Students have access to national dailies, research periodicals, and digital e-book archives.',
    keyFeatures: ['22,000+ print volumes cataloged digitally', 'Dedicated digital journal access terminals', 'Silent reading zone and separate discussion room', 'Weekly curated book spotlight and author discussions'],
    equipment: ['Automated RFID book checkout kiosks', 'OPAC search stations', 'Kindle e-readers for senior literature scholars'],
    safetySpecs: ['Fire safety sprinkler system', 'Constant humidity and temperature control for archival volumes'],
    studentActivities: ['Literary circles and book reviews', 'Senior research paper methodology classes', 'Daily newspaper reading hours'],
    image: '/images/school_library_1790236979658.jpg'
  },
  {
    id: 'sports',
    slug: 'sports',
    title: 'Sports Facilities',
    tagline: 'World-class athletic infrastructure and training arenas',
    shortDesc: 'Synthetic basketball courts, FIFA-specification football turf, cricket nets, badminton courts, and athletics tracks.',
    fullDesc: 'Physical wellness is a cornerstone of our heritage ethos. Our multi-acre sports complex features professional surfaces and full-time certified coaches for athletics, cricket, football, basketball, badminton, table tennis, and yoga.',
    keyFeatures: ['Floodlit synthetic basketball court', 'Full-sized football ground with natural grass', '4-lane 400m athletic track', 'Indoor badminton and table tennis pavilion'],
    equipment: ['Cricket bowling machines and protective gear', 'Olympic standard high jump and pole vault mattresses', 'Automated timing gates for sprint timing'],
    safetySpecs: ['Certified first-aid paramedics on duty during games', 'Non-slip shock-absorbing sports flooring'],
    studentActivities: ['Daily house sports league tournaments', 'State-level tournament hosting', 'Morning athletic conditioning sessions'],
    image: '/images/sports_athletics_1790236923140.jpg'
  },
  {
    id: 'playground',
    slug: 'playground',
    title: 'Playground & Primary Greens',
    tagline: 'Safe, verdant open-air recreation spaces for younger scholars',
    shortDesc: 'Dedicated rubber-matted play stations, swings, sand pits, and lush grass gardens designed for elementary students.',
    fullDesc: 'Designed specifically for our early years and primary children, this fenced outdoor park offers age-appropriate climbing structures, sensory sand boxes, and shaded pavilions where children develop motor coordination and social play.',
    keyFeatures: ['Impact-absorbing EPDM rubber safety flooring', 'European safety certified play equipment', 'Lush botanical garden borders with plant identification tags'],
    equipment: ['Multi-tier jungle gyms with safety slides', 'Sensory balance beams and rope bridges', 'Shaded sand pit with water play section'],
    safetySpecs: ['Full perimeter fencing with child-safe gate locks', 'Continuous teacher supervision during all recess slots'],
    studentActivities: ['Structured movement games', 'Nature exploration and gardening lessons', 'Free creative outdoor play'],
    image: '/images/hero_school_campus_1790234182884.jpg'
  },
  {
    id: 'auditorium',
    slug: 'auditorium',
    title: 'Grand Auditorium',
    tagline: 'A 1,200-seat proscenium venue for performing arts and conferences',
    shortDesc: 'Acoustically modeled theater with line-array audio, motorized stage lighting, green rooms, and orchestra pit.',
    fullDesc: 'Our magnificent auditorium hosts school assemblies, national drama productions, musical recitals, and academic convocations. Engineered with theater-grade acoustics and high-lumen laser projection, it gives every student a professional stage to showcase their talents.',
    keyFeatures: ['1,200 plush upholstered push-back seats', 'Motorized scenic backdrops and cyclorama screen', 'Professional backstage green rooms and rehearsal wings'],
    equipment: ['Yamaha digital audio mixing consoles', 'JBL line-array sound reinforcement system', 'DMX computerized intelligent stage lighting'],
    safetySpecs: ['Four wide emergency exits with panic push bars', 'Automatic stage fire deluge system'],
    studentActivities: ['Annual drama and musical productions', 'Inter-school Model United Nations debates', 'Guest lectures by renowned scientists and dignitaries'],
    image: '/images/dance_performing_arts_1790236938143.jpg'
  },
  {
    id: 'transportation',
    slug: 'transportation',
    title: 'School Transportation Fleet',
    tagline: 'Safe, punctual, and GPS-connected student transit',
    shortDesc: 'A fleet of 35 air-conditioned buses covering extensive routes across Chennai with lady attendants and live tracking.',
    fullDesc: 'Our institutional fleet provides hassle-free and secure transit across residential corridors in Chennai. Each bus is manned by experienced, verified drivers and a caring female attendant, with automated speed governors and live parent mobile tracking.',
    keyFeatures: ['35 dedicated air-conditioned school buses', 'Real-time GPS tracking accessible via school parent portal', 'On-board CCTV cameras covering all seating rows', 'Female attendant present on every single trip'],
    equipment: ['Digital breathalyzer tests for drivers before every shift', 'Speed limiters calibrated strictly to 40 km/h', 'Emergency SOS buttons at every row'],
    safetySpecs: ['Mandatory seatbelts for all passengers', 'First-aid kits and emergency window hammers'],
    studentActivities: ['Field trip transport', 'Inter-school sports tournament travel', 'Convenient daily door-to-corridor pickup'],
    image: '/images/hero_school_campus_1790234182884.jpg'
  },
  {
    id: 'canteen',
    slug: 'canteen',
    title: 'Dining Hall & Healthy Canteen',
    tagline: 'Wholesome, nutritious vegetarian dining prepared in pristine conditions',
    shortDesc: 'Spacious dining facility serving balanced, chef-prepared meals under the guidance of certified pediatric nutritionists.',
    fullDesc: 'We view nutrition as vital to cognitive performance. Our spotless central dining hall serves freshly prepared breakfast, mid-morning health drinks, and hot vegetarian lunches prepared with cold-pressed oils, organic millets, fresh vegetables, and dairy from trusted local farms.',
    keyFeatures: ['500-seat dining hall with stainless steel banquet tables', 'Reverse Osmosis (RO) purified drinking water stations', 'Zero junk-food policy with nutrient-dense weekly menus'],
    equipment: ['Commercial steam cooking boilers', 'Automated dish sanitizer and ultraviolet drying unit', 'Cold room storage for fresh vegetables and milk'],
    safetySpecs: ['Daily water testing certificates displayed publicly', 'Staff wear hygiene hairnets, aprons, and food-grade gloves'],
    studentActivities: ['Table etiquette and community dining', 'Nutrition awareness workshops', 'Zero food waste student campaigns'],
    image: '/images/hero_school_campus_1790234182884.jpg'
  },
  {
    id: 'safety',
    slug: 'safety',
    title: 'Safety, Security & Health Center',
    tagline: 'Comprehensive physical, emotional, and medical care protocols',
    shortDesc: '300+ CCTV surveillance cameras, round-the-clock security personnel, fire safety infrastructure, and a fully staffed infirmary.',
    fullDesc: 'Nothing precedes the safety of our scholars. Future Sunrise maintains strict campus access control, automated visitor registration with digital photos, a dedicated pediatric infirmary with a registered nurse on duty, and routine mock disaster drills.',
    keyFeatures: ['300+ high-definition night-vision CCTV coverage', '24/7 trained security guards stationed at all perimeters', 'Pediatric medical infirmary with tie-ups to nearby tertiary hospitals', 'Full-time licensed child psychologists and counselors on campus'],
    equipment: ['Automated external defibrillator (AED)', 'Emergency oxygen cylinders and nebulizers', 'Digital visitor RFID management stations'],
    safetySpecs: ['Police-verified credentials for all non-teaching staff', 'Anti-bullying committee and student grievance boxes'],
    studentActivities: ['Annual fire drill and emergency evacuation training', 'Health checkup camps (dental, vision, BMI)', 'Personal safety awareness workshops'],
    image: '/images/hero_school_campus_1790234182884.jpg'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    year: 2026,
    category: 'academic',
    title: 'National Science Olympiad (NSO) Gold Medal',
    recipient: 'K. Sai Siddarth (Grade 11)',
    gradeLevel: 'Grade 11',
    level: 'National',
    description: 'Secured All India Rank 4 in the 28th National Science Olympiad with a percentile of 99.98% and received the President Commendation.'
  },
  {
    id: 'ach-2',
    year: 2026,
    category: 'sports',
    title: 'CBSE South Zone Athletics Championship',
    recipient: 'S. Harini & School Relay Team',
    gradeLevel: 'Grade 10',
    level: 'South Zone',
    description: 'Broke the 4x100m relay record clocking 49.82 seconds to capture the gold medal at the South Zone CBSE Athletics Meet in Hyderabad.'
  },
  {
    id: 'ach-3',
    year: 2026,
    category: 'competitions',
    title: 'First Prize at IIT Madras Junior Innovators Fair',
    recipient: 'Robotics Club Senior Team',
    gradeLevel: 'Grades 10 & 11',
    level: 'State',
    description: 'Constructed an autonomous agricultural drone system for precise pest detection, securing a grant prize of ₹1,00,000 from the incubation cell.'
  },
  {
    id: 'ach-4',
    year: 2025,
    category: 'academic',
    title: 'CBSE Board Grade 12 All-India Top 1%',
    recipient: 'Meera Raghavan (Commerce Stream)',
    gradeLevel: 'Grade 12',
    level: 'National',
    description: 'Secured 496/500 marks with centum scores in Accountancy, Business Studies, and Economics, ranking among the top scholars in India.'
  },
  {
    id: 'ach-5',
    year: 2025,
    category: 'cultural',
    title: 'State Level Classical Carnatic Vocal Champion',
    recipient: 'R. Vigneshwar (Grade 9)',
    gradeLevel: 'Grade 9',
    level: 'State',
    description: 'Awarded the Yuva Kala Ratna award at the Tamil Nadu State Music Academy inter-school cultural grand festival.'
  },
  {
    id: 'ach-6',
    year: 2025,
    category: 'awards',
    title: 'Exemplary Green School of the Year 2025',
    recipient: 'Future Sunrise International School',
    gradeLevel: 'Institutional',
    level: 'National',
    description: 'Conferred by the Centre for Science and Environment for 100% solar self-sufficiency, zero single-use plastic, and greywater recycling.'
  },
  {
    id: 'ach-7',
    year: 2024,
    category: 'student-achievers',
    title: 'Youngest Scholar at National Mathematical Conclave',
    recipient: 'Aditya Narayanan (Grade 8)',
    gradeLevel: 'Grade 8',
    level: 'National',
    description: 'Published an original paper on prime number modular distribution in the Indian Student Mathematical Journal at the age of 13.'
  },
  {
    id: 'ach-8',
    year: 2024,
    category: 'sports',
    title: 'State Badminton Under-17 Singles Trophy',
    recipient: 'T. Kavitha (Grade 11)',
    gradeLevel: 'Grade 11',
    level: 'State',
    description: 'Triumphant champion at the Tamil Nadu State Ranking Tournament, representing the district at the Junior Nationals in Bangalore.'
  },
  {
    id: 'ach-9',
    year: 2023,
    category: 'academic',
    title: 'Kishore Vaigyanik Protsahan Yojana (KVPY) Fellow',
    recipient: 'G. Varun Kumar (Grade 12)',
    gradeLevel: 'Grade 12',
    level: 'National',
    description: 'Selected for the prestigious government science fellowship with admission offer to the Indian Institute of Science (IISc), Bengaluru.'
  }
];

export const SCHOOL_EVENTS: SchoolEvent[] = [
  {
    id: 'event-1',
    slug: 'annual-sports-day-2026',
    title: '26th Annual Athletic Meet & Sports Extravaganza 2026',
    category: 'sports',
    date: 'April 12, 2026',
    time: '8:30 AM – 3:30 PM',
    venue: 'Main Campus Stadium & Track',
    isUpcoming: true,
    year: 2026,
    shortDesc: 'A grand celebration of athletic grit, house march-pasts, track and field finals, and martial arts displays.',
    description: 'The 26th Annual Sports Day brings together students across our three campuses. Featuring our traditional torch-lighting relay, disciplined inter-house march past, track finals from 100m to 1500m, high jump, shot put, and an invigorating yoga-aerobics drill.',
    highlights: ['Torch relay led by national level student athletes', 'Four house contingents: Emerald, Ruby, Sapphire, Topaz', 'Special parent & alumni sprint challenges', 'Trophy presentation by international athletes'],
    participants: 'Over 800 student athletes across all age divisions',
    image: '/images/sports_athletics_1790236923140.jpg'
  },
  {
    id: 'event-2',
    slug: 'science-exhibition-2026',
    title: 'Science & Future Tech Symposium 2026',
    category: 'academic',
    date: 'April 25, 2026',
    time: '9:00 AM – 4:00 PM',
    venue: 'APJ Abdul Kalam Exhibition Hall',
    isUpcoming: true,
    year: 2026,
    shortDesc: 'Over 120 student-built interactive models in renewable energy, biotechnology, robotics, and environmental stewardship.',
    description: 'An open-doors public science conclave where young researchers from Grade 4 to Grade 12 demonstrate working prototypes, live chemical syntheses, and automated AI models to parents, visiting scientists, and peer schools.',
    highlights: ['Keynote address by senior ISRO propulsion engineer', 'Live solar-powered vehicle race on campus grounds', 'Interactive robotics arena and battlebot challenge', 'Biotechnology plant tissue culture workshop'],
    participants: '120 project teams representing all three campus branches',
    image: '/images/science_laboratory_1790234213070.jpg'
  },
  {
    id: 'event-3',
    slug: 'founder-day-celebration-2026',
    title: 'Silver Jubilee Founder’s Day Celebration',
    category: 'celebrations',
    date: 'May 10, 2026',
    time: '5:00 PM – 8:30 PM',
    venue: 'Grand Proscenium Auditorium',
    isUpcoming: true,
    year: 2026,
    shortDesc: 'Commemorating twenty-five illustrious years of educational leadership, honored alumni, and outstanding faculty felicitations.',
    description: 'An evening of reflection, musical grandeur, and institutional awards marking our milestone Silver Jubilee. The program features our 100-student orchestra, historical dance theatricals, and felicitations of founder teachers.',
    highlights: ['Unveiling of the 25-year commemorative heritage archive', 'Felicitation of 15 long-serving educators and staff', 'Historical Broadway-style dance drama "The Journey of Knowledge"', 'Gala dinner for management, faculty, and alumni'],
    participants: 'Entire school community, alumni, and invited dignitaries',
    image: '/images/dance_performing_arts_1790236938143.jpg'
  },
  {
    id: 'event-4',
    slug: 'annual-cultural-fiesta-2025',
    title: 'Tarang 2025: Annual Cultural Arts Carnival',
    category: 'cultural',
    date: 'December 20, 2025',
    time: '4:30 PM – 9:00 PM',
    venue: 'Main Campus Open Air Theater',
    isUpcoming: false,
    year: 2025,
    shortDesc: 'Vibrant cultural tapestry featuring classical fusion dance, Indian folk pageants, and multilingual theatrical plays.',
    description: 'Tarang 2025 celebrated the rich cultural kaleidoscope of India. More than 600 students dazzled audiences with Bharatanatyam and Kathak rhythms, instrumental sitar and violin jugalbandi, and an adaptation of Shakespeare’s The Tempest.',
    highlights: ['Folk dances from 12 distinct Indian states', 'Shakespearean stage drama enacted by senior literary society', 'Symphonic fusion orchestra with 60 live instrumentalists', 'Over 2,000 enthusiastic parents in attendance'],
    participants: '650 student performers across Kindergarten to Grade 12',
    results: ['Overall Cultural Trophy awarded to Ruby House', 'Best Stage Actor: Siddharth Menon (Grade 11)'],
    image: '/images/music_orchestra_1790236991828.jpg'
  },
  {
    id: 'event-5',
    slug: 'inter-school-mun-2025',
    title: 'Future Sunrise Model United Nations Conclave (FSISMUN 2025)',
    category: 'academic',
    date: 'October 14, 2025',
    time: '8:30 AM – 5:00 PM',
    venue: 'Grand Auditorium & Conference Suites',
    isUpcoming: false,
    year: 2025,
    shortDesc: 'A two-day diplomatic conference with 24 delegate schools debating global diplomacy, sustainability, and ethics.',
    description: 'FSISMUN 2025 simulated five high-level UN councils including UNSC, UNHRC, and UNEP. Delegates rigorously drafted working resolutions on international cyber-security treaties and climate migration.',
    highlights: ['Keynote by Former Ambassador of India to the Netherlands', 'Simulation of historical 1962 crisis cabinet', 'Midnight emergency resolution voting sessions'],
    participants: '280 delegates from 24 reputed South Indian schools',
    results: ['Best Delegation: National Public School, Bangalore', 'Best Delegate (UNSC): Priyadarshini K. (FSIS)'],
    image: '/images/hero_school_campus_1790234182884.jpg'
  }
];

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: 'album-1',
    slug: 'annual-day-2026',
    title: 'Silver Jubilee Annual Day & Cultural Gala',
    category: 'events',
    date: 'February 2026',
    coverImage: '/images/hero_school_campus_1790234182884.jpg',
    photoCount: 16,
    photos: [
      { url: '/images/hero_school_campus_1790234182884.jpg', caption: 'Grand ceremonial lamp lighting by distinguished trustees and Principal' },
      { url: '/images/hero_classroom_learning_1790234194929.jpg', caption: 'Primary school scholars presenting traditional welcome dance' },
      { url: '/images/science_laboratory_1790234213070.jpg', caption: 'Senior student orchestra performing symphonic classical symphony' }
    ]
  },
  {
    id: 'album-2',
    slug: 'science-stem-fair',
    title: 'STEM Innovation & Robotics Expo',
    category: 'academics',
    date: 'January 2026',
    coverImage: '/images/science_laboratory_1790234213070.jpg',
    photoCount: 14,
    photos: [
      { url: '/images/science_laboratory_1790234213070.jpg', caption: 'High school students demonstrating chemical titration indicators' },
      { url: '/images/hero_classroom_learning_1790234194929.jpg', caption: 'Robotics team testing autonomous obstacle-avoiding mobile cart' }
    ]
  },
  {
    id: 'album-3',
    slug: 'campus-architecture',
    title: 'Serene Campus Grounds & Facilities',
    category: 'campus',
    date: 'November 2025',
    coverImage: '/images/hero_school_campus_1790234182884.jpg',
    photoCount: 18,
    photos: [
      { url: '/images/hero_school_campus_1790234182884.jpg', caption: 'Colonnaded red-brick heritage academic block in morning sunlight' },
      { url: '/images/hero_classroom_learning_1790234194929.jpg', caption: 'Ergonomic smart classroom with interactive touch display in session' }
    ]
  },
  {
    id: 'album-4',
    slug: 'sports-meet-glory',
    title: 'Inter-House Athletic Championship',
    category: 'sports',
    date: 'October 2025',
    coverImage: '/images/hero_school_campus_1790234182884.jpg',
    photoCount: 22,
    photos: [
      { url: '/images/hero_school_campus_1790234182884.jpg', caption: 'Disciplined house march past contingents saluting the school flag' },
      { url: '/images/science_laboratory_1790234213070.jpg', caption: 'Senior 100m sprint finals at the synthetic track' }
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'science-exhibition-2026',
    title: 'Future Sunrise Young Scientists Win Acclaim at State Science Congress',
    category: 'Academic',
    publishDate: 'March 18, 2026',
    author: 'Department of Natural Sciences',
    readTime: '3 min read',
    summary: 'Our student research teams swept gold honors for their low-cost water purification prototype using agricultural biomass.',
    content: [
      'A delegation of eight students from Future Sunrise International School won the first place overall championship at the Tamil Nadu State Science Congress held in Coimbatore.',
      'Their innovative project, titled "Biomimetic Cellulose Filtration for Groundwater Decontamination," was praised by university panel judges for its practical viability in rural communities.',
      'The school will now provide financial sponsorship for the students to file a provisional patent under guidance from university mentors.'
    ],
    image: '/images/science_laboratory_1790234213070.jpg'
  },
  {
    id: 'news-2',
    slug: 'cbse-board-prep-workshops',
    title: 'Comprehensive Board Exam Mentorship Commences for Grades 10 and 12',
    category: 'Academic',
    publishDate: 'March 05, 2026',
    author: 'Academic Directorate',
    readTime: '4 min read',
    summary: 'Dedicated clinical review sessions, mental resilience coaching, and one-on-one doubt clarification clinics launched.',
    content: [
      'With board examinations approaching, the senior faculty council has inaugurated daily targeted doubt-clearing sessions and stress-mitigation workshops for all Grade 10 and 12 scholars.',
      'Special sessions led by eminent child psychologists and seasoned board examiners focus on time management, precise answer formatting, and maintaining physical vitality.'
    ],
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'news-3',
    slug: 'admissions-open-2026-27',
    title: 'Admissions Open for Academic Year 2026–27 Across All Three Branches',
    category: 'School News',
    publishDate: 'February 22, 2026',
    author: 'Admissions Office',
    readTime: '2 min read',
    summary: 'Limited seats available for Pre-KG to Grade 11. Parent campus walkthroughs and interactive sessions scheduled.',
    content: [
      'Future Sunrise International School announces the formal opening of admission registrations for the 2026–27 academic calendar.',
      'Parents interested in exploring our campuses in Kovur, Rathinamangalam, or RedHills may submit an enquiry online or attend Saturday guided open-house sessions.'
    ],
    image: '/images/hero_school_campus_1790234182884.jpg'
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Anandhi Ramachandran, Ph.D.',
    category: 'Principal',
    designation: 'Principal & Head of Academic Council',
    department: 'Institutional Leadership',
    qualification: 'Ph.D. in Educational Psychology (Madras Univ), M.Ed., M.Sc. Physics',
    experienceYears: 26,
    bio: 'Renowned educationist with over two decades shaping CBSE institutions across South India.'
  },
  {
    id: 'fac-2',
    name: 'Mr. S. Krishnamurthy, M.Sc., M.Ed.',
    category: 'Academic Leadership',
    designation: 'Vice Principal & Senior Secondary Dean',
    department: 'Mathematics & Science',
    qualification: 'M.Sc. Mathematics, M.Ed., B.Sc.',
    experienceYears: 22,
    bio: 'Expert evaluator for CBSE board examinations and mentor for Math Olympiad aspirants.'
  },
  {
    id: 'fac-3',
    name: 'Mrs. V. Revathi, M.A., B.Ed.',
    category: 'Academic Leadership',
    designation: 'Headmistress - Middle School & Primary',
    department: 'Humanities & Languages',
    qualification: 'M.A. English Literature, B.Ed., PGCTE (EFL Univ)',
    experienceYears: 18,
    bio: 'Pioneer in early literacy curricula, phonics workshops, and inclusive classroom strategies.'
  },
  {
    id: 'fac-4',
    name: 'Dr. T. Rajesh Kumar, Ph.D.',
    category: 'Teaching Faculty',
    designation: 'Senior PGT Chemistry & Research Mentor',
    department: 'Chemistry',
    qualification: 'Ph.D. in Organic Chemistry, B.Ed., NET Certified',
    experienceYears: 15,
    bio: 'Guides high school students in state science fair research and competitive chemistry.'
  },
  {
    id: 'fac-5',
    name: 'Mrs. Jayashree Balaji, M.Sc., B.Ed.',
    category: 'Teaching Faculty',
    designation: 'Senior PGT Physics',
    department: 'Physics',
    qualification: 'M.Sc. Physics, B.Ed., Gold Medalist',
    experienceYears: 16,
    bio: 'Passionate about experiential physics through hands-on laboratory setups.'
  },
  {
    id: 'fac-6',
    name: 'Mr. N. Arun Prasad, M.C.A., B.Ed.',
    category: 'Teaching Faculty',
    designation: 'Head of Computer Science & AI',
    department: 'Computer Science',
    qualification: 'Master of Computer Applications, B.Ed.',
    experienceYears: 12,
    bio: 'Mentors coding teams in Python, algorithms, and artificial intelligence projects.'
  },
  {
    id: 'fac-7',
    name: 'Capt. R. Murali (Retd.), M.P.Ed.',
    category: 'Administrative Staff',
    designation: 'Director of Physical Education & Sports',
    department: 'Athletics',
    qualification: 'M.P.Ed., NIS Certified Athletic Coach',
    experienceYears: 20,
    bio: 'Former Indian Army officer steering school fitness and championship squads.'
  },
  {
    id: 'fac-8',
    name: 'Mrs. Deepa Sridhar, M.Com.',
    category: 'Administrative Staff',
    designation: 'Chief Administrative Officer & Registrar',
    department: 'Administration',
    qualification: 'M.Com, Diploma in Institutional Management',
    experienceYears: 14,
    bio: 'Oversees campus operations, transportation logistics, and parent liaison.'
  },
  {
    id: 'fac-9',
    name: 'Sister Mary Joseph, B.Sc. Nursing',
    category: 'Support Staff',
    designation: 'Chief Campus Medical Officer',
    department: 'Infirmary & Wellness',
    qualification: 'B.Sc. Nursing, Certified Pediatric First Responder',
    experienceYears: 17,
    bio: 'Maintains health logs, first-aid safety protocols, and student medical care.'
  }
];

export const CLUBS_DATA: ClubItem[] = [
  {
    id: 'science',
    slug: 'science',
    name: 'Marie Curie Science Discovery Club',
    tagline: 'Fostering deep inquiry, experimentation, and scientific deduction',
    introduction: 'The Science Club provides curious scholars with laboratory opportunities outside the standard syllabus. Members build astronomical telescopes, synthesize bio-polymers, and present independent research at national science meets.',
    objectives: [
      'Cultivate the scientific method and empirical curiosity',
      'Provide research mentorship for inter-school science fairs',
      'Conduct community water and soil quality testing camps'
    ],
    activities: [
      'Weekly hands-on laboratory experiments',
      'Guest lectures by prominent scientists and researchers',
      'Field expeditions to botanical sanctuaries and planetariums'
    ],
    projects: [
      'Solar-powered hydroponic herbal garden on campus',
      'Low-cost biodegradable leaf tableware prototype',
      'Campus weather observation and microclimate tracking'
    ],
    competitions: ['National Children’s Science Congress', 'State Level Science Olympiad'],
    achievements: ['First Prize at State Science Congress 2026', 'Overall Rolling Trophy at SRM TechFest 2025'],
    image: '/images/science_laboratory_1790234213070.jpg'
  },
  {
    id: 'maths',
    slug: 'maths',
    name: 'Srinivasa Ramanujan Mathematics Society',
    tagline: 'Unraveling the beauty of patterns, logic, and pure numbers',
    introduction: 'For lovers of puzzles, geometry, and number theory, the Ramanujan Society explores the aesthetic wonders of mathematics. From Rubik’s speedcubing to advanced mathematical Olympiad problem sets, members sharpen their intellectual edge.',
    objectives: [
      'Demystify complex mathematical theorems through visual proofs',
      'Train students for national and international math olympiads',
      'Promote mental arithmetic agility and Vedic math shortcuts'
    ],
    activities: ['Pi Day mathematical riddle challenges', 'Weekly Olympiad problem-solving marathons', 'Origami and geometric modeling workshops'],
    projects: ['Creation of an interactive Math Museum in the middle block', 'Algorithmic fractal art generation using graphing tools'],
    competitions: ['RMO (Regional Mathematical Olympiad)', 'Australian Mathematics Competition'],
    achievements: ['Gold Medalist at All-India Ramanujan Math Olympiad 2025'],
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'coding',
    slug: 'coding',
    name: 'Turing Code & AI Guild',
    tagline: 'Empowering future software architects and machine learning innovators',
    introduction: 'The Coding Guild offers a modern developer sandbox. Students write clean Python code, design intuitive responsive web experiences, and build machine learning classifiers to solve real-world problems.',
    objectives: [
      'Instill strong algorithmic logic and data structures foundations',
      'Encourage open-source contribution and collaborative teamwork',
      'Foster responsible and ethical approaches to Artificial Intelligence'
    ],
    activities: ['Intra-school 24-hour Hackathon challenge', 'Workshops on Git, web development, and Python data science', 'Guest webinars with industry software engineers'],
    projects: ['Automated school bus timetable and tracking web app', 'Campus waste sorting computer-vision classifier'],
    competitions: ['Google Code-in legacy challenges', 'National Informatics Olympiad'],
    achievements: ['Top 10 Finalist at National Smart India Junior Hackathon'],
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'literary',
    slug: 'literary',
    name: 'Cicero Literary & Debating Society',
    tagline: 'Mastering the spoken and written word with eloquence and courage',
    introduction: 'The Cicero Society is the training ground for our debaters, orators, poets, and writers. Through parliamentary debates, Model UN simulations, and poetry workshops, scholars articulate nuanced viewpoints with confidence.',
    objectives: [
      'Hone public speaking, articulation, and persuasive argumentation',
      'Nurture creative writing, editorial writing, and journalistic critique',
      'Publish the school literary quarterly magazine, The Heritage Quill'
    ],
    activities: ['Weekly parliamentary debate motions', 'Creative writing workshops on short fiction and poetry', 'Editorial board compilation of the school gazette'],
    projects: ['Publication of the annual student anthology of essays and verse', 'Inter-house dramatic monologue festival'],
    competitions: ['All-India Frank Anthony Memorial Debate', 'National Model UN Conferences'],
    achievements: ['Best Delegation Trophy at Chennai Inter-School Debate League 2025'],
    image: '/images/hero_school_campus_1790234182884.jpg'
  },
  {
    id: 'eco',
    slug: 'eco',
    name: 'Prakriti Eco & Sustainability Warriors',
    tagline: 'Champions of environmental stewardship and carbon neutrality',
    introduction: 'The Prakriti Club spearheads green initiatives across our three campuses. Members spearhead rainwater harvesting audits, manage organic compost pits, plant indigenous native trees, and educate peer students on zero-waste living.',
    objectives: [
      'Promote conservation of water, biodiversity, and energy',
      'Eliminate single-use plastics from campus and surrounding shops',
      'Foster hands-on urban organic agriculture'
    ],
    activities: ['Campus carbon footprint measurement drives', 'Seed-ball preparation and reforestation drives near Puzhal lake', 'Recycling and e-waste collection campaigns'],
    projects: ['100% campus organic wet-waste vermicomposting plant', 'Butterfly and pollinator garden with native Tamil Nadu flora'],
    competitions: ['Wipro Earthian National Green School Award', 'Paryavaran Mitra Challenge'],
    achievements: ['Recognized as Top 5 Sustainable School Campuses in South India'],
    image: '/images/hero_school_campus_1790234182884.jpg'
  },
  {
    id: 'quiz',
    slug: 'quiz',
    name: 'MindQuest General Knowledge & Quiz Club',
    tagline: 'Cultivating insatiable curiosity about our universe, history, and current affairs',
    introduction: 'The Quiz Club brings together scholars with an encyclopedic memory and insatiable thirst for knowledge. From ancient civilizations to contemporary space exploration, our quiz teams represent the school at prestigious national televised quiz bowls.',
    objectives: [
      'Broaden awareness of world history, science, geography, and culture',
      'Enhance rapid lateral thinking and deductive quiz reasoning',
      'Host the flagship annual Future Sunrise Mastermind Interschool Quiz'
    ],
    activities: ['Weekly buzz-in rounds and audio-visual question leagues', 'Theme months on world geopolitics, cinema, sports, and science', 'Mock buzzer-board training'],
    projects: ['Digital daily current affairs bulletin board on school intranet'],
    competitions: ['Tata Crucible Brainbox Junior Quiz', 'Derek O’Brien National Quiz'],
    achievements: ['Runners-up at Times of India National Inter-School Quiz 2025'],
    image: '/images/hero_classroom_learning_1790234194929.jpg'
  },
  {
    id: 'robotics',
    slug: 'robotics',
    name: 'Da Vinci Robotics & Mechatronics Society',
    tagline: 'Designing, building, and programming intelligent mechanical systems',
    introduction: 'In our Maker Space, the Robotics Club bridges mechanical engineering with code. Students assemble autonomous line-followers, robotic arms, drone quadcopters, and IoT home sensors.',
    objectives: [
      'Teach microcontrollers, sensor integration, and motor kinematics',
      'Foster rapid prototyping through 3D printing and laser cutting',
      'Participate in world-level FIRST LEGO League and World Robot Olympiad'
    ],
    activities: ['Arduino and ESP32 programming bootcamps', 'Intra-school robot obstacle race', '3D design and CAD modeling workshops'],
    projects: ['Solar tracker automated array for campus weather station', 'Smart classroom automated energy-saver motion system'],
    competitions: ['World Robot Olympiad (WRO) Regional', 'FIRST LEGO League India'],
    achievements: ['First Place in Open Category at WRO South Regional 2025'],
    image: '/images/robotics_innovation_1790236952194.jpg'
  },
  {
    id: 'photography',
    slug: 'photography',
    name: 'Aperture Visual & Photography Guild',
    tagline: 'Capturing light, emotion, and the historic moments of our school',
    introduction: 'The Aperture Guild is the official visual chronicler of school life. Scholars learn the physics of optics, manual exposure control, storytelling composition, and digital photo editing.',
    objectives: [
      'Master shutter speed, aperture, ISO, and natural light aesthetics',
      'Document sports meets, cultural festivals, and everyday campus joy',
      'Curate the annual school photo exhibition and yearbook photography'
    ],
    activities: ['Weekend golden-hour campus photo walks', 'Darkroom simulation and Lightroom RAW processing workshops', 'Critique sessions on photojournalism ethics'],
    projects: ['"Portraits of Campus Stewards" photographic tribute', 'Official school calendar photo portfolio'],
    competitions: ['National Geographic Youth Photography Contest', 'Canon Young Photographer Challenge'],
    achievements: ['Featured in the Indian Young Photographer Showcase 2025'],
    image: '/images/arts_painting_studio_1790236966444.jpg'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions',
    question: 'What is the admission procedure for the 2026–27 academic year?',
    answer: 'Admissions commence with submitting the online Admission Enquiry Form. Following enquiry submission, our admissions team will invite the family for a campus walkthrough and an informal, friendly interaction with the academic coordinator. For Grades 6 and above, a gentle diagnostic aptitude assessment in English and Mathematics is conducted to understand the child’s learning stage.'
  },
  {
    id: 'faq-2',
    category: 'Admissions',
    question: 'What is the minimum age criterion for Pre-KG and Grade 1?',
    answer: 'As per national education directives, the child should have completed 3 years for Pre-KG and 6 years for Grade 1 as of June 1st of the academic year.'
  },
  {
    id: 'faq-3',
    category: 'Academics',
    question: 'Which educational board is Future Sunrise affiliated with?',
    answer: 'The school is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. We follow the NCERT curriculum enriched with integrated STEM laboratories, second language choices (Tamil/Hindi), and foundational competitive exam mentorship.'
  },
  {
    id: 'faq-4',
    category: 'Academics',
    question: 'What is the student-to-teacher ratio maintained across classrooms?',
    answer: 'We maintain an average student-to-teacher ratio of 1:15 in Pre-Primary classrooms and 1:24 in Primary, Middle, and Secondary classes. This ensures that every child receives individualized attention.'
  },
  {
    id: 'faq-5',
    category: 'Transport',
    question: 'Is bus transportation available across all parts of Chennai?',
    answer: 'Yes, our institutional fleet of 35 air-conditioned buses serves extensive routes across Chennai, including Kovur, Porur, RedHills, Puzhal, Tambaram, Vandalur, Kelambakkam, and surrounding residential corridors. Every bus features real-time GPS tracking and a female attendant.'
  },
  {
    id: 'faq-6',
    category: 'Fees',
    question: 'What are the fee payment options and schedules?',
    answer: 'The annual school fees can be remitted in three convenient term-based installments. Payments can be completed online via Net Banking, UPI, debit/credit cards, or at the campus bursar office. Detailed fee breakdowns are provided upon application.'
  },
  {
    id: 'faq-7',
    category: 'School Timings',
    question: 'What are the regular school timings for different grades?',
    answer: 'Pre-Primary (Pre-KG to UKG): 8:30 AM to 12:30 PM (Monday to Friday). Primary (Grades 1 to 5): 8:15 AM to 3:15 PM. Middle & Secondary (Grades 6 to 12): 8:00 AM to 3:45 PM. Co-curricular sports coaching runs from 3:45 PM to 4:45 PM on select weekdays.'
  },
  {
    id: 'faq-8',
    category: 'Uniform',
    question: 'Where can parents procure the official school uniform and books?',
    answer: 'The school campus store distributes customized uniforms, house T-shirts, textbooks, and stationery sets during designated collection weeks prior to the reopening of each academic session.'
  },
  {
    id: 'faq-9',
    category: 'Exams',
    question: 'How are assessments structured in the primary and middle schools?',
    answer: 'In line with CBSE guidelines, we adhere to Continuous and Comprehensive Evaluation. We avoid high-stakes stress exams in early primary years, relying instead on observational diagnostics, class projects, and periodic formative reviews.'
  },
  {
    id: 'faq-10',
    category: 'Activities',
    question: 'Are extra-curricular activities mandatory for all students?',
    answer: 'Every student from Grade 3 onwards is encouraged to choose one sports discipline and one club activity each academic term to ensure balanced mental, social, and physical growth.'
  }
];

export const DOWNLOADS_LIST: DownloadDocument[] = [
  {
    id: 'doc-1',
    title: 'School Prospectus & Information Brochure 2026–27',
    category: 'Institutional',
    fileSize: '4.8 MB',
    format: 'PDF',
    lastUpdated: 'February 2026'
  },
  {
    id: 'doc-2',
    title: 'Admission Application Form (Printable Copy)',
    category: 'Admissions',
    fileSize: '1.2 MB',
    format: 'PDF',
    lastUpdated: 'January 2026'
  },
  {
    id: 'doc-3',
    title: 'Academic Fee Structure & Payment Guidelines 2026–27',
    category: 'Admissions',
    fileSize: '850 KB',
    format: 'PDF',
    lastUpdated: 'February 2026'
  },
  {
    id: 'doc-4',
    title: 'Academic Year Calendar & Holiday List 2026–27',
    category: 'Academics',
    fileSize: '1.1 MB',
    format: 'PDF',
    lastUpdated: 'March 2026'
  },
  {
    id: 'doc-5',
    title: 'School Code of Conduct & Student Rules Handbook',
    category: 'Policies',
    fileSize: '2.3 MB',
    format: 'PDF',
    lastUpdated: 'January 2026'
  },
  {
    id: 'doc-6',
    title: 'Transportation Bus Routes & Timing Schedules',
    category: 'Transport',
    fileSize: '1.7 MB',
    format: 'PDF',
    lastUpdated: 'March 2026'
  },
  {
    id: 'doc-7',
    title: 'Uniform Guidelines & Dress Code Manual',
    category: 'General',
    fileSize: '920 KB',
    format: 'PDF',
    lastUpdated: 'December 2025'
  },
  {
    id: 'doc-8',
    title: 'Parent Partnership Handbook & Communication Protocols',
    category: 'General',
    fileSize: '3.1 MB',
    format: 'PDF',
    lastUpdated: 'January 2026'
  }
];

export const EXAM_RESULTS: ExamResultYear[] = [
  {
    year: 2026,
    passPercentage: '100%',
    distinctionPercentage: '88.4%',
    schoolAverage: '89.2%',
    highestScore: '496 / 500 (99.2%)',
    toppers: [
      { name: 'K. Sai Siddarth', stream: 'Science (PCM/CS)', percentage: '99.2%', rank: 'School 1st & District Rank 2' },
      { name: 'Meera Raghavan', stream: 'Commerce', percentage: '98.8%', rank: 'School 2nd & State Rank 4' },
      { name: 'G. Varun Kumar', stream: 'Science (PCB)', percentage: '98.4%', rank: 'School 3rd' }
    ],
    subjectToppers: [
      { subject: 'Mathematics', studentName: 'K. Sai Siddarth', score: '100 / 100' },
      { subject: 'Computer Science', studentName: 'Aditya Swaminathan', score: '100 / 100' },
      { subject: 'Accountancy', studentName: 'Meera Raghavan', score: '100 / 100' },
      { subject: 'Chemistry', studentName: 'G. Varun Kumar', score: '99 / 100' },
      { subject: 'English Core', studentName: 'Pooja Venkatesh', score: '99 / 100' }
    ]
  },
  {
    year: 2025,
    passPercentage: '100%',
    distinctionPercentage: '86.1%',
    schoolAverage: '88.5%',
    highestScore: '494 / 500 (98.8%)',
    toppers: [
      { name: 'R. Aniruddh', stream: 'Science (PCM/CS)', percentage: '98.8%', rank: 'School 1st' },
      { name: 'S. Divya Bharathi', stream: 'Commerce', percentage: '98.2%', rank: 'School 2nd' },
      { name: 'Harish Sundaram', stream: 'Science (PCB)', percentage: '97.6%', rank: 'School 3rd' }
    ],
    subjectToppers: [
      { subject: 'Physics', studentName: 'R. Aniruddh', score: '100 / 100' },
      { subject: 'Economics', studentName: 'S. Divya Bharathi', score: '100 / 100' },
      { subject: 'Biology', studentName: 'Harish Sundaram', score: '99 / 100' }
    ]
  },
  {
    year: 2024,
    passPercentage: '100%',
    distinctionPercentage: '85.0%',
    schoolAverage: '87.4%',
    highestScore: '493 / 500 (98.6%)',
    toppers: [
      { name: 'Lakshmi Narayan', stream: 'Science (PCM/CS)', percentage: '98.6%', rank: 'School 1st' },
      { name: 'Rohit K. Iyer', stream: 'Commerce', percentage: '97.8%', rank: 'School 2nd' }
    ],
    subjectToppers: [
      { subject: 'Mathematics', studentName: 'Lakshmi Narayan', score: '100 / 100' },
      { subject: 'Business Studies', studentName: 'Rohit K. Iyer', score: '100 / 100' }
    ]
  },
  {
    year: 2023,
    passPercentage: '100%',
    distinctionPercentage: '84.2%',
    schoolAverage: '86.9%',
    highestScore: '491 / 500 (98.2%)',
    toppers: [
      { name: 'Swaminathan V.', stream: 'Science (PCM/Bio)', percentage: '98.2%', rank: 'School 1st' },
      { name: 'Aparna Balachander', stream: 'Commerce', percentage: '97.4%', rank: 'School 2nd' }
    ],
    subjectToppers: [
      { subject: 'Chemistry', studentName: 'Swaminathan V.', score: '100 / 100' },
      { subject: 'English Core', studentName: 'Aparna Balachander', score: '99 / 100' }
    ]
  }
];

export const ANNOUNCEMENTS_LIST: AnnouncementItem[] = [
  {
    id: 'ann-1',
    slug: 'silver-jubilee-commencement',
    title: 'Admissions Open for Academic Session 2026–27 Across All Campuses',
    date: 'March 20, 2026',
    category: 'Important Notices',
    priority: 'High',
    content: 'The school management announces admissions for Pre-KG through Grade 11. Parents are advised to register their enquiry online. Campus tours are held every Saturday between 9:00 AM and 1:00 PM.'
  },
  {
    id: 'ann-2',
    slug: 'annual-sports-day-circular',
    title: 'Circular: 26th Annual Athletic Meet Schedule & House Dress Code',
    date: 'March 15, 2026',
    category: 'Circulars',
    priority: 'Normal',
    content: 'The 26th Annual Athletic Meet will take place on April 12, 2026 at our Kovur Campus sports grounds. Parents are cordially invited. Students are required to report in their official house uniform by 7:45 AM.'
  },
  {
    id: 'ann-3',
    slug: 'board-exam-admit-card',
    title: 'Collection of Class 10 & 12 Board Examination Hall Tickets',
    date: 'March 02, 2026',
    category: 'Exam Notices',
    priority: 'High',
    content: 'Grade 10 and 12 scholars may collect their official CBSE Examination Hall Tickets from the Administrative Office starting Monday. Parental countersignatures on verification slips are mandatory.'
  },
  {
    id: 'ann-4',
    slug: 'tamil-new-year-holiday',
    title: 'Holiday Notification: Tamil New Year & Dr. Ambedkar Jayanti',
    date: 'February 28, 2026',
    category: 'Holidays',
    priority: 'Normal',
    content: 'The school and administrative offices will remain closed on April 14, 2026 on account of Tamil New Year and Dr. B.R. Ambedkar Jayanti. Regular classes will resume on the following day.'
  }
];

export const ACADEMIC_CALENDAR_MONTHS = [
  {
    month: 'June 2026',
    events: [
      { date: 'June 03', title: 'School Reopens for Academic Year 2026–27 (Grades 1 to 12)', type: 'academic' },
      { date: 'June 08', title: 'Orientation & Welcome Assembly for Kindergarten & Pre-KG', type: 'academic' },
      { date: 'June 21', title: 'International Day of Yoga Mass Demonstration', type: 'activity' }
    ]
  },
  {
    month: 'July 2026',
    events: [
      { date: 'July 11', title: 'Investiture Ceremony: Student Council Swearing-In', type: 'function' },
      { date: 'July 20 - 25', title: 'Periodic Test 1 (PT-1) for Grades 6 to 12', type: 'exam' },
      { date: 'July 28', title: 'World Nature Conservation Day Eco-Drives', type: 'activity' }
    ]
  },
  {
    month: 'August 2026',
    events: [
      { date: 'August 15', title: '79th Independence Day Flag Hoisting & Patriotic Pageant', type: 'function' },
      { date: 'August 22', title: 'Parent-Teacher Interaction (PTI-1) & Report Review', type: 'meeting' },
      { date: 'August 28', title: 'National Sports Day Inter-House Mini Marathon', type: 'activity' }
    ]
  },
  {
    month: 'September 2026',
    events: [
      { date: 'September 05', title: 'Teachers’ Day Special Assembly & Student Lead Day', type: 'function' },
      { date: 'September 16 - 28', title: 'Term 1 / Mid-Term Examinations', type: 'exam' },
      { date: 'September 30', title: 'Term Break & Faculty Curriculum Review Day', type: 'holiday' }
    ]
  }
];
