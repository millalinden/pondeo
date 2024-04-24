export default function SocialIcon({ link, icon, alt, color }) {
  return (
    <a href={link} className={`rounded-full p-1 ${color ? color : ""}`}>
      <img src={icon} alt={alt} />
    </a>
  );
}
