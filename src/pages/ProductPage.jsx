import Button from "../components/shared/Button";
import TextImageCard from "../components/shared/TextImageCard";
import AI from "../assets/benefits,AI.png"
import Sales from "../assets/benefits,sales.png"
import Messages from "../assets/benefits,messages.png"
import GDPR from "../assets/GDPR.png"
import UserControlled from "../assets/User-Controlled.jpeg"
import Transparency from "../assets/Transparency.jpeg"
import HIW1 from "../assets/HIW-user input.jpeg"
import HIW2 from "../assets/HIW-AI-based.jpeg"
import HIW3 from "../assets/HIW-Lead Integration.jpeg"
import HIW4 from "../assets/HIW-Personalized.jpeg"
import Outreach from "../assets/Outreach.mp4"
import productHero from "../assets/productHero.mp4"
import efficiency from "../assets/efficiency.png"
import dataDriven from "../assets/dataDriven.png"
import reply from "../assets/reply.png"
import HPW1 from "../assets/HPW-userInput.png"
import HPW2 from "../assets/HPW-AI-based.png"
import HPW3 from "../assets/HPW-lead.png"
import HPW4 from "../assets/HPW-Personalized.png"










export default function ProductPage() {
    return (
    <>
    {/* pondeo section */}

      <section className="flex gap-12 p-16 w-full  bg-black">
        <div className="flex flex-col py-10 gap-8 w-1/2">
          <h2 className="text-custom-heading-2-uppercase text-neon-green">Start meaningful <br /> conversations</h2>
          <p className="text-adventure-white text-custom-subtitle-1 max-w-screen-sm">
          With Pondeo, transform massive cold outreach into personal and engaging conversations. Pondeo blends technology and a human-centric approach to redefine how you connect with leads.           </p>
          <div className="flex justify-flex-start">
            <Button label={"Free Trial"} color={"bg-black text-white"}/>
          </div>
        </div>
        {/* <div className= "w-[632px] h-[525px] rounded-lg"><iframe className="w-full aspect-square " src={productHero}></iframe></div> */}
        <iframe className="w-[632px] h-[525px] rounded-lg  aspect-square " src={productHero}></iframe>

      </section>

      <section className="flex justify-center items-center p-10 bg-graymatter-gray border-t-4 ">

        <div className="flex justify-center w-[1343px] h-[166px] bg-deep-black rounded-lg items-center">
          <h1 className="text-custom-heading-3 text-neon-green text-center">
          Pondeo: Your AI Sales Assistant Analyzing Benefits
          </h1>
        </div>
        
      </section>


      {/* benefits section */}
      <section className="flex flex-col items-center justify-center gap-16 p-9 w-full  bg-graymatter-gray">
      
  <div className="bg-black flex flex-col w-[1343px] rounded-lg items-center gap-6">
  <h2 className="text-custom-heading-2-uppercase text-neon-green text-center pt-4">Personalised Outreach </h2>
          <p className="text-adventure-white text-custom-subtitle-1 text-center max-w-2xl">
          Pondeo customizes the cold outreach process, making every communication feel unique and tailored to the recipient!          </p>

          
          {/* <div className="w-[1344px] h-[899px] rounded-lg"><iframe className="w-full aspect-square " src={Outreach}></iframe></div> */}
          <iframe className="w-[1344px] h-[899px] rounded-lg  aspect-square " src={Outreach}></iframe>
          </div>

      </section>



      <section className="flex justify-center items-center bg-graymatter-gray w-full p-9">
        <div className="flex justify-center items-center gap-4 p-9">
          <img className="w-[536px] h-[438px]" src={reply}/>
          <div className="flex flex-col justify-center items-center gap-20" >
            <div>
            <h2 className="text-custom-subtitle-1 text-neon-green text-left">
            Increased Open Rates and Reply Rates
            </h2>
            <p className="text-custom-body-1 text-adventure-white max-w-lg text-left">
            Open rates by up to 50% <br /> Achieve reply rates as high as 15%
            </p>
            </div>
            <button><Button label={"Book a Demo"} color={"bg-gray-200 text-white"}/></button>

          </div>

        </div>

      </section>


      <section className="flex justify-center items-center bg-graymatter-gray px-16 py-4 gap-28 w-full">

        <div className="flex gap-4 p-4 h-72 w-[600px] rounded-lg bg-deep-black">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-custom-subtitle-1 text-neon-green">Efficiency and Workflow Streamlining</h3>
            <p className="text-custom-body-1 text-adventure-white w-71">Sales teams value time efficiency. 
Pondeo automates message 
generation, freeing up 
sales reps to focus on 
high-value tasks.</p>

          </div>
          <img src={efficiency}/>
        </div>

        <div className="flex gap-4 p-4  h-72 w-[600px] rounded-lg bg-deep-black">
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-custom-subtitle-1 text-neon-green">Data-Driven Insights </h3>
            <p className="text-custom-body-1 text-adventure-white w-71">Informed decisions drive success. Pondeo offers valuable insights,
enabling sales teams to
optimize strategies 
based on real-time
feedback. </p>

          </div>
          <img src={dataDriven}/>
        </div>

      </section>

      



      {/* features section */}
      <section className="py-16 px-16 flex justify-center items-center bg-deep-black">
        <div className=" w-full text-center py-16 px-20">
            <div className="text-center">
                <h1 className="text-custom-heading-2-bold text-adventure-white p-2 mx-10 mb-4">Our Product <span className="text-neon-green">Features</span></h1>

            </div>
            <div className="flex justify-center items-center gap-20">
            <TextImageCard
              heading="AI-Based Learning Chatbot"
              text="Utilizes machine learning algorithms to analyze company information and learn about products, services, target audience, and messaging preferences."
              image={AI}
            />
            <TextImageCard
              heading="Personalized Message Generation"
              text="Pondeo uses data on preferences, company details, and activities to personalize messages. It adapts to channels, use cases, and preferred tone for effective communication."
              image={Messages}
            />
            <TextImageCard
              heading="Sales Assistant "
              text="A smart assistant that effortlessly crafts messages customised for your potential clients. It's like having a knowledgeable friend guiding your communication efforts."
              image={Sales}
            />
            
          </div>


            {/* <hr className="border-slate-200 mb-7 mx-9" />
            <div className="flex justify-center items-center justify-around mb-10">
            <div className="max-w-64">
        <div className="h-80 w-64 rounded-3xl mt-7 bg-black object-fit"><img src={AI}/></div>

        <h4 className="text-lg mb-3 text-left text-neon-green">AI-Based Learning Chatbot</h4>
        <p className="text-xl text-left text-adventure-white">
        Utilizes machine learning algorithms to analyze company information and learn about products, services, target audience, and messaging preferences.
        </p>
      </div>

      <div className="max-w-64">
      <div className="h-80 w-64 rounded-3xl mt-7 bg-black object-fit"><img src={Sales}/></div>
        <h4 className="text-lg mb-3 text-left text-neon-green">Sales Assistant </h4>
        <p className="text-xl text-left text-adventure-white">
        A smart assistant that effortlessly crafts messages customised for your potential clients. It's like having a knowledgeable friend guiding your communication efforts. 
        </p>
      </div>

      <div className="max-w-64">
      <div className="h-80 w-64 rounded-3xl mt-7 bg-black"><img src={Messages}/></div>
        <h4 className="text-lg mb-3 text-left text-neon-green">Personalized Message Generation</h4>
        <p className="text-xl text-left text-adventure-white">
        Pondeo operates by analysing individual preferences, company details, and recent activities. By leveraging this information, Pondeo ensures that your messages resonate with the recipient's interests and needs. It's a smart chatbot that utilises variables such as channels, use cases, and even the tone of voice you prefer to craft personalised messages for effective communication
        </p>
        
      </div>
          </div> */}
        </div>

      </section>

      <svg xmlns="http://www.w3.org/2000/svg" width="1312" height="2" viewBox="0 0 1312 2" fill="none">
<path d="M0 1H1312" stroke="#DEE5ED" stroke-width="2"/>
</svg>

      {/* how it works section */}
      <section className="bg-deep-black flex justify-center items-center">
        <div  className=" w-full py-16 px-20 ">
            <div className="text-center">
                <h1 className="text-custom-heading-2-bold p-2 mx-10 mb-4 text-neon-green">How Pondeo works</h1>

            </div>
    
           <div className="flex justify-center items-center justify-around mb-10">

           <div className="max-w-64">
        <h4 className="text-lg mb-3 text-left">User  Input and Company Information</h4>
        <p className="text-xl text-left">
               Users provide information about their company, including details about their products or services, target audience, and messaging preferences. You can also inform us about the main benefits your company offers or the problems you solve.

               This information is input into the system, allowing Pondeo to understand the company's goals and offerings.
        </p>
        <div className="h-80 w-64 rounded-3xl mt-7 bg-black object-fit"><img src={HIW1}/></div>
      </div>

      <div className="max-w-64">
        <h4 className="text-lg mb-3 text-left">AI-Based Learning</h4>
        <p className="text-xl text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="h-80 w-64 rounded-3xl mt-7 bg-black "><img className="object-fill" src={HIW2}/></div>
      </div>

      <div className="max-w-64">
        <h4 className="text-lg mb-3 text-left">Lead Integration</h4>
        <p className="text-xl text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="h-80 w-64 rounded-3xl mt-7 bg-black"><img src={HIW3}/></div>
      </div>

      <div className="max-w-64">
        <h4 className="text-lg mb-3 text-left">Personalized Message Generation</h4>
        <p className="text-xl text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="h-80 w-64 rounded-3xl mt-7 bg-black"><img src={HIW4}/></div>
      </div>

          </div>

        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" width="1312" height="2" viewBox="0 0 1312 2" fill="none">
  <path d="M0 1H1312" stroke="#DEE5ED" stroke-width="2"/>
</svg>


      {/* content section */}
      <section className="mt-10 flex flex-col justify-center items-center">
        <div className="bg-white w-full py-16 text-center px-20">
        <div className="text-center ">
            <h2 className="text-center text-5xl w-1/2 p-2 mx-10 mb-4 text-neon-green">Ensuring Your Privacy
Our Commitment to Data Security</h2>
            
          </div>
        </div>


        <div className="flex justify-center items-center justify-around mb-10 gap-14">

          <div className="max-w-64">
            <div className="h-80 w-64 rounded-3xl mt-7 bg-black"><img src={GDPR}/></div>
              <h4 className="text-lg mb-3 text-left text-neon-green">General Data Protection Regulation (GDPR)</h4>
                 <p className="text-xl text-left">
               Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
                   </p>

          </div>
          <div className="max-w-64">
            <div className="h-80 w-64 rounded-3xl mt-7 bg-black"><img src={UserControlled}/></div>
              <h4 className="text-lg mb-3 text-left text-neon-green">User-Controlled 
Data</h4>
                 <p className="text-xl text-left">
                 We follow opt-in principles, giving users authority over their data usage and privacy preferences.
                   </p>

          </div>
          <div className="max-w-64 ">
            <div className="h-80 w-64 rounded-3xl mt-7 bg-black "><img src={Transparency}/></div>
              <h4 className="text-lg mb-3 text-left text-neon-green">Transparency in Data Handling</h4>
                 <p className="text-xl text-left">
                 We follow opt-in principles, giving users authority over their data usage and privacy preferences.
                   </p>

          </div>

        </div>

        <Button label={"Contact Us"} color={"bg-black text-white"}/>

      </section>
    </>

    )
    
}
