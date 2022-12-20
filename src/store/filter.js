export default {
    state: {
        filter: 1,
        loader: true
    },
    mutations: {
        changeFilter (state, id) {
            state.filter = id
            state.loader = true

            setTimeout(() => {
                state.loader = false
            }, 1000)
        },

        firstOffLoader (state) {
            setTimeout(() => {
                state.loader = false
            }, 1000)
        }
    },
    getters: {
        loader (state) {
            return state.loader
        },
        filter (state) {
            return state.filter
        }
    },
    actions: {}
}