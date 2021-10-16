import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Navibar from "./Navibar";
import { Row, Col } from "react-bootstrap";

function Content() {
  const [users, setUsers] = useState([]);
  const [count] = useState(10);
  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${count}&nat=us,dk,fr,gb`)
      .then((res: any) => setUsers(res.data.results));
  }, [count]);

  const fetchUsers = () => {
    setTimeout(() => {
      axios
        .get(`https://randomuser.me/api/?results=${count}&nat=us,dk,fr,gb`)
        .then((res: any) => setUsers(users.concat(res.data.results)));
    }, 1000);
  };

  return (
    <div>
      <Navibar />
      <InfiniteScroll
        dataLength={users.length}
        next={fetchUsers}
        hasMore={true}
        loader={<h4>Loading.....</h4>}
      >
        <Row>
          <Col md={3} lg={3}></Col>
          <Col sm={12} md={6} lg={6}>
            {users.map((user: any) => (
              <User key={user.login.uuid} user={user} />
            ))}
          </Col>
        </Row>
      </InfiniteScroll>
    </div>
  );
}

export default Content;
