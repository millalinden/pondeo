import React from "react";

export default function Hero({ styling, children, media, widthvw, heightvw, isVideo }) {
  return (
    <section className={`flex p-[5vw] w-full gap-12 bg-deep-black ${styling}`}>
      {" "}
      <div className="flex flex-col py-10 gap-8 w-1/2">{children}</div>{" "}
      {isVideo ? (
        <iframe src={media} loading="lazy" className="object-cover object-center aspect-square w-1/2 h-[525px]"></iframe>
      )
        : (
          <img
            className={`bg-slate-400 rounded-lg object-cover object-center
          ${widthvw ? `w-[${widthvw}vw]` : "w-[30vw]"}
          ${heightvw ? `h-[${heightvw}vw]` : "h-[30vw]"}`}
            src={media}
          />
        )
      }

    </section>
  );
}
