import landingImage from "../../../assets/icons/Services/webapplication2.png";
import "./Services.css";
const WebApplication = () => {
  return (
    <div className="service-card">
      <div className="service-detail">
        <h1>Web Application</h1>
        <p>
          A custom web application can revolutionize your business by automating
          tasks, improving efficiency, and enhancing customer engagement.
          Whether you need to streamline internal processes, manage data
          effectively, or offer a seamless online experience for your customers,
          a web application is tailored to meet your specific needs. It’s
          accessible from anywhere, scalable to grow with your business, and
          designed to give you a competitive edge in the digital landscape
        </p>
        <ul className="list-container">
          <div>
            <li>Custom Development</li>
            <li>Scalability</li>
            <li>Save Your Time</li>
          </div>
          <div>
            <li>Increased Efficiency</li>
            <li>Value for Money</li>
            <li>Customer Support</li>
          </div>
        </ul>
      </div>
      <div className="service-img-container">
        <img
          alt="service-img"
          className="service-img"
          // src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901769.jpg?t=st=1723290680~exp=1723294280~hmac=428c3d022cdc06c6757b5b12a5576ee502298819e1e572955af85e0671757143&w=740" />
          src={landingImage}
        />
      </div>
    </div>
  );
};
export default WebApplication;
