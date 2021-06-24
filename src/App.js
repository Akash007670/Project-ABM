import "./App.css";
import { Navbar, ScreenOne, Sidebar } from "./components";
import { Switch, Route } from "react-router-dom";
import TableDataProvider from "./context";

function App() {
  return (
    <TableDataProvider>
      <div className="App">
        <Navbar />
        <div className="main-wrapper">
          <Sidebar />
          <div className="route-wrapper">
            <Switch>
              <Route exact path="/" render={() => <ScreenOne />} />
              <Route
                exact
                path="/organisation-profile"
                render={() => <ScreenOne />}
              />
              <Route
                exact
                path="/access-control"
                render={() => <ScreenOne />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </TableDataProvider>
  );
}

export default App;
