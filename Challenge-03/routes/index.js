const express = require("express");
const router = express.Router();
const pagesRouter = require("./pages");

router.use(pagesRouter);

module.exports = router;
