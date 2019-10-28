import React from "react";
//import "./Sunset.css";


const Sunset = props => (
  <div className="sunset" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Sunset;