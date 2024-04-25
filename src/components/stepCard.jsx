// import stepButton from "./shared/stepButton";


function stepCard({ styling, heading, text }) {


  return (
    <div className={`flex flex-col    ${styling}`}>
        <h3 className="custom-heading-3 text-adventure-white">{heading}</h3>
        <p className="text-adventure-white text-custom-body-2">{text}</p>

    </div>
  )
}

export default stepCard