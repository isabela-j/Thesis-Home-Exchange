import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const state = {
    ownerId: 0,
    announceId: 0
}

const mutations = {
    updateId(state, newId){
        state.ownerId = newId
    },
    updateAnnounceId(state, newAnnId){
        state.announceId = newAnnId
    }
}

const actions = {
    updateId: ({ commit }) => commit('updateId'),
    updateAnnounceId: ({ commit }) => commit('updateAnnounceId'),
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