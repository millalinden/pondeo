export default function ButtonLong(props) {
  const { onClick, label, type } = props;

  return (
    <button
      className={` text-custom font-medium flex items-center justify-center 
      py-[0.18vw] px-[2.8vw] shadow-none rounded-[0.8vw] hover:shadow hover:bg-hover-button 
      active:bg-clicked-button ${
        type === "secondary"
          ? "bg-none border border-neon-green text-neon-green hover:text-black"
          : "bg-neon-green"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
