import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { contactCreateReducer } from "./reducers/contactReducers";
import { eventListReducer, eventDetailReducer } from "./reducers/eventReducers";
import { staffListReducer } from "./reducers/staffReducers";
import { schoolListReducer } from "./reducers/schoolReducers";
import {
  allSchoolsListReducer,
  latestEventReducer,
} from "./reducers/LandingPageReducers";

const reducer = combineReducers({
  contactCreate: contactCreateReducer,
  eventList: eventListReducer,
  eventDetail: eventDetailReducer,
  staffList: staffListReducer,
  schoolList: schoolListReducer,
  latestEvent: latestEventReducer,
  allSchoolsList: allSchoolsListReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
