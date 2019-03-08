import $$observable from 'symbol-observable';

export var ActionTypes = {
    INIT: '@@redux/INIT'
  
    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */
};

var createStore = function(reducer, state, middleware) {

    // define all local variables
    var currentState;
    var currentListeners = [];
    
    
    
    
    // setup middleware
    if (middleware !== undefined && typeof middleware === 'function') {
      return middleware(createStore)(reducer, state);
    }
    
    
    // set the state || define how the state is set
    currentState = state;
    
    
    // dispatch function for updating the state
    var dispatch = function(action) {
      // use the reducer to update the state
      // returns updated state with the initial state and action as parameters
      currentState = reducer(currentState, action);
      
      for (var i = 0; i < currentListeners.length; i++) {
        currentListeners[i]();
      }
    }
      
    // set subscription to update all subscribed elements/containers
    var subscribe = function(listener) {
      // if the state has changed, update the state of all listeners
      listener.isSubscribed = true;
      
      // pushes listeners into the array of currentListeners but return unsubcribe function
      currentListeners.push(listener);
      
      return () => {
        if (listener.isSubscribed) {
          var indexToRemove=_.indexOf(currentListeners,listener);
          currentListeners.splice(indexToRemove,1);
        }
      }
    }
    
    
    // replace reducer function
    function replaceReducer(nextReducer) {
      currentReducer = nextReducer
      dispatch({ type: ActionTypes.REPLACE })
    }
    
    
    // getState function to get the new state
    var getState = function() {
      return currentState;
    }
    
    // observable functions for libraries thhat want to observer the state change
    function observable() {
      const outerSubscribe = subscribe
      return {
        subscribe(observer) {
          if (typeof observer !== 'object' || observer === null) {
            throw new TypeError('Expected the observer to be an object.')
          }
  
          function observeState() {
            if (observer.next) {
              observer.next(getState())
            }
          }
  
          observeState()
          const unsubscribe = outerSubscribe(observeState)
          return { unsubscribe }
        },
  
        [$$observable]() {
          return this
        }
      }
    }
    
    dispatch({ type: ActionTypes.INIT });
  
    return {
      dispatch,
      subscribe,
      getState,
      replaceReducer,
      [$$observable]:observable
    }
  }

  export default createStore;