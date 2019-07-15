import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [], searchString = "" }) => {
  function getHighlightedText(text, higlight) {
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === higlight.toLowerCase() ? (
            <mark key={i}>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  }

  const filteredRecipes = recipes
    .filter(data => {
      return (
        data.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
        data.ingredients.toLowerCase().indexOf(searchString.toLowerCase()) !==
          -1
      );
    })
    .map(data => {
      return {
        ...data,
        title: getHighlightedText(data.title, searchString),
        text: data.title,
        ingredients: getHighlightedText(data.ingredients, searchString)
      };
    });
  return (
    <div className="row">
      {filteredRecipes.length !== 0 ? (
        filteredRecipes.map((data, index) => {
          return (
            <RecipeItem
              key={index}
              title={data.title}
              img={data.thumbnail}
              text={data.text}
              ingredients={data.ingredients}
            />
          );
        })
      ) : (
        <div>
          <h3 className="row justify-content-center">Não Encontrado</h3>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
