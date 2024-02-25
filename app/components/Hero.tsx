import { ArrowDownRightSquare } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col max-w-4xl mx-auto py-5 h-full gap-8">
      <h1 className="font-bold text-8xl flex-1">
        Built yourself today with
        <span className="underline italic tracking-tighter font-normal">
          {" "}
          improveu
        </span>
      </h1>

      <div className="grid gap-8 grid-cols-2 mt-4">
        <p className="text-lg">
          The <span className="italic">improveu</span> is your destination for
          self-development and personal growth
        </p>
        <div className="flex flex-col items-end">
          <Image
            src="https://i.pinimg.com/originals/5a/4d/dc/5a4ddcf0f283e07719d52b81a13f201b.jpg"
            alt="image"
            width={210}
            height={210}
            className="rounded-md cursor-pointer"
          />
          <p className="text-lg font-semibold text-gray-600">
            The goal is simple: Be better than yesterday
          </p>
          <ArrowDownRightSquare className="text-gray-600" />
        </div>
      </div>

      <div>
        <p className="text-lg">
          Latest post: Feb 21, 2024 -{" "}
          <span className="font-semibold">
            The goal is simple: Be better than yesterday
          </span>
        </p>
      </div>

      <span className="text-center text-sm">( scroll )</span>
    </div>
  );
}
