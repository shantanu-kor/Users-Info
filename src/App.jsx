import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "./store/userSlice";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // function to get the users
    const getUsers = async () => {
      try {
        console.log("Got Users");
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = response.data;
        // console.log(users);
        dispatch(userActions.renewUsers());
        dispatch(userActions.addUsers(users));
      } catch (err) {
        console.log("Returned Status Code:", err.response.status);
      }
    };
    getUsers();
    const searches = localStorage.getItem("searches");
    if (!searches) {
      localStorage.setItem("searches", "[]");
    }
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
