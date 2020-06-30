import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import generalReducer from "../reducers/general";
import exploreReducer from "../reducers/explore";
import myAssetReducer from "../reducers/myAsset";
import leaderboardReducer from "../reducers/leaderboard";
import balanceReducer from "../reducers/balance";
import discussionReducer from "../reducers/discussion";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            general: generalReducer,
            explore: exploreReducer,
            myAsset: myAssetReducer,
            leaderboard: leaderboardReducer,
            balance: balanceReducer,
            discussion: discussionReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}