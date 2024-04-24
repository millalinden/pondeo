import React from "react";

export default function Button(props) {
  const { onClick, label, color } = props;

  return (
    <button
      className={` text-sm  py-3 px-4  shadow-none rounded-full  hover:shadow  ${
        color ? color : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
