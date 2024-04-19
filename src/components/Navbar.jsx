export default function Navbar() {
  return (
    <div className="bg-white w-full h-16 p-4 grid grid-cols-2 text-2xl px-10">
      <p className="font-bold text-2xl">Pondeo</p>
      <ul className="flex gap-14 justify-end ">
        <li>Home</li>
        <li>Product</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Contact</li>
        <li><button className="rounded-full bg-white border-solid border-black border-2 px-3 py-0.5">Log In</button></li>
        <li><button className="rounded-full bg-black border-solid px-3 py-0.5 text-white">Book a Demo</button></li>
        <li><img src="/src/assets/globe-icon-navbar.svg" alt="Globe icon" className="size-8" /></li>
      </ul>

    </div>
  )
}
