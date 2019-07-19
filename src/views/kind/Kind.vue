<template>
  <div class="kind-main">
    <div class="header">
      <router-link to="/home" tag="a" class="back">
        <img src="@/assets/imgs/icons/arr-left.png" alt="back">
      </router-link>
      <p class="header-title">ZAOWU 造物</p>
      <div class="header-right">
        <a href="javascript:;" class="chat">
          <img src="@/assets/imgs/icons/search.png" alt="chat">
        </a>
        <router-link tag="a" :to="{name:'cart'}">
          <img src="@/assets/imgs/icons/cart.png" alt="cart">
        </router-link>
      </div>
    </div>
    <ul class="kind-item">
      <li class="kind-list" v-for="i in productkind" :key="i.id1" :id="i.id">
        <a href="javascript:;">
          <img :src="i.url" alt="kind" @click="lookdetail(i.id)">
        </a>
        <!-- <transition name="sososo"> -->
        <ul class="kind-detail" v-show="i.detailshow">
          <router-link
            :to="{name:'subKind',params:{subKindId:m.id}}"
            tag="li"
            class="kind-detail-list"
            v-for="m in i.kinddetail"
            :key="m.id"
            :id="m.id"
          >
            <a href="javascript:;">
              <span>{{m.detail}}</span>
              <span>
                <img src="@/assets/imgs/icons/arr-right.png" alt="goin">
              </span>
            </a>
          </router-link>
        </ul>
        <!-- </transition>   -->
      </li>
    </ul>
    <div class="test" v-for="(item,index) in productkind" :key="index"></div>
  </div>
</template>
<script>
import kinddetail from "./data.js";
export default {
  name: "Kind",
  components: {},
  computed:{
    productkind(){
      return this.$store.state.product.product;
    }
  }
  ,
  mixins: [kinddetail],
  data() {
    return {};
  },
  methods: {
    lookdetail(id) {
      for (var n in this.$store.state.product.product) {
        if (this.$store.state.product.product[n].id === id) {
          this.$store.state.product.product[n].detailshow = !this.$store.state.product.product[n].detailshow;
        } else if (this.$store.state.product.product[n].detailshow == true) {
          this.$store.state.product.product[n].detailshow = false;
        }
      }
    }
  },
  directives: {},
  created(){
    // console.log(this.$store.state.product.product);
  }
};
</script>
<style scoped lang="scss">
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
.kind-item {
  width: 340px;
  margin: 47.5px auto 0;
  .kind-list {
    width: 340px;
    margin-bottom: 6px;
    a {
      img {
        width: 340px;
        height: 120px;
      }
    }
    .kind-detail {
      width: 100%;
      .kind-detail-list {
        height: 38px;
        width: 100%;
        border-bottom: 0.5px solid #d8d6d6;
        a {
          display: flex;
          text-decoration: none;
          line-height: 38px;
          color: #494949;
          font-size: 16px;
          justify-content: space-between;
          span:first-child {
            margin-left: 2.5px;
          }
          span:last-child {
            width: 20px;
            height: 20px;
            color: #a1a1a1;
            font-size: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

