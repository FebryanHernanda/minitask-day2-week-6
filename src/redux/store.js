import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./slice/surveySlice";
import todoReducer from "./slice/todoSlice";

const store = configureStore({
  reducer: {
    surveyForm: surveyReducer,
    todoForm: todoReducer,
  },
});
export default store;
