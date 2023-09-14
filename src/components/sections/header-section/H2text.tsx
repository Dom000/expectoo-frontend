import Image from "next/image";
import React, { useState } from "react";
import "animate.css";
function H2text() {
  const [hoveredText, sethoveredText] = useState("");
  const DynamicText = [
    {
      text: "We are the best ",
      underlined: false,
      color: "white",
      dynamicContent: "/#",
    },
    {
      text: " Recruitment,",
      underlined: true,
      color: "pink-700",
      dynamicContent: "/image-1.webp",
    },
    {
      text: "Software ",
      underlined: true,
      color: "pink-700",
      dynamicContent: "/development-gif.gif",
    },
    {
      text: "development, and",
      underlined: false,
      color: "white",
      dynamicContent: "/#",
    },
    {
      text: "IT Training",
      underlined: true,
      color: "pink-700",
      dynamicContent: "/mobiteam-impressive.gif",
    },
    {
      text: "company.",
      underlined: false,
      color: "white",
      dynamicContent: "/#",
    },
  ];
  return (
    <div className="p-5 w-full mt-16 flex items-center justify-center">
      <div className="flex   max-w-[670px] text-left flex-wrap">
        {DynamicText.map((item, index) => (
          <div
            onMouseEnter={() => {item.underlined?sethoveredText(item.text):null}}
            onMouseLeave={() => {item.underlined?sethoveredText(""):null}}
            key={index}
            className="pl-3 m-1"
          >
            <h1
              className={
                item.underlined
                  ? `text-4xl font-bold cursor-pointer underline  text-pink-700 `
                  : "text-4xl font-bold text-white"
              }
            >
              {item.text}
            </h1>
            <span className="relative block">
              {hoveredText === item.text && (
                <Image
                  width={200}
                  height={200}
                  priority
                  src={item.dynamicContent}
                  alt="logo"
                  className="w-full animate__animated animate__fadeIn absolute rounded-sm cursor-pointer"
                />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default H2text;
