export default {
    state: {
        errorModal: false,
        counter: 0
    },
    mutations: {
        showError (state) {
            state.errorModal = true

            setTimeout(() => {
                state.errorModal = false
            }, 1500)
        },

        updateCounter (state) {
            state.counter++
        }
    },
    actions: {},
    getters: {
        errorModal (state) {
            return state.errorModal
        }
    }
}