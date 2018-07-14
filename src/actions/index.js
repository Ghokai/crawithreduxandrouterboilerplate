import { INC_COUNTER, DEC_COUNTER } from "../actiontypes";

export function upCounter() {
  return { type: INC_COUNTER };
}

export function downCounter() {
  return { type: DEC_COUNTER };
}
