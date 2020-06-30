import axios from "axios";
import { news } from "../mock";

export const getNews = (news) => ({
    type: "GET_NEWS",
    news
});

export const setNewsLoading = (loading = false) => ({
    type: "SET_NEWS_LOADING",
    loading
}); 

export const startGetNews = () => {
    return (dispatch) => {
        dispatch(setNewsLoading(true));
        setTimeout(() => {
            dispatch(getNews(news));
            dispatch(setNewsLoading(false));
        }, 1000)
    };
};