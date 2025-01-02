const express = require("express");

const router = express.Router();

const { getBlog, createBlog } = require("../controllers/controller");

router.get("/blog", getBlog);
router.post("/blog", createBlog);

module.exports = router;
