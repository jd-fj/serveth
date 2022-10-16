import React from "react";

const CustomButton = (props) => (
  <button 
  style={{
    fontSize: 100,
    color: "rgb(247, 227, 243)",
    fontFamily: "courier",
    // textEmphasis: "triangle filled yellow",
    // textEmphasis: "bold",
    backgroundColor: "rgb(190, 127, 55)",
    padding: "3%",
    fontWeight: "bolder",
    // border: "5px solid rgb(51, 31, 31)"
    border: "none",
    backgroundImage: 
      "linear-gradient(rgb(237, 169, 187), rgb(207, 196, 233)",
    boxShadow: "2px 2px 1px #f700ff30, 10px 10px 6px rgb(255, 254, 214)"
  }}
  type="submit">
    {props.buttonText}
  </button>
)

export default CustomButton;