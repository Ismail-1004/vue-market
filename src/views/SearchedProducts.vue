<template>
    <div class="container searched">
        <div class="searched__link">
            <router-link to="/"> Home </router-link>
        </div>
        <div class="searched__main">
            <Products 
                v-for="p in products" 
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
    props: ['id'],

    data: () => ({
        products: []
    }),

    methods: {
        showSearchedProduct (id) {
            this.products = this.mainProducts.filter(p => {
                return p.productId === +id
            })
        }
    },

    watch: {
        id (value) {
            this.showSearchedProduct(value)
        }
    },

    computed: {
        ...mapGetters(['mainProducts', 'errorModal'])
    },

    components: { Products, Modal },

    created () {
        this.showSearchedProduct(this.id)
    }
}
</script>