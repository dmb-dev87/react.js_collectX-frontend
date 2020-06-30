import axios from "axios";
import { news, activeMarkets } from "../mock";

export const getActiveMarkets = (activeMarkets) => ({
    type: "GET_ACTIVE_MACKETS",
    activeMarkets
});

export const getNews = (news) => ({
    type: "GET_NEWS",
    news
});

export const setNewsLoading = (loading = false) => ({
    type: "SET_NEWS_LOADING",
    loading
});

export const setActiveMarketsLoading = (loading = false) => ({
    type: "SET_ACTIVE_MACKETS_LOADING",
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

export const startGetActiveMarkets = () => {
    return (dispatch) => {
        dispatch(setActiveMarketsLoading(true));
        setTimeout(() => {
            dispatch(getActiveMarkets(activeMarkets));
            dispatch(setActiveMarketsLoading(false));
        }, 1000)
    };
};