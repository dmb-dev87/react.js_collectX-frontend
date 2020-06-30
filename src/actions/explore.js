import axios from "axios";
import { explores } from "../mock";

export const getExplores = (news) => ({
    type: "GET_EXPLORES",
    explores
});

export const setExploresLoading = (loading = false) => ({
    type: "SET_EXPLORES_LOADING",
    loading
}); 

export const startGetExplores = () => {
    return (dispatch) => {
        dispatch(setExploresLoading(true));
        setTimeout(() => {
            dispatch(getExplores(explores));
            dispatch(setExploresLoading(false));
        }, 1000)
    };
};