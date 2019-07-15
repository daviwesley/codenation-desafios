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
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }
  onChange = e => {
    const { history } = this.props;
    history.push(`/${e.target.value}`);
  };
  render() {
    const { searchString } = this.props.match.params;
    console.log("searchString=>", searchString);
    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar searchString={searchString} onChange={this.onChange} />
        )}/>
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
              path="/recipe/:receita"
              render={props => (
                <RecipePage {...props} recipes={recipes.results} />
              )}
            />
            <Route
              path="/:searchString?"
              render={props => (
                <Home
                  {...props}
                  searchString={props.match.params.searchString}
                  recipes={recipes.results}
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
