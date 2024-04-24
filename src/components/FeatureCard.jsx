export default function FeatureCard(props) {
  const { image, heading, body } = props;

  return (
    <div className="bg-graymatter-gray max-w-[340px]  rounded-3xl py-6 px-8">
      <div className="flex items-center gap-4 text-neon-green">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "60%", // Adjust the background size
            backgroundRepeat: "no-repeat", // Optional: prevent repeating the image
            backgroundPosition: "center", // Optional: center the background image
          }}
          className="bg-contain min-h-12 min-w-12 bg-black rounded-full"
        ></div>
        <div>
          <h2 className="text-adventure-white font-bold text-center">
            {heading}
          </h2>
        </div>
      </div>
      <div className="py-4 text-adventure-white text-sm">{body}</div>
    </div>
  );
}
