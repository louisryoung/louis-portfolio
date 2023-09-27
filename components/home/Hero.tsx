import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import { footer } from '@/data/global';

function Hero() {
	return (
		<>
			<div
				className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1 mt-12"
				style={{ maxWidth: '1200px' }}
			>
				<p className="text-2xl mb-5">
					<img
						className="h-10 inline-block mr-2"
						src="/static/doodles/hero/wave.gif"
					/>
					Hey there,
				</p>
				<h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg leading-tight">
					<div className="mb-3 md:mb-6">
						I am <span className="heroShiny1 text-fun-pink">Louis</span>,
					</div>
					<div className="mb-3 md:mb-6">
						a Software{' '}
						<span className="heroShiny1 text-fun-pink">Consultant</span>
					</div>
					based in{' '}
					<span className="heroShiny2 text-white bg-[#F70000] px-2 -py-1 mt-2 md:mt-0">
						Switzerland
					</span>
					<img
						className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
						style={{ animationDelay: '0.1s' }}
						src="/static/doodles/hero/html.svg"
					/>
					<img
						className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
						style={{ animationDelay: '0.2s' }}
						src="/static/doodles/hero/nextjs.svg"
					/>
					<img
						className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-280px] w-[400px]"
						style={{ animationDelay: '0.3s' }}
						src="/static/doodles/hero/louis.png"
					/>
					<img
						className="sqD hidden sm:block bottom-[-340px] left-[-300px]"
						style={{ animationDelay: '0.4s' }}
						src="/static/doodles/hero/coder.svg"
					/>
					<img
						className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
						style={{ animationDelay: '0.5s' }}
						src="/static/doodles/hero/js.svg"
					/>
					<img
						className="sqD bottom-[-320px] right-[65%] sm:right-[35%]"
						style={{ animationDelay: '0.6s' }}
						src="/static/doodles/hero/dino.svg"
					/>
					<img
						className="sqD right-[-60px] sm:right-[-100px] bottom-[120px] lg:[5%]"
						style={{ animationDelay: '0.4s' }}
						src="/static/doodles/hero/vue.png"
					/>
					<img
						className="sqD right-[-60px] sm:right-[-80px] bottom-[-180px] lg:[5%]"
						style={{ animationDelay: '0.7s' }}
						src="/static/doodles/hero/paintbrush.svg"
					/>
					<img
						className="sqD left-[-60px] sm:left-[-140px] bottom-[80px] lg:[5%]"
						style={{ animationDelay: '0.8s' }}
						src="/static/doodles/hero/react.png"
					/>
					<img
						className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
						src="/static/doodles/hero/pop1.svg"
					/>
					<img
						className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-[-60px] opacity-40"
						style={{ animationDelay: '0.9s' }}
						src="/static/doodles/hero/code.svg"
					/>
				</h1>
				<a
					className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors bg-opacity-75"
					target="_blank"
					href="./louis.pdf"
				>
					More about me
				</a>
				<div className="flex justify-center space-x-6 md:space-x-10 mt-10">
					{footer.columns[1].links.map(({ link, icon, name }) => {
						if (name !== 'Skype') {
							return (
								<a
									key={icon}
									className="whitespace-nowrap p-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors flex justify-center items-center bg-opacity-75"
									target="_blank"
									href={link}
								>
									<Image
										src={icon}
										width={20}
										height={20}
										className="brightness-200"
									/>
								</a>
							);
						}
					})}
				</div>
			</div>
		</>
	);
}

export default Hero;
