"use client";

import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Reveal } from "../animations/Reveal";
import { BlogCard } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

type Props = {
  post: BlogCard[];
};

export default function Hero({ post }: Props) {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll;
      }
    )();
  }, []);

  return (
    <div className="customHero left-0 top-0 pt-6 sm:pt-0 w-full flex flex-col max-w-4xl mx-auto pb-4 gap-4 sm:gap-8 px-8 lg:px-0">
      <Reveal>
        <div className="py-3 relative">
          <h1 className="font-bold text-center sm:text-left text-5xl sm:text-7xl md:text-8xl flex-1 relative">
            Built <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">yourself</span> today with
            <span className="dark:border-light border-dark tracking-tighter italic">
              {" "}
              improveu
            </span>
          </h1></div>
      </Reveal>

      <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-stretch mt-4 sm:mt-6 relative">
        <Reveal>
          <p className="pl-1 text-center text-base sm:text-left sm:text-lg leading-8">
            The <span className="font-bold">improveu</span> is your destination for<br></br>
            self-development and personal growth
          </p>
        </Reveal>

        <div className="flex flex-col sm:items-end items-center gap-2 sm:w-full w-[220px] relative">
          <Reveal>
            <Image
              src={urlFor(post[0].titleImage).url()}
              alt="blog's image"
              width={230}
              height={210}
              sizes="(max-width: 425px) 240px, 240px"
              className="rounded-md cursor-pointer sm:w-[230px] h-[140px] sm:h-[150px] object-cover"
            /></Reveal>

          <Reveal>
            <div className="flex flex-col sm:gap-1 items-end cursor-pointer relative">
              <Link href={`/blog/${post[0].currentSlug}`} className="text-base text-center sm:text-left font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-700 hover:dark:text-gray-300 ease-in-out duration-300">
                {post[0].title.slice(0, 48).concat("...")}
              </Link>
              <ArrowDownRight className="-mt-4 sm:mt-0 text-gray-600 dark:text-gray-400 cursor-pointer" />
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="px-2 relative">
          <Marquee speed={30}>
            <p className="text-base md:text-lg">

              . Each new article in every two weeks. Latest article: <span className="font-bold"> {post[0].title}</span>
            </p>
          </Marquee>
        </div>
      </Reveal>

      <span className="text-center text-sm md:text-base mt-2">( scroll )</span>
    </div >
  );
}
