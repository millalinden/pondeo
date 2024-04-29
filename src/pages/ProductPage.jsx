import { Link } from "react-router-dom";

import StepSquare from "../components/shared/stepSquare";
import ButtonLarge from "../components/shared/ButtonLarge";
import Hero from "../components/shared/Hero"; // MARCUS: REMOVE
import Section from "../components/shared/Section";
import ProductCard from "../components/shared/ProductCard";

import AI from "../assets/benefits,AI.png";
import Sales from "../assets/benefits,sales.png";
import Messages from "../assets/benefits,messages.png";
import Outreach from "../assets/Outreach.mp4";
import productHero from "../assets/productHero.mp4";
import efficiency from "../assets/efficiency.png";
import dataDriven from "../assets/dataDriven.png";
import reply from "../assets/reply.png";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

export default function ProductPage() {
  const handleClick = () => {
    // MARCUS: REMOVE
    console.log("Button clicked!");
  };

  return (
    <>
      {/* // MARCUS: REMOVE */}

      {/* <Hero styling={"bg-deep-black"} image={productHero} heightvw="40" widthvw="40">
  
        <h1 className="text-custom-heading-2-uppercase text-neon-green">
        Start meaningful <br /> conversations
        </h1>
        <p className="text-adventure-white text-custom-subtitle-1 max-w-screen-sm">
        With Pondeo, transform massive cold outreach into personal and engaging conversations. Pondeo blends technology and a human-centric approach to redefine how you connect with leads.
        </p>
        <div className="flex justify-flex-start gap-8">
           <Link to="/demo">
              <ButtonLarge label={"Get 7 Days Free Trial"} type={"secondary"} />
            </Link>
        </div>
      </Hero> */}

      <Section
        styling={
          "justify-center gap-12 p-16 bg-deep-black border-graymatter-gray border shadow-dark-black "
        }
      >
        <div className="flex flex-col py-10 gap-8 w-1/2">
          <h2 className="text-custom-heading-2-uppercase text-neon-green">
            Start meaningful <br /> conversations
          </h2>
          <p className="text-adventure-white text-custom-subtitle-1 max-w-screen-sm">
            With Pondeo, transform massive cold outreach into personal and
            engaging conversations. Pondeo blends technology and a human-centric
            approach to redefine how you connect with leads.{" "}
          </p>
          <div className="flex justify-flex-start">
            <Link to="/demo">
              <ButtonLarge label={"Get 7 Days Free Trial"} type={"secondary"} />
            </Link>
          </div>
        </div>
        {/* <div className= "w-[632px] h-[525px] rounded-lg"><iframe className="w-full aspect-square " src={productHero}></iframe></div> */}
        <iframe
          className="w-[632px] h-[525px] rounded-lg  aspect-square "
          src={productHero}
          alt=""
        ></iframe>
      </Section>

      <Section styling={"justify-center items-center p-10 bg-graymatter-gray "}>
        <div className="flex justify-center w-[1343px] h-[166px] bg-deep-black border-graymatter-gray border shadow-dark-black rounded-lg items-center">
          <h1 className="text-custom-heading-3 text-neon-green text-center">
            Pondeo: Your AI Sales Assistant Analyzing Benefits
          </h1>
        </div>
      </Section>

      {/* benefits section */}
      <Section
        styling={
          "justify-center flex-col items-center gap-16 p-6 pt-4 bg-graymatter-gray"
        }
      >
        <div className="bg-black flex flex-col w-[1343px] rounded-lg items-center gap-6  border-graymatter-gray border shadow-dark-black">
          <h2 className="text-custom-heading-2-uppercase text-neon-green text-center pt-4">
            Personalised Outreach{" "}
          </h2>
          <p className="text-adventure-white text-custom-subtitle-1 text-center max-w-2xl">
            Pondeo customizes the cold outreach process, making every
            communication feel unique and tailored to the recipient!{" "}
          </p>

          {/* <div className="w-[1344px] h-[899px] rounded-lg"><iframe className="w-full aspect-square " src={Outreach}></iframe></div> */}
          <iframe
            className="w-[1344px] h-[899px] rounded-lg  aspect-square "
            src={Outreach}
            alt=""
          ></iframe>
        </div>
      </Section>

      <Section styling={"justify-center items-center  bg-graymatter-gray p-9"}>
        <div className="flex place-items-start  gap-4 p-9">
          {/* // MARCUS: Alt tags */}
          {/* // MARCUS: this particular image appears squished when I view it on
                PC, so add some class to make it retain its proportions */}

          <img className="w-[536px] h-[438px]" src={reply} alt="" />
          <div className="flex flex-col place-items-start  gap-20">
            <div>
              <h2 className="text-custom-subtitle-1 text-neon-green text-left pb-4">
                Increased Open Rates and Reply Rates
              </h2>
              <p className="text-custom-body-1 text-adventure-white max-w-lg text-left leading-10">
                Open rates by up to 50% <br /> Achieve reply rates as high as
                15%
              </p>
            </div>
            <Link to="/demo">
              <ButtonLarge label={"Free Trial"} type={"secondary"} />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        styling={
          "justify-center items-center bg-graymatter-gray px-16 py-4 gap-28"
        }
      >
        <div className="flex p-4 h-[271px] w-[600px] rounded-lg bg-deep-black border-graymatter-gray border shadow-dark-black">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-custom-subtitle-small text-neon-green w-[294px]">
              Efficiency and Workflow Streamlining
            </h3>
            <p className="text-custom-body-1 text-adventure-white w-71">
              Sales teams value time efficiency. Pondeo automates message
              generation, freeing up sales reps to focus on high-value tasks.
            </p>
          </div>
          {/* // MARCUS: Alt tags */}
          {/* // MARCUS: For some reason this image is outside its container on PC*/}

          <img alt="" src={efficiency} />
        </div>

        <div className="flex p-4  h-[271px] w-[600px] rounded-lg bg-deep-black border-graymatter-gray border shadow-dark-black">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-custom-subtitle-1 text-neon-green ">
              Data-Driven Insights{" "}
            </h3>
            <p className="text-custom-body-1 text-adventure-white w-71">
              Informed decisions drive success. Pondeo offers valuable insights,
              enabling sales teams to optimize strategies based on real-time
              feedback.{" "}
            </p>
          </div>
          {/* // MARCUS: Alt tags */}

          <img alt="" src={dataDriven} />
        </div>
      </Section>

      {/* features section */}
      <Section styling={"justify-center items-center p-16  bg-deep-black"}>
        <div className=" w-full text-center pt-4">
          <div className="text-center ">
            <h1 className="text-custom-heading-2-bold text-adventure-white p-2 mx-10 mb-4 pb-4">
              Our Product <span className="text-neon-green">Features</span>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center place-items-start pt-12 gap-20">
            <ProductCard
              heading="AI-Based Learning Chatbot"
              text="Utilizes machine learning algorithms to analyze company information and learn about products, services, target audience, and messaging preferences."
              image={AI}
              alt="AI-Based Learning Chatbot"
            />
            <ProductCard
              heading="Personalized Message Generation"
              text="Pondeo uses data on preferences, company details, and activities to personalize messages. It adapts to channels, use cases, and preferred tone for effective communication."
              image={Messages}
              alt="Personalized Message Generation"
            />
            <ProductCard
              heading="Sales Assistant "
              text="A smart assistant that effortlessly crafts messages customised for your potential clients. It's like having a knowledgeable friend guiding your communication efforts."
              image={Sales}
              alt="Sales Assistant"
            />
          </div>
        </div>
      </Section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1312"
        height="3"
        viewBox="0 0 1312 3"
        fill="none"
      >
        <path d="M0 1.5H1312" stroke="#DEE5ED" stroke-width="2" />
      </svg>

      {/* how Pondeo works section */}
      <Section
        styling={
          "flex-col justify-center items-center px-16 gap-16 bg-deep-black "
        }
      >
        <div className="text-center">
          <h1 className="text-custom-heading-2-bold py-16 mx-10 mb-4 text-adventure-white">
            How Pondeo works
          </h1>
        </div>

        <div className="flex gap-16 px-4 py-8 bg-deep-black border-graymatter-gray border shadow-dark-black">
          <div className="flex flex-col  gap-10 max-w-xl">
            <StepSquare label={"Step 1"} />
            <h3 className="text-custom-heading-3 text-adventure-white ">
              User Input and Company Information
            </h3>
            <p className="text-adventure-white text-custom-body-2 ">
              Users provide information about their company, including details
              about their products or services, target audience, and messaging
              preferences. You can also inform us about the main benefits your
              company offers or the problems you solve.
              <br /> This information is input into the system, allowing Pondeo
              to understand the company's goals and offerings.
            </p>
          </div>
          <img className="w-[598px] h-[668px]" src={step1} alt="" />
        </div>

        <div className="flex  gap-20 px-4 py-8 bg-deep-black border-graymatter-gray border shadow-dark-black">
          <img className="w-[618px] h-[481px]" src={step2} alt="" />
          <div className="flex flex-col max-w-xl gap-8">
            <StepSquare label={"Step 2"} />
            <h3 className="text-custom-heading-3 text-adventure-white">
              AI-Based Learning
            </h3>
            <p className="text-adventure-white text-custom-body-2">
              Pondeo employs machine learning algorithms to analyze the provided
              company information.
              <br /> The algorithms learn about the company's products,
              services, target audience, and messaging preferences based on the
              input data.
              <br /> Through this analysis, Pondeo gains insights into the
              company's unique selling points and messaging strategies.
            </p>
          </div>
        </div>

        <div className="flex gap-24 px-4 py-8 bg-deep-black border-graymatter-gray border shadow-dark-black">
          <div className="flex flex-col w-[539px] gap-8">
            <StepSquare label={"Step 3"} />
            <h3 className="text-custom-heading-3 text-adventure-white">
              Lead Integration
            </h3>
            <p className="text-adventure-white text-custom-body-2">
              Users input leads' names or LinkedIn accounts into the system's
              chat interface.
              <br /> This action initiates the process of personalised messaging
              for each lead.
            </p>
          </div>
          <img className="w-[626px] h-[330px]" src={step3} alt="" />
        </div>

        <div className="flex gap-20 px-4 py-8 bg-deep-black border-graymatter-gray border shadow-dark-black">
          <img className="w-[609px] h-[443px]" src={step4} alt="" />
          <div className="flex flex-col  max-w-xl gap-8">
            <StepSquare label={"Step 4"} />
            <h3 className="text-custom-heading-3 text-adventure-white">
              Personalized Message Generation
            </h3>
            <p className="text-adventure-white text-custom-body-2">
              {" "}
              Pondeo utilises learned company information to craft personalised
              sales messages tailored to each prospect. Operating on a
              sophisticated chatbot framework.
              <br /> Pondeo generates messages based on specified prompts and
              variables, sounding just like you. It's like having a personal
              writer, ensuring relevance and engagement.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
