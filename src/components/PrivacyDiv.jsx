export default function PrivacyDiv({ number, title, description }) {
    return (
        <div>
            <p className="font-bold text-2xl">{number}</p>
            <p className="font-bold text-2xl">{title}</p>
            <p>{description}</p>
        </div>
    )
}