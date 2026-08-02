export interface Department {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  keyStats: string;
  highlights: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  departmentId: string;
  departmentName: string;
  image: string;
  credentials: string[];
  experience: string;
  bio: string;
  consultationFee: string;
  availableDays: string[];
}

export interface WhyUsFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  statNumber: string;
  statLabel: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  procedure: string;
  rating: number;
  image: string;
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardio',
    name: 'Cardiovascular & Heart Institute',
    tagline: 'Pioneering Minimally Invasive & Structural Heart Interventions',
    description: 'Our Heart Institute integrates AI-powered hemodynamic mapping with Da Vinci robotic surgical platforms for sub-millimeter coronary and valve restorations.',
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
    keyStats: '99.8% Valve Repair Success',
    highlights: ['Robotic Coronary Bypass', 'TAVR & Transcatheter Valve Repair', 'Electrophysiology & Ablation', 'Preventive Hemodynamic Suite']
  },
  {
    id: 'neuro',
    name: 'Precision Neurosciences & Spine',
    tagline: 'CyberKnife Radiosurgery & Advanced Micro-Neurosurgery',
    description: 'Dedicated to preserving cognitive and neurological function using real-time intraoperative MRI guidance and non-invasive radiosurgical target tracking.',
    iconName: 'Brain',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    keyStats: 'Sub-Millimeter Accuracy',
    highlights: ['CyberKnife S7 Radiosurgery', 'Intraoperative MRI Brain Suite', 'Complex Spine Motion Preservation', 'Deep Brain Stimulation (DBS)']
  },
  {
    id: 'oncology',
    name: 'Advanced Oncology & Cellular Therapy',
    tagline: 'Personalized CAR-T, Proton Therapy & Molecular Diagnostics',
    description: 'Transforming cancer care through individualized genomic profiling, targeted immunotherapy, and ultra-precise proton beam radiation delivery.',
    iconName: 'Dna',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    keyStats: '3-Hour Genomic Profiling',
    highlights: ['CAR-T Cell Immunotherapy', 'Pencil-Beam Proton Therapy', 'Molecular Liquid Biopsies', 'Inpatient Medical Sanctuary']
  },
  {
    id: 'ortho',
    name: 'Orthopedic & Regenerative Surgery',
    tagline: 'Robotic Articular Restorations & Biologic Joint Renewal',
    description: 'Restoring peak mobility with custom-printed 3D titanium implants, Mako robotic surgical arms, and autologous cellular joint therapies.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200',
    keyStats: 'Custom 3D Titanium Implants',
    highlights: ['Mako Robotic Joint Replacement', 'Biologic Stem Cell Therapy', 'Minimally Invasive Arthroscopy', 'Executive Rehabilitation Suite']
  },
  {
    id: 'aesthetic',
    name: 'Aesthetic & Reconstructive Institute',
    tagline: 'Facial Sculpting & Microsurgical Tissue Reconstruction',
    description: 'Harmonizing surgical precision with anatomical artistry to deliver natural, refined reconstructive and aesthetic transformations.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    keyStats: 'Microsurgical Mastery',
    highlights: ['Microsurgical Lymphatic Restoration', 'Facial Structural Sculpting', 'Laser Regenerative Resurfacing', 'Post-Op Private Spa Suites']
  },
  {
    id: 'longevity',
    name: 'Longevity, Metabolic & Cellular Health',
    tagline: 'Advanced Biological Age Reversal & Systems Diagnostics',
    description: 'Comprehensive preventative medicine harnessing multi-omics biomarkers, metabolic optimization, and continuous physiological monitoring.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
    keyStats: 'Multi-Omic Biomarker Analysis',
    highlights: ['Biological Age Diagnostics', 'Senolytic & Mitochondrial Support', 'Comprehensive Whole-Body MRI', '24/7 Executive Physician Access']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sterling',
    name: 'Dr. Victoria Sterling, MD, PhD',
    title: 'Chief of Cardiovascular Surgery',
    departmentId: 'cardio',
    departmentName: 'Cardiovascular & Heart Institute',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    credentials: ['Harvard Medical School MD', 'Johns Hopkins Surgical Residency', 'President, Int. Heart Society'],
    experience: '22+ Years Clinical Excellence',
    bio: 'Pioneer in robotic structural heart repairs with over 4,500 successful cardiac interventions. Honored globally for advancing sutureless valve replacement techniques.',
    consultationFee: '$850 (Executive Evaluation)',
    availableDays: ['Mon', 'Wed', 'Fri']
  },
  {
    id: 'dr-vance',
    name: 'Dr. Marcus Vance, MD',
    title: 'Chair of Precision Neurosciences',
    departmentId: 'neuro',
    departmentName: 'Precision Neurosciences & Spine',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    credentials: ['Stanford University MD', 'Mayo Clinic Neuro-Oncology Fellow', 'CyberKnife Pioneer Award'],
    experience: '19+ Years Micro-Neurosurgery',
    bio: 'Internationally recognized authority on non-invasive brain radiosurgery and intraoperative MRI tumor resections with ultra-high functional preservation rates.',
    consultationFee: '$920 (Executive Evaluation)',
    availableDays: ['Tue', 'Thu', 'Sat']
  },
  {
    id: 'dr-rostova',
    name: 'Dr. Elena Rostova, MD, DSc',
    title: 'Director of Advanced Oncology',
    departmentId: 'oncology',
    departmentName: 'Advanced Oncology & Cellular Therapy',
    image: 'https://images.unsplash.com/photo-1594824813566-88855ce78909?auto=format&fit=crop&q=80&w=800',
    credentials: ['Oxford University MD/DSc', 'Karolinska Institute Research Fellow', 'Oncology Global Innovator'],
    experience: '18+ Years Immunotherapy Research',
    bio: 'Lead innovator in personalized CAR-T cell receptor modifications and multi-targeted molecular therapies, having spearheaded over 30 clinical breakthrough trials.',
    consultationFee: '$890 (Executive Evaluation)',
    availableDays: ['Mon', 'Tue', 'Thu']
  },
  {
    id: 'dr-thorne',
    name: 'Dr. Alexander Thorne, MD',
    title: 'Head of Orthopedic & Robotic Restorations',
    departmentId: 'ortho',
    departmentName: 'Orthopedic & Regenerative Surgery',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    credentials: ['Columbia University MD', 'HSS Joint Reconstruction Fellow', 'Mako Robotic Master Trainer'],
    experience: '16+ Years Robotic Joint Surgery',
    bio: 'Specialist in custom 3D-printed titanium implants and robotic joint resurfacing, enabling high-performance athletes and executives to regain full biomechanical function.',
    consultationFee: '$800 (Executive Evaluation)',
    availableDays: ['Wed', 'Fri', 'Sat']
  }
];

