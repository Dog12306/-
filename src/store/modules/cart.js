import product from "./product";
if(localStorage.cartgoods){
    var cartgoods = JSON.parse(localStorage.cartgoods);
}else{
    var cartgoods = [];
}   

var state = {
    cartgoods: cartgoods
}

var getters = {

}

var mutations = {
    goodsadd(state, { goods, st }) {
        if (st) {
            var checkgoods = state.cartgoods.find(item => item.id == goods.id);
            if (checkgoods) {
                if(checkgoods.surplus >= goods.checknum){
                    checkgoods.cartnum += goods.checknum;
                }
            } else {
                if(goods.surplus >= goods.checknum){
                    goods.cartnum = goods.checknum;
                    state.cartgoods.push(goods);
                }
            }
        }else{
            var checkgoods = state.cartgoods.find(item => item.id == goods.id);
            if (checkgoods.surplus > 0) {
                checkgoods.cartnum += 1;
                // console.log(checkgoods.surplus,checkgoods.cartnum);
            } else {
                // checkgoods.cartnum = checkgoods.cartnum;
            }
        }

    },
    goodsrem(state,{goods,st}){
        if(st){
            var checkgoods = state.cartgoods.find(item=>item.id == goods.id);
            if(checkgoods){
                checkgoods.cartnum -= goods.cartnum;
            }
            for(var k in state.cartgoods){
                if(state.cartgoods[k].id === goods.id){
                    state.cartgoods.splice(k,1);
                }
            }
        }else{
            var checkgoods = state.cartgoods.find(item=>item.id == goods.id);
            if(checkgoods.cartnum > 1){  
                checkgoods.cartnum -= 1;
                // console.log(checkgoods.surplus,checkgoods.cartnum);
            }else{
                
            }          
        }
    }
}

var actions = {
    cartgoodsadd({ dispatch, commit, getters, rootGetters }, { goods, st }, ) {
        // 添加购物车商品
        commit('goodsadd', { goods, st })
        // 修改商品库存
        commit('product/remsubplus', { goods, st }, { root: true });
    },
    cartgoodsrem({commit},{goods,st}){
        commit('product/returnsubplus',{goods,st},{root:true});
        commit('goodsrem',{goods,st})
    }

}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}