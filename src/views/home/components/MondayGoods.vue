<template>
  <div class="monday-goods-main">
      <p class="monday-title">
            -MON 9.17-
        </p>
        <p class="monday-explain">
            周一新品抢鲜放送
        </p>
        <ul class="goods">
          <!-- <li v-for="i in imgs"></li> -->
          <li class="goods-list" v-for="i in imgs" :key = i.id>
            <a href="javascript:;" >
              <img :src="i.url" alt="商品">
            </a>
          </li>
            
        </ul>
  </div>
</template>

<script>
import imgsMixin from './data.js'
export default {
  name: 'Monday.vue',
  mixins: [imgsMixin],
  data () {
    return {

    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
    .monday-title{
        margin-top: 30px;
        color: #010E0D;
        font-size: 20px;
        height: 28px;
        text-align: center;
        line-height: 28px;
    }
    .monday-explain{
        color: #494949;
        font-size: 12px;
        height: 17px;
        line-height: 17px;
        margin-bottom: 9px;
        text-align: center;
    }
    .goods{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .goods-list{
        margin-right: 9px;
        height: 79px;
        width: 79px;
        margin-bottom: 10.5px;
      }
      .goods-list:nth-child(4n){
        margin-right: 0;
      }
      .goods-list:nth-child(n+5){
        margin-bottom: 0;
      }
    }
</style>
