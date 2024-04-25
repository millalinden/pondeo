import React from "react";

export default function Hero({ styling, children, image, widthvw, heightvw }) {
  return (
    <section className={`flex p-[5vw] w-full gap-12 bg-deep-black ${styling}`}>
      {" "}
      <div className="flex flex-col py-10 gap-8 w-1/2">{children}</div>{" "}
      <img
        className={`bg-slate-400 rounded-lg object-cover object-center   
        ${widthvw ? `w-[${widthvw}vw]` : "w-[30vw]"} 
        ${heightvw ? `h-[${heightvw}vw]` : "h-[30vw]"}`}
        src={image}
      />
    </section>
  );
}
