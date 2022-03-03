import "./List.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuCard from "../MenuCard/MenuCard";
import "bootstrap/dist/js/bootstrap.bundle";
export default function List(props) {
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");

  let textInput = React.createRef();
  /*async function getAllTheMenus() {
    const API_URL = "www.themealdb.com/api/json/v1/1/search.php?f=a";
    let res = await fetch(API_URL);
    let data = await res.json();
    setMenu(data.meals);
    console.log(menu);
  }*/

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=d03a021a&app_key=0afba21b8667c81d1d5d3258785db0b8`
      )
      .then((res) => {
        console.log(res.data.hits);
        setMenu(res.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  let handleClick = () => {
    //console.log(textInput.current.value);
    setSearch(textInput.current.value);
    console.log(textInput.current.value);
  };

  let handleClick2 = () => {
    console.log(menu.data.recipe.label);
  };

  const childToParent = (childdata) => {
    //console.log(childdata);
    props.parentToApp(childdata);
  };
  /*const filteredMenu = menu.filter((menu) =>
    menu.recipe.label.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredMenu);*/

  return (
    <div className="list" id="home">
      <nav className="navbar  navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="searchbar1">
              <input
                autoFocus
                type="text"
                placeholder="Search for a Recipe"
                className="search"
                ref={textInput}
              />
              <button className="btn btn-dark" onClick={handleClick}>
                Search
              </button>
            </div>
            <div className="listitems">
              {menu.map((item, index) => {
                return (
                  <MenuCard
                    data={item}
                    key={index}
                    onclick={handleClick2}
                    childToParent={childToParent}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
/*

<div className="searchbar1">
              <input
                autoFocus
                type="text"
                placeholder="Search"
                className="search"
                ref={textInput}
              />
              <button className="btn btn-dark" onClick={handleClick}>
                click
              </button>
            </div>
            <div className="listitems">
              {menu.map((item, index) => {
                return (
                  <MenuCard
                    data={item}
                    key={index}
                    onclick={handleClick2}
                    childToParent={childToParent}
                  />
                );
              })}
            </div>*/
