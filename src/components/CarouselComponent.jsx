import { useSnapCarousel } from "react-snap-carousel";
import data from "../assets/testimonialsData/data";

import CarouselArrowLeft from "../assets/CarouselArrowLeft.svg";
import CarouselArrowRight from "../assets/CarouselArrowRight.svg";

export default function Carousel() {
  const {
    scrollRef,
    snapPointIndexes,
    next,
    prev,
    activePageIndex,
    pages,
    goTo,
  } = useSnapCarousel();

  const slides = data;
  return (
    <>
      <ul
        className="flex overflow-x-auto snap-x snap-mandatory gap-12 px-[20vw]"
        style={{ scrollbarWidth: "none" }}
        ref={scrollRef}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <li
            key={i}
            className="flex flex-shrink-0 items-center bg-black rounded-3xl gap-8 min-h-32 w-[60vw]"
            style={{
              scrollSnapAlign: snapPointIndexes.has(i) ? "center" : "",
            }}
          >
            <img
              className="bg-neon-green ml-6 rounded-full h-11 w-11"
              // src={`${data[i].img}`}

              alt={`Item ${i}`}
            />
            <div className="flex flex-col">
              <div>
                <div className="text-neon-green">{slides[i].comment}</div>
                <div className="text-neon-green text-sm">{slides[i].name}</div>
              </div>
              <div className="text-adventure-white text-2xl pt-3">
                “{slides[i].comment}”
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center space-x mt-2" aria-hidden>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mx-2 mr-20"
          onClick={() => prev()}
        >
          <img className="" src={CarouselArrowLeft} />
        </button>
        {pages.map((_, i) => (
          <button
            key={i}
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-1 px-2 rounded"
            onClick={() => goTo(i)}
          >
            <div
              className={`${
                activePageIndex === i ? "bg-neon-green" : "bg-gray-300"
              } h-3 w-3 rounded-full`}
            ></div>
          </button>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ml-16"
          onClick={() => next()}
        >
          <img className="" src={CarouselArrowRight} />
        </button>
      </div>
    </>
  );
}
