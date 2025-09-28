import Benefits from "./Benefits";
import CareerHero from "./CareerHero";
import CultureValues from "./CultureValues";
import OpenPositions from "./OpenPositions";
import SendResume from "./SendResume";
import TeamSpotlight from "./TeamSpotlight";
import WorkStats from "./WorkStats";

const CareerSections = () => {
  return (
    <>
      <CareerHero />
      <WorkStats />
      <CultureValues />
      <Benefits />
      <TeamSpotlight />
      <OpenPositions />
      <SendResume />
    </>
  );
};

export default CareerSections;
