import {
  FETCH_COMPLAIN_HISTORY,
  RECEIVE_COMPLAIN_HISTORY,
  FAILED_COMPLAIN_HISTORY
} from '../actions/types'

const initialState = {
  loading: false,
  listComplainHistory: [],
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COMPLAIN_HISTORY:
      return { ...state, loading: true }
    case RECEIVE_COMPLAIN_HISTORY:
      return {
        ...state,
        loading: false,
        listComplainHistory: action.payload.listComplainHistory
      }
    case FAILED_COMPLAIN_HISTORY:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
