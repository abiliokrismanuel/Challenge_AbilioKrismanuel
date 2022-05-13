import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import GreenButton from "./components/compo/GreenButton";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//#3. Menuju ke tempat komponent tersebut
import Login from "./components/Login";
// #3. menuju ke komponen registrasi
import Register from "./components/Register";

import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import firebase from './services/firebase';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  function handleSetNavOpen() {
    setNavOpen(!isNavOpen);
  }
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth );
  const dispatch = useDispatch();

  //firebase
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router history={history}>
        <nav className="navbar navbar-expand-lg navbar-light bg-grey">
          <Link to={"/"} className="navbar-brand">
            <img src="./images/logo.png" alt="" />
          </Link>
          <button
            onClick={handleSetNavOpen}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end w-100 mt-2 lg:inline-flex ${
              isNavOpen ? "flex" : "hidden"
            }`}
            id="navbarNavAltMarkup"
          >
            {/* landing */}
            <div className="navbar-nav">
              <Link to={"/home"} className="nav-link text-dark">
                Home
              </Link>

              {showAdminBoard && (
                <Link to={"/admin"} className="nav-link text-dark">
                  Admin Board
                </Link>

                
              )}

              {currentUser && (
                <Link to={"/user"} className="nav-link text-dark">
                  User
                </Link>
              )}
            </div>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>

              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </div>
          ) : (
            //# 1. First Attenttion - false result from currentUser null or not
            <div className="navbar-nav ml-auto">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            {/* #2. 2nd Attention component login*/}
            <Route exact path="/register" component={Register} />
            {/* #2. 2nd attention component regis */}
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
    </Router>
  );
};

export default App;
