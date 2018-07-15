import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
class PostList extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchData()}>Load Data</button>
        <div>{this.renderPosts()}</div>
      </div>
    );
  }
  renderPosts = () => {
    if (this.props.postList == null) {
      return <div>no data</div>;
    }
    const Posts = this.props.postList.map(post => (
      <div key={post.id}> {post.title} </div>
    ));
    return Posts;
  };
}

const mapStateToProps = state => {
  return {
    postList: state.postList
  };
};

export default connect(
  mapStateToProps,
  actions
)(PostList);
