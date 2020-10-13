import {
  FETCH_HELP,
  RECEIVE_HELP,
  FAILED_HELP
} from '../actions/types'

const initialState = {
  loading: false,
  helpItem: [],
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_HELP:
      return { ...state, loading: true }
    case RECEIVE_HELP:
      return {
        ...state,
        loading: false,
        helpItem: action.payload.helpItem
      }
    case FAILED_HELP:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}
