import { useEffect, useState } from "react";
import { CardCar } from "../components/printilan/CardCar";
import SearchMenu from "../components/SearchMenu";

export default function SearchResult() {
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
    <>
      <div className={`bg-bgGrey h-40`}></div>
      <SearchMenu />
      <div className="flex flex-wrap justify-around lg:w-9/12 mx-auto mt-10">
        {carList.map((mobil) => (
          <CardCar
            id={mobil[`id`]}
            name={mobil[`name`]}
            category={mobil[`category`]}
            price={mobil[`price`]}
            image={mobil[`image`]}
          />
        ))}
      </div>
    </>
  );
}
