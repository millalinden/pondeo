import React from "react";

export default function Button(props) {
  const { onClick, label, color } = props;

  return (
    <button
      className={`py-2 px-4 border border-slate-800 ${color ? color : ""
        } shadow-none rounded-full  hover:shadow  hover:bg-slate-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}