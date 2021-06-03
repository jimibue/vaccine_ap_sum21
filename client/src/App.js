import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Things from "./pages/Things";
import Ati from "./pages/Ati";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/things" component={Things} />
        <Route exact path="/ati" component={Ati} />
      </Switch>
    </>
  );
}

export default App;
