const balanceInitialState = {
  balance: [],
  loading: false
}

export default (state = balanceInitialState, action) => {
  switch(action.type){
      case "GET_BALANCE":
          return {
              balance: action.balance,
              loading: state.loading
          };
      case "SET_BALANCE_LOADING":
          return {
              balance: state.balance,
              loading: action.loading
          }
      default:
          return state;
  }
};