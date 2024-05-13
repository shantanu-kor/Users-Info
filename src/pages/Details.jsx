import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  // get id from URL
  const { id } = useParams();
  // get all users
  const users = useSelector((state) => state.user.users);
  //   console.log(users);
  // filter user with specified id
  const user = users.filter((item) => item.id === Number(id))[0];

  return (
    <>
      <h2 className="text-center md:m-4 m-2 md:text-3xl text-1xl">
        {user.name}
      </h2>
      <div className="text-center md:m-2 m-1 md:text-2xl text-lg">
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Website: {user.website}</h3>
        <h3>Phone: {user.phone}</h3>
      </div>
      <br />
      <h3 className="text-center md:m-2 m-1 md:text-2xl text-lg">
        Company: {user.company.name}
      </h3>
      <div className="text-center md:m-2 m-1 md:text-xl text-sm">
        <h3>Catch Phrase: {user.company.catchPhrase}</h3>
        <h3>BS: {user.company.bs}</h3>
      </div>
      <br />
      <h3 className="text-center md:m-2 m-1 md:text-2xl text-lg">
        Address: {user.address.suite}, {user.address.street},{" "}
        {user.address.city}, ({user.address.zipcode})
      </h3>
      <div className="text-center md:my-7 my-3">
        <Link to="/" className="p-2 bg-amber-500 rounded">
          To Home
        </Link>
      </div>
    </>
  );
};

export default Details;
