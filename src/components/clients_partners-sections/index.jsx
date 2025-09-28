import BusinessTransform from "../services-sections/BusinessTransform";
import ClientPartnerHero from "./ClientPartnerHero";
import ClientPartnerTestimonials from "./ClientPartnerTestimonials";
import PartnershipStats from "./PartnershipStats";
import PartnershipTiers from "./PartnershipTiers";
import TrustedBy from "./TrustedBy";

const ClientPartnerSections = () => {
  return (
    <>
      <ClientPartnerHero />
      <PartnershipStats />
      <TrustedBy />
      <PartnershipTiers />
      <ClientPartnerTestimonials />
      <BusinessTransform />
    </>
  );
};

export default ClientPartnerSections;
