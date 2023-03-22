import React from "react";
import style from "./Navbar.module.css";
import { useState } from "react";
import MenuOpenUi from "./Local Components/menuItems";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(true);
  }

  return (
    <fragment>
      <nav className={style.mainNav}>
        <div className={style.logo}>
          <h1>OnClick</h1>
          {/* <hr /> */}
          <ul className={style.navBarStart}>
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>

        <ul className={style.navBarEnd}>
          <li>Login</li>
          <div className={style.signUpBtn}>Sign Up</div>
        </ul>
        {!menuOpen ? (
          <img
            className={style.menuBtn}
            onClick={handleMenu}
            src="https://freesvg.org/img/menu-icon.png"
          />
        ) : (
          ""
        )}
        <div>
          {menuOpen ? (
            <MenuOpenUi click={() => setMenuOpen(false)} />
          ) : (
            <div></div>
          )}
        </div>
      </nav>
      {/* <div>
        <img
          src={
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          }
          alt="xyz.jpg"
        />
      </div> */}
    </fragment>
  );
}
