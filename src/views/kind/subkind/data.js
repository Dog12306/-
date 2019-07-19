import Mock from 'mockjs'
export default {
    data() {
        return {
            goodstype: [{
                id: Mock.Random.guid(),
                type: "无痕"
            }, {
                id: Mock.Random.guid(),
                type: "美背"
            }, {
                id: Mock.Random.guid(),
                type: "运动"
            }, {
                id: Mock.Random.guid(),
                type: "性感"
            }],
            goods: [
                {
                    id: Mock.Random.guid(),
                    url: require('@/assets/imgs/kind/kind-goods-close-shirt/detail1.png'),
                    goodname: "NEIWAI",
                    goodexplain: "Cozy女士家居服莫代尔",
                    price: 399,
                    sell: Mock.Random.integer(100, 1000),
                    checksize: '',
                    checkcolor: '',
                    surplus: Mock.Random.integer(10, 100),
                    checknum: 1,
                    goodchecked: false,
                },
                {
                    id: Mock.Random.guid(),
                    url: require('@/assets/imgs/kind/kind-goods-close-shirt/detail2.png'),
                    goodname: "TRIUMPU",
                    goodexplain: "文胸内裤套装",
                    price: 299,
                    sell: Mock.Random.integer(100, 1000),
                    checksize: '',
                    checkcolor: '',
                    surplus: Mock.Random.integer(10, 100),
                    checknum: 1,
                    goodchecked: false,
                },
                {
                    id: Mock.Random.guid(),
                    url: require('@/assets/imgs/kind/kind-goods-close-shirt/detail3.png'),
                    goodname: "ESSENCE",
                    goodexplain: "女士Cozy圆领吊带性感",
                    price: 219,
                    sell: Mock.Random.integer(100, 1000),
                    checksize: '',
                    checkcolor: '',
                    surplus: Mock.Random.integer(10, 100),
                    checknum: 1,
                    goodchecked: false,
                },
                {
                    id: Mock.Random.guid(),
                    url: require('@/assets/imgs/kind/kind-goods-close-shirt/detail4.png'),
                    goodname: "LAPERLA",
                    goodexplain: "女士Bra-top蕾丝美背无",
                    price: 159,
                    sell: Mock.Random.integer(100, 1000),
                    checksize: '',
                    checkcolor: '',
                    surplus: Mock.Random.integer(10, 100),
                    checknum: 1,
                    goodchecked: false,
                },
                {
                    id: Mock.Random.guid(),
                    url: require('@/assets/imgs/kind/kind-goods-close-shirt/detail5.png'),
                    goodname: "CRYSTALS",
                    goodexplain: "零敏洛丽无钢圈内衣",
                    price: 399,
                    sell: Mock.Random.integer(100, 1000),
                    checksize: '',
                    checkcolor: '',
                    surplus: Mock.Random.integer(10, 100),
                    checknum: 1,
                    goodchecked: false,
                }, {
                    id: Mock.Random.guid(),
                    url: require('@/assets/imgs/kind/kind-goods-close-shirt/detail6.png'),
                    goodname: "JUDYHUA",
                    goodexplain: "女士高端网纱交叠无钢",
                    price: 399,
                    sell: Mock.Random.integer(100, 1000),
                    checksize: '',
                    checkcolor: '',
                    surplus: Mock.Random.integer(10, 100),
                    checknum: 1,
                    goodchecked: false,
                }
            ]
        }
    },
    methods: {
        getRandomImg() {
            if (this.$route.query.name === "内衣") {
                for (var i = this.goods.length; i < 10; i++) {
                    this.goods.push({
                        id: Mock.Random.guid(),
                        url: Mock.Random.image("179x179", Mock.Random.color()),
                        goodname: Mock.Random.first(),
                        goodexplain: Mock.Random.ctitle(),
                        price: Mock.Random.integer(80, 1000),
                        sell: Mock.Random.integer(100, 1000),
                        checksize: '',
                        checkcolor: '',
                        surplus: Mock.Random.integer(10, 100),
                        checknum: 1,
                    goodchecked: false,
                    })
                }
            } else {
                this.goods = [];
                for (var i = 0; i < 10; i++) {
                    this.goods.push({
                        id: Mock.Random.guid(),
                        url: Mock.Random.image("179x179", Mock.Random.color()),
                        goodname: Mock.Random.first(),
                        goodexplain: Mock.Random.ctitle(),
                        price: Mock.Random.integer(80, 1000),
                        sell: Mock.Random.integer(100, 1000),
                        checksize: '',
                        checkcolor: '',
                        surplus: Mock.Random.integer(10, 100),
                        checknum: 1,
                        goodchecked: false,
                    })
                }
            }
        }
    }

}