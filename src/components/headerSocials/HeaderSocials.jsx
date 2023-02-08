
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";


const HeaderSocials = () => {
    return (
      <div className="header__socials">
        <a href="https://linkedin.com" target="blank">
          <BsLinkedin></BsLinkedin>
        </a>
        <a href="https://github.com" target="blank">
          <BsGithub />
        </a>
        <a href="https://facebook.com" target="blank">
          <BsFacebook />
        </a>
      </div>
    );
}
 
export default HeaderSocials;