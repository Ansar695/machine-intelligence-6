import { useState } from "react";
import BusinessTransform from "../services-sections/BusinessTransform";
import ComplianceCertifications from "./ComplianceCertifications";
import IndustriesHero from "./IndustriesHero";
import IndustriesServerd from "./IndustriesServerd";
import IndustryDetail from "./IndustryDetail";
import IndustryStats from "./IndustryStats";

const IndustriesSections = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <>
      <IndustriesHero />
      <IndustryStats />
      <IndustriesServerd
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
      />
      <IndustryDetail selectedIndustry={selectedIndustry} />
      <ComplianceCertifications />
      <BusinessTransform />
    </>
  );
};

export default IndustriesSections;
