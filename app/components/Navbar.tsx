import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full max-w-4xl mx-auto flex justify-between py-8">
      <Link href={"/"} className="text-3xl tracking-tighter font-bold">
        improveu
      </Link>

      <ModeToggle />
    </nav>
  );
}
