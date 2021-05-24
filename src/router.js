import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Course from "./pages/Course";
import Class from "./pages/Class";
import Register from "./pages/Register";
import { isSignedIn } from "./services/security";

function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return (
      <>
        <Route {...rest}>{children}</Route>
      </>
    );
  } else {
    return <Redirect to="/" />;
  }
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>

        <PrivateRoute path="/course">
          <Course />
        </PrivateRoute>

        <PrivateRoute path="/class">
          <Class />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
