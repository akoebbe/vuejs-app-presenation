import axios from "axios"
// initial state
const state = {
    all: []
}

// getters
const getters = {
    getPersonById: (state) => (id) => {
        return state.all.find(person => person.id == id);
    }
}

// actions
const actions = {
    loadAllStaff ({ commit }) {
        if(state.all.length == 0) {
            axios
                .get('/data/staffFull.json')
                .then( response => commit('setStaff', response.data))
        }
    }
}

// mutations
const mutations = {
    setStaff (state, staff) {
        state.all = staff
    },
    deleteStaff (state, id) {
        state.all = state.all.filter(person => person.id !== id)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}