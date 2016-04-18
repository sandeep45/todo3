import {Dispatcher} from 'flux';

const myDispatcher = new Dispatcher();

export function register( callback ) {
  console.log(myDispatcher.register);
  return myDispatcher.register( callback );
}

export function dispatch( payload ){
  console.log("in app-dispatcher.js call dispatch with: ", payload)
  myDispatcher.dispatch(payload);
}