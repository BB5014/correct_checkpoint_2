import React from "react";

const Gamepage = props => {
   return (
      <div>
         <h1>Hello {props.match.params.name}</h1>
         <img src={props.location.state.promo} />
         <p>
            <a href={props.location.state.trailer} target="_blank">
               youtube video
            </a>
         </p>
      </div>
   );
};

export default Gamepage;
