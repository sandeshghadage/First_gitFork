import style from "./../Navbar.module.css";

export default function MenuOpenUi(props) {
  return (
    <div className={style.menuList}>
      <img
        onClick={props.click}
        className={style.crossButton}
        src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
      />
      <ul>
        <li>Home</li>
        <hr />
        <li>Service</li>
        <hr />
        <li>Contact</li>
        <hr />
        <li>About Us</li>
      </ul>
    </div>
  );
}
