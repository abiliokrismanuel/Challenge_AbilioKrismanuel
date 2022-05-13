import React, { useState, useEffect } from "react";
import Form from "react-validation/build/form";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import SearchMobil from "./compo/searchMobil";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <>
    <div className="bg-grey pt-5 d-flex gap-5 justify-content-between flex-column flex-md-row overflow-hidden">
      <div className="">
        <h2 className="fw-bold mb-3">
          Sewa & Rental Mobil Terbaik di kawasan Klaten
        </h2>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani
          kebutuhanmuuntuk sewa mobil selama 24 jam.
        </p>
        <button type="button" className="btn btn-info text-white">
          Mulai Sewa Mobil
        </button>
      </div>
      <div className="d-flex flex-column justify-content-end">
        <img
          src="./images/img_car.png"
          className="mt-auto w-100"
          alt="car"
        />
      </div>
    </div>
    <SearchMobil/>
    </>
  );
};

export default BoardUser;
