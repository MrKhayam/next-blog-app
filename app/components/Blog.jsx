'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Blog = ({ data }) => {
  const router = useRouter();
  const handleDelete = async (getId) => {
    try {
      const deleteBlog = await fetch(`api/delete-blog/?id=${getId}`, {
        method: "DELETE",
      });
      const result = await deleteBlog.json();
      if (result.data?.success == false) {
        toast.error(result.data?.message);
      } else {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="md:w-[80%] w-full p-3 rounded min-h-32 bg-zinc-900">
        <h1 className="text-xl font-bold">{data?.title}</h1>
        <p className="text-sm mt-1">
          {data?.description}
        </p>
        <div className="w-full mt-3 h-auto gap-3 flex items-center justify-end">
          <button className="px-6 py-2 transition-all duration-300 hover:bg-[#e6e6e6] rounded bg-white text-black">
            Edit
          </button>
          <button onClick={() => handleDelete(data._id)} className="px-6 py-2 transition-all duration-300 hover:bg-red-400 rounded bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
