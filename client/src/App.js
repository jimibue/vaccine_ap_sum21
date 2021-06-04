import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Bugs from "./pages/Bugs";
import Kat from "./pages/Kat";
import Landon from "./pages/Landon";
import James from "./pages/James";
import Things from "./pages/Things";
import Ati from "./pages/Ati";
import Bug from "./pages/Bug";
import BugForm from "./pages/BugForm";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Bugs} />
        <Route exact path="/bugs/new" component={BugForm} />
        <Route exact path="/bugs/:id" component={Bug} />
        <Route exact path="/about" component={About} />
        <Route exact path="/kat" component={Kat} />
        <Route exact path="/things" component={Things} />
        <Route exact path="/ati" component={Ati} />
        <Route exact path='/landon' component={Landon} />
        <Route exact path="/james" component={James} />
        bug here
      </Switch>
    </>
  );
}

export default App;
