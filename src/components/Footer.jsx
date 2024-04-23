import { Link } from "react-router-dom";
import Button from "./shared/Button";

export default function Footer() {
  return (
   <footer className="w-full bg-deep-black py-8 px-16 text-adventure-white border-t-2 border-neon-green">
      <div className="flex justify-between">
        {/* Pondeo Section */}
        <div className="flex flex-col gap-20 pr-[9.62rem]">
          <div className="flex flex-col space-between">
            <h2 className="text-custom-heading-3 pb-2">Pondeo</h2>
            <p className="text-custom-body-2 font-normal w-[20rem] pb-8">
              Elevate engagement with Pondeo's AI-Powered Personalization.
            </p>
            <div className="flex gap-4">
              <a
                href="https://discord.com/invite/zxFvvQMu9K"
                className="bg-white rounded-full p-1"
              >
                <img src="/src/assets/Discord.svg" alt="Discord icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/graymatterhq/"
                className="bg-white rounded-full p-1"
              >
                <img src="/src/assets/Linkedin.svg" alt="LinkedIn icon"/>
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex flex-col w-[17rem]">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-1 mr-4">
                <img src="/src/assets/Mail.svg" alt="Mail icon" />
              </div>
              <span className="text-custom-body-2 font-normal">
                hi@pondeo.com
              </span>
            </div>
            <p className="text-custom-body-2 font-normal">
              Avinguda Diagonal 532, P.2 08006 Barcelona Spain
            </p>
          </div>
        </div>

        {/* Sections and Legal */}
        <div className="flex">
          {/* Sections */}
          <div className="flex pr-[8.375rem]">
            <div>
              <h3 className="text-custom-subtitle-1 pb-7">Sections</h3>
              <Link
                to="/product"
                className="text-custom-body-1 block mb-5 font-normal "
              >
                Product
              </Link>
              <Link
                to="/about"
                className="text-custom-body-1 block mb-5 font-normal"
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="text-custom-body-1 block mb-5 font-normal"
              >
                Pricing
              </Link>
              <Link
                to="/"
                className="text-custom-body-1 block mb-5 font-normal"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-custom-body-1 block mb-5 font-normal"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col mr-[4.5rem] w-[12.5rem]">
            <div>
              <h3 className="text-custom-subtitle-1 pb-7">Legal</h3>
              <Link
                to="/privacy"
                className="text-custom-body-1 block mb-5 font-normal"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-custom-body-1 block mb-5 font-normal"
              >
                Privacy Policy
              </Link>
              <Link
                to="/privacy"
                className="text-custom-body-1 block mb-5 font-normal"
              >
                Cookie Policy
              </Link>
              <Link
                to="/privacy"
                className="text-custom-body-1 block mb-5 font-normal"
              >
                Security
              </Link>
            </div>
          </div>
          
          {/* Subscribe to Newsletter Section */}
          <div className="flex flex-col mb-[1.875rem]">
            <h3 className="text-custom-subtitle-1 mb-[2rem]">
              Suscribe to our Newsletter!
            </h3>
            <p className="text-custom-body-1 font-normal mb-[2.5rem]">
              Be the first to receive our latest news.
            </p>
            <form className="flex items-start flex-col text-adventure-white">
              <input
                type="email"
                placeholder="Enter your email adress"
                className="py-1 px-4 w-[21rem] h-[2.6875rem] rounded-lg bg-graymatter-gray focus:outline-none items-center justify-center mb-[3rem] "
              />
              <Button
                label={"Subscribe"}
                color={
                  "bg-neon-green text-deep-black rounded-lg border-neon-green w-[21rem]"
                }
              />
            </form>
            <p className="text-custom-body-2 font-normal pt-[1.87rem] w-[21rem] text-right">
              Pondeo is a Graymatter.ai company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}