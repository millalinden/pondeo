export default function FeatureCard({
  image,
  alt,
  text,
  heading,
  widthvw,
  heightvw,
}) {
  return (
    <div
      className={`bg-graymatter-gray py-[3vw] px-[3vw] gap-10 rounded-3xl flex flex-col  ${
        widthvw ? `w-[${widthvw}vw]` : "w-[23vw]"
      } ${heightvw ? `h-[${heightvw}vw]` : "h-[30vw]"}`}
    >
      <div className=" bg-graymatter-gray rounded-3xl flex flex-col justify-center items-center relative">
        <div className="opacity-40 rounded-full w-[12vw] h-[12vw] bg-gradient-to-b from-neon-green to-transparent flex justify-center items-center">
          <div className="border-neon-green rounded-full w-[9vw] h-[9vw] bg-gradient-to-b from-neon-green via-rgba(202, 255, 51, 0.18) to-transparent border-gradient"></div>
        </div>
        <img
          src={image}
          className="w-[4.5vw] h-[4.5vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt={alt}
        />
      </div>
      <h3 className="text-custom-subtitle-1 text-neon-green text-center">
        {heading ? `${heading}` : ""}
      </h3>
      <p className="font-normal text-center text-custom-body-1 text-adventure-white">
        {text}
      </p>
    </div>
  );
}
