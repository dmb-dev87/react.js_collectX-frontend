const generalInitialState = {
    history: [],
    loading: false
}

export default (state = generalInitialState, action) => {
    switch(action.type){
        case "GET_HISTORY":
            return {
                history: action.history,
                loading: state.loading
            };
        case "SET_HISTORY_LOADING":
            return {
                history: state.history,
                loading: action.loading
            }
        default:
            return state;
    }
};