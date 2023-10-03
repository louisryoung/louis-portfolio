import React from 'react';
import { skills } from '@/data/content/home';
import SectionTitle from '../global/SectionTitle';

function Skills() {
	return (
		<div className="mt-60">
			<SectionTitle title="My Skills and Services" />
			<div className="flex flex-col md:flex-row justify-between relative">
				<ul className="relative text-xl text-fun-gray-light w-full text-center md:text-left font-bold md:max-w-lg mb-16 md:mr-10 md:mb-0 md:w-max mr-0">
					<li className="mb-5">
						✔️ Detail-oriented{' '}
						<span className="heroShiny1 text-fun-pink">UI/UX</span> Development
					</li>
					<li className="mb-5">
						✔️ Cross-platform App Development
						<br />
						<span className="heroShiny1 text-fun-pink">
							(Web, iOS/Android, Desktop)
						</span>
					</li>
					<li className="mb-5">✔️ Server-side Development
						<br />
						<span className="heroShiny1 text-fun-pink">
							(Laravel, Node.js)
						</span>
					</li>
					<li className="mb-5">✔️{' '}
						<span className="heroShiny1 text-fun-pink">Performance</span> Optimization
					</li>
					<li className="mb-5">✔️{' '}
						<span className="heroShiny1 text-fun-pink">SEO</span> Optimization
					</li>
					<img
						className="sqD bottom-[-80px] left-[-50px] lg:bottom-[30px] lg:left-[-35px] z-[-10]"
						src="/static/doodles/skills/laptop.svg"
					/>
					<img
						className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
						src="/static/doodles/skills/coding.svg"
					/>
					<img
						className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[-40px]"
						src="/static/doodles/skills/youtube.svg"
					/>
					<img
						className="sqD top-[-15px] right-[-15px]"
						src="/static/doodles/skills/fillStar.svg"
					/>
				</ul>
				<div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-8 sm:gap-4 md:gap-8 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
					{skills.map((item, index) => {
						return (
							<div
								title={item.title}
								key={index}
								className="w-10 mx-auto flex items-center flex-col justify-center"
							>
								<img src={item.icon} style={item.style} />
								<p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
									{item.title}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Skills;
