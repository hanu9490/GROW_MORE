import React from 'react'
import WhatWeDo from '../../containers/whatwedo/WhatWeDo'
import WhyOurServices from "../../containers/whyourservices/WhyOurServices";
import WhyChooseus from '../../containers/whychooseus/WhyChooseus';
import Internship from '../../containers/internship/Internship';
const Home = () => {
  return (
    <div>
      <div>
        <Internship />
      </div>
      <div>
        <WhatWeDo />
        </div>
      <div>
        <WhyOurServices />
        </div>
        <div>
        <WhyChooseus />
        </div>
    
    </div>
  )
}

export default Home
