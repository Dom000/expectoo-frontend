import React from "react";

function Team() {
  return (
    <div className="flex flex-col bg-[#101923] items-center justify-center w-full">
      <div className="2xl:max-w-[80%]   py-10 w-full justify-between flex space-x-5 pr-10 pl-16">
        <div className=" rotate-[270deg]  flex justify-center  pt-20  relative -bottom-36 flex-col ">
          <p className="text-white  font-bold  text-[80px] leading-none ">
            Our <br />
            <span className=" text-pink-700   ">Team</span>
          </p>
        </div>
        <div className="h-20 w-[60%]"></div>

        <div className="flex  mt-10 space-x-4 w-full">
          <div className="flex flex-col space-y-4">
            <div className=" rounded-2xl border border-pink-500 cursor-pointer inline-block overflow-hidden relative w-[210px] h-[202px] ">
              <img
                src="ceo3.webp"
                className="h-full w-full z-0  object-cover  transition-transform duration-[0.3s] ease-[ease] hover:scale-[1.2] rounded-2xl"
                alt="profile"
              />
              <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-pink-700/60 rounded-br-md rounded-bl-md  text-center">
                <p>Adenike </p>
              </div>
            </div>
            <div className=" rounded-2xl border-pink-500 cursor-pointer inline-block overflow-hidden relative w-[210px] h-[285px] ">
              <img
                src="/ceo1.webp"
                className=" z-0  object-cover object-left  transition-transform duration-[0.3s] ease-[ease] hover:scale-[1.2] rounded-2xl h-full w-full bg-cover"
                alt="profile"
              />
              <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[16%] text-white  bg-pink-700/60 rounded-br-md rounded-bl-md  text-center">
                <p>Adenike </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-pink-500 inline-block  cursor-pointer overflow-hidden relative  h-[500px] w-[261px]">
              <img
                className="w-full h-full z-0  object-cover  transition-transform duration-[0.3s] ease-[ease] hover:scale-[1.2]  rounded-2xl"
                src="/ceo2.webp"
                alt=""
              />
              <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[10%] text-white  bg-pink-700/60 rounded-br-md rounded-bl-md  text-center">
                <p>Adenike </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className=" rounded-2xl border border-pink-500 cursor-pointer inline-block overflow-hidden relative w-[210px] h-[202px]  ">
              <img
                src="/ceo4.webp"
                className="h-full w-full  z-0  object-cover   transition-transform duration-[0.3s] ease-[ease] hover:scale-[1.2]  rounded-2xl"
                alt="profile"
              />

              <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-pink-700/60 rounded-br-md rounded-bl-md  text-center">
                <p>Adenike </p>
              </div>
            </div>
            <div className=" rounded-2xl border border-pink-500 cursor-pointer inline-block overflow-hidden relative w-[210px] h-[202px]  ">
              <img
                src="/ceo5.webp"
                className="h-full w-full  z-0  object-cover   transition-transform duration-[0.3s] ease-[ease] hover:scale-[1.2] rounded-2xl"
                alt="profile"
              />

              <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-pink-700/60 rounded-br-md rounded-bl-md  text-center">
                <p>Adenike </p>
              </div>
            </div>

            <div className="max-w-[300px]  text-white">
              <p>
                Great things in business are never done by one person. They're
                done by a team of people.
              </p>
              <div className="flex justify-end">
                <p className=""> - Steve Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
