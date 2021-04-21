<template>
    <div class="single-book-list-item">
        <div class="book-list-info">
            <h3>{{list.title}}</h3>
            <p>{{list.recommendedNum}}人推荐了{{list.books.length}}本书</p>
        </div>
        <div class="recommended-info">
            <div class="recommended-img">
                <img src="https://img.duozhuayu.com/489383ded7a311ea871f76d01b4d3b00.jpeg" alt="暂无">
            </div>
            <div class="recommended-person">
                <h4>{{UserInfo.nickName}}</h4>
                <p>{{UserInfo.identity}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent,PropType } from 'vue'
import { bookList } from '../dataType'
import store from '../store'

export default defineComponent({
    props:{
        list:{
            type: Object as PropType<bookList>,
            required: true
        }
    },
    setup(props){
        const UserInfo = computed(() => store.getters.getOtherUserById(props.list.referrerUserId))
        console.log('userInfo',UserInfo.value.identity)
        return {
            UserInfo
        }
        
    }

})
</script>

<style lang="scss">
.single-book-list-item{
    width: 130px;
    height: 180px;
    border-radius: 8px;
    // background-color: rgba(000, 000, 000, 0.3);
    // background: url('https://img.duozhuayu.com/5fdb320454d411eb8a0a8a9465a613a9.jpeg?x-oss-process=image/resize,w_450/quality,Q_80&quot');
    background:linear-gradient(to top, rgba(204, 204, 204, 0.1) 0%, rgba(204, 204, 204, 0.3) 35%, rgba(204, 204, 204,0.8) 59%) center top / auto no-repeat, url('https://img.duozhuayu.com/5fdb320454d411eb8a0a8a9465a613a9.jpeg?x-oss-process=image/resize,w_450/quality,Q_80&quot') center center / cover no-repeat;
    padding: 15px;
    color: #FFF;
    .book-list-info{
        h3{
            margin: 0;
            margin-bottom: 8px;
        }
        p{
            margin: 0;
            font-size: 12px;
        }
    }
    .recommended-info{
        margin-top: 80px;
        .recommended-img{
            display: inline-block;
            img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 1px solid #FFF;
            }
        }
        .recommended-person{
            display: inline-block;
            margin: 0;
            font-size: 14px;
            margin-left: 10px;
            h4{
                margin: 0;
            }
            p{
                margin:0
            }
        }
    }

}



</style>