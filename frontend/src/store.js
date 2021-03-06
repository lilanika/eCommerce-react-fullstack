/* here we connec tour reducers and middleware */ 

import {createStore, combineReducers,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const initialState = {}

const middleware = [thunk]


const reducer = combineReducers({})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store