// src/components/HeroCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import furniture1 from "../assets/images/furniture-slider1.jpg";
import furniture2 from "../assets/images/bed-design1.jpg";
import furniture3 from "../assets/images/chair-cabinet.jpg";

const slides = [
  {
    image: furniture1,
    title: "Luxury Living",
    description: "Modern furniture for your home",
  },
  {
    image: furniture2,
    title: "Elegant Interiors",
    description: "Comfort meets style",
  },
  {
    image: furniture3,
    title: "Crafted Comfort",
    description: "Handcrafted elegance for modern spaces",
  },
];

const Hero = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="w-full h-[400px] sm:h-[500px] md:h-[600px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-cover bg-center flex"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute left-16 top-40 text-white max-w-[350px] h-[247px] flex flex-col z-10 gap-2">
                {/* Subtitle */}
                <p className="uppercase tracking-wider font-medium animate-fadeUp text-[16px]">
                  {slide.title}
                </p>

                {/* Title */}
                <h2 className="text-[40px] leading-[50px] font-semibold font-heading animate-fadeUp text-light drop-shadow-lg">
                  {slide.description}
                </h2>

                {/* CTA Button */}
                <button
                  className=" border-none mt-4 bg-gradient-to-r from-brand to-accent text-white px-6 py-3 rounded-xl shadow-md w-[170px]
                             hover:from-dark hover:to-wood transition-all duration-300 animate-fadeUp"
                >
                  Discover More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;