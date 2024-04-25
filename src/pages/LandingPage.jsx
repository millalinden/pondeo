import Button from "../components/shared/Button";
import ButtonSmall from "../components/shared/ButtonSmall";
import ButtonMedium from "../components/shared/ButtonMedium";
import ButtonLarge from "../components/shared/ButtonLarge";
import ButtonLong from "../components/shared/ButtonLong";

import FeatureCard from "../components/shared/FeatureCard";
import FaqCard from "../components/FaqCard";
import Carousel from "../components/CarouselComponent";
import Section from "../components/shared/Section";
import Hero from "../components/shared/Hero";

import Milla from "../assets/Milla.png";

import FeatureCardImage1 from "../assets/FeatureCard1.svg";
import FeatureCardImage2 from "../assets/FeatureCard2.svg";
import FeatureCardImage3 from "../assets/FeatureCard3.svg";

export default function LandingPage() {
  return (
    <>
      <Hero styling={""} image={Milla} heightvw="40" widthvw="40">
        <p className="text-neon-green">With the help of Pondeo,</p>
        <h1 className="text-5xl font-bold text-neon-green">
          FIND AND CLOSE MORE DEALS
        </h1>
        <p className="text-gray-200">
          Transform cold outreach into engaging conversations. Pondeo blends
          technology and a human-centric approach to redefine how you connect
          with leads.
        </p>
        <div className="flex justify-flex-start gap-8">
          <ButtonLarge label={"Free Trial"} type={""} />
          <ButtonLarge label={"Learn More"} type={"secondary"} />
        </div>
      </Hero>
      <Section styling={"justify-center p-10 bg-deep-black"}>
        <div className="flex flex-col bg-graymatter-gray py-20 px-48 gap- rounded-xl">
          <h1 className="text-4xl text-neon-green text-center">
            Talk to Humans as Humans, but with Lorem Ipsum
          </h1>
          <p className="text-center text-adventure-white">
            Our AI-powered chatbot assists businesses in finding and researching
            relevant leads to creating more meaningful connections with
            potential customers.
          </p>
        </div>
      </Section>
      <Section styling={"gap-8 bg-graymatter-gray"}>
        <div className="bg-gray-300 w-[1000px] h-[480px] rounded-xl "></div>

        <div className="flex flex-col py-16 gap-4">
          <div className="flex gap-4 h-32">
            <div>
              <div className="flex justify-center w-11 h-11 rounded-lg bg-neon-green pt-0.5 text-graymatter-gray text-4xl font-semibold">
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
              <div className="flex justify-center w-11 h-11 rounded-lg bg-neon-green pt-0.5 text-graymatter-gray text-4xl font-semibold">
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
              <div className="flex justify-center w-11 h-11 rounded-lg bg-neon-green pt-0.5 text-graymatter-gray text-4xl font-semibold">
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
      </Section>
      <Section
        styling={"flex-col items-center bg-deep-black h-full p-28 pb-40 gap-10"}
      >
        <h1 className="text-4xl text-neon-green text-center">
          De-risk your revenue strategy with <br /> account-based sales
        </h1>
        <p className="text-adventure-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut lab
        </p>
        <div className="flex">
          <div className="inline-grid grid-cols-3 gap-4 gap-y-16 justify-items-center">
            <FeatureCard
              image={FeatureCardImage1}
              heading={"PROSPECT RESEARCH"}
              text={
                "Explore your prospects' landscape with precision. Pondeo uncovers and interprets key data, enriching your approach with tailored insights."
              }
            />
            <FeatureCard
              image={FeatureCardImage2}
              heading={"MESSAGE PERSONALIZATION"}
              text={
                "Fine-tune your approach with Pondeo. We crafts your message to echo your prospects’ objectives, ensuring your pitch not only aligns with their needs."
              }
            />
            <FeatureCard
              image={FeatureCardImage3}
              heading={"OUTREACH OPTIMIZATION"}
              text={
                "Shape impactful interactions with Pondeo AI. It refines your message and timing, enhancing connection and response rates."
              }
            />
          </div>
        </div>
      </Section>
      <Section styling={"flex-col bg-graymatter-gray py-24 px-0 gap-20"}>
        <div className="text-neon-green text-center text-5xl">
          Hear from our customers!
        </div>
        <Carousel />
      </Section>
      <Section styling={"p-20 justify-center align-middle  bg-deep-black"}>
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
      </Section>
      <Section styling={"gap-12 py-8 justify-center  bg-graymatter-gray"}>
        <div className="flex flex-col py-10 gap-4 w-1/2">
          <h1 className="text-5xl text-neon-green">
            Prepare to see a significant shift in your engagement metrics{" "}
          </h1>
          <h2 className="text-neon-green text-2xl">
            And start meaningful conversations.{" "}
          </h2>
          <p className="text-adventure-white">
            By focusing on relevant and engaging communication, you can deepen
            your rapport with prospects, enhancing the likelihood of successful
            outcomes.
          </p>
        </div>
        <div className="flex items-center">
          <div className="bg-white w-[400px] h-[250px] "></div>
        </div>
      </Section>
      <Section
        styling={"bg-deep-black p-20 flex-col items-center overflow-hidden"}
      >
        <div className="flex flex-col  gap-4 w-1/2 mb-10">
          <h1 className="text-4xl text-neon-green text-center">
            Frequently asked question{" "}
          </h1>
          <p className="text-adventure-white text-center">
            Ask everything you need to know about our product.
          </p>
        </div>
        <FaqCard
          header={"What is Pondeo?"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam. Odit natus earum dolorem ipsam perspiciatis nemo, porro fugiat maiores error explicabo nihil voluptas unde delectus sit commodi doloribus placeat!"
          }
        />
        <FaqCard
          header={"Can I train the platform with my company's information?"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam. Odit natus earum dolorem ipsam perspiciatis nemo, porro fugiat maiores error explicabo nihil voluptas unde delectus sit commodi doloribus placeat!"
          }
        />
        <FaqCard
          header={
            "What type of research does Pondeo do to personalize the message?"
          }
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam. Odit natus earum dolorem ipsam perspiciatis nemo, porro fugiat maiores error explicabo nihil voluptas unde delectus sit commodi doloribus placeat!"
          }
        />
      </Section>
      <Section styling={"bg-deep-black p-28"}>
        <div className="flex flex-col justify-center items-center p-10 rounded-xl bg-graymatter-gray ">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-5xl text-center font-bold text-neon-green">
              Let's get started!
            </h1>
            <p className="text-adventure-white text-lg text-center w-[80%]">
              Transform cold outreach into engaging conversations. Pondeo blends
              technology and a human-centric approach to redefine how you
              connect with leads.
            </p>
            <ButtonLarge label={"Free Trial"} type={"secondary"} />
          </div>
        </div>
      </Section>
    </>
  );
}
