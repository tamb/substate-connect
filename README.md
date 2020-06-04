# substate-connect
Higher Order Functions to use substate with React (soon Preact and Inferno)

[Demo repo](https://github.com/tamb/substate-demo)

## Example usage
### mapping state to props in component
```js
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

```js

### wrapping App in store instance
// App.js
import { Provide } from 'substate-connect';
import substateIntsance from './mystate.js';

/*

function App....

*/
const WiredApp = Provide(substateInstance, ["STATE_UPDATED"])(App);

export default WiredApp;
```

## What the H does this do?
Similar to react-redux `connect` method.

You pass in a reference to the substate instance, so we can wire up the props, and you pass in an object mapping the prop names for the component (the keys), to the prop values you want (the path -- as a string -- to the chunk of state you need).  Then it returns a function which needs your component as an argument.  

The `Provide` HOC needs the substate instance as a first argument.  The second argument is an array of `substate` `$type`s you want the App to `setState` too.  It's recommended to at least have `"STATE_UPDATED"` passed in the array.

Now it's all wired up.

## Why map the props?
Mapping props allows your component to have its own prop structure and not care what the global state structure is like. This allows for component reusability. 

## What about props through composition?
Pass those in as you normally would.  They will be alongside the props from the `connect` method.  This way you can pass functions into the component during normal composition. 
