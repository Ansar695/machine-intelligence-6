import JoinOurJoureny from "../about-sections/JoinOurJoureny";
import Testimonials from "../home-sections/Testimonials";
import FeaturedProjects from "./FeaturedProjects";
import OurTrackRecord from "./OurTrackRecord";
import PortfolioHero from "./PortfolioHero";

const PortfolioSections = () => {
  return (
    <>
      <PortfolioHero />
      <OurTrackRecord />
      <FeaturedProjects />
      <Testimonials />
      <JoinOurJoureny />
    </>
  );
};

export default PortfolioSections;
