import BusinessTransform from "../services-sections/BusinessTransform";
import FAQ from "../services-sections/FAQ";
import ContactFormOfficeInfo from "./ContactFormOfficeInfo";
import ContactHero from "./ContactHero";
import ContactMethods from "./ContactMethods";

const ContactSections = () => {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ContactFormOfficeInfo />
      <FAQ />
      <BusinessTransform />
    </>
  );
};

export default ContactSections;
