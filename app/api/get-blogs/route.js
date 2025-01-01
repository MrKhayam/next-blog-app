import connectDB from "@/app/config";
import Blog from "@/app/models/blogModel";
import { NextResponse } from "next/server";



export const GET = async () => {
    try {
        await connectDB;
        const allBlogs = await Blog.find({}).sort({createdAt: -1});
        if (!allBlogs) {
            return NextResponse.json({
                success: false,
                message: "No Blogs Found!",
            }, {
                status: 404
            });
        }
        
        return NextResponse.json(
          {
            success: true,
            data: allBlogs,
          },
          { status: 200 }
        );
        
    } catch (error) {
        console.error("Error fetching blogs:", error.message);
        return NextResponse.json(
          {
            success: false,
            message: "Something went wrong. Please try again.",
          },
          { status: 500 }
        );
    }
}