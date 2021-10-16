import React from "react";
import { withRouter } from "react-router-dom";
import auth from "./Auth";

const Navbar = (props: any) => {
  return (
    <div>
      Hello User
      <input
        type="button"
        value="Logout"
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      />
    </div>
  );
};

export default withRouter(Navbar);
