import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import About from "./pages/About";
import Home from "./pages/Home";
import Kat from "./pages/Kat";
import Landon from "./pages/Landon";
import James from "./pages/James";
import Things from "./pages/Things";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/kat" component={Kat} />
        <Route exact path="/things" component={Things} />
        <Route exact path='/landon' component={Landon} />
        <Route exact path="/james" component={James} />
      </Switch>
    </>
  );
}

export default App;
