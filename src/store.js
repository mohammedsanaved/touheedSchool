import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { contactCreateReducer } from "./reducers/contactReducers";
import { eventListReducer, eventDetailReducer } from "./reducers/eventReducers";
import { staffListReducer } from "./reducers/staffReducers";

const reducer = combineReducers({
  contactCreate: contactCreateReducer,
  eventList: eventListReducer,
  eventDetail: eventDetailReducer,
  staffList: staffListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
