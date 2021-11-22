import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenziehub:token");

    if (token) {
      return setAuth(true);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/:id">
        <Home auth={auth} />
      </Route>
    </Switch>
  );
};

export default Routes;
