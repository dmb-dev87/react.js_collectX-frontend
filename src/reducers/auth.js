const authInitialState = {
    auth: false,
    loading: false
}

export default (state = authInitialState, action) => {

    switch (action.type) {
        case "GET_AUTH":
            return {
                auth: action.auth,
                loading: state.loading
            };
        case "SET_BALANCE_LOADING":
            return {
                auth: state.auth,
                loading: action.loading
            }
        default:
            return state;
    }
};