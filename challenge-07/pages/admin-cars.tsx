/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import Main from "../components/layout/main";
import Cardcar from "../components/cardcar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const dashboardcars = () => {
    const [carList, setCarList] = useState([]);

  async function GetAllCars() {
    try {
      const response = await fetch(
        `https://rent-cars-api.herokuapp.com/admin/car`
      );
      const data = await response.json();
      setCarList(data);
    } catch (error) {
      console.log(`Error`);
    }
  }

  useEffect(() => {
    GetAllCars();
  }, []);

  return (
    <Main>
      <ol
        className="flex items-center mb-7 space-x-1 md:space-x-3"
        aria-label="Breadcrumb"
      >
        <li>
          <Link href="/admin-cars">
            <a>
              <b>Cars</b>
            </a>
          </Link>
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link href="/admin-cars">
            <a className="ml-1 md:ml-2">List Cars</a>
          </Link>
        </li>
      </ol>

      {/* <!-- TITLE & ADD BUTTON --> */}
      <div className="flex justify-between mb-3">
        <h1 className="text-2xl">
          <b>List Car</b>
        </h1>
        <Link href="add-car">
          <a>
            <button className="bg-darkblue flex gap-2 px-3 py-2 text-white">
              <Image
                src="/images/icon/fi_plus.svg"
                alt="Plus"
                width={30}
                height={30}
              />
              Add New Car
            </button>
          </a>
        </Link>
      </div>

      {/* <!-- FILTER BUTTON GROUP --> */}
      <div className="flex gap-4 mb-7">
        <button className="px-3 py-2 border-2 border-darkblue text-darkblue bg-blue-200 rounded">
          <b>All</b>
        </button>
        <button className="px-3 py-2 border-2 border-gray-400 text-gray-400 bg-white rounded hover:border-darkblue hover:text-darkblue hover:bg-blue-200">
          <b>Small</b>
        </button>
        <button className="px-3 py-2 border-2 border-gray-400 text-gray-400 bg-white rounded hover:border-darkblue hover:text-darkblue hover:bg-blue-200">
          <b>Medium</b>
        </button>
        <button className="px-3 py-2 border-2 border-gray-400 text-gray-400 bg-white rounded hover:border-darkblue hover:text-darkblue hover:bg-blue-200">
          <b>Large</b>
        </button>
      </div>

      <section className="flex gap-2 justify-center flex-wrap">
        {carList.map((mobil) => (
          <Cardcar
            id={mobil[`id`]}
            name={mobil[`name`]}
            category={mobil[`category`]}
            price={mobil[`price`]}
            image={mobil[`image`]}
          />
        ))}
      </section>
    </Main>
  );
};

export default dashboardcars;
