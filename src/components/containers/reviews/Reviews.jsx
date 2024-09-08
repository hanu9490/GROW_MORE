import React from "react";
import "./Reviews.css";
import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Reviews() {
  const reviews = [
    {
      text:
        "This platform has transformed the way I work. It's user-friendly, efficient, and highly adaptable. A must-have for any developer!",
      image: "path_to_image1",
      name: "Priya Gupta",
      position: "Full Stack Developer",
    },
    {
      text:
        "The best tool I’ve ever used for managing my projects. It’s intuitive, and the customer support is outstanding!",
      image: "path_to_image2",
      name: "Subramanian G",
      position: "Product Manager",
    },
    {
      text:
        "Amazing experience! The platform is super easy to navigate, and I appreciate the attention to detail in its design.",
      image: "path_to_image3",
      name: "Karthik Reddy",
      position: "Frontend Developer",
    },
    {
      text:
        "I love the seamless integration with other tools. It has made my workflow more efficient and stress-free.",
      image: "path_to_image4",
      name: "Divya Pyla",
      position: "Software Engineer",
    },
    {
      text:
        "This tool has saved me so much time. I can't imagine going back to the old ways of project management!",
      image: "path_to_image5",
      name: "Rajesh Sharma",
      position: "Project Coordinator",
    },
    {
      text:
        "Fantastic tool! It has all the features I need, and the learning curve is minimal. Highly recommended!",
      image: "path_to_image6",
      name: "Anjali Nair",
      position: "QA Engineer",
    },
    {
      text:
        "I've tried many project management tools, but this one is by far the best. It's simple, powerful, and a pleasure to use.",
      image: "path_to_image7",
      name: "Vikram Puleti",
      position: "DevOps Engineer",
    },
    {
      text:
        "The platform has exceeded my expectations. It has helped me stay organized and on top of my tasks. I couldn't be happier!",
      image: "path_to_image8",
      name: "Sneha Reddy",
      position: "UI/UX Designer",
    },
    {
      text:
        "I've been using this platform for a while now, and it has become an indispensable tool for my work. Highly recommended!",
      image: "path_to_image9",
      name: "Swetha balasubramanian",
      position: "Scrum Master",
    },
    {
      text:
        "This platform has transformed the way I work. It's user-friendly, efficient, and highly adaptable. A must-have for any developer!",
      image: "path_to_image1",
      name: "Priya Gupta",
      position: "Python Developer",
    },
  ];

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
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={2}
        spaceBetween={15}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Review
              text={review.text}
              image={review.image}
              name={review.name}
              position={review.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;
