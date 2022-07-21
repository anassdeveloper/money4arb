import data from "./Data";
import CardList from "./CardList";

import "./Mobile.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Prizes from "./Articles/Prizes/Prizes";
import Clip from "./Articles/Clip/Clip";
import Coin from "./Articles/Coin/Coin";
import Grward from "./Articles/Grward/Grward";

const Mobile = () => {

    
    return(
        <Router>
            <div className="mobile">
            <Switch>
                <div className="jeux container">
                    <Route path="/mobile/prizes">
                        <Prizes />
                    </Route>
                    <Route path="/mobile/clipclap">
                        <Clip />
                    </Route>
                    <Route path="/mobile/coinpop">
                        <Coin />
                    </Route>
                    <Route path="/mobile/greward">
                         <Grward />
                    </Route>
                </div>
            </Switch>
            <main>
              <CardList database = {data} />
            </main>
        </div>
        </Router>
    )
}
export default Mobile;