import Button from "../components/shared/Button";
import TestimonialsCard from "../components/TestimonialsCard";
import FaqCard from "../components/FaqCard";

export default function LandingPage() {
  return (
    <>
      <section className="flex gap-12 p-24 w-full  bg-white">
        <div className="flex flex-col py-10 gap-8 w-1/2">
          <p>With the help of Pondeo,</p>
          <h1 className="text-5xl font-bold">FIND AND CLOSE MORE DEALS</h1>
          <p className="text-gray-400">
            Transform cold outreach into engaging conversations. Pondeo blends
            technology and a human-centric approach to redefine how you connect
            with leads.
          </p>
          <Button label={"Book a Demo"} />
        </div>
        <div className="bg-slate-400 w-[500px] h-[500px] "></div>
      </section>
      <section className="flex justify-center p-10 bg-stone-100 ">
        <div className="flex flex-col  gap-4 w-1/2">
          <h1 className="text-4xl text-slate-500">
            Talk to Humans as Humans, but with Lorem Ipsum
          </h1>
          <p className="text-gray-900">
            Transform cold outreach into engaging conversations. Pondeo blends
            technology and a human-centric approach to redefine how you connect
            with leads.
          </p>
        </div>
      </section>
      <section className="flex gap-4 p-24 w-full  bg-white">
        <div className="bg-gray-300 w-[1000px] h-[480px] "></div>

        <div className="flex flex-col py-16 gap-4">
          <div className="flex gap-4 h-32">
            <div>
              <div className="flex justify-center w-12 h-12 rounded-lg bg-gray-300 text-white font-bold text-4xl">
                1
              </div>
            </div>
            <div className="flex flex-col ">
              <p className="text-xl font-semibold">
                A full customer service team in a single platform.
              </p>
              <p>
                Replace script-heavy, hard-coded chatbots with a powerful AI
                Agent that's easy to deploy, measure, coach and continuously
                improve.
              </p>
            </div>
          </div>
          <div className="flex gap-4 h-32">
            <div>
              <div className="flex justify-center w-12 h-12 rounded-lg bg-gray-300 text-white font-bold text-4xl">
                2
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">
                Solve unique problems with personalized resolutions.
              </p>
              <p>
                Craft tailored responses to complex inquiries, powered by all
                your existing data sources - from your help center, to your CRM,
                to your order management system.
              </p>
            </div>
          </div>
          <div className="flex gap-4 h-32">
            <div>
              <div className="flex justify-center w-12 h-12 rounded-lg bg-gray-300 text-white font-bold text-4xl">
                3
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">
                A full customer service team in a single platform.
              </p>
              <p>
                Replace script-heavy, hard-coded chatbots with a powerful AI
                Agent that's easy to deploy, measure, coach and continuously
                improve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-12 p-24 w-full justify-center  bg-stone-100">
        <div className="flex w-1/2 justify-center">
          <div className="bg-white w-[400px] h-[400px] "></div>
        </div>

        <div className="flex flex-col py-10 gap-8 w-1/2">
          <h1 className="text-6xl font-bold text-slate-500">
            The brain of your AI Agent
          </h1>
          <p className="text-slate-400">
            Transform cold outreach into engaging conversations. Pondeo blends
            technology and a human-centric approach to redefine how you connect
            with leads.
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
    </>
  );
}
