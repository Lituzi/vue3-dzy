<template>
  <div class="home">
    <single-book-item :list="testBookList"></single-book-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingleBookItem from '../components/SingleBookItem.vue'
import { testBookList } from '../testData'


export default defineComponent({
  name: "Home",
  components: {
    SingleBookItem
  },
  setup(){
      return{
          testBookList
      }
  }
});
</script>
