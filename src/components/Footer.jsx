import { Link } from "react-router-dom";
import Button from "./shared/Button";
import SocialIcon from "./shared/SocialIcon";

import discordIcon from "../assets/Discord.svg"
import linkedinIcon from "../assets/linkedinIcon.svg"
import mailIcon from "../assets/mailIcon.svg"

export default function Footer() {
  return (
    <footer className="flex  w-full  bg-deep-black pt-[2%]  px-[4vw] pb-[2.5vw] text-adventure-white border-t-2 border-neon-green">
      {/* Pondeo Section */}
      <div className="flex justify-between border-b-graymatter-gray border-b-[1px] pb-[2.5vw]">
        <div className="flex flex-col w-[50vw] justify-between">
          <div className="flex flex-col">
            <h2 className="text-[2.8vw] pb-[2%] font-medium">Pondeo</h2>
            <p className="text-[1.2vw] font-normal w-[80%]  pb-[3%]">
              Elevate engagement with Pondeo's AI-Powered Personalization.
            </p>
            <div className="flex gap-[3%] mt-2">
              <SocialIcon
                link="https://discord.com/invite/zxFvvQMu9K"
                icon={discordIcon}
                alt="Discord icon"
                color="bg-adventure-white"
                size="2vw"
              />
              <SocialIcon
                link="https://www.linkedin.com/company/graymatterhq/"
                icon={linkedinIcon}
                alt="LinkedIn icon"
                color="bg-adventure-white"
                size="2vw"
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="flex flex-col w-[70%] ali">
            <div className="flex items-center mb-[3%]">
              <SocialIcon
                icon={mailIcon}
                alt="Mail icon"
                color="bg-adventure-white"
                size="2vw"
              />
              <span className="text-[1vw] font-normal ml-[4%]">
                hi@pondeo.com
              </span>
            </div>
            <p className="text-[1vw] font-normal w-[70%]">
              Avinguda Diagonal 532, P.2 08006 Barcelona Spain
            </p>
          </div>
        </div>

        {/* Sections and Legal */}
        <div className="flex justify-self-end justify-between w-[100%]">
          {/* Sections */}
          <div className="flex ">
            <div>
              <h3 className="text-[2vw] pb-[25%]">Sections</h3>
              <Link
                to="/product"
                className="text-[1.3vw] block mb-[15%] font-normal "
              >
                Product
              </Link>
              <Link
                to="/about"
                className="text-[1.3vw] block mb-[15%] font-normal"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="text-[1.3vw] block mb-[15%] font-normal"
              >
                Pricing
              </Link>
              <Link to="/" className="text-[1.3vw] block mb-[15%] font-normal">
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-[1.3vw] block mb-[15%] font-normal"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col">
            <div>
              <h3 className="text-[2vw] pb-[25%]">Legal</h3>
              <Link
                to="/privacy"
                className="text-[1.3vw] block mb-[15%] font-normal"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-[1.3vw] block mb-[15%] font-normal"
              >
                Privacy Policy
              </Link>
              <Link
                to="/privacy"
                className="text-[1.3vw] block mb-[15%] font-normal"
              >
                Cookie Policy
              </Link>
              <Link
                to="/privacy"
                className="text-[1.3vw] block mb-[15%] font-normal"
              >
                Security
              </Link>
            </div>
          </div>

          {/* Subscribe to Newsletter Section */}
          <div className="flex flex-col justify-self-end w-[25vw] overflow-hidden">
            <h3 className="text-[2vw] mb-[5%]">Suscribe to our Newsletter!</h3>
            <p className="text-custom-body-1 font-normal mb-[6%]">
              Be the first to receive our latest news.
            </p>
            <form className="flex items-start flex-col text-adventure-white">
              <input
                type="email"
                placeholder="Enter your email adress"
                className="text-[1.2vw] py-1 px-4 w-[100%] h-[3vw] rounded-lg bg-graymatter-gray focus:outline-none items-center justify-center mb-[15%] "
              />
              <Button
                label={"Subscribe"}
                color={
                  "text-[1.2vw] bg-neon-green text-deep-black rounded-lg border-neon-green w-[100%] h-[3.5vw]"
                }
              />
            </form>
            <p className="text-[1vw] font-normal pt-[10%] w-[100%] text-right">
              Pondeo is a Graymatter.ai company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
