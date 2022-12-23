<template>
    <li class="list-group-item sidebar__list-item" :data-id="product" @click="changeFilter(product)" :class="{active: filter === product}"> {{ product }} </li>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
    props: {
        product: {
            type: String,
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