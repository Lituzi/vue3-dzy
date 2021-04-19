<template>
    <div class="dzy-nav">
        <div class="nav-header">
            <div class="nav-logo">
                <img src="https://img.duozhuayu.com/eb77c5e8affa11e7b58200163e067c99_l.jpeg" alt="">
            </div>
            <div class="nav-search">
                <form class="">
                    <i class="iconfont input-search-img">&#xe671;</i>
                    <input type="text" class="nav-search-input" placeholder="书名、作者、ISBN">
                </form>
            </div>
        </div>
        <div class="nav-items">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">买书</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">买电子产品</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">卖书</a>
                </li>                   
                <li class="nav-item">
                    <a class="nav-link" href="#">卖衣服</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link" href="#">卖电子产品</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link" href="#">购物车</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link" href="#">我的</a>
                </li>  
            </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ })
</script>

<style lang="scss">
.dzy-nav{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FAFAFA;
    .nav-header{
        width: 900px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        .nav-logo{
            display: flex;
            width: 200px;
        }
        .nav-search{
            display: flex;
            flex: 1;
            position: relative;
            .input-search-img{
                position: absolute;
                top: 8px;
                left: 10px;
                color: #AAAAAA;
            }
            .nav-search-input{
                width: 500px;
                height: 30px;
                border-radius: 5px;
                border: 1px solid #E6E6E6;
                outline: none;
                padding-left: 30px;
                font-size: 12px;
            }
        }
    }
    .nav-items{
        width: 100vw;
        border-top: 1px solid #E9E9E9;
        .navbar-nav{
            
            display: flex;
            justify-content: center;
            align-items: center;
            .nav-item{
                list-style: none;
                padding: 0 20px;
                text-align: center;
                .nav-link{
                    text-decoration: none;
                    color: #AAAAAA;
                    &:hover{
                        color: #FFF;
                        background-color: #AAAAAA;
                    }
                }
                .active{
                    color: #333333;
                    &:hover{
                        background-color: #3F3F3F;
                        color: #FFF;
                    }
                }
            }
        }
    }
}  


    
</style>