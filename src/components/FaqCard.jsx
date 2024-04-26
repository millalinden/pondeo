import { useState } from "react";

export default function FaqCard(props) {
  const [isClicked, setIsClicked] = useState(false);

  const { header, body } = props;

  return (
    <div
      className={`flex items-start border-b border-adventure-white w-[75%] h-[85px] ${
        isClicked ? "expanded" : "collapsed"
      } px-4 pb-8 pt-10 overflow-hidden`}
    >
      <div className={`${isClicked ? "" : ""} w-[80%]`}>
        <p className=" text-adventure-white font-medium  ">{header}</p>

        {isClicked ? (
          <p className="py-6 text-sm text-adventure-white">{body}</p>
        ) : (
          ""
        )}
      </div>

      {isClicked ? (
        <div
          className="cursor-pointer comic mt-[-15px] text-4xl text-adventure-white ml-auto flex justify-center items-center"
          onClick={() => {
            setIsClicked(false);
          }}
        >
          -
        </div>
      ) : (
        <div
          className="cursor-pointer comic mt-[-13px] text-4xl text-adventure-white ml-auto flex justify-center items-center"
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
