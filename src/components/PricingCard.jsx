import checkmarkSVG from "../assets/pricingpage-checkmark.svg";
import ButtonPricing from "./ButtonPricing";


export default function PricingCard(props) {
  const { color, text, popular } = props;

  //   {
  //     for: "For individuals",
  //     name: "Basic",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  //     price: "$99",
  //     included1: "All analytic features",
  //     included2: "Up to 250,000 tracked visits",
  //     included3: "Normal support",
  //     included4: "Up to 3 team members",
  //   }

  return (
    <div>
      <div
        className={`flex flex-col ${color} p-10 w-[22rem] h-[37rem]  rounded-3xl gap-4 relative`}
      >
        {popular ? (
          <div className="absolute mx-4 my-6 top-0 right-0 bg-white bg-opacity-20 py-2 px-4 rounded-lg text-xs">
            Popular
          </div>
        ) : (
          ""
        )}
        <div className="flex">
          <div className="bg-black h-14 w-14 rounded-lg"></div>
          <div className="px-4 gap-2">
            <p>{text.for}</p>
            <p>Basic</p>
          </div>
        </div>
        <div className="text-s">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
        <div className="flex items-end ">
          <p className=" text-5xl font-semibold">{text.price} </p>
          <p>/ monthly</p>
        </div>
        <p className="font-semibold text-lg">What's included</p>
        <div className="flex flex-col gap-4 h-44">
          <div className="flex gap-4">
            <img src={checkmarkSVG} alt="Checkmark" />
            <p>{text.included1}</p>
          </div>
          <div className="flex gap-4">
            <img src={checkmarkSVG} alt="Checkmark" />
            <p>{text.included2}</p>
          </div>
          <div className="flex gap-4">
            <img src={checkmarkSVG} alt="Checkmark" />
            <p>{text.included3}</p>
          </div>
          <div className="flex gap-4">
            <img src={checkmarkSVG} alt="Checkmark" />
            <p>{text.included4}</p>
          </div>
        </div>
        <ButtonPricing label={"Get started"} />
      </div>
    </div>
  );
}
