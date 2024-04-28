
import { Button, Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function ContactPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <section className="bg-deep-black flex flex-col items-center min-h-dvh gap-[64px]">
        <div className="flex flex-col align-center text-center self-stretch">
          <h1 className="text-custom-heading-2-uppercase text-neon-green uppercase mt-[40px]">Contact Us</h1>
          <p className="text-custom-body-1 text-adventure-white">Any questions or remarks? Just write us a message!</p>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-[40px] text-custom-body-1 gap-[16px] items-center mb-[40px]">
          <Form.Field>
            <label className="flex flex-col flex-shrink-0 text-adventure-white">First Name
            </label>
            <input {...register("firstName", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px] " />
          </Form.Field>
          {errors.firstName && <p className="text-adventure-white font-bold">This field is required.</p>}
          <Form.Field>
            <label className="mt-[15px] flex flex-col  flex-shrink-0 text-adventure-white">Last Name
            </label>
            <input {...register("lastName", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px]  " />
          </Form.Field>
          {errors.lastName && <p className="text-adventure-white font-bold">This field is required.</p>}
          <Form.Field>
            <label className="mt-[15px] flex flex-col  flex-shrink-0 text-adventure-white">Phone Number
            </label>
            <input {...register("phoneNumber", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[50px]  w-[583px]  " />
          </Form.Field>
          {errors.phoneNumber && <p className="text-adventure-white font-bold">This field is required.</p>}
          <Form.Field>
            <label className="mt-[15px] flex flex-col  flex-shrink-0 text-adventure-white">Message
            </label>
            <input {...register("message", { required: true })} type="text" className="bg-deep-black rounded-[5px] text-adventure-white border border-adventure-white h-[100px]  w-[583px]  " />
          </Form.Field>
          {errors.message && <p className="text-adventure-white font-bold">This field is required.</p>}

          <button
            onSubmit={() => { }} type="submit" className="h-[40px] px-[20px] py-[18px] flex justify-center items-center rounded-[12px] bg-neon-green text-custom-body-1 text-deep-black hover:bg-hover-button active:bg-neon-green"
          >Send</button>
        </Form>
      </section>
    </>
  )
}
