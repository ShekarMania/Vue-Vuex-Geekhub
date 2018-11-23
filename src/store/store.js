import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    login
  }
})
