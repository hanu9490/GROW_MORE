import { whyChooseusIcons } from "../../../assets/icons/icons";
import WhyChooseusMinicard from "./WhyChooseusMinicard";
import "./WhyChooseus.css";

const whyChooseusCardObj = [
  {
    title: "Client-Centric Approach",
    description:
      "We take the time to delve into your unique goals, challenges, and target audience before crafting any solutions.",
    icon: whyChooseusIcons.clientCentricApproch,
  },
  {
    title: "Proven Track Record of Success",
    description:
      "We showcase a curated selection of our best projects across various industries, demonstrating our ability.",
    icon: whyChooseusIcons.provenTrackRecord,
  },
  {
    title: "A Team of Experts You Can Trust",
    description:
      "Our team comprises passionate and dedicated IT specialists with a deep understanding of the latest technologies.",
    icon: whyChooseusIcons.TeamExpertTrust,
  },
];

const WhyChooseus = () => {
  return (
    <div className="why-chooseus-container-main">
      <div className="why-chooseus-inner">
        <div className="why-choose-img-con">
          <img src={whyChooseusIcons.rectangleMain} alt="why-chooseus.PNG" />
        </div>
        <div className="why-chooseus-text-con">
          <h2>WHY CHOOSE US</h2>
          <h1>Your Trusted Partner For IT Success</h1>
          <p>
            In today's digital landscape, having a strong online presence and
            robust IT infrastructure is crucial for business growth. But with so
            many IT agencies out there, why choose <span className="special">GrowMore</span>? Here's
            why we stand out
          </p>
          <div className="why-chooseus-card-con">
          {whyChooseusCardObj.map((card, index) => {
            return <WhyChooseusMinicard key={index} {...card} />;
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseus;
