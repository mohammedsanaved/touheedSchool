import {
  SCHOOL_LIST_FAIL,
  SCHOOL_LIST_REQUEST,
  SCHOOL_LIST_SUCCESS,
} from "../constants/schoolConstants";

export const schoolListReducer = (
  state = { schools: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case SCHOOL_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case SCHOOL_LIST_SUCCESS:
      return { ...state, loading: false, schools: action.payload };
    case SCHOOL_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
