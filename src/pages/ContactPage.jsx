import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <section className="bg-deep-black flex flex-col items-center">
        <div className="flex flex-col align-center text-center self-stretch">
          <h1 className="text-custom-heading-2-uppercase text-neon-green text-5xl uppercase">Contact Us</h1>
          <p className="font-custom-body-1 text-white mt-[20px]">Any questions or remarks? Just write us a message!</p>
        </div>
        <form className="flex flex-col text-white mt-[30px]">
          <label className="flex flex-col  w-[583px] h-[50px] flex-shrink-0">First Name
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col  w-[583px] h-[50px] flex-shrink-0">Last Name
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col  w-[583px] h-[50px] flex-shrink-0">Phone Number
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col  w-[583px] h-[50px] flex-shrink-0">Message
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white h-[100px] ">
            </input>
          </label>
        </form>
        <button className="">Send Message</button>
      </section>
    </>
  )
}
