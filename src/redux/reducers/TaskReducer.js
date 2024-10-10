/** @format */
// ? fetch tasks reducer
export const FetchTasksReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case "TASKS_GET_REQUEST":
      return {
        loading: true,
        tasks: [],
      };
    case "TASKS_GET_SUCCESS":
      return {
        loading: false,
        tasks: action.payload,
      };
    case "TASKS_GET_FAIL":
      return {
        loading: false,
        tasks: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// ? get frens reducer
export const FetchFriendsReducer = (state = { frens: [] }, action) => {
  switch (action.type) {
    case "GET_FRENS_REQUEST":
      return {
        loading: true,
        frens: [],
      };
    case "GET_FRENS_SUCCESS":
      return {
        loading: false,
        frens: action.payload,
      };
    case "GET_FRENS_FAIL":
      return {
        loading: false,
        frens: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
