import axios from "axios";
import { myAssets } from "../mock";

export const getMyAssets = (news) => ({
    type: "GET_MYASSETS",
    myAssets
});

export const setMyAssetsLoading = (loading = false) => ({
    type: "SET_MYASSETS_LOADING",
    loading
}); 

export const startGetMyAssets = () => {
    return (dispatch) => {
        dispatch(setMyAssetsLoading(true));
        setTimeout(() => {
            dispatch(getMyAssets(myAssets));
            dispatch(setMyAssetsLoading(false));
        }, 1000)
    };
};