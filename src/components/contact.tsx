import GrowthSolutions from './growth-solutions';
import IntegrationsSection from './integrations-section';
import LeadOrganization from './lead-organization';
import Testimonials from './testimonials';
import Sections from './blog-section'; 
import IdentifyBestPlanSections from './identify-best-plan';

export default function Contact() {
    return (
      <>
        {/* <h1>Contact</h1> */}
        <GrowthSolutions />
        <LeadOrganization />
        <IntegrationsSection />
        <Testimonials />
        <Sections />
        <IdentifyBestPlanSections />
      </>
    );
}