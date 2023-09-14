import Image from "next/image";
import React from "react";
import Button from "../common/Button";

function Header() {
  return (
    <div className="w-full flex p-3 px-6 justify-between items-center  ">
      <Image
        width={200}
        height={30}
        priority
        src={"/logo.webp"}
        alt="logo"
        className="w-28"
      />
      <div className="flex w-1/5 justify-between items-center space-x-3">
        <Image
          width={200}
          height={30}
          priority
          src={"/flag.webp"}
          alt="logo"
          className="w-14 cursor-pointer"
        />

        <Button
          className="rounded-lg hover:opacity-50 cursor-pointer border-spacing-1"
          outline
          text="Get Quote"
        />
      </div>
    </div>
  );
}

export default Header;
