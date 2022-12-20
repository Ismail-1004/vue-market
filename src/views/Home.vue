<template>
  <div class="container home">
    <div class="home__main">
      <Sidebar />
      
      <div v-if="!loader" class="home__main-products">
        <Products  
          v-for="(product, id) in filteredProducts"
          :key="id"
          :product="product"
        />
      </div>
      
      <Loader v-else />

      <Modal :class="{active_modal: errorModal}">
        <template v-slot:modalTitle> Error </template>
        <template v-slot:modalBody> Товаров в базе не найдено </template>
      </Modal>
    </div>
    
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

import Loader from '@/components/Loader'
import Sidebar from '@/components/Sidebar'
import Products from '@/components/Products'
import Modal from '@/components/Modal'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['loader', 'mainProducts', 'errorModal']),
    filteredProducts () {
      return this.mainProducts.filter(p => p.productId === this.$store.state.filter.filter)
    }
  },

    methods: {
      ...mapMutations(['firstOffLoader'])
    },

    mounted () {
      this.firstOffLoader()
    },

  components: {
    Sidebar, Products, Loader, Modal
  }
}
</script>

<style scoped>
.home {
  padding: 80px 15px 30px 15px;
  height: 100%;
}

.home__main {
  display: flex;
  height: 100%;
  gap: 40px;
}

.home__main-products {
  display: flex;
  gap: 30px;
}
</style>
