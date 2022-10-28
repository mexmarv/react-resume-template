import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/marv.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Marvin Nahmias',
  description: "Marvin Nahmias - Online Resume - about Marvin!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skill: 'skills',
  Portfolio: 'portfolio',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Marvin Nahmias.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Mexico City (CDMX) based <strong className="text-stone-100">CTO/CIO/CxO, Founder, Exponential Technology, Makerspaces, DevOps & Culture Enthusiast</strong>, currently working
        at <strong className="text-stone-100">Broxel - Fintech</strong> helping grow the first mexican payment fintech, in B2BG & B2C Markets in various areas like culture, strategy, product & UxD, technology, operation discipline & scale.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">cooking, drinking wine & spirits, out with the dogs</strong>,
        always interested in <strong className="text-stone-100">innovation technology, coding and makerspaces</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Mexico and the US</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Love to cook and enjoy mexican wine, walk with dogs, travel and just hack with arduinos, software and RaspberryPis. Ask me anything on how technology can solve a business problem or social cause, and I´m game. `,
  aboutItems: [
    {label: 'Location', text: 'CDMX, MX', Icon: MapIcon},
    {label: 'Age', text: 'Gen-X', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Mexican / US', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, Wine, Beer & Spirits', Icon: SparklesIcon},
    {label: 'Study', text: 'Cornell University and ITESM-CEM', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Broxel', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend / UX development',
    skills: [
      {
        name: 'Figma',
        level: 8,
      },
      {
        name: 'Javascript / Next.js',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'FastAPI / API',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 7,
      },
      {
        name: '.NET MAUI',
        level: 7,
      },
    ],
  },
  {
    name: 'Hacking / Robotics',
    skills: [
      {
        name: 'Arduino / Raspberry PI',
        level: 10,
      },
      {
        name: 'Penetrartion & Overall Hacking',
        level: 9,
      },
      {
        name: 'Analog and Digital Electronics',
        level: 10,
      },
    ],
  },
  {
    name: 'Data Analytics',
    skills: [
      {
        name: 'Databricks & associated',
        level: 7,
      },
      {
        name: 'ML Flow',
        level: 4,
      },
      {
        name: 'OpenCV & Numpy',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 1996',
    location: 'Ithaca, NY',
    title: 'Masters in Engineering',
    content: <p>Software Systems, Electronic and Telecommunication Systems, and Networking cool engineering projects overall. Power over air, cyphers, embedded electronics, etc.</p>,
  },
  {
    date: 'May 1993',
    location: 'State of Mexico, MX',
    title: 'Bachelors in Electrical Engineering',
    content: <p>Just a great theory and true real life practice of technology in electronics and communications engineering. Many cool projects inlcluded the AirMouse!, Pavlov Rat 3d Study Box, Far communications with cans, PCB cheap chemical process, etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'MAY 2022 - Present',
    location: '🏦 Broxel, MX & US',
    title: 'SVP CxO',
    content: (
      <p>
        First Payment Fintech in Mexico. In charge of expanding culture, product,
strategy, technology and growth for the next 10 years.
      </p>
    ),
  },
  {
    date: 'JUL 2020 - MAY 2022',
    location: '🏦 Bineo, MX & US',
    title: 'Founder & CTIO',
    content: (
      <p>
        Built the 1st Retail Digital Bank Fintech in Mexico (51 CNBV). BU of Grupo
Financiero Banorte.
      </p>
    ),
  },
  {
    date: 'JAN 2017 - JUL 2020',
    location: '🥛 Grupo LALA (LALA:MX), MX & Global',
    title: 'CTIO & VP Innovation, Solutions & Productivity',
    content: (
      <p>
        Leader Dairy company in Mexico, and top 4th player in the Americas.
      </p>
    ),
  },
  {
    date: 'JAN 2015 - JAN 2017',
    location: '🥤 Coca Cola FEMSA (KOF:MX), MX & Global',
    title: 'Head CoE Innovation, Technology & Advanced Data Analytics / AI / ML.',
    content: (
      <p>
        Largest Coca Cola Bottler in the world.
      </p>
    ),
  },
  {
    date: 'MAY 2013 - JAN 2015',
    location: '🏦 PagaTodo, MX & Spain',
    title: 'CTIO & CDO',
    content: (
      <p>
        One of the largest Fintech in payment remittance, top-up, services,
debit/credit, transportation and loyalty programs.
      </p>
    ),
  },
  {
    date: 'JUL 2009 - MAY 2013',
    location: '🍷 Vino from Mexico, Vinícola Urbana 🛌 Extended Suites, MX & US',
    title: 'Founder & COO/CTIO/CDO',
    content: (
      <p>
        1st DTC Importer and Distributor of Mexican Wine in continental US. 1st Extended Stay concept hotel chain in Mexico. Units of Tana Holdings Group.
      </p>
    ),
  },
  {
    date: 'FEB 2004 - JUL 2009',
    location: '🏦 Financiera Alcanza (BME:SAN) Santander Consumer Bank, MX & US',
    title: 'Founder & CTIO/CDO',
    content: (
      <p>
        Consumer / Auto / Insurance creditech - prior OpenBank SAN.
      </p>
    ),
  },
  {
    date: 'FEB 2004 - JUL 2009',
    location: '📱 Verizon  - (GTE - BellAtlantic), US:LATAM:Global',
    title: 'VP – IT Technology Planning, Security & Global Sourcing. Senior Member of Staff - Director. Head of Software Development. Engineer - Executive Rotation Program: Manager Technology Planning, Senior Software & Hardware Engineer - Top Secret, RF & Data Network Engineer.',
    content: (
      <p>
        Fortune 25 Company. Provides mobile and general communications, information, and entertainment products and services to consumers, large and small businesses, and government agencies worldwide.
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
        name: 'Linkedin Comments',
        text: 'Check out my collegues recommendations.',
        image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch - Mandame una nota.',
  description: 'Send an email or note.',
  items: [
    {
      type: ContactType.Email,
      text: 'mexmarv@gmail.com',
      href: 'mailto:mexmarv@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'CDMX, Mexico',
      href: 'https://www.google.ca/maps/mexico',
    },
    {
      type: ContactType.Instagram,
      text: '@mexmarv',
      href: 'https://www.instagram.com/mexmarv/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/mexmarv',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mexmarv/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/mexmarv/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/mexmarv/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/mexmarv/'},
];
