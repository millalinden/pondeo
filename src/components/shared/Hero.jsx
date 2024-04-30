import React, { useRef, useState } from "react";

export default function Hero({
  styling,
  children,
  media,
  widthvw,
  heightvw,
  isVideo,
}) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsButtonClicked(true);
    }
  };

  return (
    <section
      className={`flex items-center p-[5vw] w-full gap-12 bg-deep-black ${styling}`}
    >
      <div className="flex flex-col py-10 gap-8 w-1/2">{children}</div>
      {isVideo ? (
        <div className="relative w-1/2 h-[40vw]">
          <video
            ref={videoRef}
            controls
            preload="metadata"
            className="object-cover object-center aspect-square w-full h-full"
            onPlay={() => setIsButtonClicked(true)} // Handle play event to hide button
          >
            <source src={media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isButtonClicked && ( // Show button only if it's not clicked
            <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button
                className="text-white text-[7vw] opacity-75 bg-transparent border-none"
                onClick={handlePlay}
              >
                ▶
              </button>
            </div>
          )}
        </div>
      ) : (
        <img
          className={`bg-slate-400 rounded-lg object-cover object-center
          ${widthvw ? `w-[${widthvw}vw]` : "w-[10vw]"}
          ${heightvw ? `h-[${heightvw}vw]` : "h-[10vw]"}`}
          src={media}
          alt=""
          style={{ maxWidth: "35vw", maxHeight: "35vw" }}
        />
      )}
    </section>
  );
}
