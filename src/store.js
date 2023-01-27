import { createStore } from "redux";
import rootReducer from "./redux/reducer/main";
const store=createStore(rootReducer)

export default store;