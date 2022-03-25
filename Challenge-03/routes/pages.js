//routes/page.js

const router = require("express").Router();
const page = require("../controllers/pagesController");

router.get("/", page.home);
router.get("/dashboards", page.dashboards);
router.get("/cars", page.cars);
router.get("/addcars", page.addcars);

module.exports = router;
