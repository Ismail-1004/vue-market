<template>
    <option :value="product.toLowerCase()">  {{ product }} </option>
</template>

<script>
export default {
    props: ['product']
}
</script>