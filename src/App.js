import About from "./parts/About";
import Home from "./parts/Home";
import Navbar from "./parts/Navbar";
import Skills from "./parts/Skills";
import { Switch, Route } from "react-router-dom";
import Projects from "./parts/Projects";
import Contact from "./parts/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
