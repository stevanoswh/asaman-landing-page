import GoLivePathSection from "./_sections/go-live-path-section";
import HeroSection from "./_sections/hero-section";
import JourneySection from "./_sections/journey-section";
import WhyWeExistSection from "./_sections/why-we-exist-section";
import InovationsSection from "./_sections/inovations-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <JourneySection />
      <WhyWeExistSection />
      <GoLivePathSection />
      <InovationsSection />
    </main>
  );
}
