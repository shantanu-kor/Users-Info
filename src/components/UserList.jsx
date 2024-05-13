import { Card, ListGroup } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

// list the users and some of their data
const UserList = ({ users }) => {
  // console.log(users);
  return (
    <ListGroup className="md:my-7 my-3">
      {users.map((item) => (
        <Link to={`/details/${item.id}`} key={item.id}>
          <ListGroup.Item className="border border-black">
            <div className="mx-auto">
              <h3 className="md:text-3xl text-lg">{item.name}</h3>
              <div className="md:text-2xl text-sm">
                <h3>Username: {item.username}</h3>
                <h3>Email: {item.email}</h3>
                <h3>Website: {item.website}</h3>
              </div>
            </div>
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
};

export default UserList;
