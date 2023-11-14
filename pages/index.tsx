import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Page from '@/components/utility/Page';
// import Posts from "@/components/home/Posts";
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
	return (
		<Page
			currentPage="Home"
			meta={{
				desc: 'I have been coding beautiful and performant websites and mobile apps for 7+ years. Feel free to get a glimpse of my website and hit me up if you like my work!',
			}}
		>
			<Hero />
			<div className="mt-20 space-y-32">
				<Projects />
				<Skills />
				<Testimonials />
				{/* <Posts allPosts={allPosts} /> */}
			</div>
			<CTA />
		</Page>
	);
}
