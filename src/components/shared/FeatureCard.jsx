export default function FeatureCard({ image, alt, text, widthvw, heightvw }) {
  return (
    <div
      className={`bg-graymatter-gray ${
        widthvw ? `w-[${widthvw}vw]` : "w-[23vw]"
      } ${heightvw ? `h-[${heightvw}vw]` : "h-[30vw]"}
      rounded-3xl flex flex-col justify-center items-center`}
    >
      <div className="mb-8 h- bg-graymatter-gray rounded-3xl flex flex-col justify-center items-center relative">
        <div className="opacity-40 rounded-full w-[12vw] h-[12vw] bg-gradient-to-b from-neon-green to-transparent flex justify-center items-center">
          <div className="border-neon-green rounded-full w-[9vw] h-[9vw] bg-gradient-to-b from-neon-green via-rgba(202, 255, 51, 0.18) to-transparent border-gradient"></div>
        </div>
        <img
          src={image}
          className="w-[5vw] h-[5vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt={alt}
        />
      </div>
      <p className="px-[2.25rem] py-[2.25] font-normal text-center text-custom-body-1 text-adventure-white">
        {text}
      </p>
    </div>
  );
}
