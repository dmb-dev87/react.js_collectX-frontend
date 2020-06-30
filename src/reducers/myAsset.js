const myAssetInitialState = {
    myAssets: [],
    loading: false
}

export default (state = myAssetInitialState, action) => {
    switch(action.type){
        case "GET_MYASSETS":
            return {
                myAssets: action.myAssets,
                loading: state.loading
            };
        case "SET_MYASSETS_LOADING":
            return {
                myAssets: state.myAssets,
                loading: action.loading
            }
        default:
            return state;
    }
};