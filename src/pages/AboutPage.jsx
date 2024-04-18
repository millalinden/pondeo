import React from "react";
import Button from "../components/shared/Button";
import ImageCaptionCard from "../components/shared/ImageCaptionCard";
import TextImageCard from "../components/shared/TextImageCard";

export default function AboutPage() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-center mx-96">
          <h2 className="text-5xl p-2 mx-10 mb-4">
            Pondeo: Empowering Engagement Through AI
          </h2>
          <p className="font-xl">
            We believe in the power of personalized connections. Founded on the
            principle that every interaction should be meaningful and tailored
            to its recipient, we're on a mission to revolutionize how businesses
            engage with their prospects.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <Button label="Free trial" color="button" onClick={handleClick} />
          <Button
            label="Join the Waitlist"
            color="button"
            onClick={handleClick}
          />
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="mt-10 bg-gray-200 w-full h-svh flex justify-center items-center">
        <div className="bg-white w-full py-16">
          <div className="text-center mx-96">
            <h2 className="text-5xl p-2 mx-10 mb-4">
              Reimagining Business: our vision for the future
            </h2>
          </div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section className="mt-10 w-full flex justify-center items-center">
        <div className="bg-white w-full py-16 text-center">
          <h2 className="text-5xl p-2 mx-10 mb-4">Ensuring your privacy</h2>
          <h3 className="text-4xl p-2 mx-10 mb-20 leading-none">
            Our Commitment to Data Security
          </h3>
          <div className="flex justify-center items-center justify-around mx-16 mb-16">
            <ImageCaptionCard />
            <ImageCaptionCard />
            <ImageCaptionCard />
          </div>
          <div className="mb-20">
            <Button label="Learn more" color="button" onClick={handleClick} />
          </div>
        </div>
      </section>

      <div className="bg-gray-300 w-full h-24"></div>

      {/* TEAM SECTION */}
      <section className="mt-10 flex justify-center items-center">
        <div className="bg-white w-full py-16 text-center px-20">
          <div className="text-center">
            <h2 className="text-5xl p-2 mx-10 mb-4">Meet Our Team:</h2>
            <h3 className="text-4xl p-2 mx-10 mb-48 leading-none">
              The Faces Behind Pondeo's Innovation"
            </h3>
          </div>
          <hr className="border-slate-200 mb-7 mx-9" />
          <div className="flex justify-center items-center justify-around mb-10">
            <TextImageCard />
            <TextImageCard />
            <TextImageCard />
            <TextImageCard />
          </div>
        </div>
      </section>

      <div className="bg-gray-300 w-full h-24"></div>

    </>
  );
}
