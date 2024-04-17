import React from "react";

export default function Button(props) {
  const { onClick, label } = props;

  return (
    <button
      className={`py-2 px-4 border border-slate-800 shadow-none rounded-full  hover:shadow  hover:bg-slate-500`}
      onClick={onClick}
      style={{ alignSelf: "flex-start" }}
    >
      {label}
    </button>
  );
}
