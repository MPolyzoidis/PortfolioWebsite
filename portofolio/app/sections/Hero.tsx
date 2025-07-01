"use client";
import memojiImage from "../images/memoji.png";
import ArrowDown from "../images/arrow-down-solid.svg";
import Image from "next/image";
import { Element, Link } from "react-scroll";
import { useEffect, useState } from "react";

const Hero = () => {
  //Custom offset for Explore my work button for md and sm screens since it behaved differently that the others when scrolling to it
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOffset(-75);
      } else {
        setOffset(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Element name="Home">
      <div className="py-32 md:py-44 lg:py-48 z-0">
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src={memojiImage}
              alt="Person peeking from behind laptop"
              className="h-28 w-auto"
            />

            <div className="bg-gray-950 border border-gray-800 rounded-lg px-4 py-1.5 inline-flex items-center gap-4">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 size-2.5 rounded-full absolute inset-0 animate-ping-large" />
              </div>
              <div className="text-sm font-medium">Available for work</div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 font-bold tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>

            <p className="mt-4 text-center text-white/60 md:text-lg">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <Link to="Projects" smooth={true} duration={1000} offset={offset}>
              <button className="group inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white hover:text-gray-900 hover:border-white transition duration-300">
                <span className="font-semibold">Explore My Work</span>
                <ArrowDown className="fill-white size-4 transition duration-300 group-hover:fill-gray-900" />
              </button>
            </Link>

            <Link to="Contact" smooth={true} duration={2000} offset={-450}>
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white hover:text-gray-900 hover:border-white transition duration-300">
                <span>👋</span>
                <span className="font-semibold">Contact Me</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
