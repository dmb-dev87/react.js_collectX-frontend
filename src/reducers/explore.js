const exploreInitialState = {
    explores_features: [],
    explores_new_era_card: [],
    explores_1990: [],
    explores_1980: [],
    explores_1970: [],
    explores_classic: [],
    loading: false
}

export default (state = exploreInitialState, action) => {
    switch(action.type){
        case "GET_EXPLORES_FEATURES":
            return {
                explores_features: action.explores_features,
                explores_new_era_card: state.explores_new_era_card,
                explores_1990: state.explores_1990,
                explores_1980: state.explores_1980,
                explores_1970: state.explores_1970,
                explores_classic: state.explores_classic,
                loading: state.loading
            }      
        case "GET_EXPLORES_NEW_ERA_CARD":
            return {
                explores_features: state.explores_features,
                explores_new_era_card: action.explores_new_era_card,
                explores_1990: state.explores_1990,
                explores_1980: state.explores_1980,
                explores_1970: state.explores_1970,
                explores_classic: state.explores_classic,
                loading: state.loading
            }     
        case "GET_EXPLORES_1990":
            return {
                explores_features: state.explores_features,
                explores_new_era_card: state.explores_new_era_card,
                explores_1990: action.explores_1990,
                explores_1980: state.explores_1980,
                explores_1970: state.explores_1970,
                explores_classic: state.explores_classic,
                loading: state.loading
            }       
        case "GET_EXPLORES_1980":
            return {
                explores_features: state.explores_features,
                explores_new_era_card: state.explores_new_era_card,
                explores_1990: state.explores_1990,
                explores_1980: action.explores_1980,
                explores_1970: state.explores_1970,
                explores_classic: state.explores_classic,
                loading: state.loading
            }
        case "GET_EXPLORES_1970":
            return {
                explores_features: state.explores_features,
                explores_new_era_card: state.explores_new_era_card,
                explores_1990: state.explores_1990,
                explores_1980: state.explores_1980,
                explores_1970: action.explores_1970,
                explores_classic: state.explores_classic,
                loading: state.loading
            }
        case "GET_EXPLORES_CLASSIC":
            return {
                explores_features: state.explores_features,
                explores_new_era_card: state.explores_new_era_card,
                explores_1990: state.explores_1990,
                explores_1980: state.explores_1980,
                explores_1970: state.explores_1970,
                explores_classic: action.explores_classic,
                loading: state.loading
            }
        case "SET_EXPLORES_LOADING":
            return {
                explores_features: state.explores_features,
                explores_new_era_card: state.explores_new_era_card,
                explores_1990: state.explores_1990,
                explores_1980: state.explores_1980,
                explores_1970: state.explores_1970,
                explores_classic: state.explores_classic,
                loading: state.loading
            }
        default:
            return state;
    }
};