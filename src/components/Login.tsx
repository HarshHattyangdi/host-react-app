import React from "react";
import auth from "./Auth";
const Login = (props: any) => {
  return (
    <div>
      <input type="text" placeholder="Enter Username" />
      <input type="password" placeholder="Enter Password" />
      <input
        type="Submit"
        value="Login"
        onClick={() => {
          auth.login(() => {
            props.history.push("/content");
          });
        }}
      />
    </div>
  );
};

export default Login;
