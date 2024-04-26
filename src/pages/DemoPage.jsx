import Hero from "../components/shared/Hero"
import Video from "../assets/productHero.mp4";
import { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";


export default function DemoPage() {

    const [messageSent, setMessageSent] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        setMessageSent(true);
    }

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
                    <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-[40px] text-custom-body-1 gap-[16px] items-center mb-[40px]">
                        <Form.Field>
                            <label className="flex flex-col flex-shrink-0 text-adventure-white">Company Name
                            </label>
                            <input {...register("companyName", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] " />
                        </Form.Field>
                        {errors.companyName && <p className="text-adventure-white font-bold">This field is required.</p>}
                        <Form.Field>
                            <label className="mt-[15px] flex flex-col  flex-shrink-0 text-adventure-white">Company URL
                            </label>
                            <input {...register("companyUrl", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px]  " />

                        </Form.Field>
                        {errors.companyUrl && <p className="text-adventure-white font-bold">This field is required.</p>}
                        <Form.Field>
                            <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Your Email
                            </label>
                            <input {...register("yourEmail", { required: true },
                                {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })} type="email" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px] w-[583px]  " />

                        </Form.Field>
                        {errors.yourEmail && <p className="text-adventure-white font-bold">This field is required.</p>}
                        <Form.Field className="place-self-start">
                            <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Agents Language
                            </label>
                            <select {...register("agentsLanguage", { required: true })} name="Select" className="bg-deep-black w-[120px] h-[40px] text-adventure-white rounded-[5px] border border-adventure-white">
                                <option value="Swedish" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] ">English</option>
                                <option value="English" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] ">Swedish</option>
                                <option value="Spanish" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] ">Spanish</option>
                            </select>
                        </Form.Field>
                        {errors.agentsLanguage && <p className="text-adventure-white font-bold">This field is required.</p>}
                        <Form.Field>
                            <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Companys Value Proposition
                            </label>
                            <input {...register("companysValue", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  " />

                        </Form.Field>
                        {errors.companysValue && <p className="text-adventure-white font-bold">This field is required.</p>}
                        <Form.Field>
                            <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Which type of problems do your company solve?
                            </label>
                            <input {...register("companysProblems", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  " />

                        </Form.Field>
                        {errors.companysProblems && <p className="text-adventure-white font-bold">This field is required.</p>}
                        <Form.Field>
                            <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Company ICP
                            </label>
                            <input {...register("companysIcp", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  " />

                        </Form.Field>
                        {errors.companysIcp && <p className="text-adventure-white font-bold">This field is required.</p>}
                        <Form.Field>
                            <label className="mt-[15px] flex flex-col flex-shrink-0 text-adventure-white">Any other important notes?
                            </label>
                            <input {...register("companysNotes")} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px] w-[583px]  " />

                        </Form.Field>
                        <button
                            onSubmit={() => { }} type="submit" className="h-[40px] px-[20px] py-[18px] flex justify-center items-center rounded-[12px] bg-neon-green text-custom-body-1 text-deep-black hover:bg-hover-button active:bg-neon-green"
                        >Start Free Trial</button>
                    </Form>
                )
            }
        </div>
    )
}

/* 

/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

*/