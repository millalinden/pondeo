import React from "react";

export default function Hero({ styling, children, image, width, height }) {
  return (
    <section className={`flex p-[5vw] w-full ${styling}`}>
      {" "}
      <div className="flex flex-col py-10 gap-8 w-1/2">{children}</div>{" "}
      <img
        className={`bg-slate-400   
        ${width ? `w-[${width}vw]` : "w-[30vw]"} 
        ${height ? `w-[${height}vw]` : "h-[30vw]"}`}
        src={image}
      />
    </section>
  );
}
