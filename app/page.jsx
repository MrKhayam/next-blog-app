import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen font-[Geist] flex-col bg-zinc-900 flex items-center justify-center">
        <h1 className="text-5xl font-[Geist] font-semibold">
          Welcome To Next Js Blogs.
        </h1>
        <Link
          className="mt-5 px-6 py-2 transition-all duration-300 hover:gap-4 hover:bg-[#faf5f5] items-center flex gap-2 rounded bg-white text-black"
          href="/home"
        >
          Explore Blogs <FaArrowRightLong size={15} color='black' cursor="pointer" />
        </Link>
      </div>
    </>
  );
}

export default page;
