import { Navbar } from '@/components/shared/navbar';
import { Hero } from '@/components/landing/hero';
import { AboutSection } from '@/components/landing/about-section';
import { SectionDivider } from '@/components/shared/section-divider';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <AboutSection />
        {/* TODO: Add more sections with dividers */}
        {/* <SectionDivider /> */}
        {/* <ServicesSection /> */}
        {/* <SectionDivider /> */}
        {/* <PortfolioSection /> */}
        {/* <SectionDivider /> */}
        {/* <BlogSection /> */}
        {/* <SectionDivider /> */}
        {/* <ContactSection /> */}
      </main>
      {/* TODO: Add Footer */}
    </>
  );
}
