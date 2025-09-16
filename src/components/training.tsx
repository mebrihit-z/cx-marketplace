import '../App.css'
import SaaS from './saas';
import type { ActiveSection } from '../types';
// Image assets from Figma

export default function Training() {
    const handleSetActiveSection = (section: ActiveSection) => {
        // Handle section change logic here
        console.log('Active section changed to:', section);
    };

    return (
      <>
        <SaaS setActiveSection={handleSetActiveSection} />
      </>
    );
}