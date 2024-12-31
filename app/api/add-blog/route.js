import connectDB from "../../config/index";
import Blog from "@/app/models/blogModel";
import Joi from "joi";
import { NextResponse } from "next/server";

// Joi schema for validation
const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

// POST handler
export const POST = async (req) => {
  try {
    await connectDB(); // Connect to the database

    // Parse the request body
    const extractBlogData = await req.json(); // Add `await` here
    const { title, description } = extractBlogData;

    // Validate input using Joi
    const { error } = AddNewBlog.validate({
      title,
      description,
    });

    if (error) {
      // Return validation error response
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    // Create a new blog in the database
    const createdBlog = await Blog.create({ title, description }); // Pass fields directly
    if (createdBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog Added Successfully.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Went Wrong!",
      });
    }
  } catch (error) {
    console.error("Error in POST handler:", error); // Add more descriptive logging
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong!",
    });
  }
};
