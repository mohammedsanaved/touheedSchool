import axios from "axios";

import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_DETAIL_REQUEST,
  EVENT_DETAIL_SUCCESS,
  EVENT_DETAIL_FAIL,
} from "../constants/eventConstants";

export const listEvent =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: EVENT_LIST_REQUEST });

      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/event-list${keyword}`
      );

      dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EVENT_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const detailEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_DETAIL_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/event-detail/${id}/`
    );

    dispatch({ type: EVENT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EVENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
