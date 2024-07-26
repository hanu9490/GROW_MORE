// // Testimonials.jsx

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./Testimonials.css";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import TestimonialCard from "./TestimonialCard";

// const Testimonials = () => {
//   return (
//     <div className="testimonials">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="title">What our clients say</h2>
//         </div>
//         <div className="testimonials-content">
//           <Swiper
//             pagination={{
//               dynamicBullets: true,
//               clickable: true,
//             }}
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 },
//             }}
//             modules={[Autoplay, Pagination, Navigation]}
//             slidesPerView={2}
//             spaceBetween={30}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             className="testimonials-slider"
//           >
//             <SwiperSlide>
//               <TestimonialCard />
//             </SwiperSlide>
//             <SwiperSlide>
//               <TestimonialCard />
//             </SwiperSlide>
//             <SwiperSlide>
//               <TestimonialCard />
//             </SwiperSlide>
//             <SwiperSlide>
//               <TestimonialCard />
//             </SwiperSlide>
//             <SwiperSlide>
//               <TestimonialCard />
//             </SwiperSlide>
//             <SwiperSlide>
//               <TestimonialCard />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
