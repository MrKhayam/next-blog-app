import React from 'react';

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen font-[Geist] bg-black">
        <div className="top bg-zinc-900 text-white flex items-center px-10 w-full h-14">
          <h1 className='text-xl font-semibold'>Next Js Blogs</h1>
        </div>
        <div className="flex">
          <div className="left w-[70%] min-h-96"></div>
                  <div className="right w-[30%] p-7 h-[91.3vh] bg-zinc-900">
                      <h1>Add New Blog</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
