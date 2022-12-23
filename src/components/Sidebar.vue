<template>
    <div class="sidebar">
        <div class="sidebar__info">
            <h2 class="sidebar__info-title"> All products </h2>

            <hr>

            <ProductsList 
                :sidebarBrands="sidebarBrands"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductsList from '@/components/ProductsList'

export default {
    computed: {
        ...mapGetters(['sidebarBrands'])
    },
    
    components: {ProductsList}
}
</script>