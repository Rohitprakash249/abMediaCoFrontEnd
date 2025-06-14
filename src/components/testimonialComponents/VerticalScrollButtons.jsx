import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function VerticalScrollButtons() {
  function scrollHorizontally(offset) {
    const container = document.getElementById("scrollContainer");
    container.scrollBy({ top: offset, behavior: "smooth" });
  }
  return (
    <div className=" flex lg:hidden gap-3 justify-end my-5 mx-10 duration-1000">
      <ArrowCircleLeftIcon
        className="rotate-90"
        onClick={() => scrollHorizontally(-500)}
        sx={{
          fontSize: 50,

          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      />
      <ArrowCircleRightIcon
        className="rotate-90"
        onClick={() => scrollHorizontally(500)}
        // className="hover:scale-115 hover:"
        sx={{
          color: "#f7c000",
          fontSize: 50,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      />
    </div>
  );
}
