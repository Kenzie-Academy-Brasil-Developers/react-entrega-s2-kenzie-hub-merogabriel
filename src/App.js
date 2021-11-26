import Routes from "./Routes";
import GlobalStyle from "./styles/global";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes
        auth={auth}
        setAuth={setAuth}
        user={user}
        setUser={setUser}
      ></Routes>
    </div>
  );
}

export default App;
