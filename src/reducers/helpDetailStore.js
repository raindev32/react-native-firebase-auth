import {
  FETCH_HELP_DETAIL,
  RECEIVE_HELP_DETAIL,
  FAILED_HELP_DETAIL
} from '../actions/types'

const initialState = {
  loading: false,
  helpDetailList: [],
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_HELP_DETAIL:
      return { ...state, loading: true }
    case RECEIVE_HELP_DETAIL:
      return {
        ...state,
        loading: false,
        helpDetailList: action.payload.helpDetailList
      }
    case FAILED_HELP_DETAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
