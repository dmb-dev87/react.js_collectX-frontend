const balanceInitialState = {
    markets: [],
    loading: false
}
 
export default (state = balanceInitialState, action) => {
    switch(action.type){
        case "GET_MARKETS":
            return {
                markets: action.markets,
                loading: state.loading
            };
        case "SET_MARKETS_LOADING":
            return {
                markets: state.markets,
                loading: action.loading
            }
        default:
            return state;
    }
};