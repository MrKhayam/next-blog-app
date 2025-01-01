import React from 'react';
import Blog from './Blog';

const AllBlogs = ({blogs}) => {
  return (
    <>
          <div className="w-full h-[91.3vh] p-2 md:p-5 overflow-y-scroll">
        <div className="flex flex-col w-full h-auto gap-2 md:gap-4">
          {
            blogs?.map((blog, index) => {
              return <Blog key={index} data={blog} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default AllBlogs;
