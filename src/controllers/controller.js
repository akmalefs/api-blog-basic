const prisma = require("../helpers/prisma");

const getBlog = async (req, res) => {
  try {
    const blogs = await prisma.post.findMany();
    res.json({
      success: true,
      massage: "success get all data blogs",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed get data blogs",
    });
  }
};

module.exports = {
  getBlog,
};
