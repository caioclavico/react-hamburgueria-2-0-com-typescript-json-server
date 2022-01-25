import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Route } from "./route";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);
