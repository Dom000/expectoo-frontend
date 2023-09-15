import Image from "next/image";
import React from "react";

function SecondSection() {
  return (
    <div className="relative bg-white flex h-[450px] md:w-full pt-36 xl:items-center   flex-col items-center justify-center w-full  ">
      <div className="relative flex h-[450px] 2xl:max-w-[80%]  w-full ">
        <div className="w-1/5 space-y-16 left-0">
          <div className=" space-y-1">
            <div className="hover:bg-pink-300/60  top-1 absolute w-full pl-10 cursor-pointer">
              <p className="text-2xl  font-bold">Our Missiodcn</p>
            </div>
            <div className="hover:bg-pink-300/60  top-8 absolute w-full pl-10 cursor-pointer">
              <p className="text-2xl  font-bold">Our Vision</p>
            </div>
            <div className="hover:bg-pink-300/60  top-16 absolute w-full pl-10 cursor-pointer">
              <p className="text-2xl  font-bold">Our Culture</p>
            </div>
          </div>
          <div className="pl-10 pt-12">
            <p className="text-xs">
              From captivating websites to dynamic web applications, we breathe
              life into your digital presence by harnessing the latest
              technologies to create seamless online experiences that engage and
              inspire
            </p>
          </div>
        </div>
        <div className="absolute space-x-10  right-0 z-1 w-4/5 flex items-end justify-end">
          <div className=" relative -top-16">
            <Image
              width={200}
              height={30}
              priority
              src={"/slide1.webp"}
              alt="logo"
              className="w-72 h-80 cursor-pointer"
            />
          </div>
          <div className=" relative top-10 bg-slate-400 flex flex-col items-center ">
            <h1 className=" absolute opacity-50 -top-24 text-7xl rotate-[270deg]">
              01
            </h1>
            <Image
              width={200}
              height={30}
              priority
              src={"/slide2.webp"}
              alt="logo"
              className="w-72 h-80 cursor-pointer"
            />
          </div>
          <div className=" relative -top-16">
            <Image
              width={200}
              height={30}
              priority
              src={"/slide3.webp"}
              alt="logo"
              className="w-72 h-80 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
