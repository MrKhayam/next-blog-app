"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const formData = {
    title,
    description,
  };

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
        alert("Blog added successfully!");
      } else {
        alert(result.message || "Failed to add the blog.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while adding the blog.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="w-full min-h-screen font-[Geist] bg-black">
        <div className="top bg-zinc-900 shadow-sm shadow-slate-500 text-white flex items-center px-10 w-full h-14">
          <h1 className="text-xl font-semibold">Next.js Blogs</h1>
        </div>
        <div className="flex">
          <div className="left w-[70%] min-h-96"></div>
          <div className="right w-[30%] p-7 h-[91.3vh] bg-zinc-900">
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
        </div>
      </div>
    </>
  );
};

export default Page;
