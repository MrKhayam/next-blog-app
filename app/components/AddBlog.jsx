"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const AddBlog = ({ blogs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const formData = {
    title,
    description,
  };

  useEffect(() => {
    router.refresh();
  }, []);


  const handleSave = async () => {
    setLoading(true); // Start loading
    try {
      const data = await fetch("/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await data.json();
      if (result.success) {
        toast.success(result.message);
        router.refresh();
        setTitle("");
        setDescription("");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while adding the blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div
        className={`md:relative transition-all duration-300 top-0 right-0 absolute md:w-full w-[80%] md:p-0 p-4 md:translate-x-0 bg-zinc-900 ${
          nav ? "translate-x-0" : "translate-x-[100%]"
        } h-full`}
      >
        <div className="flex md:hidden items-center justify-center absolute w-20 rounded-l-full border-l h-14 left-[-70px] top-0 bg-zinc-900">
          <RiMenu3Line
            onClick={() => setNav((prev) => !prev)}
            color="white"
            size={25}
            className="cursor-pointer font-bold"
          />
        </div>
        <h1 className="text-xl font-semibold">Add New Blog</h1>
        <div className="inputs w-full flex flex-col mt-3">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="Enter the title of the blog..."
            type="text"
            className="bg-[#4a4747] p-2 rounded"
          />
        </div>
        <div className="inputs w-full flex flex-col mt-3">
          <label htmlFor="desc">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description of the blog..."
            className="bg-[#4a4747] h-32 resize-none p-2 rounded"
            id="desc"
          ></textarea>
        </div>
        <div className="w-full py-2 btn flex justify-end items-center">
          <button
            onClick={handleSave}
            disabled={loading} // Disable button while loading
            className={`bg-white transition-all duration-300 hover:scale-[1.04] shadow text-black px-6 py-2 rounded text-sm ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : "Add New Blog"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
