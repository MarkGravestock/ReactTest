import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import { increment, decrement } from './actions'
import { counterOperation } from './reducers'

const store = createStore(counterOperation, {count: 0}, applyMiddleware(createLogger()));

store.dispatch(increment);
store.dispatch(increment);
store.dispatch(decrement);
