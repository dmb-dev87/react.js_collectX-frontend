import { topics } from "../mock/discussion";

export const getTopics = (topics) => ({
    type: "GET_TOPICS",
    topics
});

export const setTopicsLoading = (loading = false) => ({
    type: "SET_TOPICS_LOADING",
    loading
});

export const startGetTopics = () => {
    return (dispatch) => {
        dispatch(setTopicsLoading(true));
        setTimeout(() => {
            dispatch(getTopics(topics));
            dispatch(setTopicsLoading(false));
        }, 1000)
    };
};