export const WHY_US_FEATURES: WhyUsFeature[] = [
  {
    id: 'faculty',
    title: 'World-Renowned Faculty',
    subtitle: 'Leaders of Global Medicine',
    description: 'Our chief surgeons and clinical chairs are double-board certified professors from Harvard, Stanford, and Oxford who set international standards of care.',
    iconName: 'Award',
    statNumber: '120+',
    statLabel: 'Specialist Professors'
  },
  {
    id: 'precision',
    title: 'Robotic Surgical Accuracy',
    subtitle: 'Sub-Millimeter Execution',
    description: 'Utilizing Da Vinci Xi, Mako, and CyberKnife S7 systems to achieve surgical precision unattainable through conventional manual methods.',
    iconName: 'Cpu',
    statNumber: '99.8%',
    statLabel: 'Procedure Precision'
  },
  {
    id: 'sanctuary',
    title: 'Sanctuary Private Recovery',
    subtitle: 'Unrivaled Luxury & Comfort',
    description: 'Private penthouse suites with floor-to-ceiling panoramic glass, 24/7 dedicated nursing staff, private executive chef, and butler concierge.',
    iconName: 'Crown',
    statNumber: '1:1',
    statLabel: 'Nurse-to-Patient Ratio'
  },
  {
    id: 'molecular',
    title: 'Molecular & Genomic Intelligence',
    subtitle: 'Personalized Health Blueprint',
    description: 'Full-genome sequencing and metabolic liquid biopsies performed in-house within 3 hours to tailor every medication and intervention to your DNA.',
    iconName: 'Microscope',
    statNumber: '3 Hours',
    statLabel: 'Genomic Turnaround'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'The surgical precision of Dr. Sterling and the serene, ultra-private penthouse suite transformed what could have been a terrifying valve procedure into a restful, five-star medical recovery experience.',
    author: 'Lord Henry Montgomery',
    role: 'Managing Director, Global Equity Partners',
    location: 'London, United Kingdom',
    procedure: 'Robotic Structural Heart Repair',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    quote: 'AURA Medical Center represents the pinnacle of modern healthcare. The CyberKnife technology cleared my spinal lesion with zero incisions, and I was back conducting business within 48 hours.',
    author: 'Sofia Al-Mansoor',
    role: 'Founder & Tech Executive',
    location: 'Dubai, UAE',
    procedure: 'Precision CyberKnife Radiosurgery',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    quote: 'As a physician myself, I examined hospitals across North America and Europe. AURA’s molecular diagnostic suites and 1:1 concierge nursing set a benchmark that no traditional hospital can touch.',
    author: 'Dr. Robert Chen, MD',
    role: 'Cardiothoracic Research Director',
    location: 'Zurich, Switzerland',
    procedure: 'Executive Longevity & Cellular Protocol',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  }
];

export const HOSPITAL_STATS = [
  { value: '99.8%', label: 'Surgical Success Rate' },
  { value: '45+', label: 'Global Clinical Patents' },
  { value: '1:1', label: 'Dedicated Nurse Ratio' },
  { value: '120+', label: 'Specialist Chair Surgeons' }
];
