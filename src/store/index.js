
// create store
export default function createStore(reducer) {
  // init state
  let state = null;
  // init subscribe
  let listeners = [];
  // get state value
  const getState = () => state;
  // subscribe render page methods
  const subscribe = (listener) => listeners.push(listener);
  // update page state value on action type
  const dispatch = (action) => {
    // get new state value on action type
    state = reducer(state, action);
    // excute subscribe method that repeat excute render methods
    listeners.forEach(listener => listener());
  }

  // first render and get first state
  dispatch({});

  return { getState, subscribe, dispatch }
}
