import {
  FETCH_COMPLAIN,
  SUCCESS_COMPLAIN,
  FAILED_COMPLAIN
} from '../actions/types'

const initialState = {
  loading: false,
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_COMPLAIN:
      return { ...state, loading: true }
    case SUCCESS_COMPLAIN:
      return { ...state, loading: false }
    case FAILED_COMPLAIN:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
