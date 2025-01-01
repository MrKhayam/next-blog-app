import axios from "axios";
import React from "react";
import AllBlogs from "../components/AllBlogs";
import AddBlog from "../components/AddBlog";
import toast, { Toaster } from "react-hot-toast";

const getAllBlogs = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/get-blogs");
    if (response) {
        return response.data.data;
    } else {
      toast.error(response.data?.message);
      }
  } catch (error) {
    console.log(error);
  }

}

const page = async () => {
  const blogList = await getAllBlogs();
  return (
    <>
      <Toaster />
      <div className="w-full relative overflow-hidden h-screen font-[Geist] bg-black">
        <div className="top bg-zinc-900 border-b text-white flex items-center px-10 w-full h-14">
          <h1 className="text-xl font-semibold">Next.js Blogs</h1>
        </div>
        <div className="flex">
          <div className="left w-screen md:w-[70%] min-h-96">
            <AllBlogs blogs={blogList} />
          </div>
          <div className="right md:w-[30%] w-0 md:p-7 h-full md:h-[91.3vh] bg-zinc-900">
            <AddBlog />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
