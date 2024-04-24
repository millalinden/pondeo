export default function VisionCard({ image, alt, text }) {
  return (
    <div className="bg-graymatter-gray w-[20.59625rem] h-[23.796875rem] rounded-3xl flex flex-col justify-center items-center">
      <div className="mb-8 bg-graymatter-gray rounded-3xl flex flex-col justify-center items-center relative">
        <div className="opacity-40 rounded-full w-[10rem] h-[10rem] bg-gradient-to-b from-neon-green to-transparent flex justify-center items-center">
          <div className="border-neon-green rounded-full w-[7rem] h-[7rem] bg-gradient-to-b from-neon-green via-rgba(202, 255, 51, 0.18) to-transparent border-gradient"></div>
        </div>
        <img
          src={image}
          className="w-[4.60719rem] h-[4.60719rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt={alt}
        />
      </div>
      <p className="px-[2.25rem] py-[2.25] font-normal text-center text-custom-body-1 text-adventure-white">{text}</p>
    </div>
  );
}
