import Button from "../components/shared/Button";

export default function LandingPage() {
  return (
    <>
      <section className="flex gap-12 p-32 w-full  bg-white">
        <div className="flex flex-col gap-8 w-1/2">
          <p>With the help of Pondeo,</p>
          <h1 className="text-5xl font-bold">FIND AND CLOSE MORE DEALS</h1>
          <p className="text-gray-300">
            Transform cold outreach into engaging conversations. Pondeo blends
            technology and a human-centric approach to redefine how you connect
            with leads.
          </p>
          <Button label={"Book a Demo"} />
        </div>
        <div className="bg-slate-500 w-[600px] "></div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
}
