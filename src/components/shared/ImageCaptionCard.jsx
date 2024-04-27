export default function ImageCaptionCard({ heading, text, image, alt }) {
  return (
    <div className="">
      {/* Placeholder for the image */}
      <img src={image}className="h-72 w-96 rounded-3xl mb-16" alt={alt}/>
      <div className="flex flex-col items-center">
        {/* Custom heading */}
        <h4 className="text-custom-subtitle-1 font-normal text-neon-green mb-[2.4rem] max-w-72">{heading}</h4>
        {/* Custom text */}
        <p className="text-custom-body-1 text-adventure-white font-normal max-w-72 text-center">{text}</p>
      </div>
    </div>
  );
}
