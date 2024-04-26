

function stepButton({ onClick, label }) {
    

  return (
   <button
   className={"px-4 py-2 flex items-center justify-center rounded-sm shadow-custom-green text-neon-green border-neon-green bg-rgba-green-20 w-22"}
   onClick={onClick}
   >
{label}

   </button>
  )
}

export default stepButton