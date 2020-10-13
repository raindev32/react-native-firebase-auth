import {
  FETCH_PROMO,
  RECEIVE_PROMO,
  RECEIVE_ITEM_PROMO,
  UPDATE_STATE_PROMO,
  RESET_LIST_PROMO,
  SUCCESS_PROMO,
  FAILED_PROMO,
  RECEIVE_PROMO_SLIDER
} from 'actions/types'

const initialState = {
  loading: false,
  filter: {
    field: 'image,id,name,startDate,endDate,createdAt',
    order: '-id',
    page: 1,
    pageSize: 16,
    q: ''
  },
  list: [],
  listSlider: [],
  meta: {},
  currentItem: {},
  errorMessage: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PROMO:
      return { ...state, loading: true }
    case RECEIVE_PROMO:
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        meta: action.payload.meta
      }
    case RECEIVE_PROMO_SLIDER:
      return {
        ...state,
        loading: false,
        listSlider: action.payload.listSlider,
        meta: action.payload.meta
      }
    case RECEIVE_ITEM_PROMO:
      return {
        ...state,
        loading: false,
        currentItem: action.payload.currentItem
      }
    case SUCCESS_PROMO:
      return { ...state, loading: false }
    case FAILED_PROMO:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      }
    case RESET_LIST_PROMO:
      return {
        ...state,
        list: [],
        meta: {},
        dataSet: []
      }
    case UPDATE_STATE_PROMO:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
