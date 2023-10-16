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
		title: 'CAMP',
		desc: 'Shop the best toys, apparel, gifts and more at camp.com.',
		img: '/static/projects/camp.jpg',
		link: 'https://camp.com/',
		tags: ['React', 'Remix', 'TypeScript', 'GraphQL', 'Apollo', 'TailwindCSS', 'Node.js'],
	},
	{
		title: 'Cantine Cotiere',
		desc: "A website of an Elbow Canteen in Canada",
		img: '/static/projects/cantinecotiere.jpg',
		link: 'https://cantinecotiere.ca/',
		tags: ['Svelte', 'SvelteKit', 'Swiper', 'TailwindCSS'],
	},
	{
		title: 'meettrax (Beta version)',
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
		title: 'CrowdFeed (In development)',
		desc: 'RSS feeds from your favorite creators',
		img: '/static/projects/crowdfeed.jpg',
		link: 'https://crowdfeed.com/',
		tags: ['Vue', 'Nuxt', 'TailwindCSS', 'Pinia', 'Capacitor', 'Python', 'Django'],
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
