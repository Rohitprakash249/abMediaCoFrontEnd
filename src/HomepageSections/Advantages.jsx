import React from "react";
import SingleAdvantage from "../components/advantagesComponents/SingleAdvantage";
import AdvantagesHeading from "../components/advantagesComponents/AdvantagesHeading";
import AdvantagesContainer from "../components/advantagesComponents/AdvantagesContainer";

export default function Advantages(props) {
  return (
    <>
      <div className=" bg-[#82c8c9] py-12">
        <AdvantagesHeading />
        <AdvantagesContainer />
      </div>
    </>
  );
}
