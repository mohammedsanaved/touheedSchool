import axios from "axios";

import {
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL,
} from "../constants/contactConstants";

export const createContact =
  (nameValue, emailValue, subjectValue, messageValue) => async (dispatch) => {
    try {
      dispatch({ type: CONTACT_CREATE_REQUEST });

      let contact_data;
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      contact_data = {
        contact_name: nameValue,
        contact_email: emailValue,
        contact_subject: subjectValue,
        contact_message: messageValue,
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/send-mail/`,
        contact_data,
        config
      );

      dispatch({ type: CONTACT_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CONTACT_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
