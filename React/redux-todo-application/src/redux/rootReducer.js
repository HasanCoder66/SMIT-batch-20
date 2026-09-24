import { combineReducers } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoSlice.js";


const rootReducer = combineReducers({
todo : todoReducer
});

export default rootReducer;
