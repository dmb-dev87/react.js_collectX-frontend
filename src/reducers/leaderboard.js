const generalInitialState = {
  activeUsers: [],
  largestHoldings: [],
  loading: false
}

export default (state = generalInitialState, action) => {
  switch(action.type){
    case "GET_ACTIVEUSERS":
      return {
        activeUsers: action.activeUsers,
        largestHoldings: state.largestHoldings,
        loading: state.loading
      };
    case "SET_ACTIVEUSERS_LOADING":
      return {
        activeUsers: state.activeUsers,
        largestHoldings: state.largestHoldings,
        loading: action.loading
      };
    case "GET_LARGESTHOLDINGS":
      return {
        activeUsers: state.activeUsers,
        largestHoldings: action.largestHoldings,
        loading: state.loading
      };
    case "SET_LARGESTHOLDINGS":
      return {
        activeUsers: state.activeUsers,
        largestHoldings: state.largestHoldings,
        loading: action.loading
      }
    default:
      return state;
  }
};