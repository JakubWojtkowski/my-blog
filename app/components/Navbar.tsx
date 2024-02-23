import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="">
      <Link href={"/"} className="">
        improveu
      </Link>

      <ModeToggle />
    </nav>
  );
}
