import DataScience from "./DataScience";
import MobileApplication from "./MobileApplication";
import MoreServices from "./MoreSerices";
import ProjectApproach from "./ProjectApproach";
import "./Services.css";
import WebApplication from "./webApp";
const Landing = () => {
  return (
    <div>
      <div className="container">
        <div className="container-overLayer">
          <h1 className="lander-header">Services</h1>
          <span className="breadcrumb">Home / Services</span>
        </div>
      </div>
      <div>
        <h1 className="service-header">Exceptional Service</h1>
        <p className="service-description">
          Our commitment to delivering top-tier IT solutions is matched only by
          our dedication to exceptional customer service. From pre-sales
          consultation to post-implementation support, we prioritize your needs
          and ensure your satisfaction. Experience the difference of working
          with a team that goes above and beyond to exceed expectations.
        </p>
      </div>
      <div>
        <WebApplication />
        <DataScience />
        <MobileApplication />
        <MoreServices />
        <ProjectApproach />
      </div>
    </div>
  );
};
export default Landing;
