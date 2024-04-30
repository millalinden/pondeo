import ButtonLarge from "../components/shared/ButtonLarge";
import { Link } from "react-router-dom";

import FeatureCard from "../components/shared/FeatureCard";
import FaqCard from "../components/FaqCard";
import Carousel from "../components/CarouselComponent";
import Section from "../components/shared/Section";
import Hero from "../components/shared/Hero";

import HeroHome from "../assets/HeroHome.png";
import PondeoChat from "../assets/PondeoChatt.png";
import write from "../assets/write.png";
import chat from "../assets/Chat.png";

import FeatureCardImage1 from "../assets/FeatureCard1.svg";
import FeatureCardImage2 from "../assets/FeatureCard2.svg";
import FeatureCardImage3 from "../assets/FeatureCard3.svg";

export default function LandingPage() {
  return (
    <>
      <Hero
        styling={""}
        media={HeroHome}
        heightvw="20"
        widthvw="20"
        alt="Screenshot of Pondeo Chat"
      >
        <p className="text-adventure-white text-custom-body-1 font-normal">
          With the help of Pondeo,
        </p>
        <h2 className="text-custom-heading-2 font-bold uppercase text-neon-green">
          Find and close more deals
        </h2>
        <p className="text-custom-subtitle-1 text-adventure-whitegray opacity-45 font-light">
          Transform cold outreach into engaging conversations. Pondeo blends
          technology and a human-centric approach to redefine how you connect
          with leads.
        </p>
        <div className="flex justify-flex-start gap-8">
          <Link to="/demo">
            <ButtonLarge label={"Free Trial"} type={""} />
          </Link>
          <Link to="/product">
            <ButtonLarge label={"Learn More"} type={"secondary"} />
          </Link>
        </div>
      </Hero>
      <Section styling={"justify-center p-10 bg-deep-black"}>
        <div className="flex flex-col bg-graymatter-gray py-20 px-[15vw] gap-8 rounded-xl">
          <h2 className="text-custom-heading-3 text-neon-green text-center">
            Talk to Humans as Humans but with AI.
          </h2>
          <p className="text-center text-adventure-white text-custom-body-1 font-normal">
            Our AI-powered chatbot assists businesses in finding and researching
            relevant leads to creating more meaningful connections with
            potential customers.
          </p>
        </div>
      </Section>
      <Section styling={"gap-8 bg-graymatter-gray"}>
        <div className="flex justify-center items-center">
          <img
            src={PondeoChat}
            width={"1000vw"}
            height={"900vw"}
            alt="Screenshot of Pondeo Chat"
          />
        </div>

        <div className="flex flex-col py-16 gap-4">
          <div className="flex gap-4 h-28">
            <div>
              <span className="flex justify-start items-center w-2 h-2 rounded-full bg-neon-green mt-2.5"></span>
            </div>
            <div className="flex flex-col">
              <p className="text-custom-subtitle-2 uppercase text-neon-green">
                A full customer service team in a single platform
              </p>
              <p className="text-adventure-white text-custom-body-2 font-normal">
                Replace script-heavy, hard-coded chatbots with a powerful AI
                Agent that's easy to deploy, measure, coach and continuously
                improve.
              </p>
            </div>
          </div>

          <div className="flex gap-4 h-28">
            <div>
              <div>
                <span className="flex justify-start items-center w-2 h-2 rounded-full bg-neon-green mt-2.5"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-custom-subtitle-2 uppercase text-neon-green">
                Solve unique problems with personalized solutions{" "}
              </p>
              <p className="text-adventure-white text-custom-body-2 font-normal">
                Craft tailored responses to complex inquiries, powered by all
                your existing data sources - from your help center, to your CRM,
                to your order management system.
              </p>
            </div>
          </div>
          <div className="flex gap-4 h-28">
            <div>
              <div>
                <span className="flex justify-start items-center w-2 h-2 rounded-full bg-neon-green mt-2.5"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-custom-subtitle-2 uppercase text-neon-green">
                Ensure no insight goes uncovered{" "}
              </p>
              <p className="text-adventure-white text-custom-body-2 font-normal">
                Replace script-heavy, hard-coded chatbots with a powerful AI
                Agent that's easy to deploy, measure, coach and continuously
                improve.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section
        styling={
          "flex-col items-center bg-deep-black h-full p-28 pt-[40] gap-10"
        }
      >
        <h2 className="text-custom-heading-3 text-neon-green text-center">
          De-risk your revenue strategy with <br /> account-based sales
        </h2>
        <p className="text-adventure-white text-center text-custom-body-1 w-[58vw] font-normal">
          With 2024 bringing in new requirements from email giants like Gmail
          and Yahoo, the stakes for your cold emails to stand out have never
          been higher. The key to having higher conversion rates?
          Personalization.
        </p>
      </Section>
      <Section
        styling={"flex-col items-center bg-deep-black h-full p-28 pb-40 gap-10"}
      >
        <div className="flex gap-12">
          <FeatureCard
            image={FeatureCardImage1}
            heading={"Prospect research"}
            text={
              "Explore your prospects' landscape with precision. Pondeo uncovers and interprets key data, enriching your approach with tailored insights."
            }
            heightvw={"80"}
            alt="Chat icons"
            styling="py-[3vw] px-[3.5vw] gap-10"
          />
          <FeatureCard
            image={FeatureCardImage2}
            heading={"Message Personalization"}
            text={
              "Fine-tune your approach with Pondeo. We crafts your message to echo your prospects’ objectives, ensuring your pitch not only aligns with their needs."
            }
            heightvw={"80"}
            alt="Three persons with chat bubbles"
            styling="py-[3vw] px-[3.5vw] gap-10"
          />
          <FeatureCard
            image={FeatureCardImage3}
            heading={"Outreach Optimization"}
            text={
              "Shape impactful interactions with Pondeo AI. It refines your message and timing, enhancing connection and response rates."
            }
            heightvw={"80"}
            alt="Profile of human"
            styling="py-[3vw] px-[3.5vw] gap-10"
          />
        </div>
      </Section>
      <Section styling={"flex-col bg-graymatter-gray py-24 px-0 gap-20"}>
        <div className="text-neon-green text-center text-custom-heading-2">
          Hear from our customers!
        </div>
        <Carousel />
      </Section>
      <Section styling={"p-36 justify-center align-right bg-black"}>
        <div className="flex w-1/2 justify-center items-center align-middle">
          <img src={write} alt="Zoomed images on person writing on paper" />
        </div>

        <div className="flex flex-col py-10 gap-4 w-1/2">
          <h2 className="text-custom-heading-2 text-neon-green">
            Effective Connections, <br /> Effortlessly Crafted
          </h2>
          <p className="text-adventure-white text-custom-body-2">
            Pondeo acts as a co-pilot for Business Development Representives,
            simplifying the creation of personalized outreach. By automatically
            finding and analyzing customer signals, it helps BDRs craft messages
            that resonate, without the deep research usually needed. This makes
            outreach more effective and saves time.
          </p>
        </div>
      </Section>
      <Section styling={"gap-12 py-20 justify-center  bg-graymatter-gray"}>
        <div className="flex flex-col py-10 gap-4 w-1/2">
          <h2 className="text-custom-heading-2 text-neon-green">
            Prepare to see a significant shift in your engagement metrics{" "}
          </h2>
          <h3 className="text-neon-green text-custom-subtitle-1">
            And start meaningful conversations.{" "}
          </h3>
          <p className="text-adventure-white text-custom-body-1 font-normal">
            By focusing on relevant and engaging communication, you can deepen
            your rapport with prospects, enhancing the likelihood of successful
            outcomes.
          </p>
        </div>
        <div className="flex items-center">
          <img src={chat} alt="Screenshot of Pondeo Chat" />
        </div>
      </Section>
      <Section
        styling={"bg-deep-black p-20 flex-col items-center overflow-hidden"}
      >
        <div className="flex flex-col gap-4 w-1/2 mb-10">
          <h2 className="text-custom-heading-3 text-neon-green text-center">
            Frequently asked question{" "}
          </h2>
          <p className="text-adventure-white text-center text-custom-body-1 font-normal">
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
        <div className="flex flex-col justify-center items-center py-10 px-[20vw] w-[100%] rounded-xl bg-graymatter-gray ">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-custom-heading-2 text-center font-bold text-neon-green">
              Let's get started!
            </h2>
            <p className="text-adventure-white text-custom-body-1 font-normal text-center">
              Hundreds of BDRs & SDRs are already closing more sales with Pondeo
            </p>
            <Link to="/demo">
              <ButtonLarge label={"Free Trial"} type={"secondary"} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
