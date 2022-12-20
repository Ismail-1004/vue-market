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
                const product = this.mainProducts.filter(p => {
                    return p.name.toLowerCase().indexOf(this.product.toLowerCase()) !== -1
                })

                if (product.length !== 0) {
                    this.$router.push({name: 'Searched', params: {id: product[0].productId} })
                    this.product = ''
                } else {
                    this.showError()
                }

            } else {
                console.log('empty');
            }
        }
    },

    computed: {
        ...mapGetters(['mainProducts'])
    }
}
</script>