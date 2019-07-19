<template>
    <div class="tuesday-goods-main">
        <p class="tuesday-title">
            -TUE 9.18-
        </p>
        <p class="tuesday-explain">
            周二品质生活专题
        </p>
        <div class="bg">
            <a href="javascript:;">
                <img src="@/assets/imgs/home/bg1.png" alt="有态度的丹麦品牌">
            </a>
        </div>
        <div class="goods">
            <a href="javascript:;" class="goods-list">
                <img src="@/assets/imgs/home/p12.png" alt="周二商品">
                <p class="goods-name">精油香氛</p>
                <p class="goods-price">¥344</p>
            </a>
            <a href="javascript:;" class="goods-list">               
                <img src="@/assets/imgs/home/p11.png" alt="周二商品">
                <p class="goods-name">山居猎奇</p>
                <p class="goods-price">¥344</p>
            </a>
            <a href="javascript:;" class="goods-list">
                <img src="@/assets/imgs/home/p10.png" alt="周二商品">
                <p class="goods-name">卡洛卡陶瓷碗盘</p>
                <p class="goods-price">¥372</p>
            </a>
            <a href="javascript:;" class="goods-list">
                <img src="@/assets/imgs/home/p9.png" alt="周二商品">
                <p class="goods-name">北欧国度</p>
                <p class="goods-price">¥388</p>
            </a>
        </div>
    </div>
</template>

<script>
// import imgsMixin from './data.js'
import { setInterval } from 'timers';
export default {
    name: 'TuesdayGoods',
    components:{
       
    },
    // mixins:[imgsMixin],
    data() {
      return {
        
      }
    },
    methods:{
        callback(){
        }
    },
    directives:{
        
    }

}
</script>

<style lang="scss" scoped>
    .tuesday-title{
        color: #010E0D;
        font-size: 20px;
        height: 28px;
        text-align: center;
        line-height: 28px;
    }
    .tuesday-explain{
        color: #494949;
        font-size: 12px;
        height: 17px;
        line-height: 17px;
        margin-bottom: 9px;
        text-align: center;
    }
    .bg{
        width: 341px;
        height: 202px;
        margin: 0 auto 21px;
        a{
            height: 100%;
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .goods{
        display: flex;
        justify-content: center;
        .goods-list{           
            margin-right: 9px;
            color: #494949;
            font-size: 10px;
            text-decoration: none;
                img{
                    height: 79px;
                    width: 79px;
                }  
                .goods-name{
                    height: 14px;
                    margin-top: 5px;
                }    
                .good-price{
                    height: 14px;
                }
        }
        .goods-list:last-child{
            margin-right: 0;
        }
    }
</style>
