import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../helpers";

const DEFAULT_IMG = "https://via.placeholder.com/350x300";

const RecipeItem = ({
  title = "",
  ingredients,
  img = DEFAULT_IMG,
  text = ""
}) => {
  return (
    <div className="col-sm-3 mt-4">
      <div className="card">
        <Link to={`recipe/${slugify(text)}`}>
          <img className="card-img-top img-fluid" src={img} alt={title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
