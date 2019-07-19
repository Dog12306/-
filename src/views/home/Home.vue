<template>
  <div class="home-main">
    <div class="header">
      <a href="javascript:;" class="search">
        <img src="@/assets/imgs/icons/search.png" alt="search">
      </a>
      <p class="header-title">ZAOWU 造物</p>
      <div class="header-right">
        <a href="javascript:;" class="chat">
          <img src="@/assets/imgs/icons/chat.png" alt="chat">
        </a>
        <router-link tag="a" :to="{name:'cart'}">
          <img src="@/assets/imgs/icons/cart.png" alt="cart">
        </router-link>
      </div>
    </div>
    <div class="link-title">
      <a href="javascript:;" class="link-title-list">推荐</a>
      <a href="javascript:;" class="link-title-list">活动</a>
      <a href="javascript:;" class="link-title-list">品牌</a>
      <a href="javascript:;" class="link-title-list">定制</a>
    </div>
    <div class="swiper-fs">
      <swiper class="swiper" :options="swiperFs">
        <!-- slides -->
        <swiper-slide v-for="(m,index) in imgs" :key="index">
          <img :src="m.url" alt="图片">
        </swiper-slide>
      </swiper>
    </div>
    <div class="split-line"></div>
    <tuesday-goods></tuesday-goods>
    <monday-goods></monday-goods>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
import TuesdayGoods from "./components/TuesdayGoods";
import MondayGoods from "./components/MondayGoods";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    TuesdayGoods,
    MondayGoods
  },
  data() {
    return {
      imgs: [
        {
          url: require("@assets/imgs/home/swiper-1.png")
        },
        {
          url: require("@/assets/imgs/home/swiper-2.png")
        },
        {
          url: require("@/assets/imgs/home/swiper-3.png")
        }
      ],
      swiperFs: {
        slidesPerView: 1.3,
        centeredSlides: true
      }
    };
  },
  methods: {
    callback() {}
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 52px;
  width: 100%;
  font-size: 20px;
  color: #000;
  justify-content: space-between;
  background-color: #fff;
  z-index: 500;
  align-items: center;
  .header-title {
    transform: translate(20px, 0);
  }
  .search {
    width: 20px;
    height: 20px;
    margin-left: 16px;
  }
  .header-right {
    margin-right: 16px;
    .chat {
      width: 22px;
      height: 22px;
      margin-right: 20px;
    }
    .cart {
      width: 23px;
      height: 22px;
    }
  }
}
.link-title {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 52px;
  margin-bottom: 20px;
  .link-title-list {
    width: 60px;
    color: #010e0d;
    font-size: 15px;
    border-right: 1px solid #e5e5e5;
  }
  .link-title-list:last-child {
    border: none;
  }
}
.split-line {
  height: 5px;
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 20px;
}
</style>


