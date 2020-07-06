import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/slices";

// test commit
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
