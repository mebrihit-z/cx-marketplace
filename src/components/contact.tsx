import GrowthSolutions from './growth-solutions';
import IntegrationsSection from './integrations-section';
import LeadOrganization from './lead-organization';
import Testimonials from './testimonials';

export default function Contact() {
    return (
      <>
        <h1>Contact</h1>
        <Testimonials />
        <GrowthSolutions />
        <LeadOrganization />
        <IntegrationsSection />
        <Testimonials />
      </>
    );
}