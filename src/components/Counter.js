import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <div>
          <button onClick={() => this.props.upCounter()}>up</button>
        </div>
        <div>
          <button onClick={() => this.props.downCounter()}>down</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  actions
)(Counter);
