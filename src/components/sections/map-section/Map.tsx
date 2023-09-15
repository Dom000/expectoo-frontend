"use client";

import { VectorMap } from "@react-jvectormap/core";
// import dynamic from "next/dynamic";
// const VectorMap = dynamic(
//   // @ts-ignore
//   () => import("@react-jvectormap/core").then((m) => m.VectorMap),
//   { ssr: false }
// );

import { worldMill } from "@react-jvectormap/world";
import React from "react";

const locations = [
  { latLng: [41.9, 12.45], name: "Vendo" },
  { latLng: [38.5, -77.2], name: "Coloe" },
  { latLng: [-33.9, 151.2], name: "Malama" },
  { latLng: [51.5, -0.1], name: "David" },
  { latLng: [34.0, -118.2], name: "Eve" },
  { latLng: [40.7, -74.0], name: "Clisha" },
  { latLng: [-22.9, -43.2], name: "Grace" },
  { latLng: [35.7, 139.8], name: "Hannah" },
  { latLng: [52.5, 13.4], name: "Isabel" },
];
function Map({
  setclientinfo,
}: {
  setclientinfo: React.Dispatch<React.SetStateAction<string>>;
}) {
  const markerStyle = {
    initial: {
      fill: "#E8238D",
      strokeWidth: "#E8238D",
    },
  };
  return (
    <div className="w-full h-[600px]">
      {typeof window !== "undefined" && (
        <VectorMap
          map={worldMill}
          backgroundColor="#101923"
          zoomOnScroll={false}
          markers={locations}
          markerStyle={markerStyle}
          onMarkerTipShow={function markerTip(event, label, code) {
            //@ts-ignore

            setclientinfo(label.html());
          }}
        />
      )}
    </div>
  );
}

export default Map;
