import Vue from 'vue'
import Vuex from 'vuex'
import { setUserLocal, getUserLocal } from '@/utils/userlocal'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getUserLocal()
  },
  mutations: {
    setUser: function (state, obj) {
      state.user = obj
      setUserLocal(obj)
    }
  },
  actions: {

  }
})
