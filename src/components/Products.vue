<template>
    <div style="position: relative;">
        <div class="card" style="width: 15rem;">
            <img :src="product.thumbnail" alt="" style="width: 100%; height: 200px; object-fit: cover">
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p> {{ product.price }} $ </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
}
</script>

<style scoped>
.card-body {
  height: 150px !important;
}

</style>