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
    title: 'Tic Tac Toe',
    desc: 'Single-player and multiplayer Tic Tac Toe game',
    img: '/static/projects/tic-tac-toe.png',
    link: 'https://tic-tac-toe-seven-coral.vercel.app',
    github: 'https://github.com/louisyoung92/tic-tac-toe',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Jest'],
  },
  {
    title: 'Blocket',
    desc: 'One of the largest Swedish marketplaces with over 5 million items to find bargains & sell freely,',
    img: '/static/projects/blocket.png',
    link: 'https://www.blocket.se',
    tags: [
      'React', 'Next.js', 'TypeScript', 'Socket.io', 'GraphQL', 'Apollo', 'Node', 'Express', 'Prisma', 'PostgreSQL'
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
    title: 'Advice Generator App',
    desc: 'A solution to the Advice generator app challenge on Frontend Mentor',
    img: '/static/projects/advice-generator-app.png',
    link: 'https://generate-advice.netlify.app',
    github:
      'https://github.com/louisyoung92/advice-generator-react-tailwindcss',
    tags: ['React', 'TailwindCSS'],
  },
  {
    title: 'Pyszne.pl',
    desc: 'Find the best restaurants and pizzerias in your area on Pyszne.pl! Order your favorite pizza, burger, sushi, kebab and much more without leaving your home.',
    img: '/static/projects/pyszne.png',
    link: 'https://www.pyszne.pl',
    tags: [
      'React', 'Next.js', 'Mobx', 'TypeScript', 'Node', 'Express', 'MongoDB', 'mongoose'
    ],
  },
  {
    title: 'Pyszne.pl Mobile',
    desc: 'A mobile app where you can order your food online with delivery - pizza, kebab, sushi, home dinners',
    img: '/static/projects/pyszne-app.png',
    link: 'https://play.google.com/store/apps/details?id=com.yourdelivery.pyszne&hl=en&gl=US',
    tags: ['React', 'Ionic', 'Mobx', 'TypeScript', 'MaterialUI', 'iOS', 'Android'],
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
    title: 'Time Tracking Dashboard',
    desc: 'A solution to the Time tracking dashboard challenge on Frontend Mentor.',
    img: '/static/projects/time-tracking-dashboard.png',
    link: 'https://time-tracking-dashbord.netlify.app',
    github: 'https://github.com/louisyoung92/time-tracking-dashboard-react',
    tags: ['React', 'SASS'],
  },
  {
    title: 'Card Game',
    desc: 'A card game with GraphQL and CSS animation',
    img: '/static/projects/card-game.png',
    github: 'https://github.com/louisyoung92/card-game-react-graphql',
    tags: ['React', 'TypeScript', 'GraphQL', 'TailwindCSS'],
  },
  {
    title: "Trịnh Minh Nhật's Store",
    desc: 'A fully responsive modern Full Stack eCommerce website with Payments functionality.',
    img: '/static/projects/trinh-store.png',
    link: 'https://nextjs-ecommerce-sanity-stripe.netlify.app',
    github: 'https://github.com/louisyoung92/trinh-store',
    tags: ['React', 'NextJS', 'Stripe'],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
