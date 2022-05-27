/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navbaradm = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  function handlesetNavOpen() {
    setNavOpen(!isNavOpen);
  }

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  function handleSetDropdownOpen() {
    setDropdownOpen(!isDropdownOpen);
  }

  return (
    <>
      <nav className="w-full z-50 bg-white shadow-lg">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3 lg:space-x-4">
          <div className="flex gap-36">
            <Link href={`/`}>
              <Image
                src="/images/icon/logo-dashboard.png"
                alt="Logo"
                layout="fixed"
                width={100}
                height={34}
              />
            </Link>
          </div>

          <button
            onClick={handlesetNavOpen}
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
                <div className="flex justify-center">
                  <input
                    type="search"
                    className="flex-auto min-w-0 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-darkblue focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="px-3 border border-darkblue font-semibold text-darkblue"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </li>

              <li className="relative">
                <button
                  className="flex gap-3 items-center"
                  onClick={handleSetDropdownOpen}
                >
                  <Image
                    src="/images/profile.png"
                    alt="Menu"
                    layout="fixed"
                    width={34}
                    height={34}
                  />
                  Unis Badri
                  <Image
                    src="/images/icon/fi_arrow-down.svg"
                    alt="Menu"
                    width={34}
                    height={34}
                  />
                </button>
                <div
                  className={`right-0 p-2 mt-1 bg-white rounded-md shadow-xl lg:absolute ${
                    isDropdownOpen ? "flex flex-col" : "hidden"
                  }`}
                >
                  <ul className="space-y-2 lg:w-48">
                    <li>
                      <Link href="/">
                        <p className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Home</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <p className="flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">Logout</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbaradm;
