import { Link, NavLink } from "react-router-dom";
import ButtonLarge from "../components/shared/ButtonLarge";
import britishFlag from "../assets/britishFlag.svg";
import swedishFlag from "../assets/swedishFlag.svg";
import spanishFlag from "../assets/spanishFlag.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="sm:flex justify-between bg-deep-black px-[3vw] py-[16px]">
      {/* Adding aria-label for accessibility */}
      <p className="flex self-stretch text-[1.3vw] font-semibold items-center text-adventure-white p-[8px]">
        <NavLink to={"/"} aria-label="Home">
          Pondeo
        </NavLink>
      </p>
      <div className="flex content-center">
        <ul className="flex justify-center content-center gap-[48px]">
          <li className="text-custom-body-1 text-adventure-white self-center hover:underline underline-offset-8">
            <NavLink
              to="/product"
              aria-label="Product"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-8" : ""
              }
            >
              Product
            </NavLink>
          </li>
          <li className="text-custom-body-1 text-adventure-white self-center hover:underline underline-offset-8">
            <NavLink
              to="/about"
              aria-label="About Us"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-8" : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="text-custom-body-1 text-adventure-white self-center hover:underline underline-offset-8">
            <NavLink
              to="/contact"
              aria-label="Contact"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-8" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-self-end gap-[48px] items-center">
        <div className="flex justify-end gap-[16px]">
          <Link to="/login" aria-label="Login">
            <ButtonLarge type="primary" label="Login"></ButtonLarge>
          </Link>
          <Link to="/demo" aria-label="Start Free Trial">
            <ButtonLarge
              type="secondary"
              label="Start Free Trial"
            ></ButtonLarge>
          </Link>
        </div>
        <div className="flex justify-end">
          <Menu as="div" className="relative inline-block">
            <div>
              <Menu.Button className="flex">
                <img
                  style={{ height: "2.5vw", width: "auto" }}
                  src={britishFlag}
                  alt="British Flag"
                ></img>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute">
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? "" : "", "block")}
                        style={{ height: "2.5vw", display: "inline-block" }}
                      >
                        <img
                          src={swedishFlag}
                          alt="Swedish Flag"
                          style={{ height: "2.5vw", width: "auto" }}
                        />
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? "" : "", "block")}
                        style={{ height: "2.5vw", display: "inline-block" }}
                      >
                        <img
                          src={spanishFlag}
                          style={{ height: "2.5vw", width: "auto" }}
                          alt="Spanish Flag"
                        ></img>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
