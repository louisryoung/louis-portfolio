import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
	{
		title: 'Alz Guide',
		desc: 'Are you suffering from Alzheimer? Find support in your region.',
		img: '/static/projects/alzguide.jpg',
		link: 'https://alzguide.ch/',
		tags: ['React', 'Next.js', 'Redux', 'MaterialUI', 'Emotion', 'Node.js'],
	},
	{
		title: 'SeaForester',
		desc: 'Seaforestation is a great way to revive our lost ocean forests.',
		img: '/static/projects/seaforester.jpg',
		link: 'https://www.seaforester.org/',
		tags: ['React', 'Next.js', 'TypeScript', 'Prismic'],
	},
	{
		title: 'CrowdFeed (In development)',
		desc: 'RSS feeds from your favorite creators',
		img: '/static/projects/crowdfeed.jpg',
		link: 'https://crowdfeed.com/',
		tags: [
			'Vue',
			'Nuxt',
			'TailwindCSS',
			'Pinia',
			'Capacitor',
			'Python',
			'Django',
		],
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
			'Electron',
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
