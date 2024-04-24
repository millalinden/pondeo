import Section from "../components/shared/Section"
import demoPlaceholder from "../assets/demo-placeholder.svg"

export default function DemoPage() {
    return (
        <>
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



        </>
    )
}