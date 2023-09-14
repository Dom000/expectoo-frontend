import React from "react";
import Header from "../../header/Header";
import H2text from "./H2text";
import Image from "next/image";

function HeaderSection() {
  return (
    <div className="w-full h-[450px] bg-no-repeat  bg-cover bg-[url('/image2.webp')] ">
      <div className="backdrop-brightness-50 w-full md:w-full xl:items-center  flex flex-col ">
        <div className="w-full h-[450px]  2xl:max-w-[80%]">
          <Header />
          <H2text />
          <div className="flex justify-end pr-28 pt-12">
            <div className="flex space-x-5 items-center p-3">
              <Image
                width={200}
                height={30}
                priority
                src={"/comp-logo1.webp"}
                alt="logo"
                className="w-24 cursor-pointer"
              />
              <Image
                width={200}
                height={30}
                priority
                src={"/comp-logo2.webp"}
                alt="logo"
                className="w-24 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
