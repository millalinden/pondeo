import React from "react";

export default function ButtonPricing(props) {
  const { onClick, label, color } = props;

  return (
    <button
      className={`p-4 my-2 border border-slate-800 text-lg bg-black text-white 
      shadow-none rounded-full  hover:shadow  hover:bg-slate-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
