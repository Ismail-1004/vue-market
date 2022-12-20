<template>
    <ul class="sidebar__list list-group">
        <ProductItem 
            v-for="(product, key) in products"
            :key="key"
            :product="product"
        /> 
    </ul>
</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
    props: ['products'],

    components: {
        ProductItem
    }
}
</script>