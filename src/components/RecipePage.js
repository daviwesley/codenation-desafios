import React from "react";
import PropTypes from "prop-types";

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ recipe }) => {
  if (!recipe) {
    return <h5>Recipe not found</h5>;
  }

  return (
    <div>
      <img
        className="card-img-top img-fluid"
        src={recipe.thumbnail}
        alt="https://via.placeholder.com/350x300"
      />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong> {recipe.ingredients}
        </p>
      </div>
    </div>
  );
};

RecipePage.propTypes = {
  recipe: PropTypes.object,
  match: PropTypes.object
};

export default RecipePage;
