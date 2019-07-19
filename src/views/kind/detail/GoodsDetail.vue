<template>
  <div class="kind-main">
    <div class="showbox-nobuy">
      <div class="header">
        <a href="javascript:;" @click="$router.back(-1)" class="share">
          <img src="@/assets/imgs/icons/arr-left.png" alt="share">
        </a>
        <p class="header-title">商品详情</p>
        <div class="header-right">
          <a href="javascript:;" class="chat">
            <img src="@/assets/imgs/icons/share.png" alt="chat">
          </a>
          <router-link tag="a" :to="{name:'cart'}">
            <img src="@/assets/imgs/icons/cart.png" alt="cart">
          </router-link>
        </div>
      </div>
      <div class="check">
        <a href="javascript:;" :class="{active:!assessst}" @click="assessst=true?false:assessst">详情</a>
        <a href="javascript:;" :class="{active:assessst}" @click="assessst=true?true:!assessst">评价</a>
      </div>
    </div>
    <div class="detail" v-show="!assessst">
      <div class="title">
        <div class="good-title">
          <p class="good-name">{{goodsDetail.goodname}}</p>
          <p class="good-explain">{{goodsDetail.goodexplain}}</p>
          <p class="small-title">{{goodsDetail.detail.smalltitle}}</p>
        </div>
      </div>
      <div class="split-line"></div>
      <div class="essay">
        <p class="essay-list" v-for="(i,index) in goodsDetail.detail.essay" :key="index" :id="i.id">{{i.content}}</p>
      </div>
      <div class="goodimg">
        <img :src="goodsDetail.url" alt="商品">
      </div>
    </div>
    <div class="assess" v-show="assessst">
      <div class="assess-list" v-for="x in goodsDetail.assess" :key="x.id">
        <div class="userimg">
          <img :src="x.url" alt="头像">
        </div>
        <div class="user-assess">
          <p class="user-name">{{x.username}}</p>
          <p class="user-day">{{x.day}}</p>
          <p class="user-text">{{x.content}}</p>
        </div>
      </div>
    </div>
    <AddOrBuy
      :good="good"
      @outbuy="outbuy"
      @numrem="numrem"
      @numadd="numadd"
      @checksize="size"
      @checkcolor="color"
      v-show="buyst"
    ></AddOrBuy>
    <div class="footer">
      <div class="showbox-nobuy" v-show="!buyst">
        <div class="footer-menu">
          <div class="footer-menu-left">
            <a href="javascript:;" class="collect">
              <img src="@assets/imgs/icons/collect.png" alt="collect">
            </a>
            <a href="javascript:;" class="service">
              <img src="@assets/imgs/icons/service.png" alt="service">
            </a>
          </div>
          <div class="footer-menu-right">
            <button class="add-cart" @click="wellbuy()">加入购物车</button>
            <button class="soon-buy" @click="soonbuy()">立即购买</button>
          </div>
        </div>
      </div>
      <div class="showbox-buy" v-show="buyst">
        <div class="footer-menu-buy">
          <button class="confirm" @click="confirm()" :disabled="!allcheck">确定</button>
        </div>
      </div>
      <div class="footer-line">
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from "./data.js";
import AddOrBuy from "../components/AddOrBuy";
// import bus from '../../../assets/js/eventBus'
export default {
  name: "GoodsDetail",
  components: {
    AddOrBuy
  },
  data() {
    return {
      assessst: false,
      buyst: false,
      soonbuyst: false,
      num: 0,
      good: {},
      goodsize: "",
      goodcolor: "",
      checkedcolor: false,
      checkedsize: false
    };
  },
  mixins: [Detail],
  computed: {
    goodsDetail: function() {
      for (var item of this.$store.state.product.product) {
        for (var n in item) {
          if (n === "kinddetail") {
            for (var m of item[n]) {
              if (this.$route.params.subKindId === m.id) {
                for (var j in m) {
                  if (j === "goodsList") {
                    for (var k of m[j]) {
                      if (k.id === this.$route.params.detailid) {
                        return k;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    allcheck: function() {
      if(this.checkedcolor === true && this.checkedsize === true){
        return true
      }else{
        return false
      }
    }
  },
  methods: {
    wellbuy: function() {
      this.buyst = true;
      this.checkedcolor = false;
      this.checkedsize = false;
    },
    soonbuy: function() {
      this.buyst = true;
      this.soonbuyst = true;
      this.checkedcolor = false;
      this.checkedsize = false;
    },
    confirm: function() {
      // this.$store.commit("cart/goodsadd",this.goodsDetail);
      if (this.soonbuyst) {
        this.$router.push({name:'payment',params:{id:this.goodsDetail.id}})
      } else {
        this.buyst = false;
        // this.$store.state.goodsCart.push(this.good);
        // this.$store.commit("cart/goodsadd",this.goodsDetail);
        this.$store.dispatch('cart/cartgoodsadd',{goods:this.goodsDetail,st:true});
      }
    },
    outbuy: function() {
      this.buyst = false;
    },
    numrem: function() {
      this.goodsDetail.checknum--;
      if (this.goodsDetail.checknum < 1) {
        this.goodsDetail.checknum = 1;
      }
    },
    numadd: function(surplus) {
      
      if (this.goodsDetail.checknum > this.goodsDetail.surplus) {
        this.goodsDetail.checknum = this.goodsDetail.surplus;
      }
    },

    size: function(goodsize) {
      this.goodsize = goodsize;
      // console.log(this.goodsize);
      this.checkedsize = true;
    },
    color: function(goodcolor) {
      this.goodcolor = goodcolor;
      // console.log(this.goodcolor);
      this.checkedcolor = true;
    }
  },
  created() {
    for (var item of this.$store.state.product.product) {
      for (var n in item) {
        if (n === "kinddetail") {
          for (var m of item[n]) {
            if (this.$route.params.subKindId === m.id) {
              for (var j in m) {
                if (j === "goodsList") {
                  for (var k of m[j]) {
                    if (k.id === this.$route.params.detailid) {
                      // console.log(k);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    // this.getRandomDetail();
    // this.getRandomAssess();
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // console.log(this.$store.state.cart.cartgoods);
    localStorage.cartgoods = JSON.stringify(this.$store.state.cart.cartgoods);
    // console.log("Aaa");
    next();
  }
};
</script>

<style lang='scss' scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 500;
  display: flex;
  height: 47.5px;
  width: 100%;
  font-size: 20px;
  color: #000;
  justify-content: space-between;
  align-items: center;
  .share {
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
.check {
  margin-top: 47.5px;
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15.5px;
  a {
    text-decoration: none;
    color: #999999;
    font-size: 17px;
    width: 86px;
  }
  a.active {
    color: #1c4b47;
  }
}
.detail {
  margin-bottom: 100px;
  width: 100%;
  .title {
    .good-title {
      .good-name {
        height: 28px;
        line-height: 28px;
        margin-bottom: 7px;
        color: #010e0d;
        font-size: 20px;
      }
      .good-explain {
        height: 22px;
        letter-spacing: 2.7px;
        line-height: 22px;
        margin-bottom: 14.5px;
        color: #010e0d;
        font-size: 16px;
      }
      .small-title {
        height: 14px;
        letter-spacing: 6.8px;
        line-height: 14px;
        margin-bottom: 6px;
        color: #494949;
        font-size: 10px;
      }
    }
  }
  .split-line {
    height: 2px;
    width: 108px;
    background-color: #999999;
    margin: 0 auto 12px;
  }
  .essay {
    margin-bottom: 28.5px;
    .essay-list {
      color: #494949;
      font-size: 10px;
      line-height: 14px;
      margin-bottom: 11px;
    }
    .essay-list:last-child {
      margin-bottom: 0;
    }
  }
  .goodimg {
    height: 364px;
    width: 339px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.assess {
  width: 100%;
  margin-bottom: 100px;
  .assess-list {
    padding-top: 13px;
    border-top: 2px solid #e6e6e6;
    width: 343px;
    margin: 0 auto 30px;
    .userimg {
      width: 60px;
      height: auto;
      float: left;
      img {
        float: left;
        height: 41px;
        width: 41px;
        border-radius: 50%;
      }
    }
    .user-assess {
      p {
        width: 278px;
        float: right;
        text-align: left;
      }
      .user-name {
        color: #000000;
        font-size: 18px;
        text-align: left;
      }
      .user-day {
        line-height: 20px;
        color: #767676;
        font-size: 14px;
        margin-bottom: 12.5px;
      }
      .user-text {
        color: #494949;
        font-size: 12px;
        line-height: 20px;
      }
    }
    .user-assess::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .assess-list:first-child {
    border: none;
  }
  .assess-list::after {
    content: "";
    display: block;
    clear: both;
  }
}
.footer-menu-buy {
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  .confirm {
    width: 177px;
    height: 40px;
    background: #1c4b47;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    border: none;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  width: 100%;
  .footer-menu {
    width: 339px;
    height: 48.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .footer-menu-left {
      a {
        img {
          width: 24px;
          height: 24px;
        }
      }
      a:first-child {
        margin-right: 21px;
      }
    }
    .footer-menu-right {
      button {
        width: 113px;
        height: 40px;
        font-size: 15px;
        border-radius: 4px;
      }
      .add-cart {
        color: #1c4b47;
        border: 1px solid #1c4b47;
        background-color: #fff;
        margin-right: 8px;
      }
      .soon-buy {
        color: #fff;
        background: #1c4b47;
        border: none;
        box-shadow: 0 2px 5px 0 #e9e9e9;
      }
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
  margin: 0;
}
</style>


