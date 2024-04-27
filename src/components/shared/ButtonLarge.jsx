export default function ButtonLarge(props) {
  const { onClick, label, type } = props;

  return (
    <button
      className={` text-custom-body-1 flex items-center justify-center 
      py-[0.52vw] px-[1.4vw] shadow-none rounded-[0.9vw] hover:shadow hover:bg-hover-button 
      active:bg-clicked-button ${
        type === "secondary"
          ? "bg-none border border-neon-green text-neon-green hover:text-black active:bg-neon-green"
          : "bg-neon-green"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
