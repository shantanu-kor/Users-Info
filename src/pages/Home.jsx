import React, { useEffect, useState } from "react";
import SearchName from "../components/SearchName";
import UserList from "../components/UserList";
import { useSelector } from "react-redux";

const Home = () => {
  // get list of all users
  const usersOrignal = useSelector((state) => state.user.users);
//   console.log(usersOrignal);

  // users
  const [users, setUsers] = useState(usersOrignal);
  // sort
  const [sort, setSort] = useState(false);
  // sort acending
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    setUsers(usersOrignal);
  }, [usersOrignal])

  useEffect(() => {
    if (!sort) {
      setUsers(usersOrignal);
    } else {
      if (sortAsc) {
        const users1 = Array.from(usersOrignal);
        users1.sort((a, b) => {
          const A = a.name.toLowerCase();
          const B = b.name.toLowerCase();
          if (A < B) {
            return -1;
          }
          if (A > B) {
            return 1;
          }
          return 0;
        });
        setUsers(users1);
      } else {
        const users1 = Array.from(usersOrignal);
        users1.sort((a, b) => {
          const A = a.name.toLowerCase();
          const B = b.name.toLowerCase();
          if (A > B) {
            return -1;
          }
          if (A < B) {
            return 1;
          }
          return 0;
        });
        setUsers(users1);
      }
    }
  }, [sort, sortAsc]);

  const sortHandler = () => {
    setSort((prevState) => !prevState);
  };

  const orderHandler = () => {
    setSortAsc((prevState) => !prevState);
  };

  return (
    <>
      <h2 className="text-center md:m-4 m-2 md:text-3xl text-1xl">All users</h2>
      <SearchName />
      <div className="text-center md:my-7 my-3 md:text-2xl text-lg">
        {sort && (
          <button
            className="p-1 rounded bg-cyan-700 text-white"
            onClick={orderHandler}
          >
            {sortAsc ? "Sort DESC" : "Sort ASC"}
          </button>
        )}
        <br />
        <br />
        <button
          className="p-1 rounded bg-lime-700 text-white"
          onClick={sortHandler}
        >
          {sort ? "Cancel Sort" : "Sort"}
        </button>
      </div>
      <UserList users={users} />
    </>
  );
};

export default Home;
