import React from "react";

function User({ user }: any) {
  return (
    <div className="card">
      <h3>{user.name.first}</h3>
      <img src={user.picture.large} alt="" />
    </div>
  );
}

export default User;
