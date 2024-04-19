import Button from "../components/shared/Button";
import TestimonialsCard from "../components/TestimonialsCard";
import FaqCard from "../components/FaqCard";

export default function LandingPage() {
  return (
    <>
      <section className="flex gap-12 p-24 w-full  bg-black">
        <div className="flex flex-col py-10 gap-8 w-1/2">
          <p className="text-neon-green">With the help of Pondeo,</p>
          <h1 className="text-5xl font-bold text-neon-green">
            FIND AND CLOSE MORE DEALS
          </h1>
          <p className="text-gray-200">
            Transform cold outreach into engaging conversations. Pondeo blends
            technology and a human-centric approach to redefine how you connect
            with leads.
          </p>
          <div className="flex justify-flex-start">
            <Button
              label={"Book a Demo"}
              color={
                "border-2 border-neon-green text-neon-green bg-none hover:bg-neon-green hover:text-black"
              }
            />
          </div>
        </div>
        <div className="bg-slate-400 w-[500px] h-[500px]  "></div>
      </section>
      <section className="flex justify-center p-10 bg-neutral-900 border-neon-green border-t-4 ">
        <div className="flex flex-col  gap-4 w-1/2">
          <h1 className="text-4xl text-neon-green text-center">
            Talk to Humans as Humans, but with Lorem Ipsum
          </h1>
          <p className="text-center text-adventure-white">
            Our AI-powered chatbot assists businesses in finding and researching
            relevant leads to creating more meaningful connections with
            potential customers.
          </p>
        </div>
      </section>
      <section className="flex gap-8 p-24 w-full  bg-black">
        <div className="bg-gray-300 w-[1000px] h-[480px] rounded-xl "></div>

        <div className="flex flex-col py-16 gap-4">
          <div className="flex gap-4 h-32">
            <div>
              <div className="flex justify-center w-11 h-11 rounded-lg bg-neon-green pt-0.5 text-black text-4xl font-semibold">
                1
              </div>
            </div>
            <div className="flex flex-col ">
              <p className="text-lg text-neon-green">
                A FULL CUSTOMER SERVICE TEAM IN A SINGLE PLATFORM{" "}
              </p>
              <p className="text-adventure-white text-sm">
                Replace script-heavy, hard-coded chatbots with a powerful AI
                Agent that's easy to deploy, measure, coach and continuously
                improve.
              </p>
            </div>
          </div>
          <div className="flex gap-4 h-32">
            <div>
              <div className="flex justify-center w-11 h-11 rounded-lg bg-neon-green pt-0.5 text-black text-4xl font-semibold">
                2
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-neon-green">
                SOLVE UNIQUE PROBLEMS WITH PERSONALIZED SOLUTIONS{" "}
              </p>
              <p className="text-adventure-white text-sm">
                Craft tailored responses to complex inquiries, powered by all
                your existing data sources - from your help center, to your CRM,
                to your order management system.
              </p>
            </div>
          </div>
          <div className="flex gap-4 h-32">
            <div>
              <div className="flex justify-center w-11 h-11 rounded-lg bg-neon-green pt-0.5 text-black text-4xl font-semibold">
                3
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-lg  text-neon-green">
                ENSURE NO INSIGHT GOES UNCOVERED{" "}
              </p>
              <p className="text-adventure-white text-sm">
                Replace script-heavy, hard-coded chatbots with a powerful AI
                Agent that's easy to deploy, measure, coach and continuously
                improve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex p-20 w-full justify-center align-middle  bg-neutral-900">
        <div className="flex w-1/2 justify-center items-center align-middle">
          <div className="bg-white w-[400px] h-[300px] rounded-xl "></div>
        </div>

        <div className="flex flex-col py-10 gap-8 w-1/2">
          <h1 className="text-5xl  text-neon-green">
            Effective Connections, <br /> Effortlessly Crafted
          </h1>
          <p className="text-adventure-white font-semibold">
            Pondeo acts as a co-pilot for Business Development Representives,
            simplifying the creation of personalized outreach. By automatically
            finding and analyzing customer signals, it helps BDRs craft messages
            that resonate, without the deep research usually needed. This makes
            outreach more effective and saves time.
          </p>
        </div>
      </section>
      <section className="p-28 gap-10 flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-slate-500 text-center">
          De-risk your revenue strategy with <br /> account-based sales
        </h1>
        <p className="text-gray-900 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut lab
        </p>
        <div className="flex">
          <div className="inline-grid grid-cols-3 gap-10 gap-y-16 justify-items-center">
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
          </div>
        </div>
      </section>
      <section className="flex gap-12 p-24 w-full justify-center  bg-stone-100">
        <div className="flex flex-col py-10 gap-8 w-1/2">
          <h1 className="text-6xl font-bold text-slate-600">Lorem Ipsum </h1>
          <p className="text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, quos
            animi debitis saepe id eveniet blanditiis ducimus totam dicta
            ratione. Iste sint, aliquid harum iure reiciendis eius temporibus
            repellendus consequuntur.
          </p>
        </div>
        <div className="flex w-1/2 justify-center">
          <div className="bg-white w-[400px] h-[400px] "></div>
        </div>
      </section>
      <section className="flex justify-center p-10 bg-stone-50 ">
        <div className="flex flex-col  gap-4 w-1/2">
          <h1 className="text-5xl font-semibold text-slate-500 text-center">
            Frequently asked question{" "}
          </h1>
          <p className="text-gray-900 text-center">
            Ask everything you need to know about our product.
          </p>
        </div>
      </section>{" "}
      <section className="p-20 gap-4 flex flex-col items-center">
        <FaqCard />
        <FaqCard />
        <FaqCard />
      </section>
      <section className="flex flex-col justify-center items-center m-28 p-10 rounded-2xl bg-stone-100 ">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl text-center font-bold text-slate-500">
            Let's get started!
          </h1>
          <p className="text-slate-400 text-lg text-center w-[80%]">
            Transform cold outreach into engaging conversations. Pondeo blends
            technology and a human-centric approach to redefine how you connect
            with leads.
          </p>
          <Button label={"Book a Demo"} color={"bg-slate-600 text-white"} />
        </div>
      </section>
    </>
  );
}
