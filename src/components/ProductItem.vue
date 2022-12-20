<template>
    <li class="list-group-item sidebar__list-item" :data-id="product.id" @click="changeFilter(product.id)" :class="{active: filter === product.id}"> {{ product.title }} </li>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },

    methods: {
        ...mapMutations(['changeFilter'])
    },

    computed: {
        ...mapGetters(['filter'])
    }
}
</script>