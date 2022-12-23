<template>
    <ul class="sidebar__list list-group">
        <ProductItem 
            v-for="(product, key) in sidebarBrands"
            :key="key"
            :product="product"
        /> 
    </ul>
</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
    props: ['sidebarBrands'],

    components: {
        ProductItem
    }
}
</script>