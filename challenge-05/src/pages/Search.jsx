import SearchMenu from "../components/SearchMenu";
import React from "react";

export default function Search() {
  return (
    <>
      <div className="bg-bgGrey items-start xl:pb-0 lg:pb-28 pt-12 flex lg:flex-row flex-col w-100 ">
        <div className="ml-9 lg:ml-14 xl:ml-24 2xl:ml-48 my-16 lg:my-auto flex-1">
          <h2 className="text-4xl font-bold mb-4">
            Sewa & Rental Mobil Terbaik di kawasan Klaten
          </h2>
          <p className="max-w-md">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani
            kebutuhanmuuntuk sewa mobil selama 24 jam.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end items-center">
          <img src="./images/search_page_car.png" alt="Car" />
        </div>
      </div>

      <SearchMenu />
    </>
    
  );
}
