import Button from "../components/shared/ButtonLarge";

export default function ContactPage() {
  return (
    <>
      <section className="bg-deep-black flex flex-col items-center min-h-dvh gap-[64px]">
        <div className="flex flex-col align-center text-center self-stretch">
          <h1 className="text-custom-heading-2-uppercase text-neon-green uppercase mt-[40px]">Contact Us</h1>
          <p className="text-custom-body-1 text-adventure-white">Any questions or remarks? Just write us a message!</p>
        </div>

        <form className="flex flex-col text-adventure-white text-custom-body-1">
          <label className="flex flex-col flex-shrink-0">First Name
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white h-[50px]  w-[583px] ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col  flex-shrink-0">Last Name
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white h-[50px]  w-[583px] ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col flex-shrink-0">Phone Number
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white h-[50px] w-[583px]  ">
            </input>
          </label>
          <label className="mt-[15px] flex flex-col flex-shrink-0">Message
            <input type="text" className="bg-deep-black rounded-[5px] text-white border border-white h-[100px] w-[583px]  ">
            </input>
          </label>
        </form>
        <Button
          label={"Send"} type="primary"
        />
      </section>
    </>
  )
}
