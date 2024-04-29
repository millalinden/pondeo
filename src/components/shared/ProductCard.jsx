function ProductCard({ heading, text, image, alt }) {
  return (
    <div className="max-w-96 p-8 bg-deep-black border-graymatter-gray border shadow-dark-black rounded-3xl">
        <h4 className="text-custom-subtitle-1 font-light text-neon-green mb-1 text-center">{heading}</h4>
      <p className="text-custom-body-1 font-normal text-adventure-white text-center">{text}</p>
      <img src={image} className="w-[299px] h-[254px] rounded-3xl mt-4 filter grayscale" alt={alt}/>

    </div>
  )
}

export default ProductCard