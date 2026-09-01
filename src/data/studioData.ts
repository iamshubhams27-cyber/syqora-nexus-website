import { Founder, Project, Service, CapabilityItem, PricingPlan } from '../types';
import syqoraLogoImg from '../assets/images/syqora_nexus_logo_1787849363590.jpg';

export const STUDIO_CONFIG = {
  name: 'SYQORA NEXUS',
  tagline: 'Digital Technology Studio',
  headline: 'Technology that looks next-generation.',
  subheadline: 'We combine high-performance web development, intelligent digital experiences, and data analytics to help ambitious businesses look better, work smarter, and scale faster.',
  founders: 'Shubham Sonkusare × Yamini Nandanwar',
  logoUrl: syqoraLogoImg,
  whatsappNumber: '917249891311',
  phoneNumber: '+91 82087 79355',
  email: 'iamshubham.s27@gmail.com',
  secondaryEmail: 'sonkusareshubham27@gmail.com',
  location: 'Nagpur, Maharashtra, India',
  stats: [
    { label: 'Starting price', value: '₹4,999/mo', sub: 'Flexible monthly or fixed' },
    { label: 'Specialists', value: '2 Founders', sub: 'Direct engineering contact' },
    { label: 'Performance', value: '100 / 100', sub: 'Lighthouse & Mobile Optimized' },
    { label: 'Turnaround', value: '3-7 Days', sub: 'Rapid sprint delivery' }
  ]
};

