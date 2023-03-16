import "./gallery.css";
import { useState } from "react";

export default function Gallery() {
  // let index = 0;
  const [index, setIndex] = useState(0);
  const imageArr = [
    "https://images.pexels.com/photos/15379310/pexels-photo-15379310.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/15791780/pexels-photo-15791780.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/14318652/pexels-photo-14318652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/13164423/pexels-photo-13164423.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  function ChangeImage() {
    const len = imageArr.length;
    if (index + 1 == len) {
      setIndex((index + 1) % imageArr.length);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div id="galleryContainer">
      <div id="imageBox">
        <img id="pic" src={imageArr[index]} />
      </div>
      <div id="buttonBox">
        <button onClick={ChangeImage}>Change Pic</button>
      </div>
    </div>
  );
}
