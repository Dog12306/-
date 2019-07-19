import Mock from 'mockjs'
export default{
    data(){
        return {
            kinds:[
                {
                    id: Mock.Random.guid(),
                    url: require('@/assets/imgs/kind/goods1.png'),                   
                    kinddetail: [{
                        id: Mock.Random.guid(),
                        detail: "全部"
                    },{
                        id: Mock.Random.guid(),
                        detail: "超薄睡衣"
                    },{
                        id: Mock.Random.guid(),
                        detail: "防水浴袍"
                    },{
                        id: Mock.Random.guid(),
                        detail: "瘦身内衣"
                    },{
                        id: Mock.Random.guid(),
                        detail: "高科技防臭袜"
                    },{
                        id: Mock.Random.guid(),
                        detail: "其它"
                    },],
                    detailshow: false,
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/kind/goods2.png'),
                    kinddetail: [{
                        id: Mock.Random.guid(),
                        detail: "全部"
                    },{
                        id: Mock.Random.guid(),
                        detail: "收纳袋"
                    },{
                        id: Mock.Random.guid(),
                        detail: "彩灯"
                    },{
                        id: Mock.Random.guid(),
                        detail: "床被"
                    },{
                        id: Mock.Random.guid(),
                        detail: "枕头"
                    },{
                        id: Mock.Random.guid(),
                        detail: "其它"
                    },],
                    detailshow: false
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/kind/goods3.png'),
                    kinddetail: [{
                        id: Mock.Random.guid(),
                        detail: "全部"
                    },{
                        id: Mock.Random.guid(),
                        detail: "睡衣"
                    },{
                        id: Mock.Random.guid(),
                        detail: "浴袍"
                    },{
                        id: Mock.Random.guid(),
                        detail: "内衣"
                    },{
                        id: Mock.Random.guid(),
                        detail: "袜子"
                    },{
                        id: Mock.Random.guid(),
                        detail: "其它"
                    },],
                    detailshow: false
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/kind/goods4.png'),
                    kinddetail: [{
                        id: Mock.Random.guid(),
                        detail: "全部"
                    },{
                        id: Mock.Random.guid(),
                        detail: "迷魂香"
                    },{
                        id: Mock.Random.guid(),
                        detail: "蒙汗药"
                    },{
                        id: Mock.Random.guid(),
                        detail: "夜来香"
                    },{
                        id: Mock.Random.guid(),
                        detail: "烤肉香"
                    },{
                        id: Mock.Random.guid(),
                        detail: "其它"
                    },],
                    detailshow: false
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/kind/goods5.png'),
                    kinddetail: [{
                        id: Mock.Random.guid(),
                        detail: "全部"
                    },{
                        id: Mock.Random.guid(),
                        detail: "手链"
                    },{
                        id: Mock.Random.guid(),
                        detail: "项圈"
                    },{
                        id: Mock.Random.guid(),
                        detail: "耳环"
                    },{
                        id: Mock.Random.guid(),
                        detail: "手铐"
                    },{
                        id: Mock.Random.guid(),
                        detail: "其它"
                    },],
                    detailshow: false
                }
            ]
        }
        
    }
}