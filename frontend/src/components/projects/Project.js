import React from "react";


const Project = () => {
  return (

    <div className="object-cover group  rounded-md bg-[url('https://picsum.photos/400/300')] w-5/12 m-2 h-48 relative">
      <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md "></div>
      <div class="absolute inset-0 flex items-center justify-center mix-blend-soft-light hover:mix-blend-normal">
        <h2 class=" text-3xl font-bold">Portfolio</h2>
      </div>
      <div className="tags bottom-0 absolute hidden group-hover:block transition-transform ease-in-out group-hover:bottom-10">
        <span className="badge  inline-flex items-center rounded-md bg-blue-200 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          Tailwind CSS
        </span>
        <span className="badge badge  inline-flex items-center rounded-md bg-red-200 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">
          Laravel
        </span>
      </div>
    </div>
  );
};

export default Project;
