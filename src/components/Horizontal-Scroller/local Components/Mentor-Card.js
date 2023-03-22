import style from "./../scroller.module.css";

export default function MentorCard(props) {
  return (
    <div className={style.mentorCard}>
      <div className={style.image}>
        <img src={props.img} />
      </div>
      <p className={style.MentorName}>{props.name}</p>
      <small className={style.MentorDesignation}>{props.desc}</small>
      <small className={style.MentorExp}>{props.exp}</small>
    </div>
  );
}
