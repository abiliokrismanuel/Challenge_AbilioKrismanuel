import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
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
      <div id="sidebar">
        <div className="position-fixed d-flex flex-column flex-shrink-0 bg-primary w-15 h-100">
          <a href="#" className="d-block p-3 mx-auto">
            <img src="images/logo1.png" alt="" />
          </a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <a href="#" className="nav-link px-0 py-2 text-white">
                <img
                  className="d-block mx-auto"
                  src="images/icons/home.svg"
                  alt=""
                />
                <span>
                  <small>
                    <b>Dashboard</b>
                  </small>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="car" className="nav-link px-0 py-2 text-white">
                <img
                  className="d-block mx-auto"
                  src="images/icons/fi_truck.svg"
                  alt=""
                />
                <span>
                  <small>
                    <b>Cars</b>
                  </small>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-darkblue"></div>
      </div>
    </>
  );
};

export default BoardAdmin;
