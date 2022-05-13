import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
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
    </>
  );
};

export default Home;
