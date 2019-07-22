import React from "react";
import PropTypes from "prop-types";
import { slugify } from "../helpers";

// TODO: Você deve verificar se a receita existe
const RecipePage = ({ recipe = [], match = { params: {} } }) => {
  const { receita = "" } = match.params;
  console.log("receita =>", receita);
  const filteredRecipes = recipe
    .filter(data => {
      return (
        slugify(data.title)
          .toLowerCase()
          .indexOf(receita.toLowerCase()) !== -1
      );
    })
    .map(data => {
      return {
        ...data,
        title: data.title,
        ingredients: data.ingredients
      };
    });
  return filteredRecipes.map((data, index) => {
    return (
      <div>
        <img className="card-img-top img-fluid" src={data.thumbnail} alt="" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {data.ingredients}
          </p>
        </div>
      </div>
    );
  });
};

RecipePage.propTypes = {
  recipe: PropTypes.object,
  match: PropTypes.object
};

export default RecipePage;
