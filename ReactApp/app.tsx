import * as React from "react";
import { render } from "react-dom";
import { CreateUser } from "./Components/CreateUser";
import { SignInUser } from "./Components/SigninUser";
import { CallApi } from "./Components/CallApi";
import UserInfo from "./Components/UserInfo";

const App = () => (
  <React.Fragment>
    <div style={{ display: "flex" }}>
      {/*never ever do inline styles*/}
      <CreateUser />
      <div style={{ flex: 1 }}>
        <SignInUser />
      </div>
      <div style={{ flex: 1 }}>
        <CallApi />
      </div>
    </div>
    <UserInfo />
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
