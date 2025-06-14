export default function SingleDestination({ destinationDetails }) {
  return (
    <div className="w-full hover:bg-gray-100 duration-300 hover:scale-110 hover:rotate-2 sm:w-[45%] lg:w-[30%]  my-5 shadow-lg rounded-3xl ">
      <img
        src={destinationDetails.imagelink}
        className="rounded-3xl h-[250px] md:h-[300px]   w-full "
      ></img>
      <div className="flex justify-between text-lg my-10 px-5">
        <p className="uppercase font-bold text-[#2f8ea2]">
          {destinationDetails.name}
        </p>
        <p>
          Starting From <span className="text-[#2f8ea2] font-bold">4999/-</span>
        </p>
      </div>
    </div>
  );
}
