import { activeUsers } from "../mock";
import { largestHoldings } from "../mock";

export const getActiveUsers = (activeUsers) => ({
  type: "GET_ACTIVEUSERS",
  activeUsers
});


export const setActiveUsersLoading = (loading = false) => ({
  type: "SET_ACTIVEUSERS_LOADING",
  loading
})

export const startGetActiveUsers = () => {
  return (dispatch) => {
      dispatch(setActiveUsersLoading(true));
      setTimeout(() => {
          dispatch(getActiveUsers(activeUsers));
          dispatch(setActiveUsersLoading(false));
      })
  }
}

export const getLargestHoldings = (largestHoldings) => ({
  type: "GET_LARGESTHOLDINGS",
  largestHoldings
});


export const setLargestHoldingsLoading = (loading = false) => ({
  type: "SET_LARGESTHOLDINGS_LOADING",
  loading
})

export const startGetLargestHoldings = () => {
  return (dispatch) => {
      dispatch(setLargestHoldingsLoading(true));
      setTimeout(() => {
          dispatch(getLargestHoldings(largestHoldings));
          dispatch(setLargestHoldingsLoading(false));
      }, 1000)
  }
}