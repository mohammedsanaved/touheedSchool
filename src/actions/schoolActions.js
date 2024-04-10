import axios from "axios";
import {
  SCHOOL_DETAIL_FAIL,
  SCHOOL_DETAIL_REQUEST,
  SCHOOL_LIST_FAIL,
  SCHOOL_LIST_REQUEST,
  SCHOOL_LIST_SUCCESS,
} from "../constants/schoolConstants";

export const schoolList = () => async (dispatch) => {
  try {
    dispatch({ type: SCHOOL_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/schools/school-getpost/list`
    );
    dispatch({ type: SCHOOL_LIST_SUCCESS, payload: data });
    console.log(data, "schoolListData");
  } catch (error) {
    dispatch({
      type: SCHOOL_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
// export const schoolDetails = (id) => async (dispatch) => {
//   try {
//   } catch (error) {
//     dispatch({
//       type: SCHOOL_DETAIL_FAIL,
//       payload:
//         error.response && error.response.data.detail
//           ? error.response.data.detail
//           : error.message,
//     });
//   }
// };
