import React from "react";
import CategoryHeading from "./CategoryHeading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import customer1 from "../../assets/Customer-01.jpg";
import customer2 from "../../assets/Customer-02.jpg";
import customer3 from "../../assets/Customer-03.jpg";
import customer4 from "../../assets/Customer-04.jpg";
import customer5 from "../../assets/Customer-05.jpg";
import customer6 from "../../assets/Customer-06.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Testimonials() {
  // testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendes",
      profession: "Fitness Coach",
      rating: 5,
      para: "I appreciate the selection of healthy foods and clean-label products. Fresh, reliable, and well packed.",
      image: customer1,
    },
    {
      id: 2,
      name: "Ananya Sharma",
      profession: "Nutritionist",
      rating: 5,
      para: "The quality of fruits and vegetables is excellent. Perfect for maintaining a healthy lifestyle.",
      image: customer2,
    },
    {
      id: 3,
      name: "Rahul Verma",
      profession: "Software Engineer",
      rating: 4,
      para: "Fast delivery and good packaging. Prices are reasonable compared to local stores.",
      image: customer3,
    },
    {
      id: 4,
      name: "Sophia Lee",
      profession: "Yoga Instructor",
      rating: 5,
      para: "I love the organic options available here. Everything feels fresh and premium.",
      image: customer4,
    },
    {
      id: 5,
      name: "Amit Patel",
      profession: "Business Owner",
      rating: 4,
      para: "Great customer support and easy ordering process. Overall a very smooth experience.",
      image: customer5,
    },
    {
      id: 6,
      name: "Emily Johnson",
      profession: "Health Blogger",
      rating: 5,
      para: "This platform makes healthy shopping simple and convenient. Highly recommended!",
      image: customer6,
    },
  ];

  return (
    // testimonials section
    <section>
      <div className="mx-10 my-20">
        <div>
          <CategoryHeading highlight={"Customer"} heading={"Saying"} />
        </div>

        {/* Buttons for navigation */}
        <div className="flex justify-end mt-5 py-5 gap-3 mb-5">
          <button>
            <IoIosArrowBack className="custom-prev text-4xl bg-zinc-200 rounded-lg p-1 text-zinc-800 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-amber-600 hover:text-white" />
          </button>
          <button>
            <IoIosArrowForward className="custom-next text-4xl bg-zinc-200 rounded-lg p-1 text-zinc-800 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-amber-600 hover:text-white" />
          </button>
        </div>

        {/* Swiper Section */}
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            680: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => {
            return (
              // testimonial card
              <SwiperSlide className="bg-zinc-100 text-xl rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img
                      src={testimonial.image}
                      className="w-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold">
                      {testimonial.name}
                    </h5>
                    <p className="text-zinc-600">{testimonial.profession}</p>
                    <span className="flex gap-1 text-yellow-400 mt-3">
                      {Array.from(
                        { length: testimonial.rating },
                        (_, index) => (
                          <FaStar key={index} />
                        ),
                      )}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{testimonial.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
