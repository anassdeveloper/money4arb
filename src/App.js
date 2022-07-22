import NavBar from './Component/NavBar';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Mobile from './Pages/Mobile/Mobile';
import Web from './Pages/Web/Web';
import Freelance from './Pages/Freelance/Freelance';
import Start from "./Pages/Start/Start"

function App() {

  const fnc = () =>{
    document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth' });

  }
  return (
    <Router>
        <div className="App">
           <NavBar />
           <div className="content">
             <Switch>
                <Route path="/money4arb">
                  <Home />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/mobile">
                    <Mobile fn = {fnc} />
                </Route>
                <Route path="/web">
                  <Web />
                </Route>
                <Route path="/freelance">
                   <Freelance />
                </Route>
                <Route path="/start">
                   <Start fn = {fnc}/>
                </Route>
             </Switch>
           </div>
           <Footer />
        </div>
    </Router>
   
  );
}

export default App;
