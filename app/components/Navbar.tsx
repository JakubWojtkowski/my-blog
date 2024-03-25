"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Opacity } from "../animations/Opacity";

export default function Navbar() {
  return (

    <nav className="w-full max-w-4xl mx-auto flex justify-between py-6 px-8 lg:px-0">

      <Link href={"/"} className="flex flex-col gap-16 text-2xl sm:text-3xl tracking-tighter font-bold relative">
        improveu
        <span className="pb-0.5 absolute text-sm sm:text-base bottom-[-16px] sm:bottom-[-26px] tracking-tight right-0 border-2 border-slate-500 rounded-lg px-2 text-slate-500">
          blog
        </span>
      </Link>

      <Opacity>
        <div>
          <ModeToggle />
        </div>
      </Opacity>
    </nav>

  );
}
