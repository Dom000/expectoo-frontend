import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Map from "./Map";

function MapSection() {
  const [clientinfo, setclientinfo] = useState("");

  return (
    <div className="flex flex-col   bg-[#101923] justify-center items-center">
      <div className="  2xl:max-w-[80%] p-20    w-full ">
        <div className=" flex">
          <div className="w-1/4 text-xl">
            <p className="text-pink-700 text-3xl font-bold">Our </p>
            <p className="text-white text-3xl font-bold">Client</p>
            <div className="mt-16">
              <span className="flex space-x-1 items-center">
                <GoDotFill className="text-pink-700 text-xl" />
                <p className="text-white">{clientinfo}</p>
              </span>
              <span className="flex space-x-1 items-center">
                <GoDotFill className="text-pink-700 text-xl" />
                <p className="text-white">{clientinfo} Republic</p>
              </span>
            </div>
          </div>
          <div className="w-3/4">
            <Map setclientinfo={setclientinfo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapSection;
