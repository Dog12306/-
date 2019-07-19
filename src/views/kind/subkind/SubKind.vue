<template>
  <div class="kind-main">
    <div class="header">
      <router-link to="/kind" tag="a" class="back">
        <img src="@/assets/imgs/icons/arr-left.png" alt="back">
      </router-link>
      <p class="header-title">{{goodsList.detail}}</p>
      <div class="header-right">
        <a href="javascript:;" class="chat">
          <img src="@/assets/imgs/icons/search.png" alt="chat">
        </a>
        <router-link tag="a" :to="{name:'cart'}">
          <img src="@/assets/imgs/icons/cart.png" alt="cart">
        </router-link>
      </div>
    </div>
    <div class="kind-menu">
      <div class="kind-list new">
        <a href="javascript:;">新品</a>
      </div>
      <div class="kind-list sell" @click="sellsortadd()">
        <a href="javascript:;">销量</a>
        <div class="arr">
          <span class="arr-up" :class="{active:sellsort === 1}"></span>
          <span class="arr-down" :class="{active:sellsort === 2}"></span>
        </div>
      </div>
      <div class="kind-list price" @click="pricesortadd()">
        <a href="javascript:;">价格</a>
        <div class="arr">
          <span class="arr-up" :class="{active:pricesort === 1}"></span>
          <span class="arr-down" :class="{active:pricesort === 2}"></span>
        </div>
      </div>
      <div class="kind-list check">
        <a href="javascript:;">筛选</a>
      </div>
    </div>
    <div class="goods">
      <div class="goods-type">
        <span v-for="i in goodstype" :key="i.id" :id="i.id" class="goods-type-list">{{i.type}}</span>
      </div>
      <div class="goods-item">
        <router-link
          :to="{name:'goodsDetail',params:{subKindId:$route.params.subKindId,detailid:n.id}}"
          tag="div"
          class="goods-list"
          v-for="n in sortgoods"
          :key="n.id"
        >
          <!-- <router-link :to="{name:'goodsDetail',params:{subKindId:id:n.id,goodname:n.goodname}}" tag="div" class="goods-list" v-for="n in goods" :key="n.id"> -->
          <img :src="n.url" alt="商品图片">
          <p class="goods-name">{{n.goodname}}</p>
          <p class="goods-explain">{{n.goodexplain}}</p>
          <p class="goods-price">¥{{n.price}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import goods from "./data.js";
export default {
  name: "SubKind",

  data() {
    return {
      pricesort: 0,
      sellsort: 0
    };
  },
  computed: {
    goodsList: function() {
      for (var item of this.$store.state.product.product) {
        for (var n in item) {
          if (n === "kinddetail") {
            for (var m of item[n]) {
              if(this.$route.params.subKindId === m.id){
                return m
              }
            }
          }
        }
      }
    },
    sortgoods: function() {
      var goodsdev = [];  
      for (var k = 0; k < this.goodsList.goodsList.length; k++) {
        goodsdev.push(this.goodsList.goodsList[k]);
      }
      if (this.pricesort === 1 && this.sellsort === 0) {
        for (var i = 0; i < goodsdev.length; i++) {
          for (var j = i + 1; j < goodsdev.length; j++) {
            if (goodsdev[j].price > goodsdev[i].price) {
              var st = goodsdev[j];
              goodsdev[j] = goodsdev[i];
              goodsdev[i] = st;
            }
          }
        }
        return goodsdev;
      }
      if (this.pricesort === 2 && this.sellsort === 0) {
        for (var i = 0; i < goodsdev.length; i++) {
          for (var j = i + 1; j < goodsdev.length; j++) {
            if (goodsdev[j].price < goodsdev[i].price) {
              var st = goodsdev[j];
              goodsdev[j] = goodsdev[i];
              goodsdev[i] = st;
            }
          }
        }
        return goodsdev;
      }
      if (this.sellsort === 1 && this.pricesort === 0) {
        for (var i = 0; i < goodsdev.length; i++) {
          for (var j = i + 1; j < goodsdev.length; j++) {
            if (goodsdev[j].sell > goodsdev[i].sell) {
              var st = goodsdev[j];
              goodsdev[j] = goodsdev[i];
              goodsdev[i] = st;
            }
          }
        }
        return goodsdev;
      }
      if (this.sellsort === 2 && this.pricesort === 0) {
        for (var i = 0; i < goodsdev.length; i++) {
          for (var j = i + 1; j < goodsdev.length; j++) {
            if (goodsdev[j].sell < goodsdev[i].sell) {
              var st = goodsdev[j];
              goodsdev[j] = goodsdev[i];
              goodsdev[i] = st;
            }
          }
        }
        return goodsdev;
      }
      if (this.pricesort === 1 && this.sellsort === 1) {
        for (var i = 0; i < goodsdev.length; i++) {
          for (var j = i + 1; j < goodsdev.length; j++) {
            if (
              goodsdev[j].price > goodsdev[i].price &&
              goodsdev[j].sell > goodsdev[i].sell
            ) {
              var st = goodsdev[j];
              goodsdev[j] = goodsdev[i];
              goodsdev[i] = st;
            }
          }
        }
        return goodsdev;
      }
      if (this.pricesort === 1 && this.sellsort === 2) {
        for (var i = 0; i < goodsdev.length; i++) {
          for (var j = i + 1; j < goodsdev.length; j++) {
            if (
              goodsdev[j].price > goodsdev[i].price &&
              goodsdev[j].sell < goodsdev[i].sell
            ) {
              var st = goodsdev[j];
              goodsdev[j] = goodsdev[i];
              goodsdev[i] = st;
            }
          }
        }
        return goodsdev;
      }
      if (this.pricesort === 2 && this.sellsort === 2) {
        for (var i = 0; i < goodsdev.length; i++) {
          for (var j = i + 1; j < goodsdev.length; j++) {
            if (
              goodsdev[j].price < goodsdev[i].price &&
              goodsdev[j].sell < goodsdev[i].sell
            ) {
              var st = goodsdev[j];
              goodsdev[j] = goodsdev[i];
              goodsdev[i] = st;
            }
          }
        }
        return goodsdev;
      }
      if (this.pricesort === 2 && this.sellsort === 1) {
        for (var i = 0; i < goodsdev.length; i++) {
          for (var j = i + 1; j < goodsdev.length; j++) {
            if (
              goodsdev[j].price < goodsdev[i].price &&
              goodsdev[j].sell > goodsdev[i].sell
            ) {
              var st = goodsdev[j];
              goodsdev[j] = goodsdev[i];
              goodsdev[i] = st;
            }
          }
        }
        return goodsdev;
      }
      if (this.pricesort === 0 && this.sellsort === 0) {
        return goodsdev;
      }
    }
  },
  mixins: [goods],
  methods: {
    pricesortadd: function() {
      this.pricesort++;
      if (this.pricesort > 2) {
        this.pricesort = 0;
      }
    },
    sellsortadd: function() {
      this.sellsort++;
      if (this.sellsort > 2) {
        this.sellsort = 0;
      }
    }
  },
  created() {
    //   console.log(this.$route.params);
    for (var item of this.$store.state.product.product) {
      for (var n in item) {
        if (n === "kinddetail") {
          for (var m of item[n]) {        
            if(this.$route.params.subKindId === m.id){
              //  console.log(m.goodsList);
              }
          }
        }
      }
    }
    this.getRandomImg();
  }
};
</script>

<style lang='scss' scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 47.5px;
  width: 100%;
  font-size: 20px;
  color: #000;
  background-color: #fff;
  z-index: 500;
  justify-content: space-between;
  align-items: center;
  .back {
    height: 20px;
    width: 20px;
    margin-left: 16px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header-title {
    transform: translate(20px, 0);
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
.kind-menu {
  margin-top: 47.5px;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  .kind-list {
    height: 20px;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-size: 14px;
      color: #010e0d;
      text-decoration: none;
      margin-right: 4px;
    }
  }
  .arr {
    span {
      display: block;
      height: 0;
      width: 0;
      border-top: 5px solid #00000000;
      border-left: 4px solid #00000000;
      border-right: 4px solid #00000000;
      border-bottom: 4px solid #d8d8d8;
    }
    span.active {
      border-bottom: 4px solid rgb(18, 28, 173);
    }
    .arr-down {
      margin-top: 1px;
      transform: rotateX(180deg);
    }
  }
}
.goods {
  width: 303px;
  margin: 0 auto;
  margin-top: 11.5px;
  .goods-type {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 13.5px;
    .goods-type-list {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #010e0d;
      font-size: 14px;
      background-color: #f9f9f9;
      width: 51px;
      height: 23px;
    }
  }
  .goods-item {
    .goods-list {
      float: left;
      margin-right: 45px;
      width: 129px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 129px;
      }
      p {
        height: 16px;
        font-size: 12px;
        color: #494949;
      }
      .goods-price {
        color: #010e0d;
        font-weight: bold;
      }
    }
    .goods-list:nth-child(2n) {
      margin-right: 0;
    }
  }
  .goods-item::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
