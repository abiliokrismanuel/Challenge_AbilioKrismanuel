//controllers/pageController.js

const { Dashboard } = require("../models/index");
const { Car } = require("../models/index_car");

exports.home = (req, res) => {
    res.render("index");
};

exports.cars = (req, res) =>{
    Car.findAll().then(cars => {
        res.render("cars", { title: "Cars", cars });
    });
};

exports.dashboards = (req, res) => {
    Dashboard.findAll().then(dashboards => {
        res.render("dashboards", { title: "Dashboards", dashboards });
    });
};

exports.addcars = (req, res) => {
    const title = "Add New Car";
    res.render("addcars", { title });
};