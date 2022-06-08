import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  function handleSetNavOpen() {
    setNavOpen(!isNavOpen);
  }

  return (
    <nav className="w-full z-50 bg-backgroundGrey">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3 lg:space-x-4">
        <div className="flex">
          <Link href={`/`}>
            <Image
              alt="Logo"
              src="/images/icon/logo-biru.png"
              width={70}
              height={35}
            />
          </Link>
        </div>
        <button
          onClick={handleSetNavOpen}
          className="inline-flex items-center justify-center w-10 h-10 ml-auto border rounded-md outline-none lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`font-medium w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0 ${
            isNavOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:gap-5 lg:items-center lg:space-y-0 lg:space-x-2">
            <li>
              <Link href="#">Our Services</Link>
            </li>
            <li>
              <Link href="#">Why Us</Link>
            </li>
            <li>
              <Link href="#">Testimonial</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <Link href={`/Dashboard`}>
              <button className="h-10 py-2 px-3 text-white bg-green-500 rounded-sm">
                <b>Register</b>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
