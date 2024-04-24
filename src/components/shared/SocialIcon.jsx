export default function SocialIcon({ link, icon, alt, color, size }) {
  return (
    <a href={link} className={`rounded-full p-1 ${color ? color : ""}`}>
      <img src={icon} alt={alt} style={{ width: size, height: size }} />
    </a>
  );
}
