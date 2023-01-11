import { combineReducers } from "redux";
import { searchUniversityReducer } from "./university.reducer";

export const rootReducer = combineReducers({
  searchUniversityReducer,
});
