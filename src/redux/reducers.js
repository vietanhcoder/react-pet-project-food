import { SET_USER } from "./types";

const initialState = {
  email: "",
  loading: false,
  error: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        email: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducers;
