import "../components/Footer"
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col items-center bg-stone-100 py-10 ">
        <h2 className="text-2xl font-bold mb-5">
          Contact Us
        </h2>
        <p className="text-lg mb-10">
          Any question or remarks? Just write us a message!
        </p>
        <section className="flex flex-col-2 bg-white pr-5 gap-10" >
          <div className="flex flex-col bg-black rounded-md px-10 pt-10 w-2/5">
            <h3 className=" text-lg text-white font-bold ">
              Contact Information
            </h3>
            <p className="text-white">
              Say something to start live chat
            </p>
            <div className="flex flex-col py-10">
              <div className="flex gap-3 py-10">
                <img src="/src/assets/phone-contactPage.svg" alt="Phone icon" />
                <p className="text-sm text-white">+1 234 567-980</p>
              </div>
              <div className="flex gap-3 py-10">
                <img src="/src/assets/email-contactPage.svg" alt="Mail icon" />
                <p className="text-sm text-white">demo@gmail.com</p>
              </div>
              <div className="flex gap-3 py-10">
                <img src="/src/assets/location-contactPage.svg" alt="Location icon" />
                <p className="text-sm text-white">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
              </div>
              <div className="flex mt-10 gap-5">
                <img src="/src/assets/twitter-contactPage.svg" alt="Twitter icon" />
                <img src="/src/assets/instagram-contactPage.svg" alt="Instagram icon" />
                <img src="/src/assets/discord-contactPage.svg" alt="Discord icon" />
              </div>
            </div>
          </div>

          <form className="w-3/5 h-64 pt-10">
            <div className="grid grid-cols-2 grid-rows-2 gap-10">
              <label className="flex flex-col gap-5">First Name
                <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
              </label>
              <label className="flex flex-col gap-5">Last Name
                <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
              </label>
              <label className="flex flex-col gap-5">E-mail
                <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
              </label>
              <label className="flex flex-col gap-5">Phone Number
                <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
              </label>
            </div>
            <div className="grid grid-rows-1 mt-10">
              <label className="flex flex-col gap-5 w-full ">Message
                <input type="text" className="border-0 outline-none bg-transparent border-b-2" />
              </label>
            </div>
            <div className="flex justify-end mt-10">
              <button className="bg-black text-white px-3 py-2 rounded-3xl">Send Message</button>
            </div>
          </form>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
