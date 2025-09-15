import PreviewHero from './preview-hero.tsx'; 
import GrowthSolutions from './growth-solutions';
import IntegrationsSection from './integrations-section';
import LeadOrganization from './lead-organization';
import Testimonials from './testimonials';
import Sections from './blog-section'; 
import IdentifyBestPlanSections from './identify-best-plan';
import PreviewFooter from './preview-footer';

export default function Contact() {
    return (
      <>
        {/* <h1>Contact</h1> */}
        <PreviewHero />
        <GrowthSolutions />
        <LeadOrganization />
        <IntegrationsSection />
        <Testimonials />
        <Sections />
        <IdentifyBestPlanSections />
        <PreviewFooter />
      </>
    );
}