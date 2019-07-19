import Mock from 'mockjs'
const Random = Mock.Random;
// 构建商信息列表 (实际这个列表应该从后台api后去 这里用mock模拟)
var goodsList = [];
// if (localStorage.product) {
//     var productKind = JSON.parse(localStorage.product);
//     var goodsList = JSON.parse(localStorage.goodsList);
// } else {
var productKind = [
    {
        id: "kind1",
        url: require('@/assets/imgs/kind/goods1.png'),
        kinddetail: [{
            id: "kind1-1",
            detail: "全部",
            goodsList: []
        }, {
            id: "kind1-2",
            detail: "超薄睡衣",
            goodsList: []
        }, {
            id: "kind1-3",
            detail: "防水浴袍",
            goodsList: []
        }, {
            id: "kind1-4",
            detail: "瘦身内衣",
            goodsList: []
        }, {
            id: "kind1-5",
            detail: "高科技防臭袜",
            goodsList: []
        }, {
            id: "kind1-6",
            detail: "其它",
            goodsList: []
        },],
        detailshow: false,
    },
    {
        id: "kind2",
        url: require('@/assets/imgs/kind/goods2.png'),
        kinddetail: [{
            id: "kind2-1",
            detail: "全部",
            goodsList: []
        }, {
            id: "kind2-2",
            detail: "收纳袋",
            goodsList: []
        }, {
            id: "kind2-3",
            detail: "彩灯",
            goodsList: []
        }, {
            id: "kind2-4",
            detail: "床被",
            goodsList: []
        }, {
            id: "kind2-5",
            detail: "枕头",
            goodsList: []
        }, {
            id: "kind2-6",
            detail: "其它",
            goodsList: []
        },],
        detailshow: false
    },
    {
        id: "kind3",
        url: require('@/assets/imgs/kind/goods3.png'),
        kinddetail: [{
            id: "kind3-1",
            detail: "全部",
            goodsList: []
        }, {
            id: "kind3-2",
            detail: "睡衣",
            goodsList: []
        }, {
            id: "kind3-3",
            detail: "浴袍",
            goodsList: []
        }, {
            id: "kind3-4",
            detail: "内衣",
            goodsList: []
        }, {
            id: "kind3-5",
            detail: "袜子",
            goodsList: []
        }, {
            id: "kind3-6",
            detail: "其它",
            goodsList: []
        },],
        detailshow: false
    },
    {
        id: "kind4",
        url: require('@/assets/imgs/kind/goods4.png'),
        kinddetail: [{
            id: "kind4-1",
            detail: "全部",
            goodsList: []
        }, {
            id: "kind4-2",
            detail: "迷魂香",
            goodsList: []
        }, {
            id: "kind4-3",
            detail: "蒙汗药",
            goodsList: []
        }, {
            id: "kind4-4",
            detail: "夜来香",
            goodsList: []
        }, {
            id: "kind4-5",
            detail: "烤肉香",
            goodsList: []
        }, {
            id: "kind4-6",
            detail: "其它",
            goodsList: []
        },],
        detailshow: false
    },
    {
        id: "kind5",
        url: require('@/assets/imgs/kind/goods5.png'),
        kinddetail: [{
            id: "kind5-1",
            detail: "全部",
            goodsList: []
        }, {
            id: "kind5-2",
            detail: "手链",
            goodsList: []
        }, {
            id: "kind5-3",
            detail: "项圈",
            goodsList: []
        }, {
            id: "kind5-4",
            detail: "耳环",
            goodsList: []
        }, {
            id: "kind5-5",
            detail: "手铐",
            goodsList: []
        }, {
            id: "kind5-6",
            detail: "其它",
            goodsList: []
        },],
        detailshow: false
    }
];
var count = 0;
for (var item of productKind) {
    for (var n in item) {
        if (n === "kinddetail") {
            for (var m of item[n]) {
                for (var j in m) {
                    if (j === "goodsList") {
                        goodsList.push(m[j]);
                        count++;
                        for (var k = 0; k < 10; k++) {
                            m[j].push({
                                id: "goods" + count + k,
                                url: Mock.Random.image("179x179", Mock.Random.color()),
                                goodname: Mock.Random.first(),
                                goodexplain: Mock.Random.ctitle(),
                                price: Mock.Random.integer(80, 1000),
                                sell: Mock.Random.integer(100, 1000),
                                checksize: '',
                                checkcolor: '',
                                surplus: Mock.Random.integer(10, 50),
                                checknum: 1,
                                cartnum: 1,
                                goodchecked: false,
                                goodsize: ["S", "M", "L"],
                                goodcolor: ["background-color:" + Mock.Random.color(), "background-color:" + Mock.Random.color(), "background-color:" + Mock.Random.color()],
                                detail: {
                                    smalltitle: Mock.Random.cword(4, 8) + " " + Mock.Random.cword(4, 8),
                                    essay: [{ content: Mock.Random.cword(4, 8) + " " + Mock.Random.cword(4, 8) }
                                        , { content: Mock.Random.cword(4, 8) + " " + Mock.Random.cword(4, 8) }
                                        , { content: Mock.Random.cword(4, 8) + " " + Mock.Random.cword(4, 8) }
                                        , { content: Mock.Random.cword(4, 8) + " " + Mock.Random.cword(4, 8) }
                                    ]
                                },
                                assess: [
                                    {
                                        id: Mock.Random.guid(),
                                        url: Mock.Random.image("35x35", Mock.Random.color()),
                                        username: Mock.Random.character() + "***" + Mock.mock('@string("lower", 1, 3)'),
                                        day: Mock.mock('@date("yyyy-MM-dd")'),
                                        content: Mock.Random.cparagraph(3, 5)
                                    }
                                ]
                            });
                            for (var a = 0; a < Mock.Random.integer(5, 10); a++) {
                                m[j][k].assess.push(
                                    {
                                        id: Mock.Random.guid(),
                                        url: Mock.Random.image("35x35", Mock.Random.color()),
                                        username: Mock.Random.character() + "***" + Mock.mock('@string("lower", 1, 3)'),
                                        day: Mock.mock('@date("yyyy-MM-dd")'),
                                        content: Mock.Random.cparagraph(3, 5)
                                    }
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}
// localStorage.product = JSON.stringify(productKind);
// localStorage.goodsList = JSON.stringify(goodsList);
// }
// console.log(goodsList);
var state = {
    product: productKind,
    goodsList: goodsList
}

var getters = {

}

var mutations = {
    remsubplus(state, { goods, st }) {
        if (st) {
            for (var i of state.goodsList) {
                for (var n of i) {
                    if (n.id === goods.id && n.surplus >= goods.checknum) {
                        n.surplus -= goods.checknum;
                        // console.log(">>>");
                    }
                }
            }
        }else{
            for (var i of state.goodsList) {
                for (var n of i) {
                    if (n.id === goods.id && n.surplus > 0) {
                        // console.log(n.surplus, goods.cartnum);
                        n.surplus -= 1;
                        // console.log("product",n.surplus, n.cartnum);
                    }
                }
            }
        }
    },
    returnsubplus(state,{goods,st}){
        if (st) {
            for (var i of state.goodsList) {
                for (var n of i) {
                    if (n.id === goods.id) {
                        n.surplus += goods.cartnum;
                    }
                }
            }
        }else{
            for (var i of state.goodsList) {
                for (var n of i) {
                    if (n.id === goods.id && n.cartnum > 1) {
                        n.surplus += 1;
                        // console.log("product",n.surplus, n.cartnum);
                    }
                }
            }
        }
    }
}

var actions = {

}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}