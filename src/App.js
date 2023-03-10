import logo from "./logo.svg";
import "./App.css";
import Card from "./Cards/card";

function App() {
  const user1 = {
    name: "Amit",
    image: "https://images.pexels.com/photos/118",
    designation: "Graphic Designer",
    description:
      "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.",
  };

  const user2 = {
    name: "Ruhi",
    image:
      "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups.",
    designation: "Singer",
  };

  return (
    <div>
      <div id="InnerContainer">
        <Card
          name={user1.name}
          image={user1.image}
          role={user1.designation}
          description={user1.description}
        />
        <Card
          name={user2.name}
          image={user2.image}
          role={user2.designation}
          description={user2.description}
        />
      </div>
    </div>
  );
}

export default App;
