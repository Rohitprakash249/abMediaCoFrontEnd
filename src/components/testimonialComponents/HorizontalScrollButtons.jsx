import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export function HorizontalScrollButtons() {
  function scrollHorizontally(offset) {
    const container = document.getElementById("scrollContainer");
    container.scrollBy({ left: offset, behavior: "smooth" });
  }
  return (
    <div className="hidden lg:flex gap-3 justify-end my-5 mx-10 duration-1000">
      <ArrowCircleLeftIcon
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
