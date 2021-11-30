import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Particle from "./Pages/Particle/Particle";
import BarWave from "react-cssfx-loading/lib/BarWave";
import { Hypnosis } from "react-cssfx-loading/lib";
import { useEffect, useState } from "react";
import Details from './Pages/Home/Projects/Details'
import About from "./Pages/About";
import Blogs from "./Pages/Home/Blogs/Blogs";

function App() {

  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
  setTimeout(() => {
      setLoading(false)
  

    },1500)
  }, []);
  const loader = {
    position:"absolute",
    left:'50%',
    top:"50%",
    transform:"translate(-50%,-50%)"
  }
  return (
    
    <div className="App">
      {loading ?   
      <div style={ loader }><Hypnosis /></div>
    : 
    <BrowserRouter>
   
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blogs />
          </Route>
        </Switch>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
