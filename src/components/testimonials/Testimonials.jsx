import "./testimonials.css";
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: "/asset/avatar1.jpg",
    name: "Kristen Payne",
    review:
      "Lorem ipsum dolor sit amet consectetur adipsisicing elit quod nam impedit solute solute alias rerum laborum aperianisus djafajou ajufioaduo",
  },
  {
    avatar: "/asset/avatar2.jpg",
    name: "Shata Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipsisicing elit quod nam impedit solute solute alias rerum laborum aperianisus djafajou ajufioaduo",
  },
  {
    avatar: "/asset/avatar3.jpg",
    name: "Kane White",
    review:
      "Lorem ipsum dolor sit amet consectetur adipsisicing elit quod nam impedit solute solute alias rerum laborum aperianisus djafajou ajufioaduo",
  },
  {
    avatar: "/asset/avatar4.jpg",
    name: "McBrown James",
    review:
      "Lorem ipsum dolor sit amet consectetur adipsisicing elit quod nam impedit solute solute alias rerum laborum aperianisus djafajou ajufioaduo",
  },
];

const Testimonials = () => {
    return (
      <section className="testimonials">
        <h5>Reviews from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
             modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
        
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" className="client__avatar-img" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
}

export default Testimonials;