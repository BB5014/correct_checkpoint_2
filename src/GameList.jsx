import React, { Component } from "react";
import Game from "./Game";
import Axios from "axios";

class GameList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         gamelist: []
      };
      this.deleteChild = this.deleteChild.bind(this);
   }

   componentDidMount() {
      Axios.get("http://www.campus-bordeaux.ovh:3002/joysticks/api/games").then(response => {
         this.setState({ gamelist: response.data });
      });
   }

   deleteChild(index) {
      const filtered = this.state.gamelist.filter((_, i) => i !== index);
      this.setState({
         gamelist: filtered
      });
      // let { gamelist } = this.state;
      // gamelist.splice(id, 1);
      // this.setState({
      //    gamelist
      // });
   }

   render() {
      return (
         <>
            <h1>Hello GameList</h1>
            <div>
               {this.state.gamelist.map((game, index) => {
                  return <Game {...game} key={index} delete={this.deleteChild.bind(this, index)} />;
               })}
            </div>
         </>
      );
   }
}

export default GameList;
