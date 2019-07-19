function unloadevent () {
    localStorage.name = "???";
    window.onbeforeunload = function (){
        var cartgoodsJSON = JSON.stringify(this.$store.state.cart.cartgoods);
        localStorage.cartgoods = cartgoodsJSON;
        localStorage.name = "???";
    }
}

export default {
    unloadevent
}