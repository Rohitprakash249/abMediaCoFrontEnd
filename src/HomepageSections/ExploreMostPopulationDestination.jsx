import MostPopularHeading from "../components/ExploreMostPopularComponents/MostPopularHeading";
import PopularDestinations from "../components/ExploreMostPopularComponents/PopularDestinations";

export default function ExploreMostPopulationDestination(props) {
  return (
    <>
      <div className=" lg:py-10">
        <MostPopularHeading />
        <PopularDestinations />
      </div>
    </>
  );
}
