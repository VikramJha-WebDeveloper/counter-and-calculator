import { changeTheNumber, calculate } from "./upDown";
import { combineReducers } from "redux";
let rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
  calculate: calculate,
});
export default rootReducer;
