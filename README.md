# substate-connect
Simple function to make SubState work better with ReactJS

[Demo repo](https://github.com/tamb/substate-demo)

## Example usage
```
import {connect} from 'substate-connect';
import substateInstance from './mystate.js';
/**
    MyComponent
*/

export default connect(substateinstance, {
    prop1: 'path.to.prop',
    prop2: 'name',
    prop3: 'location' 
    })(MyComponent);
```

## What the H does this do?
Similar to react-redux `connect` method.

You pass in a reference to the substate instance, so we can wire up the props, and you pass in an object mapping the prop names for the component (the keys), to the prop values you want (the path -- as a string -- to the chunk of state you need).  Then it returns a function which needs your component as an argument.  

Now it's all wired up.

## Why map the props?
Mapping props allows your component to have its own prop structure and not care what the global state structure is like. This allows for component reusability. 

## What about props through composition?
Pass those in as you normally would.  They will be alongside the props from the `connect` method.  This way you can pass functions into the component during normal composition. 
