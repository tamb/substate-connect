import React from 'react';
/**
 * 
 * @param {Object} state - Reference to SubState instance 
 * @param {Object} chunk  - object of props you want maps to from state to props
 */
const connect = (state, chunk)=> Comp => props =>{
    const newProps = {};
    for (let key in chunk){
        newProps[key] = state.getProp(chunk[key]);
    }
    return (<Comp {...newProps} {...props} />)
};

export default {
    connect
}