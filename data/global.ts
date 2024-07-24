type Route = {
	title: string;
	path: string;
	leavesWebsite: boolean;
};

type FooterCol = {
	title: string;
	links: {
		name: string;
		link: string;
		icon?: string;
		leavesWebsite: boolean;
	}[];
};

type Footer = {
	columns: FooterCol[];
	contact: {
		email: string;
		address: string;
		phone: string;
	};
};

export const routes: Route[] = [
	{
		title: 'Home',
		path: '/',
		leavesWebsite: false,
	},
	{
		title: 'Projects',
		path: '/projects',
		leavesWebsite: false,
	},
];

export const footer: Footer = {
	columns: [
		{
			title: 'Pages',
			links: [
				{
					name: 'Home',
					link: '/',
					leavesWebsite: false,
				},
				{
					name: 'Projects',
					link: '/projects',
					leavesWebsite: false,
				},
			],
		},
		{
			title: 'Social',
			links: [
				{
					name: 'Email',
					link: 'mailto:louiskevyoung@gmail.com',
					icon: '/static/icons/mail-f.svg',
					leavesWebsite: true,
				},
				{
					name: 'Twitter',
					link: 'https://twitter.com/LouisYoung0420',
					icon: '/static/icons/twitter-line.png',
					leavesWebsite: true,
				},
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/in/louis-kevin-young',
					icon: '/static/icons/linkedin-f.svg',
					leavesWebsite: true,
				},
				{
					name: 'GitHub',
					link: 'https://github.com/louisryoung',
					icon: '/static/icons/github-f.svg',
					leavesWebsite: true,
				},
			],
		},
	],
	contact: {
		email: 'louiskevyoung@gmail.com',
		address: 'Rue du Maupas 33, 1004, Lausanne, Vaud, Switzerland',
		phone: '+41 22 548 09 47',
	},
};
