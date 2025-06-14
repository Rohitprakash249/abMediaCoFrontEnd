import SingleTopSellingItem from "./SingleTopSellingItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SkeletonForDestinationAndTopSelling from "../SkeletonForDestinationAndTopSelling";

const fetchTopSelling = async () => {
  const res = await axios.get("http://localhost:8080/api/packages/top-selling");

  return res.data;
};

export default function AllItemsContainer() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["topSelling"],
    queryFn: fetchTopSelling,
    staleTime: 1000 * 60 * 5, // cache stays fresh for 5 minutes
  });

  return (
    <div className=" flex flex-col items-center justify-center px-5 md:px-[10%]">
      <div className="flex flex-wrap flex-row w-full mt justify-evenly ">
        {data?.map((singleTopSellingItem) => {
          return (
            <SingleTopSellingItem
              key={singleTopSellingItem.name}
              topSellingItemDetails={singleTopSellingItem}
            />
          );
        })}
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
      </div>
    </div>
  );
}
