import Image from "next/image";
import React from "react";

const Testimonial = ({ id }: { id: number }) => {
  return (
    <div className="flex z-10  relative items-center space-x-16 md:pr-20 ">
      <div className="w-full h-5 p-5 absolute  bg-pink-200"></div>

      <span className="flex font-bold z-10 text-black/40 font-montserrat text-[180px] ">
        <h1 className="-ml-10">0</h1>
        <h1>{id}</h1>
      </span>

      <pre className="  text-pink-700 z-10 rotate-[270deg] text-xl font-semibold">
        Clients Feedback
      </pre>

      <Image
        width={200}
        height={30}
        priority
        src={"/ceo1.webp"}
        alt="logo"
        className="w-32 h-32 rounded-md z-10 cursor-pointer"
      />
      <div className="md:max-w-650px] z-10 space-y-3 font-semibold xl:max-w-[900px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eiusmod
          tempor incididunt ut labore tempo incididunt ut labore et dolore magna
          aliqua.
        </p>

        <div className="w-full flex justify-end">
          <div>
            <p>-Carlo Roudriguez</p>
            <span className="flex justify-end">
              <p>Lotus</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
