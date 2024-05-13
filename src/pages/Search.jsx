import React from "react";
import SearchName from "../components/SearchName";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";

const Search = () => {
  // get searched name from URL
  const { name } = useParams();
  // get all users
  const users = useSelector((state) => state.user.users);

  return (
    <>
      <h2 className="text-center md:m-4 m-2 md:text-3xl text-1xl">
        Searches for : {name}
      </h2>
      <SearchName />
      <UserList
        // filter users who have the searched name in their name
        users={users.filter(
          (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
        )}
      />
      <div className="text-center md:my-7 my-3">
        <Link to="/" className="p-2 bg-amber-500 rounded">
          To Home
        </Link>
      </div>
    </>
  );
};

export default Search;
