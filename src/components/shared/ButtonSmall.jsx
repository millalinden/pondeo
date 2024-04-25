export default function ButtonSmall(props) {
    const { onClick, label, type } = props;
  
    return (
      <button
        className={`text-custom-body-1 flex items-center justify-center py-3 px-4 shadow-none rounded-full hover:shadow ${
          type === "secondary" ? "" : ""
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }