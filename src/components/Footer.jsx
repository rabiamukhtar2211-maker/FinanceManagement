import FacebookLogo from "../assets/FacebookLogo.png";
import TwitterLogo from "../assets/TwitterLogo.png";
import InstagramLogo from "../assets/InstagramLogo.png";
import YoutubeLogo from "../assets/YoutubeLogo.png";
import LinkedinLogo from "../assets/LinkedinLogo.png";

const socialLinks = [
  { name: "Facebook", icon: FacebookLogo, href: "#" },
  { name: "Twitter", icon: TwitterLogo, href: "#" },
  { name: "Instagram", icon: InstagramLogo, href: "#" },
  { name: "Youtube", icon: YoutubeLogo, href: "#" },
  { name: "Linkedin", icon: LinkedinLogo, href: "#" },
];

function Footer() {
  return (
    <footer className="w-full flex items-center justify-between px-6 py-0.5 text-[10px] ">
      {/* Left Section */}
      <div className="flex items-center gap-8 text-[black]">
        <span>Copyright © 2024 Peterdrow</span>

        <a href="#" className="hover:text-[#173B2A] transition-colors text-[#7C8B80]">
          Privacy Policy
        </a>

        <a href="#" className="hover:text-[#173B2A] transition-colors text-[#7C8B80]">
          Terms and Conditions
        </a>

        <a href="#" className="hover:text-[#173B2A] transition-colors text-[#7C8B80]">
          Contact
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            className="flex h-6 w-6 items-center justify-center"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="h-full w-full object-contain"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;