import { createStore } from 'vuex'

export default createStore({
  state: {
    signInUser: JSON.parse(localStorage.signIn)
  },
  getters:{
    LOGIN: state =>{
      return state.signInUser;
    }
  },
  mutations: {
    SET_LOGIN: (state, payload) => {
      state.signInUser = payload
    }
  },
  actions: {
  },
  modules: {
  },
  methods: {

  },
})
