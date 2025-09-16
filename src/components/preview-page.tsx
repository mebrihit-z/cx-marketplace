// import React from 'react';
import PreviewHero from './preview-hero.tsx'; 
import PreviewFooter from './preview-footer';
import GrowthSolutions from './growth-solutions';
import IntegrationsSection from './integrations-section';
import LeadOrganization from './lead-organization';
import Testimonials from './testimonials';
import BlogSections from './blog-section';
import type { MoreTemplate } from '../data/templates';
// Image assets from Figma
const imgVector6 = "icons/preview-log.svg";
const imgVuesaxLinearArrowRight = "icons/black-right-arrow.svg";

interface PreviewPageProps {
  template: MoreTemplate;
}

export default function PreviewPage({ template }: PreviewPageProps) {
  // Note: template parameter is available for future customization
  console.log('Preview page opened for template:', template.title);
  return (
    <div className="min-h-screen bg-[#041117]">
      {/* Header menu */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#041117] bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-32 items-center">
              <div className="h-[33.455px] relative w-[92px]">
                <div className="absolute bottom-0 left-0 right-[0.91%] top-0">
                  <div className="absolute bottom-[-1.63%] font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[36.7%] not-italic right-[-12.38%] text-[26.764px] text-nowrap text-white top-0 tracking-[-0.8364px]">
                    <p className="leading-[1.25] whitespace-pre">Stain.</p>
                  </div>
                  <div className="absolute bottom-[12.07%] left-0 right-[70.64%] top-[8.12%]">
                    <div className="absolute h-[26.701px] left-0 top-0 w-[26.764px]">
                      <div className="absolute inset-0">
                        <img alt="" className="block max-w-none size-full" src={imgVector6} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="box-border flex gap-1 items-center justify-center px-2 py-3">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative text-[#7be385] text-[16px] text-center text-nowrap tracking-[-0.3px]">
                    <p className="leading-[1.7] whitespace-pre">Home</p>
                  </div>
                </div>
                <div className="box-border flex gap-1 items-center justify-center px-2 py-3">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]">
                    <p className="leading-[1.7] whitespace-pre">About</p>
                  </div>
                </div>
                <div className="box-border flex gap-1 items-center justify-center px-2 py-3">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]">
                    <p className="leading-[1.7] whitespace-pre">Integration</p>
                  </div>
                </div>
                <div className="box-border flex gap-1 items-center justify-center px-2 py-3">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]">
                    <p className="leading-[1.7] whitespace-pre">Pricing</p>
                  </div>
                </div>
                <div className="box-border flex gap-1 items-center justify-center px-2 py-3">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]">
                    <p className="leading-[1.7] whitespace-pre">Contact</p>
                  </div>
                </div>
                <div className="box-border flex gap-1 items-center justify-center px-2 py-3">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]">
                    <p className="leading-[1.7] whitespace-pre">Blog</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="box-border flex gap-3 items-center justify-center px-0 py-0.5">
                <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative text-[#f2fcf3] text-[16px] text-center text-nowrap">
                  <p className="leading-[1.5] whitespace-pre">Sign In</p>
                </div>
              </div>
              <div className="bg-[#7be385] box-border flex gap-3 items-center justify-center px-6 py-4 rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 187 56\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-1.9329 -4.8454 30.996 7.8709 148.74 46.309)\\'><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0.4)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
                <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative text-[#041117] text-[16px] text-center text-nowrap">
                  <p className="leading-[1.5] whitespace-pre">Start Free Trial</p>
                </div>
                <div className="relative size-5">
                  <div className="absolute contents inset-0">
                    <img alt="" className="block max-w-none size-full" src={imgVuesaxLinearArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <PreviewHero />
        <GrowthSolutions />
        <LeadOrganization />
        <IntegrationsSection />
        <Testimonials />
        <BlogSections />
        
        {/* Preview Footer */}
        <PreviewFooter />
      </div>
    </div>
  );
}
