import style from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={style.mainContent}>
      <h1>Mat Simon</h1>
      <small>Age : 25 years</small>
      <small>Location : India</small>
      <p>
        I am an UI/UX developer I am responsible for designing and implementing
        the user interface and user experience components of a website. This
        involves creating visually appealing and user-friendly interfaces that
        provide a seamless experience for the end user.
      </p>
    </div>
  );
}
