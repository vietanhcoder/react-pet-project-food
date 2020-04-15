import { SET_USER } from "./types";

export const setUser = (email, password) => ({
  type: SET_USER,
  payload: {
    id: Math.random(),
    email,
    password,
  },
});
