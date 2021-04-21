<template>
  <div class="home">
    <single-book-item :list="testBookList"></single-book-item>
    <book-item-list title="test" linkTo="#" :bookListItems="testBookLists"></book-item-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingleBookItem from '../components/SingleBookItem.vue'
import bookItemList from '../components/BookItemList.vue'
import { testBookList,testBookLists } from '../testData'


export default defineComponent({
  name: "Home",
  components: {
    SingleBookItem,
    bookItemList
  },
  setup(){
      return{
          testBookList,
          testBookLists
      }
  }
});
</script>
