import Hero from './hero';
import GallerySection from './gallery-section';
import AISection from './ai-section';
import PromiseSection from './promise-section';
import WhiteGloveSection from './white-glove-section';
import Roadmap from './roadmap';
import type { MoreTemplate } from '../data/templates';
import type { ActiveSection } from '../types';

const roadmap = "/images/home-page-roadmap.svg";

interface HomeProps {
  setActiveSection: (section: ActiveSection) => void;
  setSelectedTemplate: (template: MoreTemplate) => void;
}

export default function Home({ setActiveSection, setSelectedTemplate }: HomeProps) {
    return (
      <div className="w-full min-h-screen">
        <Hero setActiveSection={setActiveSection} />
        <GallerySection setActiveSection={setActiveSection} setSelectedTemplate={setSelectedTemplate} />
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