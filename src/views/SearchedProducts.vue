<template>
    <div class="container searched">
        <div class="searched__link">
            <router-link to="/"> Home </router-link>
        </div>
        <div class="searched__main">
            <Products 
                v-for="p in productsList" 
                :key="p.productId"
                :product="p"
                >
            </Products>
        </div>

        <Modal :class="{active_modal: errorModal}">
            <template v-slot:modalTitle> Error </template>
            <template v-slot:modalBody> Товаров в базе не найдено </template>
        </Modal>
    </div>
</template>

<script>
import Products from '@/components/Products'
import Modal from '@/components/Modal'

import { mapGetters } from 'vuex'

export default {
    props: ['brand'],

    data: () => ({
        productsList: [],
    }),

    methods: {
        showSearchedProduct (brand) {
            this.productsList = this.products.filter(p => {
                return p.brand.toLowerCase() === brand
            })
        },
    },

    watch: {
        brand (value) {
            this.showSearchedProduct(value)
        }
    },

    computed: {
        ...mapGetters(['mainProducts', 'errorModal', 'products'])
    },

    components: { Products, Modal },

    created () {
        this.showSearchedProduct(this.brand)
    }
}
</script>