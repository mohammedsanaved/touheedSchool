import axios from "axios";
import {
  LANDING_PAGE_ALL_SCHOOL_REQUEST,
  LANDING_PAGE_ALL_SCHOOL_SUCCESS,
  LANDING_PAGE_ALL_SCHOOL_FAIL,
  LANDING_PAGE_LATEST_EVENT_REQUEST,
  LANDING_PAGE_LATEST_EVENT_SUCCESS,
  LANDING_PAGE_LATEST_EVENT_FAIL,
  LANDING_PAGE_TESTIMONIAL_REQUEST,
  LANDING_PAGE_TESTIMONIAL_SUCCESS,
  LANDING_PAGE_TESTIMONIAL_FAIL,
} from "../constants/LandingPageContants";

export const latestEventAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_LATEST_EVENT_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/latest-events`
    );
    dispatch({ type: LANDING_PAGE_LATEST_EVENT_SUCCESS, payload: data });
    console.log(data, "Data from Latest Events");
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_LATEST_EVENT_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const allSchoolsListAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_ALL_SCHOOL_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/landing-pg-school/list`
    );
    dispatch({ type: LANDING_PAGE_ALL_SCHOOL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_ALL_SCHOOL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const testimonialsAction = () => async (dispatch) => {
  try {
    dispatch({ type: LANDING_PAGE_TESTIMONIAL_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/landing_page/testimonials`
    );
    dispatch({ type: LANDING_PAGE_TESTIMONIAL_SUCCESS, payload: data });
    console.log(data, "LANDING_PAGE_TESTIMONIAL_SUCCESS");
  } catch (error) {
    dispatch({
      type: LANDING_PAGE_TESTIMONIAL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
