import { useState } from "react";

export default function FaqCard() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`flex bg-slate-200 w-[80%] ${
        isClicked ? "expanded" : "collapsed"
      } rounded-lg p-4 overflow-hidden`}
    >
      <div className="w-[80%]">
        <p className="text-xl text-slate-500 font-semibold">
          Why is Pondeo so great?
        </p>

        <p>
          {isClicked
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam. Odit natus earum dolorem ipsam perspiciatis nemo, porro fugiat maiores error explicabo nihil voluptas unde delectus sit commodi doloribus placeat!"
            : "..."}
        </p>
      </div>

      {isClicked ? (
        <div
          className="w-20 text-3xl text-slate-500 font-bold ml-auto flex justify-center items-center"
          onClick={() => {
            setIsClicked(false);
          }}
        >
          -
        </div>
      ) : (
        <div
          className="w-20 text-3xl text-slate-500 font-bold ml-auto flex justify-center items-center"
          onClick={() => {
            setIsClicked(true);
          }}
        >
          +
        </div>
      )}
    </div>
  );
}
