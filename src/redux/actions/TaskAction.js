/** @format */
import { URI } from "../../url";
import axios from "axios";
const token = JSON.parse(localStorage.getItem("token"));

// ? get tasks action
export const GetTasks = () => async (dispatch) => {
  try {
    dispatch({ type: "TASKS_GET_REQUEST" });
    const { data } = await axios.get(`${URI}/api/tasks/all`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "TASKS_GET_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "TASKS_GET_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// ? get friends action
export const GetFriends = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_FRENS_REQUEST" });
    const { data } = await axios.get(`${URI}/api/users/my-frens`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "GET_FRENS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_FRENS_FAIL",
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
