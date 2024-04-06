import React, { useRef, useState, useEffect } from "react";
import withTitleBar from "../Hocs/withTitleBar";
import "../css/landingPage.css";
import { RiInformationLine } from "react-icons/ri";
import Widgets from "./Widgets";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { Spinner } from "@chakra-ui/react";

const LandingPage = () => {
  const mapRef = useRef();
  const [showPageData, setShowPageData] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPageData(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div style={{ flexGrow: "1" }}>
      <div className="map-container">
        <VectorMap
          ref={mapRef}
          zoomOnScroll={true}
          zoomButtons={false}
          map={worldMill}
          backgroundColor="#1c3c4d"
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          markerStyle={{
            initial: {
              fill: "red",
              stroke: "red",
            },
          }}
          containerClassName="map"
          markers={[
            {
              latLng: [1.3521, 103.8198],
              name: "Singapore",
            },
            {
              latLng: [-15.77972, -47.92972],
              name: "Basilia",
            },
          ]}
          regionStyle={{
            initial: {
              fill: "#316274",
              "fill-opacity": 1,
              stroke: "#265cff",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              fill: "#316274",
              stroke: "#2b2b2b",
            },
            selected: {
              fill: "#FFFB00",
            },
          }}
          onRegionTipShow={function (e, el, code) {
            el.html(
              "<strong>" +
                el.html() +
                "</strong><br>Temperature: " +
                "19 C" +
                "<br>Precipitation: " +
                "20%"
            );
            el.css({
              "background-color": "black",
              color: "white",
            });
          }}
        />
      </div>
      {showPageData ? (
        <div className="landing-page">
          <div className="landing-page-flex-container">
            <h1>Hello User,</h1>
            <button>
              <RiInformationLine /> <span>There are 2 action items.</span>
            </button>
          </div>
          <Widgets />
        </div>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#66c0e0"
          height={"20px"}
          width={"20px"}
          zIndex={"1000"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform="translate(-50%, -50%)"
        />
      )}
    </div>
  );
};

export default withTitleBar(LandingPage);
