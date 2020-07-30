export const getAuth = (auth) => ({
    type: "GET_AUTH",
    auth
});

export const setAuthLoading = (loading = false) => ({
    type: "SET_AUTH_LOADING",
    loading
});

export const startGetAuth = (auth) => {
    return (dispatch) => {
        dispatch(setAuthLoading(true));
        setTimeout(() => {
            dispatch(getAuth(auth));
            dispatch(setAuthLoading(false));
        }, 1000)
    };
};