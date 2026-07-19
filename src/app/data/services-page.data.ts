export type PlanName = 'Group Sessions' | 'Personal Training' | 'Online Training' | 'Transformation';

export interface ComparisonPlan {
  name: PlanName;
  popular: boolean;
}

export interface ComparisonFeature {
  name: string;
  values: Record<PlanName, boolean | string>;
}

export const servicesPageData = {
  hero: {
    badge: 'Our Programs',
    title: {
      line1: 'HIT',
      line2: 'PROGRAMS',
      line3: 'FOR EVERY LEVEL'
    },
    description: 'From beginner group sessions to advanced transformation programs — choose what fits your goals and we will take you all the way.'
  },
  programs: [
    {
      title: 'GROUP SESSIONS',
      category: 'All Levels',
      description: 'Our flagship group sessions are designed for every fitness level. Beginner-friendly sessions like Hyper45, Sweat45, and HIT60 get you moving, while Perform and Prymal push intermediate athletes further.',
      price: 'Book a Package',
      priceUnit: 'multiple options',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Hyper45 & Hyper60',
        'Sweat45 & HIT60',
        'SWEAT Hyrox Simulation',
        'Perform (Intermediate)',
        'Prymal (Intermediate)',
        'Certified coaches every session'
      ]
    },
    {
      title: 'SPECIALTY SESSIONS',
      category: 'Targeted Training',
      description: 'Beyond our core sessions, HIT offers specialty classes that target specific disciplines and demographics — from calming Yoga by the beach to explosive Calisthenics.',
      price: 'Book a Package',
      priceUnit: 'multiple options',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Calisthenics',
        'Yoga',
        'Pilates',
        'Sculpt (Ladies Only)',
        'Teens program',
        'Beach yoga sessions (Sahel)'
      ]
    },
    {
      title: 'TRANSFORMATION PROGRAMS',
      category: 'Complete Change',
      description: 'Structured multi-week programs built for real, lasting results. Whether you want to build, shred, or completely transform — we have a program designed exactly for you.',
      price: 'Book a Package',
      priceUnit: 'program-based',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        '21-Day Transformation Program',
        'Fabfit Ladies Program',
        'BUILD+ Program',
        'Hybrid Rockstar Program',
        'Progress tracking',
        'Coach guidance throughout'
      ]
    },
    {
      title: 'PERSONAL & ONLINE TRAINING',
      category: '1-on-1 Coaching',
      description: 'Get undivided attention with our Personal Training sessions or train from anywhere with One-on-One Online Training — plus customized nutrition programs to accelerate your results.',
      price: 'Book a Package',
      priceUnit: 'per session/month',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'One-on-one in-person training',
        'Online remote coaching',
        'Customized nutrition programs',
        'Corporate wellness programs',
        'Personalized workout plans',
        'Ongoing coach support'
      ]
    }
  ],
  comparison: {
    title: {
      line1: 'COMPARE',
      line2: 'PROGRAMS'
    },
    plans: [
      { name: 'Group Sessions' as PlanName, popular: true },
      { name: 'Personal Training' as PlanName, popular: false },
      { name: 'Online Training' as PlanName, popular: false },
      { name: 'Transformation' as PlanName, popular: false }
    ] as ComparisonPlan[],
    features: [
      { name: 'Certified Coaches', values: { 'Group Sessions': true, 'Personal Training': true, 'Online Training': true, 'Transformation': true } },
      { name: 'Custom Plan', values: { 'Group Sessions': false, 'Personal Training': true, 'Online Training': true, 'Transformation': true } },
      { name: 'In-Person Sessions', values: { 'Group Sessions': true, 'Personal Training': true, 'Online Training': false, 'Transformation': true } },
      { name: 'Nutrition Guidance', values: { 'Group Sessions': false, 'Personal Training': 'Basic', 'Online Training': 'Basic', 'Transformation': true } },
      { name: 'Progress Tracking', values: { 'Group Sessions': false, 'Personal Training': true, 'Online Training': true, 'Transformation': true } },
      { name: 'Community Access', values: { 'Group Sessions': true, 'Personal Training': true, 'Online Training': true, 'Transformation': true } },
      { name: 'Flexible Scheduling', values: { 'Group Sessions': true, 'Personal Training': true, 'Online Training': true, 'Transformation': false } }
    ] as ComparisonFeature[]
  },
  faqs: [
    {
      question: 'What programs are best for beginners?',
      answer: 'Our Hyper45, Sweat45, and HIT60 sessions are perfect for beginners and all levels. Our coaches scale every session so you always work at the right intensity.',
      open: false
    },
    {
      question: 'How do I find the nearest HIT location?',
      answer: 'HIT Egypt operates 8 locations across Cairo: Terrace Mall (El Shorouk), Patio Casa (El Shorouk), Concord Plaza, Platinum Club, Katameya Residence, Suncity Mall (Sheraton), Heliopolis Sporting Club, and HIT Haus (Concord Gardens). Use the contact form to select your preferred venue.',
      open: false
    },
    {
      question: 'Do you offer programs specifically for women?',
      answer: 'Yes! Our Sculpt sessions are exclusively for ladies, and the Fabfit Ladies Program is a dedicated transformation program designed for women. Yoga and Pilates sessions are also very popular with our female athletes.',
      open: false
    },
    {
      question: 'Can I train online with HIT Egypt?',
      answer: 'Absolutely. We offer One-on-One Online Training so you can work with a certified HIT coach from anywhere in the world. Customized nutrition programs are also available remotely.',
      open: false
    },
    {
      question: 'What is the Hyrox Simulation session?',
      answer: 'SWEAT Hyrox Simulation is a session inspired by the Hyrox race format — a global fitness competition combining running and functional exercises. It is a beginner-friendly but challenging full-body workout.',
      open: false
    }
  ],
  cta: {
    title: {
      line1: 'NOT SURE WHICH PROGRAM IS',
      line2: 'RIGHT FOR YOU'
    },
    description: 'Fill in our quick form and select your nearest location — we will guide you to the perfect package.',
    button: {
      label: 'Book a Spot Now',
      path: '/contact'
    }
  }
};
