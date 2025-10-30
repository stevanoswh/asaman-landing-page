import HeroSection from "./_sections/hero-section";
import StatsSection from "./_sections/stats";
import FeatureModulesSection from "./_sections/feature-modules-section";
import EnterpriseSecuritySection from "./_sections/enterprise-grade-section";
import ImplementationSupportSection from "./_sections/implementation-support-section";
import TestimonialsSlider from "./_sections/testimonies";
import HeroLeadForm from "./_sections/hero-lead-form-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeatureModulesSection />
      <EnterpriseSecuritySection />
      <ImplementationSupportSection />
      <TestimonialsSlider />
      <HeroLeadForm/>
    </main>
  );
}
