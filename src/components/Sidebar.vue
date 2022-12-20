<template>
    <div class="sidebar">
        <div class="sidebar__info">
            <h2 class="sidebar__info-title"> All products </h2>

            <hr>

            <ProductsList 
                :products="products"
            />
        </div>
    </div>
</template>

<script>
import ProductsList from '@/components/ProductsList'

export default {
    data: () => ({
        products: [
            {id: 1, title: 'Mobile devices'},
            {id: 2, title: 'Computers'},
            {id: 3, title: 'Sneakers'}
        ],
    }),
    
    components: {ProductsList}
}
</script>