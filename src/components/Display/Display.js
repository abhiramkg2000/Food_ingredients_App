import "./Display.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

export default function Display(props) {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  /*const [id, setId] = useState(
    props.id
      ? props.id
      : "https://api.edamam.com/api/recipes/v2/11286d0668553eeefd9124b359799b59?type=public&app_id=d03a021a&app_key=0afba21b8667c81d1d5d3258785db0b8"
  );*/

  /*if (loading === "false") {
    setId(
      "https://api.edamam.com/api/recipes/v2/11286d0668553eeefd9124b359799b59?type=public&app_id=d03a021a&app_key=0afba21b8667c81d1d5d3258785db0b8"
    );
  } else {
    setId(props.id);
  }*/

  console.log("in display url", props.id);

  useEffect(() => {
    axios
      .get(`${props.id}`)
      .then((res) => {
        //console.log("dispaly", res.data.hits);
        setMenu(res.data.recipe);
        setLoading(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [props.id]);

  return (
    <div className="display">
      {loading ? (
        <div>
          <div className="header">
            <h1>{menu.label}</h1>
            <div className="image">
              <img src={menu.images.REGULAR.url} alt="not found" />
            </div>
          </div>
          {console.log("in display menu", menu)}
          <div className="content">
            <div className="ingredients">
              <h2 className="ingredient-heading">Ingredients:</h2>
              {menu.ingredientLines.map((line, index) => {
                return (
                  <p key={index}>
                    {index + 1}) {line}
                  </p>
                );
              })}
            </div>
            <div className="info">
              <p>calories: {menu.calories}</p>
              <p>totalWeight: {menu.totalWeight}</p>
              <p>cuisineType: {menu.cuisineType}</p>
              <p>mealType: {menu.mealType}</p>
              <p>dishType: {menu.dishType}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader2">
          <ScaleLoader loading size={25} color="#000" />
        </div>
      )}
    </div>
  );
}

/*<form className="searchbar2">
        <input
          autoFocus
          type="text"
          placeholder="Search"
          className="search"
          //onChange={handleChange}
        />
      </form>

*/
/*<div className="header">
        <h1>{menu.label}</h1>
        <div className="image">
          <img src={menu.images.REGULAR.url} alt="not found" />
        </div>
      </div>
      {console.log("in display menu", menu)}
      <div class="content">
        <div className="ingredients">
          <h2>Ingredients</h2>
          {menu.ingredientLines.map((line, index) => {
            return (
              <p>
                {index + 1}) {line}
              </p>
            );
          })}
        </div>
        <div className="info">
          <p>calories: {menu.calories}</p>
          <p>totalWeight: {menu.totalWeight}</p>
          <p>totalTime: {menu.totalTime}</p>
          <p>cuisineType: {menu.cuisineType}</p>
          <p>mealType: {menu.mealType}</p>
          <p>dishType: {menu.dishType}</p>
        </div>
      </div>*/
