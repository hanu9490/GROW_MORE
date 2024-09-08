
import { contactUsIcons } from "../../../assets/icons/icons";
// import { RiMessage2Line } from "react-icons/ri";
import "./ContactUS.css";

const ContactUs = () => {
  return (
    <div className="background">
      <div className="landing-element">
        <h1>Contact Us</h1>
        <div className="svg-element">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64" >
            <path
              stroke="#c7c9c9"  // Replace with your color code (#ff0000, etc.)
              strokeWidth="1px"  // Set the desired stroke thickness
              height="60px"
              d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z"></path>
          </svg>
          <p>Creating a concise and effective
            design studio brief is crucial for outlining your
            business, its services.</p>
        </div>
      </div>
      <div className="form-element">
        <div className="contact-details">
          <h1>Contact Information</h1>
          <p>Feel free adapt this based on the specific managed services,
            features, and unique selling points your
            IT service company provides.</p>
          <div className="details-element">
            <div className="icons"><img src="" /></div>
            <div className="details">
              <p>Call on us</p>
              <h1>+91 9177885911</h1>
            </div>
          </div>
          <div className="details-element">
            <div className="icons"><img src="" /></div>
            <div className="details">
              <p>Call on us</p>
              <h1>+91 9177885911</h1>
            </div>
          </div>
          <div className="details-element">
            <div className="icons"><img src="" /></div>
            <div className="details">
              <p>Call on us</p>
              <h1>+91 9177885911</h1>
            </div>
          </div>
        </div>
        <div className="form-details"></div>
      </div>

      <div className="contactus-main-container" id="contact">
        <div className="contact-us-container">
          <div className="contact-us-header">
            <img
              src={contactUsIcons.contactUs}
              alt="Contact Icon"
              className="contact-icon"
            />
            <span>CONTACT US</span>
          </div>
          <h1 className="main-heading">Let's Discuss Your Project</h1>
          <p className="description">
            Struggling with IT challenges?{" "}
            <span className="highlight">GrowMore</span> offers a helping hand!
            Schedule a free consultation to discuss your unique project needs. Our
            passionate team will collaborate with you to craft solutions that
            unlock your business potential.
          </p>
          <hr className="divider" />
          <div className="contact-info">
            <div className="phone">
              <img
                src={contactUsIcons.callService}
                alt="Phone Icon"
                className="phone-icon"
              />
              <div className="phone-inner-con">
                <span>Call Us At :</span>
                <span className="phone-number">+91-917-788-5911</span>
              </div>
            </div>
            <div className="social-media">
              <span>Follow Us On Social Media</span>
              <div className="social-icons">
                <img src={contactUsIcons.facebook} alt="Facebook" />
                <img src={contactUsIcons.twitter} alt="Twitter" />
                <img src={contactUsIcons.linkedin} alt="LinkedIn" />
                <img src={contactUsIcons.youtube} alt="YouTube" />
                <img src={contactUsIcons.facebook} alt="Facebook" />
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-input-container">
          <h1 className="input-heading">Contact Form</h1>
          <input placeholder="Enter your Name" type="text" />
          <input placeholder="Enter your Email" type="email" />
          <textarea placeholder="Type Your Message Here"></textarea>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
