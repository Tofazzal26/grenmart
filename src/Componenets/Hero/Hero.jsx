import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import hero1 from "../../../public/images/hero1.jpg";
import hero2 from "../../../public/images/hero2.jpg";

const Hero = () => {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1"></div>
        <div className="col-span-3 relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <div
                  className="h-[600px] w-full"
                  style={{
                    backgroundImage: "url(" + hero1 + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="h-[600px] w-full"
                style={{
                  backgroundImage: "url(" + hero2 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
          </Swiper>
          <div className="absolute top-[190px] left-[60px] z-10">
            <div className="text-white space-y-4">
              <h2 className="font-Noto font-medium text-xl">
                Save upto 30% off
              </h2>
              <h1 className="text-3xl lg:text-5xl font-Source3 font-bold">
                Summer Collection
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold">
                Save upto 30% off
              </h2>
              <button className="border-2 font-medium px-8 py-2">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
