import Hero from './hero';
import GallerySection from './gallery-section';
import AISection from './ai-section';
import PromiseSection from './promise-section';
import WhiteGloveSection from './white-glove-section';

const roadmap = "/images/home-page-roadmap.svg";

export default function Home() {
    return (
      <>
        <Hero />
        <GallerySection />
        <AISection />
        <div className='w-full h-full'>
        <img alt="vector" className="block max-w-none size-full" src={roadmap} />
        </div>
        <PromiseSection />
        <WhiteGloveSection />
      </>
    );
}