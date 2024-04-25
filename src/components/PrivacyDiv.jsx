export default function PrivacyDiv({ number, title, description }) {
    return (
        <div>
            <p className="text-[36px] text-adventure-white font-[500]">{number}</p>
            <p className="text-[36px] text-adventure-white font-[500]">{title}</p>
            <p className="text-[24px] text-adventure-white font-[300]">{description}</p>
        </div>
    )
}