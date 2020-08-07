import React from "react";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import "./Card.css";
const Card = () => {
  return (
    <div className="big">
      <div className="small">
        <img className="image" src={image1} alt="sample" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          since the 1500s, when an unknown printer took a galley of type and
          <br />
          scrambled it to make a type specimen book. It has survived not only
          <br />
          five centuries, but also the leap into electronic typesetting,
          <br />
          remaining essentially unchanged.
        </p>
      </div>
      <hr />
      <div className="carpet">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          since the 1500s, when an unknown printer took a galley of type and
          <br />
          scrambled it to make a type specimen book. It has survived not only
          <br />
          five centuries, but also the leap into electronic typesetting,
          <br />
          remaining essentially unchanged.
        </p>
        <img className="image" src={image2} alt="sample" />
      </div>
      <hr />

      <div className="blanket">
        <img className="image" src={image3} alt="sample" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          since the 1500s, when an unknown printer took a galley of type and
          <br />
          scrambled it to make a type specimen book. It has survived not only
          <br />
          five centuries, but also the leap into electronic typesetting,
          <br />
          remaining essentially unchanged.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Card;
