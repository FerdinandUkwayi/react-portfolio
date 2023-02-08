import "./nav.css";

import {
  AiTwotoneHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri"

const Nav = () => {
    return (
      <nav>
        <a href="#" className="active">
          <AiTwotoneHome />
        </a>
        <a href="#about">
          <AiOutlineUser />
        </a>
        <a href="#experience">
          <BiBookBookmark />
        </a>
        <a href="#services">
          <RiServiceLine />
        </a>
        <a href="#contact">
          <AiOutlineContacts />
        </a>
      </nav>
    );
}
 
export default Nav;