import React from "react";

export default function Header(props) {
  return (
    <>
      <header>
        <div
          style={{
            backgroundImage: `url(${"headerBackground.png"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-svh w-full "
        >
          <div className="flex flex-col gap-8 h-svh mx-[10%] md:w-[50%] justify-center ">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-left duration-1000  text-white text-5xl lg:text-8xl">
                Discover Your Next Adventure
              </p>
              <p className="font-bold duration-1000  text-white text-lg lg:text-2xl">
                Choose from our curated experiences, customized for every kind
                of traveler.
              </p>
              <button className="bg-[#f3be00] duration-500  hover:scale-110 mt-3 lg:mt-6 w-auto self-start font-bold px-12 text-2xl py-3 rounded-full text-black">
                BOOK NOW
              </button>
            </div>

            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "20px" }}
              className=" text-white w-full md:w-auto lg:text-lg font-semibold flex gap-4 absolute bottom-0 left-0 bg-black"
            >
              <button>Easy Booking</button>
              <button className="border-x-[1px] px-4">
                Curated Destinations
              </button>
              <button>Trusted Support</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
