import { useState } from "react";
import data from "../testimonialsData/data";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Carousel() {
  let [current, setCurrent] = useState(0);

  const slides = data;

  const previousSlideHandler = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  const nextSlideHandler = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  // const previousSlideHandler = (id) => {
  //   if (id === 1) {
  //     setCurrent(slides.length);
  //   } else if (id > 1) {
  //     setCurrent(current - 1);
  //   } else {
  //     setCurrent(slides.length - 1)
  //   }
  // };

  // const nextSlideHandler = (id) => {
  //   if (id === slides.length) {
  //     setCurrent(1);
  //   } else if (id < slides.length) {
  //     setCurrent(current + 1);
  //   } else {
  //     setCurrent(slides.length - 1)
  //   }
  // };

  return (
    <>
      <div className="overflow-hidden relative">
        <div className="flex transition ease-out duration-40 absolute top-0 left-0">
          {slides.map((item, index) => {
            const { id, star, img, comment, name } = item;
            return (
              <div
                key={id}
                className="w-full"
                style={{ left: `${index * 100}%` }}
              >
                <img src={img} alt={name} />

                <div className="flex-col items-center">
                  <h3>{star}</h3>
                  <h3 className="text-s font-bold my-6">{comment}</h3>
                  <p className="text-sl">{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex bg-black w-96 justify-center items-center mx-auto text-white text-3xl">
        <button onClick={previousSlideHandler}>
          <SlArrowLeft />
        </button>

        <div className="flex justify-center gap-5 w-full">
          {slides.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setCurrent(index);
                }}
                key={"circle" + index}
                className={`rounded-full w-5 h-5 cursor-pointer ${
                  index == current ? "bg-white" : "bg-gray-300"
                }`}
              ></div>
            );
          })}
        </div>

        <button onClick={nextSlideHandler}>
          <SlArrowRight />
        </button>
      </div>
    </>
  );
}

export default Carousel;
