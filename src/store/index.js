import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  appName: '脉宝云店'
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  // modules: {
  //   cart,
  //   products
  // },
  strict: debug
})
