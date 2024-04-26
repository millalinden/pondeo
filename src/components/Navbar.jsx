import { Link, NavLink } from "react-router-dom"
import ButtonLarge from "../components/shared/ButtonLarge"
import britishFlag from "../assets/britishFlag.svg"
import swedishFlag from "../assets/swedishFlag.svg"
import spanishFlag from "../assets/spanishFlag.svg"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'



export default function Navbar() {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="grid grid-cols-2 bg-deep-black px-[32px] py-[16px]">
      <div className="grid grid-cols-2 gap-[64px] content-center">
        <p className="self-stretch text-custom-body-2-semibold text-adventure-white p-[8px]"><NavLink to={"/"}>Pondeo</NavLink></p>
        <ul className="flex justify-center content-center gap-[48px]">
          <li className="custom-body-1 text-adventure-white self-center hover:underline underline-offset-8"><NavLink to="/product" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>Product</NavLink></li>
          <li className="custom-body-1 text-adventure-white self-center hover:underline underline-offset-8"><NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>About Us</NavLink></li>
          <li className="custom-body-1 text-adventure-white self-center hover:underline underline-offset-8"><NavLink to="/contact" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>Contact</NavLink></li>
        </ul>
      </div>
      <div className="flex justify-end gap-[48px] items-center">
        <div className="flex justify-end gap-[16px]">
          <Link to="/login"><ButtonLarge type="primary" label="Login"></ButtonLarge></Link>
          <Link to="/demo"><ButtonLarge type="secondary" label="Start Free Trial"></ButtonLarge></Link>
        </div>
        <div className="flex justify-end">
          <Menu as="div" className="relative inline-block">
            <div>
              <Menu.Button className="flex">
                <img src={britishFlag}></img>
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
                        className={classNames(
                          active ? '' : '',
                          'block'
                        )}
                      >
                        <img src={swedishFlag}></img>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? '' : '',
                          'block'
                        )}
                      >
                        <img src={spanishFlag}></img>
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
  )
}
