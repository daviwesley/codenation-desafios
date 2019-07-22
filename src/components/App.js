import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
// componentes
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
// dados
import recipes from "../sample_data/recipes.json";

class App extends Component {
  render() {
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
              path="/recipe/:receita"
              children={({ match }) => null}
              render={props => (
                <RecipePage {...props} recipe={recipes.results} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
