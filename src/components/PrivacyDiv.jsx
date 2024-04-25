export default function PrivacyDiv({ number, title, description }) {
    return (
        <div className="flex flex-col gap-[12px]">
            <p className="text-[36px] text-adventure-white font-normal text-center ">{number}</p>
            <p className="text-[36px] text-adventure-white font-normal text-center">{title}</p>
            <p className="text-[24px] text-adventure-white font-light">{description}</p>
        </div>
    )
}