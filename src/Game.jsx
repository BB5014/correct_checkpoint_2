import React from "react";

const Game = props => {
   return (
      <div style={{ border: "solid 1px black", marginBottom: "5px" }}>
         <h2>{props.name}</h2>
         <p>{props.description}</p>
         <img src={props.pochette} alt="" srcset="" />
         <button onClick={props.delete}>Supprimer</button>
      </div>
   );
};

export default Game;
