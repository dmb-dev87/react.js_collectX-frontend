import axios from "axios";
import { history } from "../mock";

export const getHistory = (history) => ({
    type: "GET_HISTORY",
    history
});

export const setHistoryLoading = (loading = false) => ({
    type: "SET_HISTORY_LOADING",
    loading
}); 

export const startGetHistory = () => {
    return (dispatch) => {
        dispatch(setHistoryLoading(true));
        setTimeout(() => {
            dispatch(getHistory(history));
            dispatch(setHistoryLoading(false));
        }, 1000)
    };
};