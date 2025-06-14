import { HorizontalScrollButtons } from "../components/testimonialComponents/HorizontalScrollButtons";
import VerticalScrollButtons from "../components/testimonialComponents/VerticalScrollButtons";

export default function Testimonials(props) {
  const testimonialData = [
    { imageLink: "person/person.jpg" },
    { imageLink: "person/img1096.jpg" },
    { imageLink: "person/img1087.jpg" },
  ];

  return (
    <>
      <div className=" px-[10%]  py-10">
        <div className="md:pl-5 text-4xl font-bold my-5"> Testimonials</div>
        <div
          id="scrollContainer"
          className="flex flex-col h-[480px] lg:h-auto lg:flex-row md:flex-nowrap  hideScrollBar overflow-x-auto"
        >
          {testimonialData.map((singleItem) => {
            return (
              <SingleTestimonial
                key={singleItem.imageLink}
                imageLink={singleItem.imageLink}
              />
            );
          })}
        </div>
        <HorizontalScrollButtons />
        <VerticalScrollButtons />
      </div>
    </>
  );
}
function SingleTestimonial({ imageLink }) {
  return (
    <div className="w-[100%] hover:scale-105 duration-300 md:min-w-[33%] md:px-5">
      <img
        className="rounded-full relative top-10 left-5 h-20 w-20"
        src={imageLink}
      ></img>
      <div className="bg-[#f7f7f7] px-7 pt-15 pb-10 flex flex-col gap-3">
        <p className="text-[#565656]">
          Text commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content..
        </p>
        <div>
          <p className="text-black font-bold "> Name</p>
          <p className="text-sm">Company / Designation</p>
        </div>
      </div>
    </div>
  );
}
