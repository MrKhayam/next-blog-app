import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  // Use `new` for defining the schema
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Check if the model is already created; if not, create a new model
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
