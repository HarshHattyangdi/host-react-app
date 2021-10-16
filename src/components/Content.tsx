import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";

function Content() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=10&nat=us,dk,fr,gb`)
      .then((res: any) => setUsers(res.data.results));
  }, []);

  return (
    console.log(users),
    (
      <div>
        <h2>Inside Contents Page</h2>
        {users.map((user: any) => (
          <User key={user.login.uuid} user={user} />
        ))}
      </div>
    )
  );
}

export default Content;
