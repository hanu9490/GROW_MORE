
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {ourTeam} from "../../../assets/icons/icons"
const OurTeam = () => {
  let heading1 = "Our Team";
  let heading2 =
    "Do not follow where the path may lead. Go instead where there is no path and leave a trail.";
  let heading3 = [
    "Meet our Senior Leadership",
    "We drive growth in audience engagement technology, revolutionizing brand-consumer interactions, building enduring relationships and delivering bottom-line results.s",
    "We have a global footprint with teams in the US, Israel, and South America.",
  ];
  let leaders = [
    {
      name: "Sreedhar Rongala",
      position: "Founder & CEO",
      image: ourTeam.sree,
      skillSet:
        "Leading the company, Business Development, Data Scientist, Management",
      link: "https://www.linkedin.com/in/sreedhar-rongala",
    },
    {
      name: "SaiKumar Navara",
      position: "Founder",
      image: ourTeam.sai,
      skillSet:
        "Leading the company, Web Applications and Mobile Applications Development",
      link: "https://www.linkedin.com/in/saikumarnavara",
    },
    {
      name: "Hanumanthu Pyla",
      position: "Co-founder",
      image: ourTeam.hj,
      skillSet: "APP/Web Development Maintance, Management, Architect",
      link: "https://www.linkedin.com/in/hanumanthu-pyla",
    },
    {
      name: "Harish jammu",
      position: "Co-founder",
      image: ourTeam.harish4,
      skillSet: "APP/Web Development Maintance, UI/UX Designer",
      link: "https://www.linkedin.com/in/harishjammu",
    },
  ];
  return (
    <div className="our-team-container">
      <div className="h1">{heading1}</div>
      <div className="h2">{heading2}</div>
      <div className="h2">-Ralph Waldo Emerson</div>
      <div className="leaders-container">
        <div className="leaders-content">
          {heading3.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="leaders">
          {leaders.map((leader, index) => (
            <div key={index} className="leader">
              <div>
                <img className="img" src={leader.image} alt={leader.name} />
              </div>
              <div className="leader-info">
                <div
                  className="name"
                  onClick={() => window.open(leader.link, "_blank")}
                >
                  {leader.name}
                </div>
                <div className="skills">
                  <span>{leader.skillSet}</span>
                </div>
                <div className="leader-desig ">{leader.position}</div>
                <div
                  className="linkedIn"
                  onClick={() => {
                    window.open(leader.link, "_blank");
                  }}
                >
                  <LinkedInIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
