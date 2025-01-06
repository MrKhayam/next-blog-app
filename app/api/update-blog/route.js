import connectDB from "@/app/config";
import Blog from "@/app/models/blogModel";
import Joi from "joi";
import { NextResponse } from "next/server";

const EditBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const PUT = async (req) => {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const getCurrentId = searchParams.get("id");

    if (!getCurrentId) {
      return NextResponse.json({
        success: false,
        message: "Blog Id Required!",
      });
    }

    const { title, description } = await req.json();

    const { error } = EditBlog.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
      
    const EditCurrentBlog = await Blog.findOneAndUpdate(
      {
        _id: getCurrentId,
      },
      {
        title,
        description,
      },
      { new: true }
      );
      
      if (EditCurrentBlog) {
          return NextResponse.json({
              success: true
          })
      }
      
      
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong! Please try again.",
    });
  }
};
