<template>
    <li class="page-item"><a class="page-link" :class="{active: currentPage === page}" href="#" @click="pageClick(page)"> {{ page }} </a></li>
</template>

<script>
export default {
    props: ['page', 'currentPage'],

    methods: {
        pageClick (page) {
            this.$store.state.filter.pageLoader = true
            this.$emit('page-click', page)

            setTimeout(() => {
                this.$store.state.filter.pageLoader = false
            }, 1500)
        }
    }
}
</script>