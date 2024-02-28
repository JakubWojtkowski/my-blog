import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full max-w-4xl mx-auto flex justify-between py-8">
      <Link href={"/"} className="text-3xl tracking-tighter font-bold relative">
        improveu{" "}
        <span className="absolute text-base bottom-[-24px] tracking-tight right-0 border-2 dark:border-light border-dark rounded-lg px-2">
          blog
        </span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
