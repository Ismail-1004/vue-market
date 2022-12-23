<template>
  <div class="container home">
    <div class="home__main">
      <Sidebar />
      
      <div v-if="!loader" class="home__main-parent">
        <Select 
          v-if="$store.state.filter.filter !== 'All products'"
        />

        <div class="home__main-products">
          <div class="home__main-products-content" v-if="!pageLoader">
            <Products  
              v-for="(product, id) in filteredProducts"
              :key="id"
              :product="product"
            />
          </div>

          <Loader v-else />
        </div>

        <div style="display: flex; align-items">
          <Pagination 
            :pages="pages"
            @page-click="pageClick"
            :currentPage="pageNumber"
          />

          <span 
          style="font-size: 20px; margin-left: 20px" 
          v-for="p in this.$store.state.filter.brands"
          :key="p.id"
          > 
            {{ p.title }} => in stock: {{ p.stock }} 
          </span>
        </div>


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
import {mapActions, mapGetters, mapMutations} from 'vuex'

import Loader from '@/components/Loader'
import Sidebar from '@/components/Sidebar'
import Products from '@/components/Products'
import Modal from '@/components/Modal'
import Pagination from '@/components/Pagination'
import Select from '@/components/Select'

export default {
  name: 'Home',

  data: () => ({
    userPerPage: 4,
    filteredProductsList: []
  }),

  computed: {
    ...mapGetters(['loader', 'errorModal', 'products', 'pageLoader', 'pageNumber']),

    filteredProducts () {
      let from = (this.pageNumber - 1) * this.userPerPage
      let to = from + this.userPerPage;

      if (this.$store.state.filter.brands.length !== 0) {
        return this.$store.state.filter.brands.slice(from, to)
      }

      if (this.$store.state.filter.filter === 'All products') {
        return this.products.slice(from, to)
      } else {
        this.filteredProductsList = this.products.filter(p => p.category === this.$store.state.filter.filter)
        return this.filteredProductsList.slice(from, to)
      }
    },

    pages () {
      if (this.$store.state.filter.brands.length !== 0) {
        return Math.ceil(this.$store.state.filter.brands.length / 4)
      }

      if (this.$store.state.filter.filter === 'All products') {
        return Math.ceil(this.products.length / 4)
      } else if (this.$store.state.filter.filter !== 'All products') {
        return Math.ceil(this.filteredProductsList.length / 4)
      }
    }
  },

  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations(['updateCounter']),

    pageClick (page) {
      this.$store.state.filter.pageNumber = page
    }
  },

  mounted () {
    if (this.$store.state.products.counter === 0) {
      this.getProducts()
    }
    this.updateCounter()
    
  },

  components: {
    Sidebar, Products, Loader, Modal, Pagination, Select
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
  width: 100%;
}

.home__main-parent {
  display: flex;
  flex-direction: column; 
  width: 100%;
}

.home__main-products {
  position: relative;
  height: 400px;
}

.home__main-products-content {
  display: flex;
  gap: 30px;

  margin-bottom: 50px;
}
</style>
