import axios from "axios";
import { INC_COUNTER, DEC_COUNTER, FETCH_DATA } from "../actiontypes";

export const upCounter = () => {
  return { type: INC_COUNTER };
};

export const downCounter = () => {
  return { type: DEC_COUNTER };
};

export const fetchData = () => {
  return async dispatch => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    const data = await res.data;
    console.log(data);
    dispatch({ type: FETCH_DATA, payload: data });
  };
};
