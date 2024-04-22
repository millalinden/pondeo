import { Link } from "react-router-dom";
import Button from "./shared/Button";

export default function Footer() {
  return (
    <footer className="bg-deep-black py-10 text-adventurous-white border-t-2 border-neon-green">
      <div className="flex">
        <div className="px-16">
          <h2 className="text-[2rem] font-semibold mb-4">Pondeo</h2>
          <p className="text-base w-64 mb-7">
            Elevate engagement with Pondeo's AI-Powered Personalization.
          </p>
          <div className="flex gap-4 mb-20">
            <a
              href="mailto:example@example.com"
              className="bg-white rounded-full p-1.5"
            >
              <img src="/src/assets/Mail.svg" alt="Mail icon" />
            </a>
            <a
              href="https://discord.com/invite/zxFvvQMu9K"
              className="bg-white rounded-full p-1.5"
            >
              <img src="/src/assets/Discord.svg" alt="Discord icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/graymatterhq/"
              className="bg-white rounded-full p-1.5"
            >
              <img src="/src/assets/Linkedin.svg" alt="LinkedIn icon" />
            </a>
          </div>

          {/* ADRESS SECTION */}
          <div>
            <div className="flex">
              <img src="/src/assets/PhoneIcon.svg" alt="Phone icon" />
              <p className="text-sm">+1 (234) 567-980</p>
            </div>
            <p className="w-44 text-sm">
              {" "}
              Monday–Friday 9am-6pm 26985 Brighton Lane, Lake Forest, CA 92630
            </p>
          </div>
        </div>

        <div className="flex mx-36 mt-12">
          {/* SECTIONS LINKS*/}
          <div className="flex">
            {/* SECTIONS */}
            <div className="flex mr-28">
              <div>
                <h3 className="font-semibold text-xl mb-12">Sections</h3>
                <Link to="/product" className="block mb-5">
                  Product
                </Link>
                <Link to="/about" className="block mb-5">
                  About Us
                </Link>
                <Link to="/pricing" className="block mb-5">
                  Pricing
                </Link>
                <Link to="/" className="block mb-5">
                  FAQ
                </Link>
                <Link to="/contact" className="block mb-5">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* LEGAL LINKS */}
            <div className="flex mr-20">
              <div>
                <h3 className="font-semibold text-xl mb-12">Legal</h3>
                <Link to="/privacy" className="block mb-5">
                  Terms & Conditions
                </Link>
                <Link to="/privacy" className="block mb-5">
                  Privacy Policy
                </Link>
                <Link to="/privacy" className="block mb-5">
                  Cookie Policy
                </Link>
                <Link to="/privacy" className="block mb-5">
                  Security
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-10">
              Suscribe to our newsletter
            </h3>
            <form className="flex flex-col items-start text-adventurous-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-1 mr-2 mb-5 border-b border-neon-green w-[18.63169rem] rounded-none bg-transparent focus:outline-none"
              />
              <Button label={"Send"} color={"bg-neon-green text-deep-black"} />
            </form>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="px-16">
        <hr className="border-blue py-1" />
        <p className="text-right text-base">©2024 Pondeo. All rights reserved</p>
      </div>
    </footer>
  );
}
