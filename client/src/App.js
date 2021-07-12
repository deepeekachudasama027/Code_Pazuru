import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import SortableItems from "./components/screens/drag";
import thankyou from "./components/screens/thank_you";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={LoginScreen}/>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <PrivateRoute exact path="/drag" component={SortableItems} />
          <PrivateRoute exact path="/thank_you" component={thankyou} />
        </Switch>
      
      </div>
    </Router>
  );
};

export default App;
