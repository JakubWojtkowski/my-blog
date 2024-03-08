import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Opacity } from "../animations/Opacity";

export default function Navbar() {
  return (
    <nav className="w-full max-w-4xl mx-auto flex justify-between py-6 px-8 lg:px-0">
      <Link href={"/"} className="text-2xl sm:text-3xl tracking-tighter font-bold relative">
        improveu
        <span className="pb-0.5 absolute text-sm sm:text-base bottom-[-16px] sm:bottom-[-24px] tracking-tight right-0 border-2 dark:border-light border-dark rounded-lg px-2">
          blog
        </span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
