import { createStore } from 'vuex'
import filter from './filter'
import products from './products'

export default createStore({
  modules: {
    filter,
    products
  }
})
