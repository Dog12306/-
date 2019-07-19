<template>
  <div class="AddOrBuy-main">
    <div class="cover">
      <div class="showbox-buy">
        <div class="header">
          <a href="javascript:;" @click="outbuy()" class="back">
            <img src="@/assets/imgs/icons/arr-left.png" alt="back">
          </a>
          <p class="header-text">编辑</p>
        </div>
      </div>
      <div class="buy-block">
        <div class="marginbox">
          <div class="good-describe">
            <img :src="goodsDetail.url" alt="图片" class="goodimg">
            <div class="good-diff">
              <p class="good-name">{{goodsDetail.goodname}}</p>
              <p class="good-explain">{{goodsDetail.goodexplain}}</p>
              <p class="good-price">¥{{goodsDetail.price}}</p>
              <p class="good-surplus">仅剩{{goodsDetail.surplus}}件</p>
            </div>
          </div>
          <div class="color-check">
            <div class="check-title">
              <span class="text">颜色</span>
              <img src="@/assets/imgs/icons/arr-left.png" alt class="arr-down">
            </div>
            <div class="palette">
              <div class="palette-list" @click="checked()" :style="i" v-for="(i,index) in goodsDetail.goodcolor" :key="index"></div>
              <!-- <div class="palette-list" @click="checked()" data-color="灰白色"></div>
              <div class="palette-list" @click="checked()" data-color="黑色"></div>
              <div class="palette-list" @click="checked()" data-color="灰绿色"></div> -->
              <!-- style="background-color:red" -->
            </div>
          </div>
          <div class="norms-check">
            <div class="check-title">
              <span class="text">规格</span>
              <img src="@/assets/imgs/icons/arr-left.png" alt class="arr-down">
            </div>
            <div class="size">
              <div class="size-list" @click="checked()" v-for="(k,index) in goodsDetail.goodsize" :key="index">{{k}}</div>
              <!-- <div class="size-list" @click="checked()">S</div>
              <div class="size-list" @click="checked()">M</div>
              <div class="size-list" @click="checked()">L</div> -->
            </div>
          </div>
          <div class="number-check">
            <div class="check-title">
              <span class="text">数量</span>
              <img src="@/assets/imgs/icons/arr-left.png" alt class="arr-down">
            </div>
            <div class="num-conture">
              <button class="rem conture-list" @click="numrem()">-</button>
              <button class="num conture-list">{{goodsDetail.checknum}}</button>
              <button class="add conture-list" @click="numadd()">+</button>
            </div>
          </div>
          <div class="x">
            <img src="@assets/imgs/icons/close.png" alt="关闭" @click="outbuy()">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
export default {
  name: "AddOrBuy",
  props: {
    good: Object
  },
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
                        // console.log(k.goodcolor);
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
    }
  },
  data() {
    return {};
  },
  created() {},

  methods: {
    outbuy: function() {
      this.$emit("outbuy");
    },
    numrem: function() {
      // this.$emit("numrem");
      if(this.goodsDetail.checknum > 1){
        this.goodsDetail.checknum --;
      }
      
    },
    numadd: function() {
      // this.$emit("numadd", this.surplus);
      if(this.goodsDetail.checknum < this.goodsDetail.surplus){
        this.goodsDetail.checknum ++;
      }
    },
    checked: function(e) {
      e = event || window.event;
      if (e.target.className === "palette-list") {
        this.$emit("checkcolor");
        this.goodsDetail.checkcolor = e.target.style.backgroundColor;
        if (document.querySelector(".palette-list.active")) {
          document
            .querySelector(".palette-list.active")
            .classList.remove("active");
        }
      }
      if (e.target.className === "size-list") {
        this.$emit("checksize");
        this.goodsDetail.checksize = e.target.innerText;
        if (document.querySelector(".size-list.active")) {
          document
            .querySelector(".size-list.active")
            .classList.remove("active");
        }
      }
      e.target.classList.add("active");
    }
  }
};
</script>

