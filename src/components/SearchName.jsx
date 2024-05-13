import { Button, Label, ListGroup, TextInput } from "flowbite-react";
import { MdRecentActors } from "react-icons/md";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchName = () => {
  // to store searches
  const [searches, setSearches] = useState([]);
  // to show searches toggler
  const [searchToggle, setSearchToggle] = useState(false);
  // ref to the search
  const searchedNameRef = useRef();

  const navigate = useNavigate();

  // form submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    const name = searchedNameRef.current.value;
    const names = JSON.parse(localStorage.getItem("searches"));
    if (!names.find((item) => item === name)) {
      names.push(name);
    }
    localStorage.setItem('searches', JSON.stringify(names));
    navigate(`/search/${name}`);
  };

  //set the name from searches as input
  const nameHandler = (name) => {
    searchedNameRef.current.value = name;
  }

  // to show searches
  const searchHandler = () => {
    setSearchToggle((prevState) => {
      if (!prevState) {
        setSearches(JSON.parse(localStorage.getItem("searches")));
      }
      return !prevState;
    });
  };

  return (
    <>
      <form
        className="mx-auto flex max-w-md flex-col gap-4"
        onSubmit={submitHandler}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name to Search" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="John Doe"
            ref={searchedNameRef}
            required
          />
          <Button className="my-2" onClick={searchHandler}>
            <MdRecentActors className="text-2xl mx-2" /> Previous Searches
          </Button>
          <div>
            {searchToggle && (
              <ListGroup>
                {searches.map((item, index) => (
                  <ListGroup.Item key={index} onClick={nameHandler.bind(null, item)}>{item}</ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>
        </div>
        <Button type="submit" className="bg-indigo-700">
          Search
        </Button>
      </form>
    </>
  );
};

export default SearchName;
