import { INC_COUNTER, DEC_COUNTER } from "../actiontypes";

export default function(state = 0, action) {
  console.log(action);
  switch (action.type) {
    case INC_COUNTER:
      return state + 1;
    case DEC_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
