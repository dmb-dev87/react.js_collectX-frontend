const generalInitialState = {
  topics: [],
  loading: false
}

export default (state = generalInitialState, action) => {
  switch(action.type){
    case "GET_TOPICS":
      return {
        topics: action.topics,
        loading: state.loading
      };
    case "SET_TOPICS_LOADING":
      return {
        topics: state.topics,
        loading: action.loading
      };
    default:
      return state;
  }
};