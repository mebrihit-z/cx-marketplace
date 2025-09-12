import GrowthSolutions from './growth-solutions';
import IntegrationsSection from './integrations-section';
import LeadOrganization from './lead-organization';
import Testimonials from './testimonials';
import Sections from './blog-section'; 

export default function Contact() {
    return (
      <>
        <h1>Contact</h1>
        <GrowthSolutions />
        <LeadOrganization />
        <IntegrationsSection />
        <Testimonials />
        <Sections />
      </>
    );
}