type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export const skills: Skill[] = [
  {
    title: 'Javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    title: 'Typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    title: 'TailwindCSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    title: 'MaterialUI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
  },
  {
    title: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    title: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    title: 'NextJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    style: { filter: 'invert(1)' },
  },
  {
    title: 'Vue',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    title: 'NuxtJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
  },
  {
    title: 'Svelte',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
  },
  {
    title: 'Ember',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original-wordmark.svg',
  },
  {
    title: 'Gatsby',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg',
  },
  {
    title: 'Electron',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
  },
  {
    title: 'Ionic',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
  },
  {
    title: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    title: 'NodeJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    title: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    style: { filter: 'invert(1)' },
  },
  {
    title: 'Meteor',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg',
  },
  {
    title: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    title: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  },
  {
    title: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'He completed most of his tasks on time, came up with innovative solutions for the various challenges we faced. I highly recommend him for any of your React projects.',
    name: 'Andre Nerves',
    job: 'CEO of Zebedee',
  },
  {
    quote:
      'The communication throughout the project was spot on and my vision was executed perfectly. And he is a great person with noble work ethic.',
    name: 'Ethan Lark',
    job: 'PM of Namtech Solutions',
  },
  {
    quote:
      'I am confident in his abilities as a senior front-end developer. The code was clean, easy to understand, and exactly what I was looking for.',
    name: 'Tim Anderson',
    job: 'Co-owner of Canary Studio',
  },
];
