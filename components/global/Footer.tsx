import Link from 'next/link';
import React from 'react';
import { footer } from '@/data/global';
import Image from 'next/image';
import { FaEnvelope, FaHome, FaPhone, FaDiscord } from 'react-icons/fa';

function Footer() {
	return (
		<footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
			<div className="w-full max-w-5xl m-auto grid grid-cols-2 sm:grid-cols-4 justify-between items-start">
				{footer.columns.map((item, index) => {
					return (
						<div key={index} className="text-left mb-5 sm:mb-0">
							<h4 className="uppercase text-fun-gray text-sm font-bold">
								{item.title}
							</h4>
							<div>
								{item.links.map((item, index) => {
									return (
										<div key={index} className="my-3">
											{item.leavesWebsite ? (
												<a
													href={item.link}
													target="_blank"
													className="items-center flex hover:text-fun-pink"
												>
													{item.icon && (
														<span className="pr-2 -mb-1">
															<Image src={item.icon} width={20} height={20} />
														</span>
													)}
													{item.name}
												</a>
											) : (
												<Link href={item.link}>
													<div className="hover:text-fun-pink cursor-pointer">
														{item.name}
													</div>
												</Link>
											)}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
				<div className="col-span-2 sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
					<h4 className="uppercase text-fun-gray text-sm font-bold">Contact</h4>
					<div className="space-y-2 w-full flex flex-col">
						<div className="my-2 items-center flex">
							<span className="pr-2 -mb-1">
								<FaEnvelope />
							</span>
							<span className="ml-1 text-gray-200">{footer.contact.email}</span>
						</div>
						<div className="my-2 items-center flex">
							<span className="pr-2 -mb-1">
								<FaHome />
							</span>
							<span className="ml-1 text-gray-200">
								{footer.contact.address}
							</span>
						</div>
						<div className="my-2 items-center flex">
							<span className="pr-2 -mb-1">
								<FaPhone />
							</span>
							<span className="ml-1 text-gray-200">{footer.contact.phone}</span>
						</div>
						<div className="my-2 items-center flex">
							<span className="pr-2 -mb-1">
								<FaDiscord />
							</span>
							<span className="ml-1 text-gray-200">
								{footer.contact.discord}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-5xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
				<div className="flex flex-col items-center justify-center ">
					<div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
						Made with{' '}
						<div className="space-x-2 inline-flex items-center -mt-1 ml-3">
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
									width="26"
									title="React"
								/>
								<span className="sr-only">React</span>
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
									width="40"
									className="invert"
									title="NextJS"
								/>
								<span className="sr-only">NextJS</span>
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
									width="26"
									title="TailwindCSS"
								/>
								<span className="sr-only">TailwindCSS</span>
							</span>
						</div>
					</div>
					<div className="mt-2 text-xs ">
						Developed by{' '}
						<a
							href="mailto:louisyoung420@gmail.com"
							className="text-fun-gray-light font-medium"
						>
							Louis Young
						</a>
						. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
