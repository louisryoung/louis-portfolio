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
    desc: 'A bitcoin wallet where game developers and game players earn bitcoin with games.',
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
    title: 'Amazon Clone',
    desc: 'Fully functional Amazon clone with Stripe payment with webhooks.',
    img: '/static/projects/amazon-clone.png',
    link: 'https://amazon-build-ten.vercel.app',
    github: 'https://github.com/louisyoung92/amazon-clone-nextjs-stripe',
    tags: [
      'React',
      'NextJS',
      'TailwindCSS',
      'Redux',
      'Stripe',
      'Webhooks',
      'Firebase',
    ],
  },
  {
    title: 'Learning YEI Portal',
    desc: 'All the resources you will need to get a boost into economics.',
    img: '/static/projects/yei-learn.png',
    link: 'https://learn.theyei.org/',
    github: 'https://github.com/louisyoung92/learning-yei-portal-react',
    tags: ['React', 'NextJS', 'TypeScript', 'TailwindCSS', 'Firebase'],
  },
  {
    title: 'Quizzical',
    desc: 'Ready to answer 5 simple questions?',
    img: '/static/projects/quizzical.png',
    link: 'https://quiz-app5.netlify.app/',
    github: 'https://github.com/louisyoung92/quiz-app-nextjs',
    tags: ['React', 'NextJS', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Time Tracking Dashboard',
    desc: 'A solution to the Time tracking dashboard challenge on Frontend Mentor.',
    img: '/static/projects/time-tracking-dashboard.png',
    link: 'https://time-tracking-dashbord.netlify.app/',
    github: 'https://github.com/louisyoung92/time-tracking-dashboard-react',
    tags: ['React', 'SASS'],
  },
  {
    title: 'Advice Generator App',
    desc: 'A solution to the Advice generator app challenge on Frontend Mentor',
    img: '/static/projects/advice-generator-app.png',
    link: 'https://generate-advice.netlify.app/',
    github:
      'https://github.com/louisyoung92/advice-generator-react-tailwindcss',
    tags: ['React', 'TailwindCSS'],
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
    link: 'https://nextjs-ecommerce-sanity-stripe.netlify.app/',
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
