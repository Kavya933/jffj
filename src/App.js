import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" >
           <Home/>
          </Route>
          <Route exact path="/about" >
            <AboutMe />
          </Route>
          <Route exact path="/education" >
            <Education />
          </Route>
          <Route exact path="/skill">
            <Skill />
          </Route>
          <Route exact path="/project" >
            <Project />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
