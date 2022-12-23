export default {
    state: {
        filter: 'All products',
        loader: true,

        products: [],
        brands: [],

        sidebarBrands: [],

        sortedList: [],

        pageLoader: false,

        pageNumber: 1,
    },
    mutations: {
        uniqList (state, object) {
            let uniqList = []
            state.products = object.products
            
            state.products.forEach(p => {
                uniqList.push(p[object['key']].toLowerCase())
            })

            const uniqSet = new Set(uniqList)
            state[object.list].push(...uniqSet)

            object.sidebar ? state[object.list].unshift('All products') : ''
        },

        changeFilter (state, id) {
            state.filter = id
            state.loader = true
            state.brands.length = 0
            state.pageNumber = 1

            setTimeout(() => {
                state.loader = false
            }, 1000)
        },

        firstOffLoader (state) {
            state.loader = false
        }
    },
    getters: {
        loader (state) {
            return state.loader
        },
        filter (state) {
            return state.filter
        },

        sidebarBrands (state) {
            return state.sidebarBrands
        },

        products (state) {
            return state.products
        },

        brands (state) {
            return state.brands
        },

        pageLoader (state) {
            return state.pageLoader
        },

        pageNumber (state) {
            return state.pageNumber
        }

    },
    actions: {
        async getProducts ({ commit, state}) {
            await fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(products => {
                    commit('uniqList', {products: products['products'], key: 'category', list: 'sidebarBrands', sidebar: true})
                    commit('firstOffLoader')
                })
        }
    }
}