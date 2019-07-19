<template>
  <div class="cart-main">
    <div class="header">
      <a href="javascript:;" @click="$router.back(-1)" class="back">
        <img src="@/assets/imgs/icons/arr-left.png" alt="back" />
      </a>
      <p class="header-title">购物车</p>
      <p class="header-text" @click="removestatus()">编辑</p>
    </div>
    <div class="goods">
      <div class="tip" v-if="zero">
        <p class="tip-text">购物车空空如也,不需要点商品嘛</p>
      </div>
      <div class="goods-list" v-for="i in goodsCart" :key="i.goodid">
        <div class="check" @click="checked(i.id)" :class="{active:i.goodchecked}"></div>
        <div class="good-img">
          <img :src="i.url" alt />
        </div>
        <div class="good-text">
          <p class="good-name">{{i.goodname}}</p>
          <p class="good-explain">{{i.goodexplain}}</p>
          <p class="good-price">¥{{i.price}}</p>
        </div>
        <div class="good-num">
          <div class="num-rem" @click="numrem(i.id)">-</div>
          <div class="num">{{i.cartnum}}</div>
          <div class="num-add" @click="numadd(i.id)">+</div>
        </div>
        <div class="close" @click="removegoods(i.id)">
          <img src="@/assets/imgs/icons/close.png" alt="删除" v-show="removest" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-menu">
        <div class="check">
          <span class="check-q" @click="allcheck()" :class="{active:changecheck}"></span>
          <span class="check-text">全选</span>
        </div>
        <div class="count">
          <span class="count-text">总计</span>
          <span class="count-price">¥{{cprice}}</span>
        </div>
        <button class="soon-buy">立即购买</button>
      </div>
      <div class="footer-line">
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import {bus} from '../../assets/eventBus'
export default {
  name: "cart",
  components: {},
  computed: {
    cprice: function() {
      var countPrice = 0;
      for (var i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].goodchecked === true) {
          countPrice += this.goodsCart[i].price * this.goodsCart[i].cartnum;
        }
      }
      return countPrice;
    },
    goodsCart: function() {
      return this.$store.state.cart.cartgoods;
    },
    changecheck: function() {
      for (var i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].goodchecked === false) {
          this.allchecked = false;
          return this.allchecked;
          break;
        }
      }
      if (this.goodsCart.length > 0) {
        this.allchecked = true;
        return this.allchecked;
      }
    }
  },

  data() {
    return {
      goods: [],
      allchecked: false,
      removest: false,
      zero: true
    };
  },
  beforeUpdate() {
    if (this.$store.state.cart.cartgoods) {
      var cartgoodsJSON = JSON.stringify(this.$store.state.cart.cartgoods);
      localStorage.cartgoods = cartgoodsJSON;
    }
  },
  created() {
    // this.receive();
    // this.goods = this.$store.state.goodsCart;
    // console.log(this.$store.state.cart.cartgoods[0])
    if (this.goodsCart.length > 0) {
      this.zero = false;
    }
  },

  methods: {
    // receive: function() {
    //   this.$bus.once("sendgoods", message => {
    //     this.goods.push(message);
    //     // console.log(this.goods);
    //   });
    // },
    checked: function(id) {
      // e.target.style.backgroundImage = "url("+require('@/assets/imgs/icons/checked.png')+")";
      // e.target.style.backgroundImage = "url(../../../assets/imgs/icons/checked.png)";
      for (var i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].id == id) {
          this.goodsCart[i].goodchecked = !this.goodsCart[i].goodchecked;
          break;
        }
      }
    },
    numrem: function(id) {
      for (var i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].id === id) {
          this.$store.dispatch("cart/cartgoodsrem", {
            goods: this.goodsCart[i],
            st: false
          });
          // this.goodsCart[i].checknum--;
          if (this.goodsCart[i].checknum < 1) {
            this.goodsCart[i].checknum = 1;
          }
          break;
        }
      }
    },
    numadd: function(id) {
      for (var i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].id === id) {
          // this.goodsCart[i].checknum++;
          this.$store.dispatch("cart/cartgoodsadd", {
            goods: this.goodsCart[i],
            st: false
          });
          break;
        }
      }
    },
    allcheck: function() {
      this.allchecked = !this.allchecked;
      for (var i = 0; i < this.goodsCart.length; i++) {
        this.goodsCart[i].goodchecked = this.allchecked;
      }
    },
    removestatus: function() {
      this.removest = !this.removest;
    },
    removegoods: function(id) {
      for (var i = 0; i < this.goodsCart.length; i++) {
        if (this.goodsCart[i].id == id) {
          this.$store.dispatch("cart/cartgoodsrem", {
            goods: this.goodsCart[i],
            st: true
          });
          // this.goodsCart.splice(i,1);
          break;
        }
      }
      if (this.goodsCart.length === 0) {
        this.zero = true;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.cart-main {
  background: #f4f4f4;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  background: #f9f9f9;
  display: flex;
  height: 47.5px;
  width: 100%;
  font-size: 20px;
  color: #000;
  justify-content: space-between;
  align-items: center;
  .header-title {
    color: #010e0d;
    font-size: 18px;
  }
  .back {
    height: 20px;
    width: 20px;
    margin-left: 16px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header-text {
    margin-right: 16px;
    color: #000;
    font-size: 18px;
    line-height: 25px;
  }
}
.goods {
  width: 333px;
  margin: 47.5px auto 0;
  padding-top: 16px;
  padding-bottom: 24.5px;
  .tip {
    color: lightpink;
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
  }
  .goods-list {
    background-color: #fff;
    position: relative;
    width: 100%;
    height: 114px;
    margin-bottom: 24.5px;
    display: flex;
    align-items: center;
    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      img {
        height: 17px;
        width: 17px;
      }
    }
    .check {
      // position: absolute;
      // top: 50%;
      // left: 6px;
      // transform: translate(0,-50%);
      margin-left: 6px;
      height: 17px;
      width: 17px;
      border-radius: 50%;
      border: 1px solid #e5e5e5;
      background-size: 100% 100%;
    }
    .check.active {
      background-image: url(../../assets/imgs/icons/checked.png);
    }
    .good-img {
      height: 76px;
      width: 76px;
      margin-left: 8px;
      img {
        width: 76px;
        width: 76px;
      }
    }
    .good-text {
      margin-left: 15px;
      p {
        text-align: left;
      }
      .good-name {
        font-size: 12px;
        color: #494949;
        line-height: 17px;
        margin-bottom: 6.5px;
      }
      .good-explain {
        font-size: 12px;
        color: #494949;
        line-height: 17px;
        margin-bottom: 6.5px;
      }
      .good-price {
        font-size: 14px;
        color: #1c4b47;
        font-weight: bold;
        line-height: 20px;
      }
    }
    .good-num {
      position: absolute;
      bottom: 21px;
      right: 14px;
      font-size: 14px;
      color: #e5e5e5;
      div {
        float: left;
      }
      .num-rem {
        height: 20px;
        width: 9px;
      }
      .num {
        min-height: 20px;
        min-width: 21px;
        font-size: 14.52px;
        color: #000000;
      }
      .num-add {
        height: 20px;
        width: 9px;
      }
    }
  }
  .goods-list:last-child {
    margin: 0;
  }
}
.footer {
  width: 100%;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  .footer-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48.5px;
    .check {
      display: flex;
      margin-left: 22.5px;
      .check-q {
        height: 19px;
        width: 19px;
        border-radius: 50%;
        border: 1px solid #999999;
        margin-right: 11.5px;
        background-size: 100% 100%;
      }
      .check-q.active {
        background-image: url(../../assets/imgs/icons/checked.png);
      }
      .check-text {
        font-size: 18px;
        color: #010e0d;
        line-height: 25px;
      }
    }
    .count {
      display: flex;
      align-items: center;
      .count-text {
        font-size: 14px;
        color: #010e0d;
        line-height: 20px;
        margin-right: 15px;
      }
      .count-price {
        font-size: 16px;
        color: #1c4b47;
        line-height: 22px;
        font-weight: bold;
      }
    }
    .soon-buy {
      width: 113px;
      height: 40px;
      background: #1c4b47;
      border-radius: 4px;
      font-size: 15px;
      color: #ffffff;
      border: none;
      margin-right: 18px;
    }
  }
  .footer-line {
    height: 34px;
    width: 100%;
    overflow: hidden;
    .line {
      height: 5px;
      width: 134px;
      background: #000000;
      border-radius: 100px;
      margin: 20px auto;
    }
  }
}
.router-view {
  margin-bottom: 74px;
}
</style>
