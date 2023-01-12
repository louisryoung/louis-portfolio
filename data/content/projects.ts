import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
  {
    title: 'Zebedee Developer Dashboard',
    desc: 'The full power of ZEBEDEE at your fingertips! Create and manage your game wallets, API keys, and more.',
    img: '/static/projects/zebedee-dev-dash.png',
    link: 'https://zebedee.io/developers/dashboard',
    tags: ['React', 'Flow', 'Redux', 'styled-components', 'Mixpanel', 'PWS'],
  },
  {
    title: 'Zebedee Mobile Wallet',
    desc: 'A bitcoin wallet where game developers and game players earn bitcoin with games (Android, iOS)',
    img: '/static/projects/zebedee-mobile-wallet.png',
    link: 'https://play.google.com/store/apps/details?id=io.zebedee.wallet',
    tags: [
      'React Native',
      'Flow',
      'Redux',
      'styled-components',
      'Mixpanel',
      'Jest',
    ],
  },
  {
    title: 'Heatrow',
    desc: 'A simple but an elegant landing page for an real estate company',
    img: '/static/projects/heatrow.png',
    link: 'https://heatrow.vercel.app/',
    github: 'https://github.com/louisyoung92/react-heatrow',
    tags: ['React', 'TypeScript', 'Sass', 'Motion'],
  },
  {
    title: 'Blocket',
    desc: 'One of the largest Swedish marketplaces with over 5 million items to find bargains & sell freely,',
    img: '/static/projects/blocket.png',
    link: 'https://www.blocket.se',
    tags: [
      'React', 'Socket.io', 'GraphQL', 'Apollo', 'Node', 'Express', 'Prisma', 'PostgreSQL'
    ],
  },
  {
    title: 'Blocket App',
    desc: 'Mobile app of Blocket (iOS, Android)',
    img: '/static/projects/blocket-app.png',
    link: 'https://play.google.com/store/apps/details?id=se.appcorn.Blocket',
    tags: [
      'React', 'Ionic', 'Capacitor', 'Socket.io', 'GraphQL', 'Apollo',
    ],
  },
  {
    title: 'Safarika',
    desc: 'Travel facts about Africa. Take a glimpse of africa’s bewitching attractions',
    img: '/static/projects/safarika.png',
    link: 'https://safarika-adeola.netlify.app/',
    github: 'https://github.com/louisyoung92/safarika-vanilla-javascript',
    tags: ['JavaScript', 'HTML', 'SaSS'],
  },

  {
    title: 'Pyszne.pl Mobile',
    desc: 'A mobile app where you can order your food online with delivery - pizza, burger, kebab, sushi, home dinners without leaving your home.',
    img: '/static/projects/pyszne-app.png',
    link: 'https://play.google.com/store/apps/details?id=com.yourdelivery.pyszne&hl=en&gl=US',
    tags: ['React', 'Ionic', 'Mobx', 'TypeScript', 'MaterialUI', 'iOS', 'Android'],
  },
  {
    title: 'FlorAcess',
    desc: 'Webshop for garden centers, florists and wholesalers.',
    img: '/static/projects/floracess.png',
    link: 'https://www.floraccess.com',
    tags: ['Svelte', 'SvelteKit', 'ElasticSearch', 'Stripe', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Tic Tac Toe',
    desc: 'Single-player and multiplayer Tic Tac Toe game',
    img: '/static/projects/tic-tac-toe.png',
    link: 'https://tic-tac-toe-seven-coral.vercel.app',
    github: 'https://github.com/louisyoung92/tic-tac-toe',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Jest'],
  },
  {
    title: 'Micheal Hill',
    desc: 'Shop online at Michael Hill Australia. Find the perfect gift with our range of diamond engagement rings, diamond jewellery, earrings, watches and bracelets.',
    img: '/static/projects/michaelhill.png',
    link: 'https://www.michaelhill.com.au',
    tags: [
      'Vue', 'Nuxt.js', 'PWA', 'Laravel', 'MySQL', 'CRM'
    ]
  },
  {
    title: 'Quizzical',
    desc: 'Ready to answer 5 simple questions?',
    img: '/static/projects/quizzical.png',
    link: 'https://quiz-app5.netlify.app',
    github: 'https://github.com/louisyoung92/quiz-app-nextjs',
    tags: ['React', 'NextJS', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Advice Generator App',
    desc: 'A solution to the Advice generator app challenge on Frontend Mentor',
    img: '/static/projects/advice-generator-app.png',
    link: 'https://generate-advice.netlify.app',
    github:
      'https://github.com/louisyoung92/advice-generator-react-tailwindcss',
    tags: ['React', 'TailwindCSS'],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
