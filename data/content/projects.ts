import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
	{
		title: 'Blok Watches',
		desc: 'Swiss-made watches for kids',
		img: '/static/projects/blok-watches.jpg',
		link: 'https://blokwatches.com/',
		tags: ['Vue', 'Nuxt', 'TypeScript', 'Pinia', 'Stripe', 'GSAP', 'Laravel', 'PostgreSQL'],
	},
	{
		title: 'MetaMask Learn',
		desc: 'MetaMask is a free platform to take you from zero to hero in Web3',
		img: '/static/projects/web3.jpg',
		link: 'https://learn.metamask.io/',
		tags: ['React', 'Next', 'Lit', 'GSAP', 'Node.js'],
	},
	{
		title: 'Cosmos',
		desc: 'Build a blockchain using the best-in-class open source libraries and services',
		img: '/static/projects/cosmos.jpg',
		link: 'https://cosmos.network/',
		tags: ['Vue', 'Nuxt', 'Vuex'],
	},
	{
		title: 'Zebedee Developer Dashboard',
		desc: 'The full power of ZEBEDEE at your fingertips! Create and manage your game wallets, API keys, and more',
		img: '/static/projects/zebedee-dev-dash.jpg',
		link: 'https://dashboard.zebedee.io',
		tags: ['React', 'TypeScript', 'Redux', 'Mixpanel', 'styled-components', 'Jest'],
	},
	{
		title: 'Giopato & Coombes',
		desc: 'Together with selected artisans, Giopato & Coombes look for the best manufacture technique for every single project',
		img: '/static/projects/giopato.jpg',
		link: 'https://www.giopatocoombes.com/',
		tags: ['Vue', 'Nuxt', 'TypeScript', 'Node.js'],
	},
	{
		title: 'TDE',
		desc: "Digital creatives in sport. At TDE, we love sports and harness its unparalleled power in marketing.",
		img: '/static/projects/tde.jpg',
		link: 'https://www.tde.nl/',
		tags: ['Svelte', 'SvelteKit', 'Laravel'],
	},
	{
		title: 'CAMP',
		desc: 'Shop the best toys, apparel, gifts and more at camp.com.',
		img: '/static/projects/camp.jpg',
		link: 'https://camp.com/',
		tags: ['React', 'Remix', 'TypeScript', 'GraphQL', 'Apollo', 'TailwindCSS', 'Node.js'],
	},
	{
		title: 'Houses of the World',
		desc: "Houses Of is a project showcasing charismatic houses around the world. Explore locations.",
		img: '/static/projects/houses.jpg',
		link: 'https://housesof.world/',
		tags: ['Svelte', 'SvelteKit', 'Lenis', 'Vite'],
	},
	{
		title: 'CrowdFeed (In development)',
		desc: 'RSS feeds from your favorite creators',
		img: '/static/projects/crowdfeed.jpg',
		link: 'https://crowdfeed.com/',
		tags: ['Vue', 'Nuxt', 'TailwindCSS', 'Pinia', 'Capacitor', 'Python', 'Django'],
	},
	{
		title: 'meettrax (Still in beta version)',
		desc: 'The modern all-in-one platform to take your sports meets to the next level',
		img: '/static/projects/meettrax.jpg',
		link: 'https://meettrax.com/',
		tags: [
			'Vue',
			'Inertia',
			'Ionic',
			'TailwindCSS',
			'Pinia',
			'TypeScript',
			'Laravel',
			'MySQL',
			'Redis',
		],
	},
	{
		title: 'Tic Tac Toe (Open source)',
		desc: 'A single-player and multiplayer Tic Tac Toe game',
		img: '/static/projects/tic-tac-toe.jpg',
		link: 'https://tic-tac-toe-seven-coral.vercel.app',
		github: 'https://github.com/louisryoung/tic-tac-toe',
		tags: ['React', 'TypeScript', 'TailwindCSS', 'Jest'],
	},
];

export const allTags = [];

projects.forEach((project) => {
	project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
