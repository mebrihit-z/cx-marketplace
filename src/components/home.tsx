import Hero from './hero';
import GallerySection from './gallery-section';
import AISection from './ai-section';
import PromiseSection from './promise-section';
import WhiteGloveSection from './white-glove-section';
import Roadmap from './roadmap';

const roadmap = "/images/home-page-roadmap.svg";

type ActiveSection = 'home' | 'gallery' | 'pricing' | 'faqs' | 'training' | 'contact' | 'saas';

interface HomeProps {
  setActiveSection: (section: ActiveSection) => void;
}

export default function Home({ setActiveSection }: HomeProps) {
    return (
      <div className="w-full min-h-screen">
        <Hero />
        <GallerySection setActiveSection={setActiveSection} />
        <AISection />
        {/* Show roadmap component on mobile, image on desktop */}
        <div className="block md:hidden">
          <Roadmap />
        </div>
        <div className='hidden md:block w-full'>
          <img 
            alt="roadmap" 
            className="block w-full h-auto object-contain" 
            src={roadmap} 
          />
        </div>
        <PromiseSection />
        <WhiteGloveSection />
      </div>
    );
}