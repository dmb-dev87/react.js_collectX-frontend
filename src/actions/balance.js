import axios from "axios";
import { balance } from "../mock";

export const getBalance = (balance) => ({
  type: "GET_BALANCE",
  balance
});

export const setBalanceLoading = (loading = false) => ({
  type: "SET_BALANCE_LOADING",
  loading
});

export const startGetBalance = () => {
  return (dispatch) => {
    dispatch(setBalanceLoading(true));
    setTimeout(() =>{
      dispatch(getBalance(balance));
      dispatch(setBalanceLoading(false));
    }, 1000)
  };
};