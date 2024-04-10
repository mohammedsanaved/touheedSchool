import {
  LANDING_PAGE_ALL_SCHOOL_FAIL,
  LANDING_PAGE_ALL_SCHOOL_REQUEST,
  LANDING_PAGE_ALL_SCHOOL_SUCCESS,
  LANDING_PAGE_LATEST_EVENT_FAIL,
  LANDING_PAGE_LATEST_EVENT_REQUEST,
  LANDING_PAGE_LATEST_EVENT_SUCCESS,
} from "../constants/LandingPageContants";
export const latestEventReducer = (
  state = { latestevent: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case LANDING_PAGE_LATEST_EVENT_REQUEST:
      return { ...state, loading: true, error: null };
    case LANDING_PAGE_LATEST_EVENT_SUCCESS:
      return { ...state, loading: false, latestevent: action.payload };
    case LANDING_PAGE_LATEST_EVENT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allSchoolsListReducer = (
  state = { allschools: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case LANDING_PAGE_ALL_SCHOOL_REQUEST:
      return { ...state, laoding: true, error: null };
    case LANDING_PAGE_ALL_SCHOOL_SUCCESS:
      return { ...state, loading: false, allschools: action.payload };
    case LANDING_PAGE_ALL_SCHOOL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
