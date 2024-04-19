import React from "react";

export default function Button(props) {
  const { onClick, label, color } = props;

  return (
    <button
      className={` text-sm  py-3 px-4 border  shadow-none rounded-full  hover:shadow  hover:bg-slate-300 ${
        color ? color : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
