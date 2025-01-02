const z = require("zod");

const blogSchema = z.object({
  title: z.string(),
  author_name: z.string(),
  content: z.string(),
  published: z.boolean(),
});

module.exports = {
  blogSchema,
}
