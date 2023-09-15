import Button from "@/components/common/Button";
import Image from "next/image";
import React, { useState } from "react";

function ThirdSection() {
  const [servicelink, setservicelink] = useState("");
  return (
    <div className=" overflow-hidden  pb-16 relative flex  md:w-full pt-36 xl:items-center bg-[#101923]   flex-col items-center justify-center w-full  ">
      <div className="relative flex h-550px] 2xl:max-w-[80%]  text-white  w-full ">
        <div className="w-2/5 space-y-16  z-10  pl-10">
          <div className="-top-16 absolute">
            <p className="text-3xl  font-bold">
              Our <br /> Services
            </p>
          </div>
          <div className=" space-y-1">
            <div
              onMouseEnter={() => setservicelink("01")}
              onMouseLeave={() => setservicelink("")}
              className="flex w-full space-x-3 top-8 absolute"
            >
              <div className="  animatebg   w-2/4 pl-16 cursor-pointer">
                <p className="text-md  font-bold">Software Development</p>
              </div>
              {servicelink == "01" && (
                <p className="font-bold text-md text-pink-700/60">01</p>
              )}
            </div>
            <div
              onMouseEnter={() => setservicelink("02")}
              onMouseLeave={() => setservicelink("")}
              className="flex w-full space-x-3 top-16 absolute"
            >
              <div className=" animatebg    w-2/4 pl-16 cursor-pointer">
                <p className="text-md  font-bold">IT Consultation</p>
              </div>
              {servicelink == "02" && (
                <p className="font-bold text-md text-pink-700/60">02</p>
              )}
            </div>
            <div
              onMouseEnter={() => setservicelink("03")}
              onMouseLeave={() => setservicelink("")}
              className="flex w-full space-x-3 top-24 absolute"
            >
              <div className=" animatebg    w-2/4 pl-16 cursor-pointer">
                <p className="text-md  font-bold">Software Training</p>
              </div>
              {servicelink == "03" && (
                <p className="font-bold text-md text-pink-700/60">03</p>
              )}
            </div>
            <div
              onMouseEnter={() => setservicelink("04")}
              onMouseLeave={() => setservicelink("")}
              className="flex w-full space-x-3 top-32 absolute"
            >
              <div className=" animatebg    w-2/4 pl-16 cursor-pointer">
                <p className="text-md  font-bold">Software Maintenance</p>
              </div>
              {servicelink == "04" && (
                <p className="font-bold text-md text-pink-700/60">04</p>
              )}
            </div>
            <div
              onMouseEnter={() => setservicelink("05")}
              onMouseLeave={() => setservicelink("")}
              className="flex w-full space-x-3 top-40 absolute"
            >
              <div className=" animatebg    w-2/4 pl-16 cursor-pointer">
                <p className="text-md  font-bold">Tech Recruitment</p>
              </div>
              {servicelink == "05" && (
                <p className="font-bold text-md text-pink-700/60">05</p>
              )}
            </div>
            <div
              onMouseEnter={() => setservicelink("06")}
              onMouseLeave={() => setservicelink("")}
              className="flex w-full space-x-3 top-48 absolute"
            >
              <div className=" animatebg    w-2/4 pl-16 cursor-pointer">
                <p className="text-md  font-bold">Quality Assurance</p>
              </div>
              {servicelink == "06" && (
                <p className="font-bold text-md text-pink-700/60">06</p>
              )}
            </div>
          </div>
        </div>
        <div className="   flex-col space-y-3   w-3/5 flex items-end justify-end">
          <div className=" w-4/5">
            <Image
              width={200}
              height={30}
              priority
              src={"/image-1.webp"}
              alt="logo"
              className="w-full h-80 rounded-md  cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-end w-full p-10  max-w-[500px]">
            <p className="text-xs">
              From captivating websites to dynamic web applications, we breathe
              life into your digital presence by harnessing the latest
              technologies to create seamless online experiences that engage and
              inspire
            </p>
            <Button
              className="rounded-full hover:opacity-50 cursor-pointer border-2"
              outline
              text="Get Quote"
            />
          </div>
        </div>
      </div>

      {/* CARD  */}

      <div className="bg-[url('/bg2.webp')] bg-cover  w-4/5 p-7 rounded-lg text-white">
        <div className="flex justify-between  ">
          <h1 className="font-bold text-3xl">Digital Marketing</h1>
          <Button
            className="rounded-full hover:opacity-50 cursor-pointer border-2"
            outline
            text="Get Quote"
          />
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div className="flex flex-col space-y-3 items-center">
            <Image
              width={200}
              height={30}
              priority
              src={"/icon1.png"}
              alt="logo"
              className="w-40  cursor-pointer"
            />
            <p className="text-lg font-bold ">Google Ads</p>
          </div>
          <div className="flex  flex-col space-y-3 items-center">
            <Image
              width={200}
              height={30}
              priority
              src={"/icon2.png"}
              alt="logo"
              className="w-36  cursor-pointer"
            />
            <p className="text-lg font-bold pt-4">SEO Services</p>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <Image
              width={200}
              height={30}
              priority
              src={"/icon3.png"}
              alt="logo"
              className="w-32  cursor-pointer"
            />
            <p className="text-lg font-bold pt-4">SEO Copywriting</p>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <Image
              width={200}
              height={30}
              priority
              src={"/icon4.png"}
              alt="logo"
              className="w-32  cursor-pointer"
            />
            <p className="text-lg font-bold pt-4">Google Ads</p>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <Image
              width={200}
              height={30}
              priority
              src={"/icon5.png"}
              alt="logo"
              className="w-32 cursor-pointer"
            />
            <p className="text-lg font-bold pt-4">Google Ads</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
