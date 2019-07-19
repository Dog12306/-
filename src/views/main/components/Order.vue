<template>
  <div class="Order-main">
    <div class="header">
      <div class="header-top">
        <img src="@/assets/imgs/icons/arr-left.png" alt class="arr-left">
        <span class="title">我的订单</span>
        <img src="@/assets/imgs/icons/search.png" alt class="search">
      </div>
      <div class="header-bottom">
        <div class="nav">
          <div class="nav-list">全部</div>
          <div class="nav-list">待付款</div>
          <div class="nav-list">待收货</div>
          <div class="nav-list">已完成</div>
        </div>
      </div>
    </div>
    <!-- <div class="main">
        <div class="order-list" v-for="i in orderList" :key="i.id">
            <div class="order-list-title">
                <span class="order-num"></span>
                <span class="order-statue"></span>
            </div>
            <div class="order-list-explain">
                <img :src="i.url" alt="" class="order-img">
                <div class="order-text">
                    <div class="goods-name-price">
                        <span class="goods-name"></span>
                        <span class="goods-price"></span>
                    </div>
                    <div class="goods-explain-checknum">
                        <span class="goods-explain"></span>
                        <span class="goods-checknum"></span>
                    </div>
                </div>
                <div class="goods-cprice">
                    <span class="text">合计:</span>
                    <span class="num">¥ {{}}</span>
                </div>
            </div>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Order",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.header {
  height: 87px;
  width: 100%;
  background: #f9f9f9;
  .header-top {
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 20px;
      width: 20px;
    }
    .title {
      font-size: 18px;
      color: #151515;
      line-height: 25px;
      transform: translate(7px, 0);
    }
    .arr-left {
      margin-left: 15px;
    }
    .search {
      margin-right: 29px;
    }
  }
  .header-bottom {
    height: 38px;
    width: 100%;
    .nav {
      margin: 0 auto;
      width: 335px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      color: #1c4b47;
      line-height: 22px;
    }
    .nav-list.active{
        color: #151515;
    }
  }
}
</style>
