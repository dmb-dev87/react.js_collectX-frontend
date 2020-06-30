const generalInitialState = {
    news: [],
    loading: false
}

export default (state = generalInitialState, action) => {
    switch(action.type){
        case "GET_NEWS":
            return {
                news: action.news,
                loading: state.loading
            };
        case "SET_NEWS_LOADING":
            return {
                news: state.news,
                loading: action.loading
            }
        default:
            return state;
    }
};