export default {
    state: {
        mainProducts: [
            {productId: 1, img: 'https://cdn1.ozone.ru/s3/multimedia-m/6357137626.jpg', name: 'Iphone 13'},
            {productId: 1, img: 'https://tehnoteca.ru/img/2181/2180981/deppa_gel_pro_magsafe_for_iphone_11_pro_3.jpg', name: 'Iphone 13'},
            {productId: 2, img: 'https://pbs.twimg.com/profile_images/1376463753311576068/Cn9JUjz1_400x400.jpg', name: 'Mackboock'},
            {productId: 3, img: 'https://www.wykop.pl/cdn/c3201142/comment_dz5Q8SVpnCjMBgTMnOTMRuXu5Npo7DQH,w400.jpg', name: 'Sneakers'}
        ],

        errorModal: false
    },
    mutations: {
        showError (state) {
            state.errorModal = true

            setTimeout(() => {
                state.errorModal = false
            }, 1500)
        }
    },
    actions: {},
    getters: {
        mainProducts (state) {
            return state.mainProducts
        },

        errorModal (state) {
            return state.errorModal
        }
    }
}