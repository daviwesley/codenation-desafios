import React, { Component } from "react";
import { Route, Switch, matchPath } from "react-router-dom";
import { withRouter } from "react-router";
// componentes
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
// dados
import recipes from "../sample_data/recipes.json";
import { slugify } from "../helpers";
class App extends Component {
  // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/matchPath.md
  getSearchString = () => {
    const match = matchPath(this.props.location.pathname, {
      path: "/:searchString",
      exact: true
    });

    return match ? match.params.searchString : "";
  };
  render() {
    console.log(this.getSearchString());
    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Route
          path="/:searchString?"
          render={props => (
            <Navbar
              {...props}
              searchString={
                props.match ? props.match.params.searchString || "" : ""
              }
            />
          )}
        />
        <div className="container mt-10">
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Home {...props} searchString={""} recipes={recipes.results} />
              )}
            />
            <Route
              exact
              path="/:searchString?"
              render={props => (
                <Home
                  {...props}
                  searchString={props.match.params.searchString}
                  recipes={recipes.results}
                />
              )}
            />
            <Route
              exact
              path="/recipe/:title"
              render={({
                match: {
                  params: { title }
                }
              }) => (
                <RecipePage
                  recipe={
                    recipes.results.filter(recipe => {
                      return slugify(recipe.title)
                        .toLowerCase()
                        .includes(title.toLowerCase());
                    })[0]
                  }
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
