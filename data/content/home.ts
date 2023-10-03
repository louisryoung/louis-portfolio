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
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
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
		title: 'Vuetify',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
	},
	{
		title: 'Svelte',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
	},
	{
		title: 'Ionic',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
	},
	{
		title: 'Electron',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
	},
	{
		title: 'GraphQL',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
	},
	{
		title: 'Jest',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
	},
	{
		title: 'Storybook',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
	},
	{
		title: 'Socket.io',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
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
		title: 'PHP',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
	},
	{
		title: 'Laravel',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
	},
	{
		title: 'MySQL',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
	},
	{
		title: 'PostgreSQL',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
	},
	{
		title: 'MongoDB',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
	},
];

export const testimonials: Testimonial[] = [
	{
		quote:
			'He completed most of his tasks on time, came up with innovative solutions for the various challenges we faced. I highly recommend him for any of your React projects.',
			name: 'Ethan Lark',
			job: 'PM of Blok Watches',
		},
		{
			quote:
				'I am confident in his abilities as a senior developer. The code was clean, easy to understand, and exactly what I was looking for.',
			name: 'Andre Nerves',
			job: 'Co-owner of Cantine Cotiere',
		},
		{
			quote:
			'The communication throughout the project was spot on and my vision was executed perfectly. And he is a great person with noble work ethic.',
			name: 'Tim Anderson',
			job: 'CEO of Camp',
		},
];
