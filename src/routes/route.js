const express = require("express");

const router = express.Router();

const {
  getBlog,
  createBlog,
  updateBlog,
} = require("../controllers/controller");

router.get("/blog", getBlog);
router.post("/blog", createBlog);
router.put("/blog/:id", updateBlog);

module.exports = router;
