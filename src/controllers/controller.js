const prisma = require("../helpers/prisma");
const { blogSchema } = require("../helpers/schema");

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

const createBlog = async (req, res) => {
  try {
    // validate data
    const parse = blogSchema.safeParse(req.body);

    if (!parse.success) {
      const errorMassage = parse.error.issues.map(
        (err) => `${err.path} - ${err.message}`
      );
      return res.json({
        success: false,
        message: errorMassage,
        data: null,
      });
    }

    // create data
    const blog = await prisma.post.create({
      data: {
        title: parse.data.title,
        author_name: parse.data.author_name,
        content: parse.data.content,
        published: parse.data.published,
      },
    });

    res.json({
      success: true,
      message: "success create data blog",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed get data blogs",
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // validate data
    const parse = blogSchema.safeParse(req.body);

    if (!parse.success) {
      const errorMassage = parse.error.issues.map(
        (err) => `${err.path} - ${err.message}`
      );
      return res.json({
        success: false,
        message: errorMassage,
        data: null,
      });
    }

    // update data
    const blog = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: parse.data.title,
        author_name: parse.data.author_name,
        content: parse.data.content,
        published: parse.data.published,
      },
    });

    res.json({
      success: true,
      message: "success update data blog",
      data: blog,
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
  createBlog,
  updateBlog,
};
