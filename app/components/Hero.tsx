'use client'

import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

// import './styles.css';

// import required modules
import { Autoplay, Scrollbar, EffectFade } from 'swiper/modules';
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {

  useGSAP(() => {
    gsap.to('#hero-img', {
      scale: 1.1,
      duration: 15,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    })
  })

  return (
    <section>
      <div>
        <Swiper
          slidesPerView={1}
          effect={'fade'}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          scrollbar={{
            hide: true,
          }}

          modules={[EffectFade, Autoplay, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <div className="w-full h-screen">
              <div className="screen-max-width">
                <div className="absolute z-20 flex flex-col max-sm:pl-6 w-full h-screen justify-center">
                  <h1 className="text-white font-bebas text-7xl lg:text-8xl" id="hero-title">YOUR ADVANTURE <br /><span className="font-bebas text-5xl lg:text-6xl">AWAITS!</span></h1>
                  <div className="mt-8">
                    <Link href="/" className="text-white bg-transparent border-2 border-white rounded-full py-4 px-6 hover:bg-white hover:text-black hover:font-bold transition-all duration-300">Feel the Spin!</Link>
                  </div>

                </div>
              </div>
              <Image src='/hero_img_1.png' alt="hero-img-1" width={0} height={0} unoptimized className="w-full h-screen object-cover object-[70%]" sizes="100vw" id="hero-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <div className="w-full h-screen">
              <div className="screen-max-width">
                <div className="absolute z-20 flex flex-col max-sm:pl-6 w-full h-screen justify-center">
                  <h1 className="text-white font-bebas text-7xl lg:text-8xl" id="hero-title">Fuel Your Day <br /><span className="font-bebas text-5xl lg:text-6xl">Power Your Play</span></h1>
                  <div className="mt-8">
                    <Link href="/" className="text-white bg-transparent border-2 border-white rounded-full py-4 px-6 hover:bg-white hover:text-black hover:font-bold transition-all duration-300">Get Spinning!</Link>
                  </div>

                </div>
              </div>
              <Image src='/hero_img_2.jpg' alt="hero-img-2" width={0} unoptimized height={0} className="w-full h-screen object-cover object-[20%]" sizes="100vw" id="hero-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <div className="w-full h-screen">
              <div className="screen-max-width">
                <div className="absolute z-20 flex flex-col max-sm:pr-10 max-sm:mt-32 w-full h-screen justify-center items-end">
                  <h1 className="text-white font-bebas text-7xl lg:text-8xl text-end" id="hero-title">Unleash Your<br /><span className="font-bebas text-5xl lg:text-6xl">Inner Spin</span></h1>
                  <div className="mt-8">
                    <Link href="/" className="text-white bg-transparent border-2 border-white rounded-full py-4 px-6 hover:bg-white hover:text-black hover:font-bold transition-all duration-300">Spin Into Action!</Link>
                  </div>

                </div>
              </div>
              <Image src='/hero_img_3.jpg' alt="hero-img-3" width={0} height={0} unoptimized className="w-full h-screen object-cover object-[20%]" sizes="100vw" id="hero-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Hero