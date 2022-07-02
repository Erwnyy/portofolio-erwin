import "./nav.css";
import {NavLink} from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser, AiOutlineContacts } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
        <NavLink exact to="/"  activeClassName="active-nav">
            <AiOutlineHome className="icon " />
        </NavLink>
        <NavLink to="/dashboard" activeClassName="active-nav">
            <AiOutlineUser className="icon" />
        </NavLink>
        <NavLink to="/aboutme" activeClassName="active-nav">
            <TiGroupOutline className="icon" />
        </NavLink>
        <NavLink to="#" activeClassName="active-nav">
            <AiOutlineContacts className="icon" />
        </NavLink>
        <NavLink to="#" activeClassName="active-nav">
            <BsArrowDownCircle className="icon" />
        </NavLink>
    </div>
  );
}


let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive();
    icon.classList.add('active-nav');
  })
})

const changeactive = () => {
  Icons.forEach(icon => {
    icon.classList.remove('active-nav')
  })
}

export default Navbar;
