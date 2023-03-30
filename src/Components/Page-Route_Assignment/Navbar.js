import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={style.Navbar}>
        <img
          className={style.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Solid_Bright_Green_Star_1.png"
        />
        <nav>
          <ul className={style.NavTabs}>
            <li>
              <Link className={style.link} to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
        <img
          className={style.profileIcon}
          src="https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-edit-profile-icon-png-image_758006.jpg"
        />
      </div>
    </>
  );
}
