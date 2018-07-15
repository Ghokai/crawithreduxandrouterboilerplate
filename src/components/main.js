import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Counter from "./counter";
import PostList from "./postList";

class About extends Component {
  render() {
    return <div>im About</div>;
  }
}

class More extends Component {
  render() {
    return <div>i ma More</div>;
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Counter} />
      <Route path="/about" component={About} />
      <Route path="/more" component={More} />
      <Route path="/posts" component={PostList} />
    </Switch>
  </main>
);

export default Main;
