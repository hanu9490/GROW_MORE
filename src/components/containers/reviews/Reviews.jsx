import React from "react";
import "./Reviews.css";
import Review from "./Review"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Reviews() {
  return (
    <div className="testimonial">
      <h2 className="testimonial-title">A word from our customers.</h2>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          // 1024: {
          //   slidesPerView: 3,
          // },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={2}
        spaceBetween={15}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Review
            text="1.Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!”"
            image="path_to_image"
            name="Hanumanth"
            position="Web Developer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Review
            text="2.Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!”"
            image="path_to_image"
            name="Hanumanth"
            position="Web Developer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Review
            text="3.Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!”"
            image="path_to_image"
            name="Hanumanth"
            position="Web Developer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Review
            text="4.Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!”"
            image="path_to_image"
            name="Hanumanth"
            position="Web Developer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Review
            text="5.Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!”"
            image="path_to_image"
            name="Hanumanth"
            position="Web Developer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Review
            text="6.Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!”"
            image="path_to_image"
            name="Hanumanth"
            position="Web Developer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Reviews;
