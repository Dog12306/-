<template>
  <div class="Find-main">
      <div class="header">
          <span class="Nivo-checked active">精选文章</span>
          <span class="choiceGoods-checked">好物推荐</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Find-main',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
 .header{
        height: 44px;
        width: 100%;
        display: flex;
        align-items: center;
        
        span{
            width: 50%;
            font-size: 18px;
            color: #999999;
            text-align: center;
        }
        span.active{
            color: #010E0D;
        }
    }
</style>
