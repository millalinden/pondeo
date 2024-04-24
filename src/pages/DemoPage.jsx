import Section from "../components/shared/Section"
import demoPlaceholder from "../assets/demo-placeholder.svg"
import Button from "../components/shared/Button"

export default function DemoPage() {
    return (
        <div className="bg-deep-black flex flex-col items-center">
            <Section styling={"bg-black grid grid-cols-2 gap-[16px]"}>
                <div className="flex flex-col py-10 gap-8">
                    <h1 className="text-5xl font-bold text-neon-green uppercase">
                        Empower your potential: <span className="text-adventure-white uppercase">Begin your trial today!</span>
                    </h1>
                    <p className="text-adventure-white font-custom-subtitle-1">
                        Ready to revolutionize sales outreach? Sign up for enhanced efficiency and new possibilities. Just a few clicks unlock powerful tools to elevate your outreach. Join us today!
                    </p>
                </div>
                <img src={demoPlaceholder} className="bg-neon-green w-full h-[500px]"></img>
            </Section>
            <form className="flex flex-col text-adventure-white mt-[40px] text-custom-body-1 gap-[16px] items-center mb-[40px]">
                <label className="flex flex-col flex-shrink-0">Company Name
                    <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] ">
                    </input>
                </label>
                <label className="mt-[15px] flex flex-col  flex-shrink-0">Company URL
                    <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] ">
                    </input>
                </label>
                <label className="mt-[15px] flex flex-col flex-shrink-0">Your Email
                    <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px] w-[583px]  ">
                    </input>
                </label>
                <label className="mt-[15px] flex flex-col flex-shrink-0 place-self-start">Agents Language
                    <select className="bg-deep-black w-[114px] h-[40px]">
                        <option className="bg-deep-black text-adventure-white border-adventure-white">Select</option>
                    </select>
                </label>
                <label className="mt-[15px] flex flex-col flex-shrink-0">Companys Value Proposition
                    <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  ">
                    </input>
                </label>
                <label className="mt-[15px] flex flex-col flex-shrink-0">Which type of problems do your company solve?
                    <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  ">
                    </input>
                </label>
                <label className="mt-[15px] flex flex-col flex-shrink-0">Company ICP
                    <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  ">
                    </input>
                </label>
                <label className="mt-[15px] flex flex-col flex-shrink-0">Any other important notes?
                    <input type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  ">
                    </input>
                </label>
            </form>
            <Button
                label={"Start Free Trial"}
                color={
                    "border-2 border-neon-green text-neon-green bg-none hover:bg-neon-green hover:text-black place-self-center mb-[64px]"
                }
            />
        </div>
    )
}