export const FOUNDERS: Founder[] = [
  {
    id: 'shubham',
    code: 'SH / 01',
    name: 'Shubham Sonkusare',
    role: 'Co-Founder & Lead Web Engineer',
    specialization: 'Frontend Architecture, Responsive UI/UX & Web Performance',
    education: 'PGDM in IT Management • B.Sc. in Information Technology',
    bio: 'Specializing in next-gen responsive web applications, ultra-fast interfaces, modern TypeScript frameworks, and high-converting digital storefronts tailored for ambitious enterprises.',
    avatarPlaceholder: 'SS',
    accentColor: '#19d8ff',
    skills: ['Frontend Architecture', 'React & TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Performance Optimization', 'Web Security & SEO'],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'Figma', 'Git', 'Node.js'],
    metrics: [
      { label: 'Performance Score', value: '99+' },
      { label: 'Core Focus', value: 'High Conversion UI' },
      { label: 'Experience Focus', value: 'IT Management & Web' }
    ],
    resumeHighlights: [
      'Engineered scalable web applications with sub-second First Contentful Paint (FCP)',
      'Expertise in responsive design, CSS architecture, micro-interactions, and accessibility',
      'PGDM IT Management with strategic tech leadership background'
    ],
    email: 'iamshubham.s27@gmail.com',
    phone: '+91 72498 91311'
  },
  {
    id: 'yamini',
    code: 'YA / 02',
    name: 'Yamini Nandanwar',
    role: 'Co-Founder & Lead Data Analyst',
    specialization: 'Business Intelligence, SQL, Power BI & Predictive Modeling',
    education: 'Data Analytics & Information Systems Specialist',
    bio: 'Transforms complex raw datasets into interactive visual dashboards, automated executive reports, and predictive insights that empower leadership to make decisive, profitable moves.',
    avatarPlaceholder: 'YN',
    accentColor: '#a855f7',
    skills: ['Power BI Dashboards', 'SQL Database Querying', 'Python Data Analysis', 'Tableau', 'Business Intelligence', 'KPI Automation'],
    tools: ['Power BI', 'SQL Server / PostgreSQL', 'Python (Pandas, NumPy)', 'Tableau', 'Advanced Excel', 'ETL Pipelines'],
    metrics: [
      { label: 'Data Processing', value: 'Automated' },
      { label: 'Visual Clarity', value: 'Real-time KPIs' },
      { label: 'Analysis Stack', value: 'SQL + Python' }
    ],
    resumeHighlights: [
      'Constructed enterprise-grade Power BI & Tableau dashboards for key metric tracking',
      'Designed complex SQL queries and ETL pipelines for automated business reporting',
      'Extensive experience in Python-based predictive analytics and exploratory data analysis'
    ],
    email: 'yamininandanwar1310@gmail.com',
    phone: '+91 82087 79355'
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'web',
    number: '01',
    title: 'High-Performance Web Engineering',
    tagline: 'Blazing fast, responsive, and conversion-engineered web systems.',
    score: 98,
    category: 'web',
    points: [
      'Sub-second load times with Core Web Vitals optimization',
      'Zero layout shift, 100% fluid mobile & desktop responsiveness',
      'Interactive 3D/4D micro-animations powered by GPU transforms',
      'Production SEO architecture and structured metadata'
    ],
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Motion', 'Next.js']
  },
  {
    id: 'data',
    number: '02',
    title: 'Data Intelligence & Power BI',
    tagline: 'Actionable executive dashboards from complex business data.',
    score: 94,
    category: 'data',
    points: [
      'Custom interactive Power BI and Tableau visual reports',
      'Automated SQL data ingestion and ETL transformation pipelines',
      'Sales forecasting, cohort analysis, and customer retention metrics',
      'Multi-source data synchronization (Excel, CRMs, PostgreSQL)'
    ],
    tech: ['Power BI', 'SQL Server', 'Python', 'Tableau', 'PostgreSQL', 'Pandas']
  },
  {
    id: 'ai',
    number: '03',
    title: 'AI Workflows & Process Automation',
    tagline: 'Intelligent systems eliminating redundant repetitive tasks.',
    score: 89,
    category: 'ai',
    points: [
      'Customer support bot integration via WhatsApp and Web APIs',
      'Automated lead qualification and CRM pipeline triggers',
      'Machine learning model integration for classification and detection',
      'Smart document parsing and automated summary pipelines'
    ],
    tech: ['Gemini API', 'Python ML', 'REST Webhooks', 'Automation Workflows']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'capello',
    title: 'Capello Luxury Salon & Spa',
    subtitle: 'High-End Multi-Location Salon Digital Experience',
    category: 'web',
    client: 'Capello Hair & Beauty',
    year: '2026',
    summary: 'A bespoke luxury digital storefront built for a high-end salon chain featuring interactive service menus, VIP stylist booking preview, dynamic multi-branch selector, and mobile-first WhatsApp appointment dispatch.',
    impact: 'Increased mobile bookings by 42% and reduced bounce rate to under 24%.',
    tags: ['Luxury UI', 'Multi-Location', 'Appointment Booking', 'WhatsApp Dispatch'],
    themeColor: '#e0a96d',
    gradient: 'from-[#2b1810] via-[#1a0f0b] to-[#0d0705]',
    liveBadge: 'LIVE DEMO AVAILABLE',
    stats: [
      { label: 'Booking Uplift', value: '+42%' },
      { label: 'Load Time', value: '0.42s' },
      { label: 'Mobile Score', value: '100' }
    ],
    features: [
      'Curated visual treatment with warm gold aesthetics and dark mode elegance',
      'One-tap WhatsApp VIP booking with pre-filled service and location details',
      'Tiered pricing packages for hair, skin, and bridal makeovers',
      'Interactive testimonial showcase and team stylist portfolio'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite'],
    visualType: 'capello'
  },
  {
    id: 'luxe',
    title: 'Limitless Luxe Fitness Arena',
    subtitle: 'High-Energy Premium Gym & Athlete Membership Portal',
    category: 'web',
    client: 'Limitless Luxe Fitness',
    year: '2026',
    summary: 'An aggressive, high-energy landing experience for a 20,000 sq ft flagship gym facility. Designed with isometric depth grids, class schedule navigators, and rapid trial sign-ups.',
    impact: 'Generated 180+ trial membership inquiries in the first 30 days of launch.',
    tags: ['Cyber Aesthetic', 'Membership Conversion', 'Interactive Schedule', 'High Motion'],
    themeColor: '#19d8ff',
    gradient: 'from-[#0a1826] via-[#070e17] to-[#040609]',
    liveBadge: 'FEATURED SHOWCASE',
    stats: [
      { label: 'Inquiries', value: '180+/mo' },
      { label: 'Conversion', value: '8.4%' },
      { label: 'Scale', value: '20,000 sq ft' }
    ],
    features: [
      'Perspective 3D floor grid highlighting facility zones and equipment lines',
      'Interactive membership tier comparison with instant WhatsApp checkout',
      'Trainer profile spotlight and live workout regime calendar preview',
      'Instant callback request module with geo-location routing'
    ],
    techStack: ['React', 'CSS Grid', 'Tailwind CSS', 'Motion', 'TypeScript'],
    visualType: 'luxe'
  },
  {
    id: 'security',
    title: 'Phishing URL AI/ML Threat Detector',
    subtitle: 'Machine Learning Security Classifier & Academic Model',
    category: 'security',
    client: 'Cyber Security Research',
    year: '2025-2026',
    summary: 'A dual-layer machine learning classifier that evaluates web URLs and domain characteristics in real-time, detecting malicious spoofing and credential theft campaigns with 98.4% accuracy.',
    impact: 'Achieved 98.4% validation accuracy across a 50,000+ benchmark dataset.',
    tags: ['Machine Learning', 'Cyber Security', 'Python', 'Threat Analysis'],
    themeColor: '#60a5fa',
    gradient: 'from-[#081226] via-[#050b17] to-[#020408]',
    liveBadge: 'RESEARCH MODEL',
    stats: [
      { label: 'Accuracy', value: '98.4%' },
      { label: 'Latency', value: '18ms' },
      { label: 'Features Evaluated', value: '30+ URL Vectors' }
    ],
    features: [
      'Multi-feature structural scanner inspecting HTTPS validity, entropy, and domain age',
      'Interactive live URL tester with visual risk radar and anomaly breakdown',
      'Random Forest and Gradient Boosted decision tree models',
      'Detailed telemetry dashboard showing false positive reduction metrics'
    ],
    techStack: ['Python', 'Scikit-Learn', 'FastAPI', 'React UI', 'Threat Intelligence'],
    visualType: 'security'
  },
  {
    id: 'analytics',
    title: 'Nexus BI Executive Dashboard',
    subtitle: 'Interactive Multi-Channel Business Intelligence Hub',
    category: 'analytics',
    client: 'Retail & Multi-Branch Enterprise',
    year: '2026',
    summary: 'A unified Power BI and SQL reporting system linking point-of-sale data, inventory turnover, and marketing ROI into real-time KPI visuals for business decision-makers.',
    impact: 'Cut weekly report generation time from 8 hours to zero through automation.',
    tags: ['Power BI', 'SQL Warehousing', 'Automated ETL', 'KPI Tracking'],
    themeColor: '#c084fc',
    gradient: 'from-[#1c0e2a] via-[#100818] to-[#050208]',
    liveBadge: 'ENTERPRISE BI',
    stats: [
      { label: 'Time Saved', value: '8 hrs/wk' },
      { label: 'Sync Frequency', value: 'Real-time' },
      { label: 'KPIs Monitored', value: '24 Metrics' }
    ],
    features: [
      'Automated daily revenue, average order value (AOV), and customer retention curves',
      'Drill-down filters by region, product category, and marketing channel',
      'Executive summary PDF automated push schedule',
      'Alert triggers for low stock thresholds and margin dips'
    ],
    techStack: ['Power BI', 'SQL Server', 'Python ETL', 'DAX', 'PostgreSQL'],
    visualType: 'analytics'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'business-web',
    number: '01',
    title: 'Business & Brand Websites',
    subtitle: 'Custom digital flagships built to impress and convert',
    description: 'High-performance websites designed specifically for salons, gyms, restaurants, medical practices, and professional local service brands seeking a top-tier digital presence with continuous maintenance.',
    deliverables: [
      'Custom UI design matching your brand identity',
      '100% mobile-friendly responsive layout',
      'Instant WhatsApp booking & direct phone triggers',
      'Fast hosting configuration & free SSL certificate',
      'Search engine friendly structure (Local SEO)'
    ],
    timeline: '3 - 7 business days',
    startingPrice: '₹4,999 / mo',
    badge: 'MOST POPULAR',
    iconName: 'Globe',
    suitableFor: ['Salons & Spas', 'Gyms & Trainers', 'Restaurants & Cafes', 'Consultants & Agencies']
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'High-Converting Landing Pages',
    subtitle: 'Focused campaign pages designed for maximum ROI',
    description: 'Laser-focused single-page sales funnels engineered for advertising campaigns, product launches, or lead generation initiatives with persuasive UX copywriting and ongoing hosting.',
    deliverables: [
      'Above-the-fold high impact value proposition',
      'Lead capture form with instant notifications',
      'Social proof & customer testimonial sections',
      'Interactive pricing calculators & FAQ accordions',
      'Analytics & pixel event tracking integration'
    ],
    timeline: '2 - 4 business days',
    startingPrice: '₹3,999 / mo',
    badge: 'FAST TURNAROUND',
    iconName: 'Zap',
    suitableFor: ['Ad Campaigns (Meta / Google)', 'Event Registration', 'Product Drops', 'Service Inquiries']
  },
  {
    id: 'data-bi',
    number: '03',
    title: 'Data Analytics & Power BI',
    subtitle: 'Turn messy spreadsheets into clear executive profit drivers',
    description: 'Custom Power BI dashboards, SQL querying, and automated monthly reports that give business owners instant clarity on sales, expenses, and inventory performance.',
    deliverables: [
      'Interactive Power BI / Tableau dashboard setup',
      'Data cleaning, transformation & automated ingestion',
      'Custom DAX measures and KPI scorecards',
      'Staff walkthrough video and handover documentation',
      'Monthly maintenance & report refresh options'
    ],
    timeline: '4 - 10 business days',
    startingPrice: '₹6,999 / mo',
    badge: 'HIGH ROI',
    iconName: 'BarChart3',
    suitableFor: ['E-commerce Stores', 'Retail Chains', 'Wholesale Distributors', 'Clinic Management']
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'Interactive UI & AI Workflows',
    subtitle: 'Next-gen web interactions and intelligent automations',
    description: '3D visual styling, interactive client tools, automated WhatsApp chatbot setups, and smart workflows that save hours of manual clerical work every single month.',
    deliverables: [
      'Custom interactive calculators and configurators',
      'WhatsApp Business auto-reply and quick routing',
      'Smooth micro-interactions and 3D card effects',
      'Web-to-spreadsheet automatic lead logging'
    ],
    timeline: '5 - 12 business days',
    startingPrice: '₹5,499 / mo',
    badge: 'INNOVATION',
    iconName: 'Cpu',
    suitableFor: ['Modern Startups', 'Tech Firms', 'High-Growth Brands', 'Educational Portals']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Presence',
    subtitle: 'Essential modern digital presence & high-performance website',
    price: 4999,
    period: '/ month',
    features: [
      'Single-page ultra-fast responsive website',
      'High-speed cloud hosting & free SSL certificate',
      'Direct WhatsApp chat & one-tap call integration',
      'Google Maps & Local Business SEO metadata',
      'Modern high-contrast aesthetic & mobile optimization',
      'Ongoing maintenance & monthly updates included',
      'Dedicated founder support with zero hidden fees'
    ],
    idealFor: 'Local businesses, solo professionals, salons & cafes',
    ctaText: 'Start for ₹4,999/mo',
    whatsappMessage: "Hi SYQORA NEXUS, I am interested in the Starter Presence website plan at ₹4,999/month. Let's get started!"
  },
  {
    id: 'growth',
    name: 'Growth Studio',
    subtitle: 'Full-featured web presence + lead generation engine',
    price: 6999,
    period: '/ month',
    popular: true,
    features: [
      'Multi-section custom web application (Up to 5 dynamic views)',
      'Fast cloud hosting & SSL certificate included',
      '3D interactive dashboard elements & micro-animations',
      'Custom service catalog & dynamic price calculator',
      'Priority WhatsApp inquiry router & email alerts',
      'Continuous technical support & monthly feature updates',
      'Google Analytics 4 & Meta Pixel event tracking'
    ],
    idealFor: 'Growing gyms, multi-location studios, clinics & agencies',
    ctaText: 'Choose Growth (₹6,999/mo)',
    whatsappMessage: "Hi SYQORA NEXUS, I want the Growth Studio plan at ₹6,999/month with full interactive features."
  },
  {
    id: 'enterprise',
    name: 'Enterprise Tech & BI',
    subtitle: 'Custom web development + Power BI analytics suite',
    price: 9999,
    period: '/ month',
    features: [
      'Bespoke web architecture tailored to your workflows',
      'Custom Power BI / Tableau dashboard with SQL data sync',
      'Automated executive KPI reports & revenue analysis',
      'High-security encryption & ML threat protection',
      'Dedicated direct developer support from both founders',
      'Continuous monthly maintenance & quarterly data refresh'
    ],
    idealFor: 'Enterprises, multi-branch retailers, fintech & research teams',
    ctaText: 'Start Enterprise (₹9,999/mo)',
    whatsappMessage: "Hi SYQORA NEXUS, I need the Enterprise Web + Power BI Analytics suite at ₹9,999/month for my business."
  }
];

export const REVIEWS = [
  {
    name: 'Vikram Mehta',
    company: 'Capello Salon Chain',
    role: 'Managing Partner',
    quote: 'SYQORA NEXUS completely redefined how our salon looks on mobile. The one-tap WhatsApp appointment button brings us 10-15 direct bookings every single day.',
    rating: 5,
    project: 'Luxury Salon Web Presence'
  },
  {
    name: 'Rajesh Kulkarni',
    company: 'Luxe Athletic Club',
    role: 'Operations Director',
    quote: 'The 3D interactive elements and lighting fast page speeds set us apart from every local competitor. Shubham and Yamini deliver with incredible speed and craftsmanship.',
    rating: 5,
    project: 'Gym Landing Portal'
  },
  {
    name: 'Pooja Deshmukh',
    company: 'Retail Horizons',
    role: 'Business Owner',
    quote: 'Yamini built a Power BI dashboard that connected our POS registers with our daily ledger. We now see our hourly profit margins in real-time on our phones!',
    rating: 5,
    project: 'Power BI Retail Dashboard'
  }
];
