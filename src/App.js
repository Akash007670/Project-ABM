import "./App.css";
import { Navbar, Sidebar } from "./components";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-wrapper">
        <Sidebar />
        <div className="route-wrapper">
          <Switch>
            <Route exact path="/" render={() => <div>Product Page</div>} />
            <Route
              exact
              path="/organisation-profile"
              render={() => <div>Organisation Page</div>}
            />
            <Route
              exact
              path="/access-control"
              render={() => <div>Access Page</div>}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
