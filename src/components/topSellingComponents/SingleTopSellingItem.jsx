export default function SingleTopSellingItem({ topSellingItemDetails }) {
  return (
    <div className="w-full duration-300 hover:bg-gray-100 hover:scale-110 hover:rotate-2 sm:w-[45%] lg:w-[30%]  my-5 shadow-lg rounded-3xl ">
      <img
        src={topSellingItemDetails.imagelink}
        className="rounded-3xl h-[250px] md:h-[300px]   w-full "
      ></img>
      <div className="flex flex-col text-center text-lg my-10 gap-4 px-5">
        <p className="uppercase font-bold text-[#2f8ea2]">
          {topSellingItemDetails.name}
        </p>
        <button className="bg-[#5eb8b7] hover:bg-[#489595] hover:scale-110 duration-700 text-white rounded-full py-2">
          View Details
        </button>
      </div>
    </div>
  );
}
