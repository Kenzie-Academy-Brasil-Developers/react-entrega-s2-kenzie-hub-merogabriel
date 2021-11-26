import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";

const Routes = ({ auth, setAuth, setUser, user }) => {
  useEffect(() => {
    const token = localStorage.getItem("@kenziehub:token");
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/signup">
        <Signup auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/users/:id">
        <Home auth={auth} setAuth={setAuth} setUser={setUser} user={user} />
      </Route>
    </Switch>
  );
};

export default Routes;
