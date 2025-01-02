const express = require("express");

const router = express.Router();

const { getBlog } = require("../controllers/controller");

router.get("/blog", getBlog);

module.exports = router;
