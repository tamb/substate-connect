import React, { Component } from "react";
/**
 *
 * @param {Object} state - Reference to SubState instance
 * @param {Object} chunk  - object of props you want maps to from state to props
 */
const connect = (state, chunk) => (Comp) => (props) => {
  const newProps = {};
  for (let key in chunk) {
    newProps[key] = state.getProp(chunk[key]);
  }
  return <Comp {...newProps} {...props} />;
};

const Provide = (store, triggers, onMount) => (Comp) => {

  return class extends Component{
    componentDidMount(){
      triggers.forEach(actionName => {
        store.on(actionName, ns => this.setState(ns));
      });
      onMount? onMount.call(this, store, triggers) : null;
    }

    render(){
      return <Comp {...this.state} {...this.props} />;
    }
  }
    
};
export { connect, Provide };
