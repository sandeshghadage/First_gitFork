import "../App.css";
import Social from "./social/socialBadge";

export default function Card(Props) {
  return (
    <>
      <div id="card">
        <div id="cardContent">
          <img id="img" src={Props.image} />
          <p id="role">{Props.role}</p>
          <p id="name">{Props.name}</p>
          <p id="description">{Props.description}</p>
          <div id="footer">
            <div id="social">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
