import Button from "../components/shared/Button";
import squareButton from "../components/shared/squareButton";
import TextImageCard from "../components/shared/TextImageCard";
import Carousel from "../components/carousel";
import AI from "../assets/benefits,AI.jpeg"
import Sales from "../assets/benefits,sales.jpeg"
import Messages from "../assets/benefits,messages.jpeg"
import GDPR from "../assets/GDPR.png"
import UserControlled from "../assets/User-Controlled.jpeg"
import Transparency from "../assets/Transparency.jpeg"
import HIW1 from "../assets/HIW-user input.jpeg"
import HIW2 from "../assets/HIW-AI-based.jpeg"
import HIW3 from "../assets/HIW-Lead Integration.jpeg"
import HIW4 from "../assets/HIW-Personalized.jpeg"
import Outreach from "../assets/Outreach.png"
import productHero from "../assets/productHero.mp4"
import efficiency from "../assets/efficiency.png"
import dataDriven from "../assets/dataDriven.png"
import reply from "../assets/reply.png"





export default function ProductPage() {
    return (
    <>
    {/* pondeo section */}

      <section className="flex gap-12 p-16 w-full  bg-black">
        <div className="flex flex-col py-10 gap-8 w-1/2">
          <h1 className="text-5xl text-white font-bold">PONDEO</h1>
          <h2 className="text-4xl text-white font-bold">Unlock the Power of <span className="text-neon-green">Personalized Sales</span>  Outreach </h2>
          <p className="text-gray-400">
          Elevate your sales strategy. Transform large-scale cold outreach into personal, engaging conversations. Pondeo combines technology with a human-centric approach to enhance lead connections
           </p>
          <div className="flex justify-flex-start">
            <Button label={"Free Trial"} color={"bg-black text-white"}/>
          </div>
        </div>
        <div className= "w-[549px] h-[676px] rounded-lg"><iframe className="w-full aspect-square " src={productHero}></iframe></div>
      </section>

      <section className="flex justify-center p-10 bg-neutral-900 border-t-4 ">
        <div className="flex flex-col  gap-4 w-1/2">
          <h1 className="text-4xl text-neon-green text-center">
          Start meaningful conversations
          </h1>
          <p className="text-center text-white">
          With Pondeo, transform massive cold outreach into personal and engaging conversations. Pondeo blends technology and a human-centric approach to redefine how you connect with leads.
          </p>
          <div className="flex justify-center"><Button label={"Contact Us"} color={"bg-black text-white"}/></div>
        </div>
        
        
      </section>

      {/* benefits section */}
      <section className="flex justify-center items-center gap-12 mx-16 my-4 p-9 w-full  bg-black">
      
      <div className="flex flex-col py-10 gap-8 w-1/2 w-[1216px] h-[216px]">
          <h3 className="text-3xl font-bold text-neon-green">Personalised Outreach </h3>
          <p className="text-white">
          Pondeo personalises the cold outreach process, ensuring every communication feels unique and tailored to the recipient!          </p>
          <div className="flex justify-flex-start">
            <Button label={"Book a Demo"} color={"bg-black text-white"}/>
          </div>
      </div>
      <div className="bg-slate-300 w-[576px] h-[216px] rounded-md"><img src={Outreach}/></div>
      </section>


      <section className="flex justify-center items-center bg-deep-black px-16 py-4 gap-y-28 w-full">
        <div className="flex gap-4 p-4 h-72 ">
          <div className="flex flex-col justify-center items-center">
            <h3 className="custom-subtitle-1 text-neon-green">Efficiency and Workflow Streamlining</h3>
            <p className="custom-body-1 adventure-white">Sales teams value time efficiency. 
Pondeo automates message 
generation, freeing up 
sales reps to focus on 
high-value tasks.</p>

          </div>
          <img src={efficiency}/>
        </div>

        <div className="flex gap-4 p-4  h-72">
        <div className="flex flex-col justify-center items-center">
            <h3 className="custom-subtitle-1 text-neon-green">Data-Driven Insights </h3>
            <p className="custom-body-1 adventure-white">Informed decisions drive success. Pondeo offers valuable insights,
enabling sales teams to
optimize strategies 
based on real-time
feedback. </p>

          </div>
          <img src={dataDriven}/>
        </div>

      </section>

      <section className="flex justify-center items-center bg-deep-black w-full p-16">
        <div className="flex justify-center items-center gap-4 p-9">
          <img src={reply}/>
          <div className="flex flex-col justify-center items-center" >
            <h2 className="custom-heading-2-bold text-neon-green">
            Increased Open Rates and Reply Rates
            </h2>
            <p className="custom-subtitle-1 adventure-white">
            Open rates by up to 50% 

            Achieve reply rates as high as 15%
            </p>
            <button></button>

          </div>

        </div>

      </section>



      {/* features section */}
      <section className="mt-10 flex justify-center items-center bg-deep-black">
        <div className=" w-full py-16 px-20">
            <div className="text-center">
                <h1 className="custom-heading-2-bold adventure-white p-2 mx-10 mb-4">Our Product <span className="text-neon-green">Features</span></h1>

            </div>
            <hr className="border-slate-200 mb-7 mx-9" />
            <div className="flex justify-center items-center justify-around mb-10">
            <div className="max-w-64">
        <div className="h-80 w-64 rounded-3xl mt-7 bg-black object-fit"><img src={AI}/></div>

        <h4 className="text-lg mb-3 text-left text-neon-green">AI-Based Learning Chatbot</h4>
        <p className="text-xl text-left">
        Utilizes machine learning algorithms to analyze company information and learn about products, services, target audience, and messaging preferences.
        </p>
      </div>

      <div className="max-w-64">
      <div className="h-80 w-64 rounded-3xl mt-7 bg-black object-fit"><img src={Sales}/></div>
        <h4 className="text-lg mb-3 text-left text-neon-green">Sales Assistant </h4>
        <p className="text-xl text-left">
        A smart assistant that effortlessly crafts messages customised for your potential clients. It's like having a knowledgeable friend guiding your communication efforts. 
        </p>
      </div>

      <div className="max-w-64">
      <div className="h-80 w-64 rounded-3xl mt-7 bg-black"><img src={Messages}/></div>
        <h4 className="text-lg mb-3 text-left text-neon-green">Personalized Message Generation</h4>
        <p className="text-xl text-left">
        Pondeo operates by analysing individual preferences, company details, and recent activities. By leveraging this information, Pondeo ensures that your messages resonate with the recipient's interests and needs. It's a smart chatbot that utilises variables such as channels, use cases, and even the tone of voice you prefer to craft personalised messages for effective communication
        </p>
        
      </div>
          </div>
        </div>

      </section>

      {/* how it works section */}
      <section className="mt-10 flex justify-center items-center">
        <div  className="bg-white w-full py-16 px-20">
            <div className="text-left">
                <h1 className="text-5xl p-2 mx-10 mb-4 text-neon-green">How it works</h1>

            </div>
            <hr className="border-slate-200 mb-7 mx-9" />
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

      {/* testimonial section */}
      <section className="bg-gray-400 m-auto pt-11">
        <Carousel />

      </section>

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