<style lang='scss' scoped>
.cover {
  height: 100%;
  width: 100%;
  background-color: #38383839;
  bottom: 0;
  left: 0;
  position: fixed;
  .showbox-buy .header {
    background-color: #fff;
    display: flex;
    height: 47.5px;
    width: 100%;
    font-size: 20px;
    color: #000;
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
    .header-text {
      margin-right: 16px;
      color: #000;
      font-size: 18px;
      line-height: 25px;
    }
  }
  .buy-block {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
    padding-bottom: 90px;
    width: 333px;
    background-color: #fff;
    .marginbox {
      margin-top: 14px;
      margin-left: 16px;
      .good-describe {
        margin-bottom: 26.5px;
        .goodimg {
          float: left;
          width: 114px;
          height: 114px;
          margin-right: 22px;
        }
        .good-diff {
          float: left;
          margin-top: 7px;
          .good-name {
            font-size: 12px;
            color: #494949;
            text-align: left;
            line-height: 17px;
            margin-bottom: 13px;
          }
          .good-explain {
            font-size: 12px;
            color: #494949;
            text-align: left;
            line-height: 17px;
            margin-bottom: 13px;
          }
          .good-price {
            font-size: 16px;
            color: #010e0d;
            text-align: left;
            line-height: 22px;
            margin-bottom: 6px;
            font-weight: bold;
          }
          .good-surplus {
            font-size: 14px;
            color: #494949;
            text-align: left;
            line-height: 20px;
          }
        }
      }
      .good-describe::after {
        content: "";
        display: block;
        clear: both;
      }
      .check-title {
        .text {
          font-size: 14px;
          color: #000;
          float: left;
        }
        .arr-down {
          width: 16.3px;
          height: 16.3px;
          float: left;
          margin-left: 8px;
          transform: rotate(-90deg);
        }
      }
      .check-title::after {
        content: "";
        display: block;
        clear: both;
      }
      .color-check {
        margin-bottom: 21px;
        .palette {
          margin-top: 15px;
          height: 35px;
          .palette-list {
            float: left;
            width: 35px;
            height: 35px;
            margin-left: 33.5px;
            border-radius: 50%;
            border: 2px solid rgb(214, 19, 221,0);
          }
          .palette-list.active {
            border: 2px solid rgb(214, 19, 221);
          }
          // .palette-list:nth-child(1) {
          //   background: #ebe7dc;
          //   box-shadow: 0 2px 5px 0 #e9e9e9;
          //   margin-left: 20px;
          // }
          // .palette-list:nth-child(2) {
          //   background: #101010;
          //   box-shadow: 0 2px 5px 0 #bfbfbf;
          // }
          // .palette-list:nth-child(3) {
          //   background: #568247;
          //   box-shadow: 0 2px 5px 0 #bfbfbf;
          // }
        }
        .palette::after {
          content: "";
          display: block;
          clear: both;
        }
      }
      .color-check::after {
        content: "";
        display: block;
        clear: both;
      }
      .norms-check {
        margin-bottom: 19.5px;
        .size {
          margin-top: 12.5px;
          margin-left: 16px;
          .size-list {
            float: left;
            width: 44px;
            height: 39px;
            text-align: center;
            line-height: 44px;
            background: #ffffff;
            box-shadow: 0 2px 5px 0 #e9e9e9;
            border-radius: 4px;
            margin-right: 25px;
            border: 2px solid rgb(214, 19, 221,0);
          }
          .size-list.active {
            border: 2px solid rgb(214, 19, 221);
          }
        }
        .size::after {
          content: "";
          display: block;
          clear: both;
        }
      }
      .number-check {
        margin-bottom: 39px;
        .num-conture {
          margin-top: 16.5px;
          .conture-list {
            float: left;
            min-width: 22px;
            min-height: 24px;
            background: #ffffff;
            box-shadow: 0 2px 5px 0 #e9e9e9;
            border-radius: 1px;
            border: none;
            margin-right: 2.5px;
          }
          .conture-list:nth-child(2) {
            min-width: 33px;
            min-height: 24px;
          }
        }
        .num-conture::after {
          content: "";
          display: block;
          clear: both;
        }
      }
      .x {
        position: absolute;
        right: 0;
        top: 0;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        right: 11px;
        top: 14px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .marginbox::after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
</style>
