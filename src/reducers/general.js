const generalInitialState = {
    news: [],
    loading: false
}

export default (state = generalInitialState, action) => {
    switch(action.type){
        case "GET_NEWS":
            return {
                news: action.news,
                activeMarkets: state.activeMarkets,
                loading: state.loading
            };
        case "GET_ACTIVE_MACKETS":
            return {
                news: state.news,
                activeMarkets: action.activeMarkets,
                loading: state.loading
            };
        case "SET_NEWS_LOADING":
            return {
                news: state.news,
                activeMarkets: state.activeMarkets,
                loading: action.loading
            }
        case "SET_ACTIVE_MACKETS_LOADING":
            return {
                news: state.news,
                activeMarkets: state.activeMarkets,
                loading: action.loading
            }
        default:
            return state;
    }
};