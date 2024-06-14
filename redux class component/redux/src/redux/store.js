import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from "redux";
import reducerFunction from "./reducer";
const store=createStore(reducerFunction,applyMiddleware(thunk));
export default store
