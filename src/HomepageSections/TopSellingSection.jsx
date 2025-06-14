import AllItemsContainer from "../components/topSellingComponents/AllItemsContainer";
import TopSellingHeading from "../components/topSellingComponents/TopSellingHeading";
export default function TopSellingSection(props) {
  return (
    <>
      <div>
        <TopSellingHeading />
        <AllItemsContainer />
      </div>
    </>
  );
}
