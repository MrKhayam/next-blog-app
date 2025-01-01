import connectDB from "@/app/config";
import Blog from "@/app/models/blogModel";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const getCurrentId = searchParams.get("id");

    if (!getCurrentId) {
      return NextResponse.json({
        success: false,
        message: "Blog Id required!",
      });
    }

    const deleteBlog = await Blog.findByIdAndDelete(getCurrentId);

    if (deleteBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog Deleted Successfully.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something Went Wrong!",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
