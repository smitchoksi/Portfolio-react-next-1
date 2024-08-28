import Link from "next/link";
import {FaGithub, FaLinkedinIn,FaYoutube,FaInstagramSquare } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/smitchoksi/Portfolio-react-next-1" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/feed/" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/@smitchoksi9483" },
    { icon: <FaInstagramSquare />, path: "https://www.instagram.com/smit_choksi_15/?igsh=MWg1ajdlMjN2bDVkYQ%3D%3D" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Social
