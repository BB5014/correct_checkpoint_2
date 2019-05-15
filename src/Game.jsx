import React from "react";
import MyButton from "./Button.jsx";

const Game = props => {
   return (
      <div style={{ border: "solid 1px black", marginBottom: "5px" }}>
         <h2>{props.name}</h2>
         <MyButton {...props} />
         <button onClick={props.delete}>Supprimer</button>
      </div>
   );
};

export default Game;
