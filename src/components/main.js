import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Counter from "./counter";
import PostList from "./postList";
import Header from "./header";

const About = () => {
  return <div>This is About</div>;
};

const More = () => {
  return <div>This is More</div>;
};

const NotFound = () => <div>404 NotFound</div>;

const Main = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/posts" component={PostList} />
        <Route path="/about" component={About} />
        <Route path="/more" component={More} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default Main;
