import { buttonProps } from "@/interface";
import React from "react";

function Button({
  className,
  style,
  text,
  onClick,
  outline,
  disable,
}: buttonProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={` ${
        outline && `border border-white`
      }   p-2 bg-transparent text-white ${className}`}
    >
      {text}
    </div>
  );
}

export default Button;
