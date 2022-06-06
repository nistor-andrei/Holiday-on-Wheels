import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/Standard Collection 19.svg";
import { ButtonLogin } from "../reusable/ButtonLogin";

const Navbar: FC = () => {
  return (
    <div className={styles.listContainer}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className={styles.list}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeStyle : undefined
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/rent"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : undefined
          }
        >
          Rent Deals
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : undefined
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : undefined
          }
        >
          FAQ
        </NavLink>
      </ul>
      <ul className={styles.loginButton}>
        <li>
          <ButtonLogin>Login</ButtonLogin>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
