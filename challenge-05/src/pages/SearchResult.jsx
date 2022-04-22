import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardCar } from "../components/printilan/CardCar";
import SearchMenu from "../components/SearchMenu";
import { fetchCars } from "../redux/ActionCar";

export default function SearchResult() {
  const Cars = useSelector(state => state.carDetails);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchCars()) },);

  return (
    <>
      <div className={`bg-bgGrey h-40`}></div>
      <SearchMenu />
      <div className="flex flex-wrap justify-around lg:w-9/12 mx-auto mt-10">
        {Cars.map((mobil) => (
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
