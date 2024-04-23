import { Link, NavLink } from "react-router-dom"
import britishFlag from "../assets/britishFlag.svg"


export default function Navbar() {
  return (
    <div className="bg-deep-black w-full h-[80px] grid grid-cols-4 py-[16px] px-[32px]">
      <NavLink to="/" className="custom-body-1-semibold self-center text-adventure-white"><p>Pondeo</p></NavLink>
      <ul className="flex justify-center custom-body-1 p-[8px] gap-[48px]">
        <li className="custom-body-1 text-adventure-white self-center hover:underline underline-offset-8"><NavLink to="/product" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>Product</NavLink></li>
        <li className="custom-body-1 text-adventure-white self-center hover:underline underline-offset-8"><NavLink to="/pricing" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} >Pricing</NavLink></li>
        <li className="custom-body-1 text-adventure-white self-center hover:underline underline-offset-8"><NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>About Us</NavLink></li>
        <li className="custom-body-1 text-adventure-white self-center hover:underline underline-offset-8"><NavLink to="/contact" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>Contact</NavLink></li>
      </ul>
      <ul className="flex self-stretch custom-body-1 p-[8px]">
        <li><button className="text-adventure-white rounded-full bg-white border-solid border-black border-2 px-[20px] py-[12px]"><Link to="/login">Log In</Link></button></li>
        <li><button className="text-white rounded-full bg-adventure-white border-solid border-slate-600 border-2 px-[20px] py-[12px]"><Link to="/demo">Book a Demo</Link></button></li>
      </ul>
      <img src={britishFlag} className="self-center custom-body-1"></img>

    </div>
  )
}
