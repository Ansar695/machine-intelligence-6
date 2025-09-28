import ServiceHero from "./ServiceHero";
import ServicesGrid from "./ServicesGrid";
import Process from "./Process";
import TechStack from "./TechStack";
import FAQ from "./FAQ";
import BusinessTransform from "./BusinessTransform";

export default function ServicesSections() {
  return (
    <>
      <ServiceHero />
      <ServicesGrid />
      <Process />
      <TechStack />
      <FAQ />
      <BusinessTransform />
    </>
  );
}
