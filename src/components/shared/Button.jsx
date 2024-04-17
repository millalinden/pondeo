// EXAMPLE OF REUSABLE BUTTON STRUCTURE

export default function Button(props) {
  const { color, onClick, label } = props;

  return (
    <button
      className={`p-3 shadow-none border border-solid rounded-full background-light-${color}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
