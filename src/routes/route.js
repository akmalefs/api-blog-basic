const express = require("express");

const router = express.Router();

const {
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/controller");

router.get("/blog", getBlog);
router.post("/blog", createBlog);
router.put("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);

module.exports = router;
