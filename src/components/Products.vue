<template>
    <div style="position: relative;">
        <div class="card" style="width: 15rem;">
            <img :src="product.img" alt="" style="width: 100%">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p> Price 1000$ </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>