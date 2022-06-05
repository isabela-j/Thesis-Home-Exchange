import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const state = {
    loginId: 0,
    ownerId: 0,
    announceId: 0,
    accessToken: ""
}

const mutations = {
    updateId(state, newId){
        state.ownerId = newId
    },
    updateAnnounceId(state, newAnnId){
        state.announceId = newAnnId
    },
    updateToken(state, newToken){
        state.accessToken = newToken
    },
    updateLoginId(state, newLoginId){
        state.loginId = newLoginId
    }
}

const actions = {
    updateId: ({ commit }) => commit('updateId'),
    updateAnnounceId: ({ commit }) => commit('updateAnnounceId'),
    updateToken: ({ commit }) => commit('updateToken'),
    updateLoginId: ({ commit }) => commit('updateLoginId'),
}

const getters = {
    //evenOrOdd: state => state.ownerId % 2 == 0 ? 'even' : 'odd'
}

export default createStore({
    state,
    getters, 
    actions,
    mutations,
    plugins: [createPersistedState()],
})