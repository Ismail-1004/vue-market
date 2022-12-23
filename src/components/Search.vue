<template>
    <form class="d-flex" role="search" @submit.prevent="searchedProducts">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="product">
        <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    data: () => ({
        product: ''
    }),

    methods: {
        ...mapMutations(['showError']),
        searchedProducts () {
            if (this.product.trim()) {
                const product = this.products.filter(p => {
                    return p.brand.toLowerCase().indexOf(this.product.toLowerCase()) !== -1
                })

                if (product.length !== 0) {
                    this.$router.push({name: 'Searched', params: {brand: product[0].brand.toLowerCase()}})
                    this.product = ''
                    this.$store.state.filter.brands.length = 0
                } else {
                    this.showError()
                }

            } else {
                console.log('empty');
            }
        }
    },

    computed: {
        ...mapGetters(['products'])
    }
}
</script>