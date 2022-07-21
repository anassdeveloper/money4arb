import NavBar from './Component/NavBar';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Mobile from './Pages/Mobile/Mobile';
import Web from './Pages/Web';
import Freelance from './Pages/Freelance';
import Start from "./Pages/Start/Start"

function App() {
  return (
    <Router>
        <div className="App">
           <NavBar />
           <div className="content">
             <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/mobile">
                    <Mobile />
                </Route>
                <Route path="/web">
                  <Web />
                </Route>
                <Route path="/freelance">
                   <Freelance />
                </Route>
                <Route path="/start">
                   <Start />
                </Route>
             </Switch>
           </div>
           <Footer />
        </div>
    </Router>
   
  );
}

export default App;
