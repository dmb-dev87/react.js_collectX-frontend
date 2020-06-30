const exploreInitialState = {
    explores: [],
    loading: false
}

export default (state = exploreInitialState, action) => {
    switch(action.type){
        case "GET_EXPLORES":
            return {
                explores: action.explores,
                loading: state.loading
            };
        case "SET_EXPLORES_LOADING":
            return {
                explores: state.explores,
                loading: action.loading
            }
        default:
            return state;
    }
};