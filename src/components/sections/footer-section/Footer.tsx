import Image from "next/image";
import React from "react";
import { AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import Button from "@/components/common/Button";

const Footer = () => {
  return (
    <div className="bg-[#101923] w-full">
      <div className=" 2xl:max-w-[80%]   w-full p-16 text-white">
        <div className="justify-between flex items-center">
          <Image
            width={90}
            height={42}
            alt="Expectoo Logo"
            src={"/logo.webp"}
            className=""
          />
          <h1>Partner with the best</h1>

          <Button text={"Contact Us"} />
        </div>
        <div className="flex  justify-between items-center">
          <div className="flex flex-col space-y-2 mt-5">
            <p>OFFICE</p>

            <div className="max-w-[220px] ">
              <p className="text-base">
                No 5, Engr Maxwell Adoki Street, Off Peter Odili Road, Port
                Harcourt, River State Nigeria
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2.5 min-w-[260px]">
            <p className="text-base mt-5">OFFICE</p>

            <p>Blogs</p>
            <p>E-mail address </p>
            <p>Phone Number</p>
          </div>

          <div>
            <p className="text-xl mb-4">Social</p>

            <div className="flex space-x-2">
              <img
                className="w-6 h-6"
                src="/Instagram-Icon.png"
                alt="instagram"
              />
              <BiLogoFacebook className="text-2xl" />
              <AiOutlineLinkedin className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center">
          <div className="flex space-x-1 items-center justify-center">
            <p className="mt-0.5">©</p>
            <p className="text-lg">
              expectoo {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
