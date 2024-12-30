import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: String,
    description: String,
}, {
    timestamps,
});


const Blog = mongoose.models().Blog || mongoose.model('Blog', blogSchema);

export default Blog;