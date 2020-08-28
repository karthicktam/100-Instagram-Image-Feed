import React from "react";
import "./styles.css";

export default function App() {
  const rows = 10;

  const unsplashURL = "https://source.unsplash.com/random/";

  const getRandomNr = () => {
    return Math.floor(Math.random() * 10) + 300;
  };

  const getRandomSize = () => {
    return `${getRandomNr()}x${getRandomNr()}`;
  };

  const renderImage = (rows) => {
    const imageArr = [];
    for (let i = 0; i < rows * 3; i++) {
      imageArr.push(<img src={`${unsplashURL}${getRandomSize()}`} alt="" />);
    }

    return imageArr.map((el) => el);
  };

  return (
    <div className="App">
      <h1 className="title">Instagram Image Feed</h1>
      <p className="text">
        (It's responsive to the core!{" "}
        <span role="img" aria-label="">
          😉
        </span>
        )
      </p>
      <div className="container">{renderImage(rows)}</div>
    </div>
  );
}
