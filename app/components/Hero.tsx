"use client";

import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

export default function Hero() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll;
      }
    )();
  }, []);

  return (
    <div className="sticky left-0 top-0 -z-10 w-full flex flex-col max-w-4xl mx-auto py-4 h-full gap-4 sm:gap-8 px-8 lg:px-0">
      <h1 className="font-bold text-center sm:text-left text-5xl sm:text-7xl md:text-8xl flex-1 z-10">
        Built yourself today with
        <span className="border-b-8 dark:border-light border-dark italic tracking-tighter">
          {" "}
          improveu
        </span>
      </h1>

      <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-stretch mt-8 sm:mt-6">
        <p className="pl-1 text-center text-base sm:text-left sm:text-lg leading-8">
          The <span className="italic">improveu</span> is your destination for<br></br>
          self-development and personal growth
        </p>

        <div className="flex flex-col sm:items-end items-center gap-1 sm:w-full w-[220px]">
          <Image
            src="https://i.pinimg.com/originals/5a/4d/dc/5a4ddcf0f283e07719d52b81a13f201b.jpg"
            alt="blog's image"
            width={210}
            height={210}
            sizes="(max-width: 425px) 240px, 240px"
            className="rounded-md cursor-pointer sm:w-[230px]"
          />
          <div className="flex flex-col sm:gap-1 items-end">
            <p className="text-base text-center sm:text-left font-semibold text-gray-600 dark:text-gray-400">
              The goal is simple: Be better than yesterday
            </p>
            <ArrowDownRight className="-mt-2 sm:mt-0 text-gray-600 dark:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="px-2">
        <Marquee speed={30}>
          <p className="text-base md:text-lg">
            Latest post: Feb 21, 2024 -{" "}
            <span className="font-bold">
              The goal is simple: Be better than yesterday{" "}
            </span>
          </p>
          <p className="text-lg">
            {" "}Latest post: Feb 21, 2024 -{" "}
            <span className="font-semibold">
              The goal is simple: Be better than yesterday
            </span>
          </p>
        </Marquee>
      </div>

      <span className="text-center text-sm md:text-base">( scroll )</span>
    </div>
  );
}
