import React from "react";

export default function ButtonForm(props) {
  const { onClick, label } = props;

  return (
    <button
      className={`py-[1vw] px-[1vw] bg-neon-green text-custom-body-1 flex items-center justify-center shadow-none rounded-[0.5vw] hover:shadow hover:bg-hover-button active:bg-clicked-button"
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
