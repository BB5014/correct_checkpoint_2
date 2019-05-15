import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.page.jsx";
import Gamepage from "./Game.page.jsx";

const MyRouter = props => {
   return (
      <>
         <Router>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/game/:name" component={Gamepage} />
            </Switch>
         </Router>
      </>
   );
};

export default MyRouter;
