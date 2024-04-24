export default function squareButton(props) {
    const { onClick, label } = props;
  
    return (
      <button
        className={"px-20 shadow-none hover:shadow bg-white h-60 w-150"}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }