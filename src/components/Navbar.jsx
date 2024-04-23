import { Link, NavLink } from "react-router-dom"


export default function Navbar() {
  return (
    <div className="bg-white w-full h-{72} p-4 grid grid-cols-2 px-10">
      <p className="font-semibold text-{18px} self-center">Pondeo</p>
      <ul className="flex space-x-[10px] justify-between custom-body-1">
        <li className="self-center hover:underline underline-offset-8"><NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} >Home</NavLink></li>
        <li className="self-center hover:underline underline-offset-8"><NavLink to="/product" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>Product</NavLink></li>
        <li className="self-center hover:underline underline-offset-8"><NavLink to="/pricing" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""} >Pricing</NavLink></li>
        <li className="self-center hover:underline underline-offset-8"><NavLink to="/about" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>About Us</NavLink></li>
        <li className="self-center hover:underline underline-offset-8"><NavLink to="/contact" className={({ isActive }) => isActive ? "underline underline-offset-8" : ""}>Contact</NavLink></li>
        <li><button className=" rounded-full bg-white border-solid border-black border-2 px-[20px] py-[12px]"><Link to="/login">Log In</Link></button></li>
        <li><button className=" rounded-full bg-black border-solid border-slate-600 border-2 px-[20px] py-[12px] text-white"><Link to="/demo">Book a Demo</Link></button></li>
        <li className="self-center"><img src="/src/assets/globe-icon-navbar.svg" alt="Globe icon" className="h-[23px] w-[23px]" /></li>
      </ul>

    </div>
  )
}
