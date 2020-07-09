import axios from "axios";
import { markets } from "../mock";

export const getMarkets = (markets) => ({
  type: "GET_MARKETS",
  markets
});

export const setMarketsLoading = (loading = false) => ({
  type: "SET_MARKETS_LOADING",
  loading
});

export const startGetMarkets = () => {
  return (dispatch) => {
    dispatch(setMarketsLoading(true));
    setTimeout(() =>{
      dispatch(getMarkets(markets));
      dispatch(setMarketsLoading(false));
    }, 1000)
  };
};