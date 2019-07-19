<template>
  <div class="Main-main">
    <v-icon style="color:red;height:30px;" name="sync" spin v-if="false"></v-icon>
    <div class="header">
      <div class="header-top">
        <div class="headP">
          <img src="@/assets/imgs/main/headP.png" alt>
        </div>
        <div class="setUp">
          <img src="@/assets/imgs/icons/setUp.png" alt>
        </div>
      </div>
      <div class="header-bottom">
        <a href="javascript:;">注册</a>
        <a href="javascript:;">登录</a>
      </div>
    </div>
    <div class="main">
      <div class="order">
        <div class="title">
          <span>我的订单</span>
          <span class="arr-right">
            <img src="@/assets/imgs/icons/arr-right.png" alt>
          </span>
        </div>
        <div class="order-menu">
            <router-link :to="{name:'order',params:{index:0}}" class="order-menu-list">

            <img src="@/assets/imgs/icons/payment.png" alt>
            <span>待付款</span>

          </router-link>
          <router-link :to="{name:'order',params:{index:1}}" class="order-menu-list">

            <img src="@/assets/imgs/icons/rejecting.png" alt>
            <span>待收货</span>

          </router-link>
          <router-link :to="{name:'order',params:{index:2}}" class="order-menu-list">

            <img src="@/assets/imgs/icons/complete.png" alt>
            <span>已完成</span>

          </router-link>
          <router-link :to="{name:'order',params:{index:3}}" class="order-menu-list">

            <img src="@/assets/imgs/icons/aftermarket.png" alt>
            <span>售后</span>

          </router-link>
        </div>
      </div>
      <div class="collect">
        <div class="title">
          <span>我的收藏</span>
          <span class="arr-right">
            <img src="@/assets/imgs/icons/arr-right.png" alt>
          </span>
        </div>
        <div class="collect-menu">
          <a href="javascript:;" class="collect-menu-list">
            <img src="@/assets/imgs/icons/article.png" alt>
            <span>物品</span>
          </a>
          <a href="javascript:;" class="collect-menu-list">
            <img src="@/assets/imgs/icons/brand.png" alt>
            <span>品牌</span>
          </a>
          <a href="javascript:;" class="collect-menu-list">
            <img src="@/assets/imgs/icons/essay.png" alt>
            <span>文章</span>
          </a>
        </div>
      </div>
      <div class="more-main">
        <div class="more-main-list reject-size">
          <div class="content-left">
            <img src="@/assets/imgs/icons/reject-size.png" alt>
            <span>收货地址</span>
          </div>
          <div class="content-right">
            <img src="@/assets/imgs/icons/arr-right.png" alt>
          </div>
        </div>
        <div class="more-main-list my-coupon">
          <div class="content-left">
            <img src="@/assets/imgs/icons/my-coupon.png" alt>
            <span>我的优惠券</span>
          </div>
          <div class="content-right">
            <img src="@/assets/imgs/icons/arr-right.png" alt>
          </div>
        </div>
        <div class="more-main-list account-safe">
          <div class="content-left">
            <img src="@/assets/imgs/icons/account-safe.png" alt>
            <span>账户与安全</span>
          </div>
          <div class="content-right">
            <img src="@/assets/imgs/icons/arr-right.png" alt>
          </div>
        </div>
        <div class="more-main-list contact-customer-service">
          <div class="content-left">
            <img src="@/assets/imgs/icons/contact-customer-service.png" alt>
            <span>联系客服</span>
          </div>
          <div class="content-right">
            <img src="@/assets/imgs/icons/arr-right.png" alt>
          </div>
        </div>
        <div class="more-main-list about-zaowu">
          <div class="content-left">
            <img src="@/assets/imgs/icons/about-zaowu.png" alt>
            <span>关于造物</span>
          </div>
          <div class="content-right">
            <img src="@/assets/imgs/icons/arr-right.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  components: {}
};
</script>
<style scoped lang='scss'>
.header {
  height: 192px;
  width: 100%;
  overflow: hidden;
  //   background-color: lightsalmon;
  background-image: url("../../assets/imgs/main/main-banner.png");
  .header-top {
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 20px 0 40px;
    justify-content: center;
    .headP {
      display: inline-block;
      height: 74px;
      width: 74px;
      margin: 0 auto;
      border-radius: 50%;
      img {
        height: 74px;
        border-radius: 50%;
        width: 74px;
      }
    }
    .setUp {
      float: right;
    }
  }
  .header-bottom {
    margin-top: 18.7px;
    width: 100%;
    display: flex;
    justify-content: center;

    a {
      border-right: 1px solid #999999;
      text-decoration: none;
      background: #ffffff;
      font-size: 14px;
      color: #010e0d;
      line-height: 32.6px;
      width: 47px;
      height: 32.6px;
    }
    a:last-child {
      border: none;
    }
  }
}
.main {
  background: #f5f5f5;
  width: 100%;
  .order {
    width: 336px;
    background-color: #fff;
    margin: 0 auto;
    transform: translate(0, -37.5px);
    box-shadow: 0 2px 4px 0 rgba(233, 233, 233, 0.5);
    border-radius: 10px;
    .title {
      width: 100%;
      height: 37.5px;
      font-size: 16px;
      color: #010e0d;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      span {
        margin-left: 15px;
      }
      .arr-right {
        width: 20px;
        height: 20px;
        margin-right: 7.5px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .order-menu {
      width: 100%;
      height: 79.5px;
      .order-menu-list {
        display: inline-block;
        height: 79.5px;
        width: 25%;
        overflow: hidden;
        text-decoration: none;
        img {
          display: block;
          height: 28px;
          width: 28px;
          margin: 14.5px auto 0;
        }
        span {
          font-size: 14px;
          color: #494949;
          line-height: 20px;
        }
      }
    }
  }
  .collect {
    width: 336px;
    background-color: #fff;
    margin: 0 auto;
    transform: translate(0, -28.5px);
    box-shadow: 0 2px 4px 0 rgba(233, 233, 233, 0.5);
    border-radius: 10px;
    .title {
      width: 100%;
      height: 37.5px;
      font-size: 16px;
      color: #010e0d;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      span {
        margin-left: 15px;
      }
      .arr-right {
        width: 20px;
        height: 20px;
        margin-right: 7.5px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .collect-menu {
      width: 100%;
      height: 79.5px;
      .collect-menu-list {
        display: inline-block;
        height: 79.5px;
        width: 33.33%;
        overflow: hidden;
        text-decoration: none;
        img {
          display: block;
          height: 28px;
          width: 28px;
          margin: 14.5px auto 0;
        }
        span {
          display: block;
          margin-top: 2.5px;
          font-size: 14px;
          color: #494949;
          line-height: 20px;
        }
      }
    }
  }
  .more-main {
    transform: translate(0, -19.5px);
    width: 100%;
    background-color: #fff;
    .more-main-list {
      display: flex;
      justify-content: space-between;
      height: 54px;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .content-left {
        display: flex;
        align-items: center;
        margin-left: 20px;
        img {
          height: 22px;
          width: 22px;
          margin-right: 9.5px;
        }
        span {
          font-size: 16px;
          color: #494949;
          line-height: 22px;
        }
      }
      .content-right{
          margin-right: 15.5px;
          img{
              width: 20px;
              height: 20px;
          }
      }
    }
  }
}
.router-view{
  margin-bottom: 68px;
}
</style>

