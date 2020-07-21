import { explores_features, explores_new_era_card, explores_1990, explores_1980, explores_1970, explores_classic } from "../mock";

export const getExploresFeatures = (explores_features) => ({
    type: "GET_EXPLORES_FEATURES",
    explores_features
});

export const getExploresNewEraCard = (explores_new_era_card) => ({
    type: "GET_EXPLORES_NEW_ERA_CARD",
    explores_new_era_card
});

export const getExplores1990 = (explores_1990) => ({
    type: "GET_EXPLORES_1990",
    explores_1990
});

export const getExplores1980 = (explores_1980) => ({
    type: "GET_EXPLORES_1980",
    explores_1980
});

export const getExplores1970 = (explores_1970) => ({
    type: "GET_EXPLORES_1970",
    explores_1970
});

export const getExploresClassic = (explores_classic) => ({
    type: "GET_EXPLORES_CLASSIC",
    explores_classic
});

export const setExploresLoading = (loading = false) => ({
    type: "SET_EXPLORES_LOADING",
    loading
});

export const startGetExplores = () => {
    return (dispatch) => {
        dispatch(setExploresLoading(true));
        setTimeout(() => {
            dispatch(getExploresFeatures(explores_features));
            dispatch(getExploresNewEraCard(explores_new_era_card));
            dispatch(getExplores1990(explores_1990));
            dispatch(getExplores1980(explores_1980));
            dispatch(getExplores1970(explores_1970));
            dispatch(getExploresClassic(explores_classic));
            dispatch(setExploresLoading(false));
        }, 1000)
    };
};