import React from "react";
import "../assets/css/homePeges.css"
export const CarouselText = ({ textH1, textH3, textH5, textH2, textP, textP1 }) => {
  return (
    <div className="carouselComponent ">
      <h1>{textH1}</h1>
      <h2>{textH2}</h2>
      <h3>{textH3}</h3>
      <h5>{textH5}</h5>
      <p>{textP}</p>
      <h3 dangerouslySetInnerHTML={{ __html: textP1 }} />
    </div>
  );
};
