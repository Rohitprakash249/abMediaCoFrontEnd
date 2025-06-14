export default function SingleAdvantage({ itemDetails }) {
  return (
    <div className="text-white text-center flex flex-col  items-center justify-center gap-3 md:gap-5 w-[40%] md:w-[15%]">
      <div className="rounded-full  bg-white h-30 hover:shadow-2xl duration-500 w-30 md:h-40 md:w-40 flex items-center justify-center  ">
        <img className="h-20 w-20" src={itemDetails.iconLink}></img>
      </div>
      <p className="font-semibold text-lg">{itemDetails.title}</p>
      <p>{itemDetails.description}</p>
    </div>
  );
}
