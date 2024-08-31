import Hero from "../containers/hero/Hero";
import OurTechnology from "../containers/our-technology/OurTechnology";
import WhatWeDo from "../containers/whatwedo/WhatWeDo";
import WhyOurServices from "../containers/whyourservices/WhyOurServices";
import WhyChooseus from "../containers/whychooseus/WhyChooseus";
import Footer from "../containers/footer/Footer";
import Reviews from "../containers/reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurTechnology />
      <WhatWeDo />
      <WhyOurServices />
      <WhyChooseus />
      <Reviews/>
      <Footer />
    </div>
  );
};

export default Home;
