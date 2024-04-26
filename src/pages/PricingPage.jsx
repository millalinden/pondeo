import Button from "../components/shared/Button";
import PricingCard from "../components/PricingCard";
import { useRef } from "react";

export default function PricingPage() {

  return (
    <div>
      <section className="flex gap-12 p-24 w-full bg-black text-white">
        <div className="flex flex-col py-10 gap-8 w-1/2">
          <h1 className="text-5xl font-semibold">
            <span className="text-neon-green">PRICING</span> TAILORED TO MEETING
            YOUR BUSINESS GOALS
          </h1>
          <p className="text-gray-400 font-semibold">
            Our pricing structure is designed to fit seamlessly with your team's
            size and needs. Whether you're a small startup or a large
            enterprise, we have the perfect plan for you. Plus, with our tiered
            pricing system, you only pay for what you need, ensuring that you
            get the best value for your investment. So why wait? Start
            maximizing your team's productivity and collaboration today with
            Pondeo!
          </p>
          <div className="flex justify-flex-start">
            <Button label={"Book a Demo"} color={"bg-neon-green text-black"} />
          </div>
        </div>
        <div className="bg-slate-400 w-[500px] h-[500px] rounded-3xl"></div>
      </section>
      <section className="bg-neutral-900 p-28 gap-10 flex flex-col items-center">
        <h1 className="text-5xl font-semibold text-neon-green text-center">
          Discover our pricing plans
        </h1>
        <p className="text-white text-4xl text-center">
          Choose the perfect package for your needs
        </p>
        <div className="flex m-8 items-end">
          <div className="text-white">How many users you have?</div>
          <input
            className="w-20 mx-4 text-lg text-center text-white rounded-xl font-bold bg-black border-white border-2 py-1"
            type="number"
            placeholder="1"
            style={{ WebkitAppearance: "textfield" }}
          />
          <div className="text-white">users</div>
        </div>

        <div className="flex gap-4">
          <PricingCard
            color="bg-white"
            text={{
              for: "For individuals",
              name: "Basic",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
              price: "$99",
              included1: "All analytic features",
              included2: "Up to 250,000 tracked visits",
              included3: "Normal support",
              included4: "Up to 3 team members",
            }}
            popular={false}
          />
          <PricingCard
            color="bg-neon-green"
            text={{
              for: "For startups",
              name: "Pro",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
              price: "$199",
              included1: "All analytic features",
              included2: "Up to 1,000,000 tracked visits",
              included3: "Premium support",
              included4: "Up to 10 team members",
            }}
            popular={true}
          />
          <PricingCard
            color="bg-white"
            text={{
              for: "For big companies",
              name: "Enterprise",
              description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
              price: "$399",
              included1: "All analytic features",
              included2: "Up to 5,000,000 tracked visits",
              included3: "Dedicated support",
              included4: "Up to 50 team members",
            }}
            popular={false}
          />
        </div>
      </section>
    </div>
  );
}
