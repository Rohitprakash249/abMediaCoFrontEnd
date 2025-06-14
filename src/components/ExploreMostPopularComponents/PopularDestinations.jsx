import SkeletonForDestinationAndTopSelling from "../SkeletonForDestinationAndTopSelling";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SingleDestination from "./SingleDestination";
const fetchDestinations = async () => {
  const res = await axios.get("http://localhost:8080/api/destinations");

  return res.data;
};
export default function PopularDestinations() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["destinations"],
    queryFn: fetchDestinations,
    staleTime: 1000 * 60 * 5, // caches for 5 minutes
  });

  return (
    <div className=" flex flex-col items-center justify-center px-5 lg:px-[10%]">
      <div className="flex flex-wrap  flex-row mt w-full justify-evenly ">
        {isLoading === true && (
          <>
            <SkeletonForDestinationAndTopSelling />
            <SkeletonForDestinationAndTopSelling />
            <SkeletonForDestinationAndTopSelling />
            <SkeletonForDestinationAndTopSelling />
            <SkeletonForDestinationAndTopSelling />
            <SkeletonForDestinationAndTopSelling />
          </>
        )}
        {data?.map((singleDestination) => {
          return (
            <SingleDestination
              key={singleDestination.imagelink}
              destinationDetails={singleDestination}
            />
          );
        })}
      </div>
      <div className="self-end  flex gap-3 my-5 md:px-10">
        <ArrowCircleLeftIcon
          sx={{
            fontSize: 50,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />
        <ArrowCircleRightIcon
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
    </div>
  );
}
