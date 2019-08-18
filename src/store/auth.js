import firebase from '@/firebase'
import '@firebase/auth'

const state = {
  user: null,
  isLoggedIn: false
}
const mutations = {
  setUser (state, user) {
    if (user) {
      state.user = user
      state.isLoggedIn = true
    } else {
      state.user = null
      state.isLoggedIn = false
    }
  },
  logout (state) {
    state.user = null
  }
}
const actions = {
  async signup ({ commit }, payload) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      await this.dispatch('bridge/bridgeSignup', {
        email: payload.email,
        password: payload.password,
        request: 'users'
      })
    } catch (error) {
      console.log(error)
    }
  },
  async login ({ commit }, payload) {
    try {
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    } catch (error) {
      console.log(error)
    }
  },
  async logout ({ commit }) {
    try {
      await firebase.auth().signOut()
      commit('logout')
      commit('transactions/logout', null, { root: true })
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
