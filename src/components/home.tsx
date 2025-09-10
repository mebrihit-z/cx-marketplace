import Hero from './hero';
import GallerySection from './gallery-section';
import AISection from './ai-section';
import PromiseSection from './promise-section';
import WhiteGloveSection from './white-glove-section';

const roadmap = "/images/home-page-roadmap.svg";

export default function Home() {
    return (
      <div className="w-full min-h-screen">
        <Hero />
        <GallerySection />
        <AISection />
        <div className='w-full px-4 md:px-8 lg:px-16 py-8 md:py-16'>
          <img 
            alt="roadmap" 
            className="block w-full h-auto max-w-none object-contain" 
            src={roadmap} 
          />
        </div>
        <PromiseSection />
        <WhiteGloveSection />
      </div>
    );
}