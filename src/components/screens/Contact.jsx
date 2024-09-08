import React from "react";
import ContactUs from "../containers/contactus/ContactUs";
import Footer from "../containers/footer/Footer";
import ScrollButton from "../common/ScrollToTop/ScrollUp";
import Map from "../containers/google-map/Map";

const Contact = () => {
  return (
    <div>
      <ContactUs />
      {/* <Map /> */}
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Contact;
