import React from "react";

export default function SkeletonForDestinationAndTopSelling({}) {
  return (
    <div className="w-full   duration-300 hover:scale-110 hover:rotate-2 sm:w-[45%] lg:w-[30%]  my-5 shadow-lg rounded-3xl ">
      <div className="rounded-3xl h-[250px] bg-gray-400 animate-pulse md:h-[300px]   w-full "></div>

      <div className="flex justify-between text-lg my-10 px-5">
        <p className="uppercase font-bold bg-gray-400 rounded-2xl animate-pulse h-5 w-[50%] text-[#2f8ea2]"></p>
        <p className="bg-gray-300 h-5 w-[30%] animate-pulse rounded-2xl"></p>
      </div>
    </div>
  );
}
