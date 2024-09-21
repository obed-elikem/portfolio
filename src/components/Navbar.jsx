import logo from "../assets/agbateyObedLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/obed-agbatey-59a079295/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/obed-elikem" target="_blank" rel="noopener noreferrer">
          <FaGithub/>
        </a>
        <a href="https://x.com/obed_elikem" target="_blank" rel="noopener noreferrer">
          <BsTwitterX/>
        </a>
        <a href="https://t.me/obed_elikem" target="_blank" rel="noopener noreferrer">
          <FaTelegram/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar