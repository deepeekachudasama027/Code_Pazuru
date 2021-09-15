import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import draggable from "./components/screens/drag";
import thankyou from "./components/screens/thank_you";
import error_page from "./components/screens/error_page";
import start_page from "./components/screens/start";
import rules from "./components/screens/rules";
import no_entry from "./components/screens/no_entry";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={draggable} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <PrivateRoute exact path="/drag" component={draggable} />
          <PrivateRoute exact path="/thank_you" component={thankyou} />
          <PrivateRoute exact path="/rules" component={rules} />
          <PrivateRoute exact path="/start" component={start_page} />
          <PrivateRoute exact path="/no_entry" component={no_entry} />
          <PrivateRoute exact path="/*" component={error_page} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
