<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      
      <PaginationItem 
        v-for="page in pages"
        :key="page"
        :page="page"
        :currentPage="currentPage"
        @page-click="$emit('page-click', page)"
      />
      
    </ul>
  </nav>
</template>

<script>
import PaginationItem from '@/components/PaginationItem'

export default {
  props: ['pages', 'currentPage'],

  components: {
    PaginationItem
  },
}
</script>