import { useState } from "react";

export default function FaqCard(props) {
  const [isClicked, setIsClicked] = useState(false);

  const { header, body } = props;

  return (
    <div
      className={`flex items-start bg-neon-green w-[80%] h-16 ${
        isClicked ? "expanded" : "collapsed"
      } rounded-lg px-4 pt-5 overflow-hidden`}
    >
      <div className={`${isClicked ? "" : ""} w-[80%]`}>
        <p className="text-lg text-black font-medium  ">{header}</p>

        {isClicked ? <p className="py-6 text-sm text-black">{body}</p> : ""}
      </div>

      {isClicked ? (
        <div
          className="comic mt-[-17px] text-5xl text-black ml-auto flex justify-center items-center"
          onClick={() => {
            setIsClicked(false);
          }}
        >
          -
        </div>
      ) : (
        <div
          className="comic mt-[-15px] text-5xl text-black ml-auto flex justify-center items-center"
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
