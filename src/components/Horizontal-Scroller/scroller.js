import image from "./../../Assets/Images/menu-icon.png";
import MentorCard from "./local Components/Mentor-Card";
import style from "./scroller.module.css";

export default function ScrollerUi() {
  const data = [
    {
      img: "",
      name: "Leslie Alexander",
      description: "Product Manager@Google india",
      exp: "4 Yrs Exp.",
    },

    {
      img: "https://images.pexels.com/photos/3645482/pexels-photo-3645482.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Ralph Edwards",
      description: "Product Manager@Google india",
      exp: "4 Yrs Exp.",
    },

    {
      img: "https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Albert Flores",
      description: "Product Manager@Google india",
      exp: "4 Yrs Exp.",
    },

    {
      img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Kathryn Murphy",
      description: "Product Manager@Google india",
      exp: "4 Yrs Exp.",
    },
    {
      img: "",
      name: "Leslie Alexander",
      description: "Product Manager@Google india",
      exp: "4 Yrs Exp.",
    },

    {
      img: "https://images.pexels.com/photos/3645482/pexels-photo-3645482.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Ralph Edwards",
      description: "Product Manager@Google india",
      exp: "4 Yrs Exp.",
    },

    {
      img: "https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Albert Flores",
      description: "Product Manager@Google india",
      exp: "4 Yrs Exp.",
    },

    {
      img: "https://images.pexels.com/photos/3370931/pexels-photo-3370931.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Kathryn Murphy",
      description: "Product Manager@Google india",
      exp: "4 Yrs Exp.",
    },
  ];

  return (
    <div className={style.scroller}>
      {data.map((ele) => (
        <MentorCard
          img={ele.img}
          name={ele.name}
          desc={ele.description}
          exp={ele.exp}
        />
      ))}
    </div>
  );
}
