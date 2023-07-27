import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
	{
		title: 'Zebedee Developer Dashboard',
		desc: 'The full power of ZEBEDEE at your fingertips! Create and manage your game wallets, API keys, and more',
		img: '/static/projects/zebedee-dev-dash.png',
		link: 'https://dashboard.zebedee.io',
		tags: ['React', 'Flow', 'Redux', 'Mixpanel', 'PWA'],
	},
	{
		title: 'ZBD App',
		desc: 'A bitcoin wallet where game developers and game players earn bitcoin with games',
		img: '/static/projects/zebedee-mobile-wallet.png',
		link: 'https://zbd.gg/',
		tags: ['React Native', 'Flow', 'Redux', 'Mixpanel', 'Jest'],
	},
	{
		title: 'Cosmos',
		desc: 'Build a blockchain using the best-in-class open source libraries and services',
		img: '/static/projects/cosmos.png',
		link: 'https://cosmos.network/',
		tags: ['Vue', 'Nuxt', 'TypeScript', 'Pinia', 'Web3'],
	},
	{
		title: 'Health Together Website',
		desc: 'Creating the future of health & human services',
		img: '/static/projects/healthy-together.png',
		link: 'https://www.healthytogether.co/',
		tags: [
			'React',
			'Next.js',
			'TypeScript',
			'Redux',
			'Chart.js',
			'Cypress',
			'Socket',
			'ElasticSearch',
		],
	},
	{
		title: 'Health Together App',
		desc: 'Public Health & Safety Platform',
		img: '/static/projects/healthy-together-app.png',
		link: 'https://www.healthytogether.co/support/download-healthy-together',
		tags: ['React', 'Ionic', 'Redux', 'TypeScript', 'Capacitor', 'Swiper'],
	},
	{
		title: 'Blok Watches',
		desc: 'Swiss-made watches for kids',
		img: '/static/projects/blok-watches.png',
		link: 'https://blokwatches.com/',
		tags: ['Vue', 'Nuxt', 'Vuex', 'Stripe', 'GSAP', 'Node'],
	},
	{
		title: 'Evervault',
		desc: "Evervault is a flexible, plug-and-play encryption and data security API that doesn't interfere with the ways you already use your data",
		img: '/static/projects/evervault.png',
		link: 'https://evervault.com/',
		tags: ['React', 'Next.js', 'Radix UI', 'Three.js', 'PWA'],
	},
	{
		title: 'Reflect',
		desc: 'Reflect builds you a second brain that you can reference anytime',
		img: '/static/projects/reflect.png',
		link: 'https://reflect.app/',
		tags: ['Svelte', 'SvelteKit', 'Laravel', 'Vercel'],
	},
	{
		title: 'Heatrow',
		desc: 'A simple but an elegant landing page for an real estate company',
		img: '/static/projects/heatrow.png',
		link: 'https://heatrow.vercel.app/',
		github: 'https://github.com/louisryoung/react-heatrow',
		tags: ['React', 'TypeScript', 'Sass', 'Motion'],
	},
	{
		title: 'Safarika',
		desc: 'Travel facts about Africa. Take a glimpse of africa’s bewitching attractions',
		img: '/static/projects/safarika.png',
		link: 'https://safarika-adeola.netlify.app/',
		github: 'https://github.com/louisryoung/safarika-vanilla-javascript',
		tags: ['JavaScript', 'HTML', 'SaSS'],
	},
	{
		title: 'Tic Tac Toe',
		desc: 'Single-player and multiplayer Tic Tac Toe game',
		img: '/static/projects/tic-tac-toe.png',
		link: 'https://tic-tac-toe-seven-coral.vercel.app',
		github: 'https://github.com/louisryoung/tic-tac-toe',
		tags: ['React', 'TypeScript', 'TailwindCSS', 'Jest'],
	},
	{
		title: 'meettrax',
		desc: 'The modern all-in-one platform to take your sports meets to the next level',
		img: '/static/projects/meettrax.png',
		link: 'https://meettrax.com',
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
];

export const allTags = [];

projects.forEach((project) => {
	project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
