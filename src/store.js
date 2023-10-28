import { createStore, applyMiddleware } from'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

//estado inicial, se llenará con variables
const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(...middleware)
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;