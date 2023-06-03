import {combineReducers} from "redux";
import deviceReducer from "./reducers/device.reducer";
import orderReducer from "./reducers/order.reducer";


const rootReducers = combineReducers({
  device: deviceReducer,
  order: orderReducer
})

export default rootReducers;
