import connectDB from "@/app/config";
import { NextResponse } from "next/server";
import Blog from "@/app/models/blogModel";
import Joi from "joi";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const POST = async (req) => {
  try {
    await connectDB();
    const extractedData = await req.json();
    const { title, description } = extractedData;

    const { error } = AddNewBlog.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const createdBlog = await Blog.create({
      title,
      description,
    });

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
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
