import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SearchBar from "../search/SearchBar";
import "./Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/recipes");
        setRecipes(res.data);
      } catch (error) {
        console.log(err);
      }
    };
  }, []);

  // const handleFiltersClick = () => {
  //   console.log("Filters button clicked");
  // };

  return (
    <div className="home-container">
      <header>
        <h1>Recipes</h1>
      </header>

      <SearchBar onSearch={handleSearch} />
      {/* <FiltersButton onClick={handleFiltersClick} /> */}

      <main>
        <Table stripped bordered hover size="sm">
          <thead>
            <tr>
              <th width="600">Recipe ID</th>
              <th width="600">Name of Recipe</th>
              <th width="600">Created By</th>
              <th width="600">Cuisine</th>
              <th width="600">Can Cook</th>
              <th width="600">Equipment</th>
              <th width="600">Time</th>
              <th width="600">Nutrition Label</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{recipe.created_by_user}</td>
                <td>{recipe.cuisine}</td>
                <td>{recipe.can_cook}</td>
                <td>{recipe.equipment}</td>
                <td>{recipe.time}</td>
                <td>{recipe.nutrition_label}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  );
};

export default Home;