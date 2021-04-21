<template>
    <div class="bookList-container">
        <div class="bookList-header">
            <h4>{{title}}</h4>
            <a href="url"></a>
        </div>
        <div class="bookList-content" v-for="bookListItem in bookListItems" :key="bookListItem.referrerUserId">
            <single-book-item :list="bookListItem"></single-book-item>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import { bookLists } from '../dataType'
import SingleBookItem from '../components/SingleBookItem.vue'
export default defineComponent({
    components:{
        SingleBookItem
    },
    props:{
        title:{
            type:String,
            required:true
        },
        linkTo:{
            type:String,
            required:true
        },
        isMultiPages:{
            type:Boolean
        },
        bookListItems:{
            type:Array as PropType<bookLists>,
            required:true
        }
    }
})
</script>

<style lang="scss">
    
</style>