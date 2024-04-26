import Hero from "../components/shared/Hero"
import Video from "../assets/productHero.mp4";
import Button from "../components/shared/ButtonLarge"
import { useEffect, useState } from "react";


export default function DemoPage() {

    const [messageSent, setMessageSent] = useState(false);


    return (
        <div className="bg-deep-black flex flex-col items-center">
            <Hero styling={""} media={Video} isVideo={true} heightvw="40" widthvw="40">
                <h1 className="text-neon-green text-custom-heading-2-uppercase uppercase ">Empower your potential: <span className="text-adventure-white uppercase text-5xl font-bold">begin your trial, today!</span></h1>
                <p className="text-gray-200 text-custom-subtitle-1 opacity-45">Ready to revolutionize sales outreach? Sign up for enhanced efficiency and new possibilities. Just a few clicks unlock powerful tools to elevate your outreach. Join us today!</p>
            </Hero>
            {messageSent ? (
                <div className="text-adventure-white flex flex-col justify-center gap-[24px] mb-[64px]">
                    <p className="font-light text-[28px] border rounded-[8px] border-neon-green text-custom-subtitle-1 px-[70px] py-[45px] text-center">Your Pondeo journey starts soon!</p>
                    <p className="text-custom-body-1">Check your email inbox within 2-5 days for a link with
                        your tailored Pondeo software.</p>
                </div>
            )
                : (
                    <form className="flex flex-col mt-[40px] text-custom-body-1 gap-[16px] items-center mb-[40px]">
                        <label className="flex flex-col flex-shrink-0 text-adventure-white">Company Name
                            <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] ">
                            </input>
                        </label>
                        <label className="mt-[15px] flex flex-col  flex-shrink-0 text-adventure-white">Company URL
                            <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] ">
                            </input>
                        </label>
                        <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Your Email
                            <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px] w-[583px]  ">
                            </input>
                        </label>
                        <label className="mt-[15px] flex flex-col flex-shrink-0 place-self-start text-adventure-white">Agents Language
                            <select className="bg-deep-black w-[114px] h-[40px]">
                                <option className="bg-deep-black text-adventure-white border-adventure-white">Select</option>
                            </select>
                        </label>
                        <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Companys Value Proposition
                            <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  ">
                            </input>
                        </label>
                        <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Which type of problems do your company solve?
                            <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  ">
                            </input>
                        </label>
                        <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Company ICP
                            <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  ">
                            </input>
                        </label>
                        <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Any other important notes?
                            <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  ">
                            </input>
                        </label>
                        <Button
                            onClick={() => setMessageSent(true)} label={"Start Free Trial"} type="primary" className="text-deep-black"
                        />
                    </form>
                )
            }
        </div>
    )
}