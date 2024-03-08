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
    <div className="sticky left-0 top-0 -z-10 w-full flex flex-col max-w-4xl mx-auto pb-4 h-full gap-4 sm:gap-8 px-8 lg:px-0">
      <Reveal>
        <div className="py-3">
          <h1 className="font-bold text-center sm:text-left text-5xl sm:text-7xl md:text-8xl flex-1 z-10">
            Built <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">yourself</span> today with
            <span className="dark:border-light border-dark tracking-tighter italic">
              {" "}
              improveu
            </span>
          </h1></div>
      </Reveal>


      <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-stretch mt-8 sm:mt-6">
        <Reveal>
          <p className="pl-1 text-center text-base sm:text-left sm:text-lg leading-8">
            The <span className="italic">improveu</span> is your destination for<br></br>
            self-development and personal growth
          </p>
        </Reveal>


        <div className="flex flex-col sm:items-end items-center gap-1 sm:w-full w-[220px]">
          <Reveal>
            <Image
              src={urlFor(post[0].titleImage).url()}
              alt="blog's image"
              width={210}
              height={210}
              sizes="(max-width: 425px) 240px, 240px"
              className="rounded-md cursor-pointer sm:w-[230px] sm:h-[170px]"
            /></Reveal>

          <Reveal>
            <div className="flex flex-col sm:gap-1 items-end">
              <Link href={`/blog/${post[0].currentSlug}`} className="text-base text-center sm:text-left font-semibold text-gray-600 dark:text-gray-400">
                {post[0].title}
              </Link>
              <ArrowDownRight className="-mt-2 sm:mt-0 text-gray-600 dark:text-gray-400 cursor-pointer" />
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="px-2">
          <Marquee speed={30}>
            <p className="text-base md:text-lg">
              Latest post: Feb 21, 2024 -{" "}
              <span className="font-bold">
                {post[0].title} - {" "}
              </span>
              <span className="pr-1">
                {post[0].description.slice(0, 30).concat("...")}
              </span>
            </p>
          </Marquee>
        </div>
      </Reveal>

      <span className="text-center text-sm md:text-base">( scroll )</span>
    </div >
  );
}
