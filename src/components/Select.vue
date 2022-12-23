<template>
    <div>
        <select v-model="brand">
            <option selected disabled> Choose a filter </option>

            <Option 
                v-for="(p, key) in uniqBrands"
                :key="key"
                :product="p"
            />

        </select>

        <button type="button" class="btn btn-danger" @click="brand = 'Choose a filter'" v-if="brand !== 'Choose a filter'"> Reset filter </button>
    </div>
</template>

<script>
import Option from '@/components/Option'

import { mapGetters, mapMutations } from 'vuex'

export default {
    data: () => ({
        brandsList: [],
        brand: 'Choose a filter'
    }),

    components: { Option },

    computed: {
        ...mapGetters(['products', 'filter', 'brands']),
        uniqBrands () {
            const uniqList = []
            this.brandsList.forEach(p => uniqList.push(p.brand.toUpperCase()))

            const uniqSet = new Set(uniqList)

            return [...uniqSet]
        },
    },

    methods: {
        ...mapMutations(['uniqList']),
        filterByCategory () {
            this.brandsList = Array.from(this.products)
            this.brandsList = this.products.filter(p => p.category === this.filter)
        },

        
        filterdByBrandList (brand) {
            this.$store.state.filter.brands = []
            this.$store.state.filter.brands = this.brandsList.filter(b => {
                return b.brand.toLowerCase() === brand
            })
        }
    },

    watch: {
        brand (newValue) {
            this.$store.state.filter.pageNumber = 1
            this.filterdByBrandList(newValue)
        }
    },

    created () {
        this.filterByCategory()
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
}

select {
    outline: none;
    cursor: pointer;
}

</style>