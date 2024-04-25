import React from 'react';

export default function TextImageCard({ heading, text, image, alt }) {
  return (
    <div className="max-w-64">
      <h4 className="text-custom-subtitle-1 text-neon-green mb-1 text-center">{heading}</h4>
      <p className="text-custom-body-1 font-normal text-adventure-white text-center">{text}</p>
      <img src={image} className="h-80 w-60 rounded-3xl mt-4 filter grayscale" alt={alt}/>
    </div>
  );
}
