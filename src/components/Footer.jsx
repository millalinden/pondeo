import { Link } from "react-router-dom";
import Button from "./shared/Button";
import SocialIcon from "./shared/SocialIcon";

export default function Footer() {
  return (
    <footer className="w-full bg-deep-black py-[2%] px-[3%] text-adventure-white border-t-2 border-neon-green">
      <div className="flex">
        {/* Pondeo Section */}
        <div className="flex flex-col gap-[30%]">
          <div className="flex flex-col">
            <h2 className="text-custom-heading-3 pb-[2%]">Pondeo</h2>
            <p className="text-custom-body-2 font-normal w-[60%] pb-[3%]">
              Elevate engagement with Pondeo's AI-Powered Personalization.
            </p>
            <div className="flex gap-[3%]">
              <SocialIcon
                link="https://discord.com/invite/zxFvvQMu9K"
                icon="/src/assets/Discord.svg"
                alt="Discord icon"
                color="bg-adventure-white"
              />
              <SocialIcon
                link="https://www.linkedin.com/company/graymatterhq/"
                icon="/src/assets/linkedinIcon.svg"
                alt="LinkedIn icon"
                color="bg-adventure-white"
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="flex flex-col w-[45%]">
            <div className="flex items-center mb-[3%]">
              <SocialIcon
                icon="/src/assets/Mail.svg"
                alt="Mail icon"
                color="bg-adventure-white"
              />
              <span className="text-custom-body-2 font-normal ml-[4%]">
                hi@pondeo.com
              </span>
            </div>
            <p className="text-custom-body-2 font-normal">
              Avinguda Diagonal 532, P.2 08006 Barcelona Spain
            </p>
          </div>
        </div>

        {/* Sections and Legal */}
        <div className="flex justify-between">
          {/* Sections */}
          <div className="flex pr-[15%]">
            <div>
              <h3 className="text-custom-subtitle-1 pb-[25%]">Sections</h3>
              <Link
                to="/product"
                className="text-custom-body-1 block mb-[15%] font-normal "
              >
                Product
              </Link>
              <Link
                to="/about"
                className="text-custom-body-1 block mb-[15%] font-normal"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="text-custom-body-1 block mb-[15%] font-normal"
              >
                Pricing
              </Link>
              <Link
                to="/"
                className="text-custom-body-1 block mb-[15%] font-normal"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-custom-body-1 block mb-[15%] font-normal"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col mr-[10%]">
            <div>
              <h3 className="text-custom-subtitle-1 pb-[25%]">Legal</h3>
              <Link
                to="/privacy"
                className="text-custom-body-1 block mb-[15%] font-normal"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-custom-body-1 block mb-[15%] font-normal"
              >
                Privacy Policy
              </Link>
              <Link
                to="/privacy"
                className="text-custom-body-1 block mb-[15%] font-normal"
              >
                Cookie Policy
              </Link>
              <Link
                to="/privacy"
                className="text-custom-body-1 block mb-[15%] font-normal"
              >
                Security
              </Link>
            </div>
          </div>

          {/* Subscribe to Newsletter Section */}
          <div className="flex flex-col">
            <h3 className="text-custom-subtitle-1 mb-[5%]">
              Suscribe to our Newsletter!
            </h3>
            <p className="text-custom-body-1 font-normal mb-[6%]">
              Be the first to receive our latest news.
            </p>
            <form className="flex items-start flex-col text-adventure-white">
              <input
                type="email"
                placeholder="Enter your email adress"
                className="py-1 px-4 w-[100%] h-[2.6875rem] rounded-lg bg-graymatter-gray focus:outline-none items-center justify-center mb-[15%] "
              />
              <Button
                label={"Subscribe"}
                color={
                  "bg-neon-green text-deep-black rounded-lg border-neon-green w-[21rem]"
                }
              />
            </form>
            <p className="text-custom-body-2 font-normal pt-[10%] w-[100%] text-right">
              Pondeo is a Graymatter.ai company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
