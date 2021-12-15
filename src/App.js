import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Changepassword from "./components/changePassword";
import Emailsent from "./components/emailSent";
import Forgotpassword from "./components/forgotPassword";
import Login from "./components/login";
import Passwordresetsuccessfull from "./components/passwordResetSuccessfull";
import Register from "./components/register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route
            path="/users/forgot-password/:userid/:token"
            component={Changepassword}
          />
          <Route path="/forgotpassword" component={Forgotpassword} />
          <Route path="/emailsent" component={Emailsent} />
          <Route
            path="/password-reset-successfull"
            component={Passwordresetsuccessfull}
          />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
