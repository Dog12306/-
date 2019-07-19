<template>
  <div id="app">
    <!-- vue  keep-alive  文档 -->
    
        <transition :name="transitionName" mode="out-in">
      <keep-alive include="Home,Kind,Find,Main">
        <router-view class="router-view"></router-view>
      </keep-alive>
        </transition>  
    
    <foot-bar v-show="$route.meta.footShow"></foot-bar>
  </div>
</template>
<script>
import FootBar from '@components/FootBar.vue'
export default {
  components:{
    FootBar
  },
  data(){
    return {
      transitionName:''
    }
  },
  watch: {
  '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if(toDepth < fromDepth){
        this.transitionName = 'fadeRight';
      }else if(toDepth === fromDepth){
        this.transitionName = 'buling';
      }else{
        this.transitionName = 'fadeLeft';
      }
    }
  }
  // mounted(){
  //   localStorage.name = "aaa";
  // },
  // beforeDestroy(){
  //   localStorage.name = "bbb";
  //   var cartgoodsJSON = JSON.stringify(this.$store.state.cart.cartgoods);
  //   console.log(cartgoodsJSON);
  //   localStorage.cartgoods = cartgoodsJSON;
  //   localStorage.name = "ccc";
  // }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-view{
  margin-bottom: 100px;
  overflow-x: hidden;
}
.fadeRight-enter-active,
.fadeRight-leave-active,
.fadeLeft-enter-active,
.fadeLeft-leave-active,
.buling-enter-active,
.buling-leave-active{
  transition: all .3s;
}
.fadeRight-enter{
  opacity: 0;
  transform: translate(-100%,0);
}
.fadeRight-leave{
   opacity: 0;
  transform: translate(100%,0);
}
.fadeLeft-enter{
   opacity: 0;
  transform: translate(100%,0);
}
.fadeLeft-leave{
   opacity: 0;
  transform: translate(-100%,0);
}
.buling-enter{
  opacity: 0;
}
.buling-leave{
  opacity: 0;
}
</style>
