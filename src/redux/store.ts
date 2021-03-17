import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {};

const rootReducer = combineReducers({

})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)) );

export default store;