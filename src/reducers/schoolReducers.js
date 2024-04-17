import { LANDING_PAGE_ALL_SCHOOL_REQUEST } from "../constants/LandingPageContants";
import {
  SCHOOL_DETAIL_FAIL,
  SCHOOL_DETAIL_REQUEST,
  SCHOOL_DETAIL_SUCCESS,
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
// export const schoolDetailsReducer = (
//   state = { schoolDetails: [], loading: false, error: null },
//   action
// ) => {
//   switch (action.type) {
//     case SCHOOL_DETAIL_REQUEST:
//       return { ...state, loading: true, error: null };
//     case SCHOOL_LIST_SUCCESS:
//       return { ...state, loading: false, schoolDetails: action.payload };
//     case SCHOOL_DETAIL_FAIL:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

export const schoolIndividualDetailReducer = (
  state = { school: {} },
  action
) => {
  switch (action.type) {
    case SCHOOL_DETAIL_REQUEST:
      return { loading: true, ...state };

    case SCHOOL_DETAIL_SUCCESS:
      return { loading: false, school: action.payload };

    case SCHOOL_DETAIL_FAIL:
      return { loading: false, error: action.payload, school: [] };

    default:
      return state;
  }
};
