import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <div className="w-full flex flex-col max-w-4xl mx-auto py-4 h-full gap-8 px-8 lg:px-0">
      <h1 className="font-bold text-8xl flex-1">
        Built yourself today with
        <span className="border-b-8 dark:border-light border-dark italic tracking-tighter font-normal">
          {" "}
          improveu
        </span>
      </h1>

      <div className="grid gap-8 grid-cols-2 mt-6">
        <p className="text-lg leading-8">
          The <span className="italic">improveu</span> is your destination for
          self-development and personal growth
        </p>
        <div className="flex flex-col items-end gap-1">
          <Image
            src="https://i.pinimg.com/originals/5a/4d/dc/5a4ddcf0f283e07719d52b81a13f201b.jpg"
            alt="image"
            width={210}
            height={210}
            className="rounded-md cursor-pointer"
          />
          <p className="text-base font-semibold text-gray-600 dark:text-gray-400">
            The goal is simple: Be better than yesterday
          </p>
          <ArrowDownRight className="text-gray-600 dark:text-gray-400 cursor-pointer" />
        </div>
      </div>

      <div>
        <Marquee>
          {" "}
          <p className="text-lg">
            Latest post: Feb 21, 2024 -{" "}
            <span className="font-semibold">
              The goal is simple: Be better than yesterday
            </span>
          </p>
          <p className="text-lg">
            Latest post: Feb 21, 2024 -{" "}
            <span className="font-semibold">
              The goal is simple: Be better than yesterday
            </span>
          </p>
        </Marquee>
      </div>

      <span className="text-center text-base">( scroll )</span>
    </div>
  );
}
