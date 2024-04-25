import Button from "../components/shared/Button";
import { Link } from "react-router-dom";
import ImageCaptionCard from "../components/shared/ImageCaptionCard";
import TextImageCard from "../components/shared/TextImageCard";
import FeatureCard from "../components/shared/FeatureCard";
import SocialIcon from "../components/shared/SocialIcon";
import Section from "../components/shared/Section";

import plugIcon from "../assets/Plug.svg";
import heroImage from "../assets/aboutHero.png";
import mailIcon from "../assets/mailIcon.svg";
import discordIcon from "../assets/Discord.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import intersectIcon from "../assets/Intersect.svg";
import arrowIcon from "../assets/ArrowRight.svg";

export default function AboutPage() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <Section
        styling={"gap-12 bg-deep-black flex flex-col md:flex-row items-center"}
      >
        <div className="flex flex-col">
          <h2 className="text-custom-heading-2 font-bold text-adventure-white uppercase">
            Pondeo:
          </h2>
          <h2 className="text-custom-heading-2 font-bold uppercase text-neon-green mb-2">
            Empowering Engagement Through AI
          </h2>
          <p className="text-adventure-whitegray text-custom-subtitle-1 font-light mb-8 sm:mb-10 md:mb-12 mr-10">
            We believe in the power of personalized connections.
            <br /> Founded on the principle that every interaction should be
            meaningful and tailored to its recipient, we're on a mission to
            revolutionize how businesses engage with their prospects.
          </p>
          <div className="flex justify-center md:justify-start mb-5">
            <Link to="/contact">
              <Button
                label={"Contact Us"}
                color={" bg-neon-green hover:bg-neon-green hover:text-black"}
              />
            </Link>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <SocialIcon icon={mailIcon} alt="Mail icon" color="bg-neon-green" />
            <SocialIcon
              link="https://discord.com/invite/zxFvvQMu9K"
              icon={discordIcon}
              alt="Discord icon"
              color="bg-neon-green"
            />
            <SocialIcon
              link="https://www.linkedin.com/company/graymatterhq/"
              icon={linkedinIcon}
              alt="LinkedIn icon"
              color="bg-neon-green"
            />
          </div>
        </div>
        <img
          src={heroImage}
          className="bg-slate-400 w-full md:w-[40%] h-auto rounded-3xl"
          alt="Hero Image"
        />
      </Section>

      {/* VISION SECTION */}
      <Section styling={"gap-12 bg-deep-black justify-center items-center"}>
        <div className="text-center">
          <h2 className="text-neon-green text-custom-heading-2 font-semibold pb-16">
            Reimagining Business:
            <br />
            our vision for the future
          </h2>
          <div className="flex justify-center gap-5 sm:gap-10 md:gap-20">
            <FeatureCard
              image={intersectIcon}
              alt="intersect icon"
              text="Transform B2B sales conversations through personalized engagement"
            />
            <FeatureCard
              image={plugIcon}
              alt="plug icon"
              text="Empower businesses to connect with customers on a deeper level"
            />
            <FeatureCard
              image={arrowIcon}
              alt="Arrow icon"
              text="Lead the way in targeted lead generation and customer understanding"
            />
          </div>
        </div>
      </Section>

      {/* PRIVACY SECTION */}
      <Section styling={"gap-12 bg-deep-black justify-center items-center"}>
        <div className="py-8 sm:py-12 md:py-16 w-full text-center">
          <h2 className="text-center text-custom-heading-2 font-semibold text-neon-green p-2 mx-4 sm:mx-6 md:mx-10 mb-4 sm:mb-8 md:mb-12">
            Ensuring your privacy:
            <br />
            Our Commitment to Data Security
          </h2>
          <div className="py-8 sm:py-12 md:py-16 flex flex-wrap justify-center items-start justify-around gap-4 sm:gap-8">
            <ImageCaptionCard
              heading="Transparency in Data Handling"
              text="We prioritize openness about how we collect, use, and store data."
              image="/src/assets/about1.png"
            />
            <ImageCaptionCard
              heading="Robust Security Measures"
              text="Our strict security protocols ensure the protection of customer information."
              image="/src/assets/security.png"
            />
            <ImageCaptionCard
              heading="User-Controlled Data"
              text="We follow opt-in principles, giving users authority over their data usage and privacy preferences."
              image="/src/assets/controlled.png"
            />
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center items-center">
            <Link to="/privacy">
              <Button
                label="Learn more"
                color="bg-neon-green"
                onClick={handleClick}
              />
            </Link>
          </div>
        </div>
      </Section>

      {/* TEAM SECTION */}
      <Section
        styling={
          "gap-12 bg-graymatter-gray justify-center items-center py-8 px-4 sm:py-12 sm:px-6"
        }
      >
        <div className="w-full py-8 text-center sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <h2 className="pb-8 sm:pb-12 md:pb-16 text-center text-custom-heading-2 font-semibold text-neon-green">
              Meet Our Team:
              <br />
              The Faces Behind Pondeo's
              <br />
              Innovation
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
            <TextImageCard
              heading="Person 1"
              text="Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns."
              image="/src/assets/Kwadwo1.png"
            />
            <TextImageCard
              heading="Person 2"
              text="Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns."
              image="/src/assets/Belen.png"
            />
            <TextImageCard
              heading="Person 3"
              text="Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns."
              image="/src/assets/Carlos.png"
            />
            <TextImageCard
              heading="Person 4"
              text="Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns."
              image="/src/assets/santiago.png"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
