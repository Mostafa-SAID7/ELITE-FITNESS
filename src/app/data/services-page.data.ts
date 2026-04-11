export type PlanName = 'Personal Training' | 'Online Coaching' | 'Nutrition Coaching' | 'Transformation';

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
      line1: 'ELITE',
      line2: 'TRAINING',
      line3: 'PROGRAMS'
    },
    description: 'Choose the program that aligns with your goals. Every program includes personalized attention and proven strategies for maximum results.'
  },
  programs: [
    {
      title: 'PERSONAL TRAINING',
      category: '1-on-1 Coaching',
      description: 'Get undivided attention with customized training sessions designed specifically for your body, goals, and schedule. Every workout is optimized for maximum results.',
      price: '$150',
      priceUnit: 'per session',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Personalized workout plans',
        'Real-time form correction',
        'Progress tracking & analysis',
        'Flexible scheduling',
        'Nutrition guidance included',
        'Direct message support'
      ]
    },
    {
      title: 'ONLINE COACHING',
      category: 'Remote Training',
      description: 'Train anywhere in the world with our comprehensive online coaching program. Perfect for busy professionals who need flexibility without sacrificing results.',
      price: '$199',
      priceUnit: 'per month',
      image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Custom training programs',
        'Video workout library',
        'Weekly check-ins',
        'Mobile app access',
        'Community support',
        '24/7 coach messaging'
      ]
    },
    {
      title: 'NUTRITION COACHING',
      category: 'Diet & Lifestyle',
      description: 'Transform your relationship with food. Our evidence-based nutrition coaching helps you fuel your body properly for optimal performance and sustainable results.',
      price: '$129',
      priceUnit: 'per month',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Personalized meal plans',
        'Macro tracking guidance',
        'Supplement recommendations',
        'Weekly nutrition calls',
        'Recipe database access',
        'Lifestyle coaching'
      ]
    },
    {
      title: 'TRANSFORMATION PACKAGE',
      category: 'Complete Program',
      description: 'The ultimate all-in-one package combining personal training, nutrition coaching, and lifestyle optimization for those serious about complete transformation.',
      price: '$399',
      priceUnit: 'per month',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'All personal training benefits',
        'All nutrition coaching benefits',
        'Priority scheduling',
        'Monthly assessments',
        'Mindset coaching',
        'VIP support access'
      ]
    }
  ],
  comparison: {
    title: {
      line1: 'COMPARE',
      line2: 'PROGRAMS'
    },
    plans: [
      { name: 'Personal Training' as PlanName, popular: false },
      { name: 'Online Coaching' as PlanName, popular: true },
      { name: 'Nutrition Coaching' as PlanName, popular: false },
      { name: 'Transformation' as PlanName, popular: false }
    ] as ComparisonPlan[],
    features: [
      { name: 'Custom Workout Plans', values: { 'Personal Training': true, 'Online Coaching': true, 'Nutrition Coaching': false, 'Transformation': true } },
      { name: 'In-Person Sessions', values: { 'Personal Training': true, 'Online Coaching': false, 'Nutrition Coaching': false, 'Transformation': true } },
      { name: 'Nutrition Guidance', values: { 'Personal Training': 'Basic' as const, 'Online Coaching': 'Basic' as const, 'Nutrition Coaching': true, 'Transformation': true } },
      { name: 'Video Library Access', values: { 'Personal Training': true, 'Online Coaching': true, 'Nutrition Coaching': false, 'Transformation': true } },
      { name: 'Weekly Check-ins', values: { 'Personal Training': true, 'Online Coaching': true, 'Nutrition Coaching': true, 'Transformation': true } },
      { name: 'Mindset Coaching', values: { 'Personal Training': false, 'Online Coaching': false, 'Nutrition Coaching': false, 'Transformation': true } },
      { name: 'Priority Support', values: { 'Personal Training': false, 'Online Coaching': false, 'Nutrition Coaching': false, 'Transformation': true } }
    ] as ComparisonFeature[]
  },
  faqs: [
    {
      question: 'How do I know which program is right for me?',
      answer: 'We offer a free consultation to assess your goals, fitness level, and lifestyle. This helps us recommend the perfect program for your specific needs.',
      open: false
    },
    {
      question: 'Can I switch programs if my needs change?',
      answer: 'Absolutely! We understand that goals evolve. You can upgrade, downgrade, or switch programs at any time with no penalties.',
      open: false
    },
    {
      question: 'What if I am a complete beginner?',
      answer: 'All our programs are designed to meet you where you are. Whether you have never worked out before or you are an experienced athlete, we adapt our approach to your level.',
      open: false
    },
    {
      question: 'How soon will I see results?',
      answer: 'Most clients start noticing changes within 2-4 weeks. However, sustainable transformation takes time. We focus on building habits that lead to lasting results.',
      open: false
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 100% satisfaction guarantee for the first 30 days. If you are not completely satisfied with your program, we will refund your investment.',
      open: false
    }
  ],
  cta: {
    title: {
      line1: 'NOT SURE WHICH PROGRAM IS',
      line2: 'RIGHT FOR YOU'
    },
    description: 'Book a free consultation and let us help you find the perfect fit for your goals and lifestyle.',
    button: {
      label: 'Book Free Consultation',
      path: '/contact'
    }
  }
};