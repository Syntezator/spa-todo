import {combineReducers} from "redux";
import taskReducer from "./tasks";
import commentReducer from "./comments";

const rootReducer = combineReducers({
  taskReducer,
  commentReducer
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;