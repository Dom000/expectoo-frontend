import Image from "next/image";
import React from "react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

function FourthSection() {
  return (
    <>
      <div className="relative flex h-[450px] md:w-full pt-36 xl:items-center   flex-col items-center justify-center w-full  ">
        <div className="relative flex   justify-center items-center 2xl:max-w-[80%]  w-full ">
          <div className="flex justify-center relative items-center w-full">
            <div className="w-full h-5 p-5  bg-pink-200"></div>
            <p className="text-8xl opacity-50 absolute left-[60%] 2xl:left-[70%] z-[10px]">
              01
            </p>
          </div>
          <div className="text-8xl absolute left-0 tracking-widest z-10">
            <h1 className="font-bold rotate-[270deg]">
              Our <br /> <span className="text-pink-700">Projects</span>
            </h1>
          </div>
          <div className="z-10 absolute right-36 flex justify-center items-center">
            <div className="m-10">
              <Image
                width={200}
                height={30}
                priority
                src={"/display1.webp"}
                alt="logo"
                className="w-64 h-[450px] rounded-lg bg-cover cursor-pointer"
              />
            </div>
            <div>
              <div className="m-5 w-full h-2/4 flex rounded-lg items-center justify-center ">
                <Image
                  width={200}
                  height={30}
                  priority
                  src={"/display2.webp"}
                  alt="logo"
                  className="w-72 cursor-pointer"
                />
              </div>
              <div className="m-5 w-full h-2/4 flex rounded-lg items-center justify-center ">
                <Image
                  width={200}
                  height={30}
                  priority
                  src={"/display1.webp"}
                  alt="logo"
                  className="w-40 h-60 bg-cover rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex   justify-end mt-20 p-10 items-end 2xl:max-w-[80%]  w-full ">
        <div className="flex items-center justify-center space-x-3 pr-48">
          <HiOutlineArrowNarrowLeft className="text-lg text-gray-600 " />
          <p>Order</p>
          <HiOutlineArrowNarrowRight className="text-lg text-gray-600 " />
        </div>
      </div>
    </>
  );
}

export default FourthSection;
