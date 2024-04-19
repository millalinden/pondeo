import Button from "../components/shared/Button";
import squareButton from "../components/shared/squareButton";
import TextImageCard from "../components/shared/TextImageCard";
import Carousel from "../components/carousel";


export default function ProductPage() {
    return (
    <>
    {/* pondeo section */}

      <section className="flex gap-12 p-24 w-full  bg-black">
        <div className="flex flex-col py-10 gap-8 w-1/2">
          <h1 className="text-5xl text-white font-bold">PONDEO</h1>
          <h2 className="text-4xl text-white font-bold">Unlock the Power of Personalized Sales Outreach </h2>
          <p className="text-gray-400">
          Elevate your sales strategy with personalized messaging powered by AI insights. Connect with prospects more effectively and drive higher conversions. Start revolutionizing your outreach today!
          </p>
          <div className="flex justify-flex-start">
            <Button label={"Book a Demo"} color={"bg-black text-white"}/>
          </div>
        </div>
        <div className="bg-slate-500 w-[549px] h-[676px] rounded-md"></div>
      </section>

      {/* benefits section */}
      <div className="text-left bg-black px-24">
        <h1 className=" text-5xl font-bold text-lime-500">Benefits</h1>
      </div>
      <section className="flex justify-center items-center gap-12 p-24 w-full  bg-black">
      
      <div className="flex flex-col py-10 gap-8 w-1/2 w-[1216px] h-[216px]">
          <h3 className="text-3xl font-bold text-gray-900">Personalised Outreach </h3>
          <p className="text-gray-400">
          Pondeo personalises the cold outreach process, ensuring every communication feels unique and tailored to the recipient.          </p>
          <div className="flex justify-flex-start">
            <Button label={"Contact Us"} color={"bg-black text-white"}/>
          </div>
      </div>
      <div className="bg-slate-300 w-[576px] h-[216px] rounded-md"></div>
      </section>

      {/* features section */}
      <section className="mt-10 flex justify-center items-center bg-#18181b">
        <div className="bg-white w-full py-16 px-20">
            <div className="text-left">
                <h1 className="text-5xl p-2 mx-10 mb-4 text-gray-900">Funcionlites/Features</h1>
                <p className="text-gray-400">many</p>

            </div>
            <hr className="border-slate-200 mb-7 mx-9" />
            <div className="flex justify-center items-center justify-around mb-10">
            <TextImageCard />
            <TextImageCard />
            <TextImageCard />
          </div>
        </div>

      </section>

      {/* how it works section */}
      <section className="mt-10 flex justify-center items-center">
        <div  className="bg-white w-full py-16 px-20">
            <div className="text-left">
                <h1 className="text-5xl p-2 mx-10 mb-4 text-#CAFF33">How it works</h1>

            </div>
            <hr className="border-slate-200 mb-7 mx-9" />
           <div className="flex justify-center items-center justify-around mb-10">
            <TextImageCard />
            <TextImageCard />
            <TextImageCard />
          </div>

        </div>
      </section>

      {/* testimonial section */}
      <section className="bg-gray-400 m-auto pt-11">
        <Carousel />

      </section>
    </>

    )
    
}
