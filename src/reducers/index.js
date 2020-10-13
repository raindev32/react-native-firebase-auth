import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import authStore from './authStore'
import promoStore from './promoStore'
import helpStore from './helpStore'
import helpDetailStore from './helpDetailStore'
import bundleStore from './bundleStore'
import localTransactionStore from './localTransactionStore'
import transactionStore from './transactionStore'
import bankStore from './bankStore'
import storeStore from './storeStore'
import courierStore from './courierStore'
import complainStore from './complainStore'
import complainHistoryStore from './complainHistoryStore'
import countTransactionStore from './countTransactionStore'
import productStore from './productStore'
import productCategoryStore from './productCategoryStore'
import trackingShippingStore from './trackingShippingStore'

export default combineReducers({
  form: formReducer,
  authStore,
  promoStore,
  helpStore,
  helpDetailStore,
  bundleStore,
  localTransactionStore,
  transactionStore,
  bankStore,
  storeStore,
  courierStore,
  complainStore,
  complainHistoryStore,
  countTransactionStore,
  productStore,
  productCategoryStore,
  trackingShippingStore
})
