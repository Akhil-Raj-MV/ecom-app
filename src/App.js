import React from "react";
import {Switch} from 'react-router-dom'
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Switch>
            <PublicRoute path="/signin">
              <SignIn/>
            </PublicRoute>
            <PrivateRoute path="/">
              <Home/>
            </PrivateRoute>
          </Switch>
    </div>
  );
}

export default App;
