export default function ButtonSmall(props) {
  const { onClick, label, type } = props;

  return (
    <button
      className={`text-[1.3vw] font-medium flex items-center justify-center 
      py-[0.2vw] px-[1.3vw] shadow-none rounded-[0.8vw] hover:shadow hover:bg-hover-button 
      active:bg-clicked-button ${
        type === "secondary"
          ? "bg-none border border-neon-green text-neon-green hover:text-black active:bg-neon-green"
          : "bg-neon-green "
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
