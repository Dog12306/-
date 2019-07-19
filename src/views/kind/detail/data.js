import Mock from 'mockjs'
export default{
    data(){
        return {
            detail:{
                    id: Mock.Random.guid(),
                    smalltitle: "舒适居家 安心睡眠",
                    essay:[{id: Mock.Random.guid(),content:"7PM至7AM 有TA陪伴你"}
                    ,{id: Mock.Random.guid(),content:"一次下厨 一部沙发电影"}
                    ,{id: Mock.Random.guid(),content:"一个赖床3分钟的清晨"}
                    ,{id: Mock.Random.guid(),content:"不必紧绷神经 不用束缚身体"}]
            },
            assess:[
                {
                    id: Mock.Random.guid(),
                    url: Mock.Random.image("35x35",Mock.Random.color()),
                    username: Mock.Random.character() + "***" + Mock.mock('@string("lower", 1, 3)'),
                    day: Mock.mock('@date("yyyy-MM-dd")'),
                    content: Mock.Random.cparagraph(3, 5)
                }
            ]
        }       
    },
    methods:{
        getRandomDetail () {
            if(this.$route.query.goodname === "NEIWAI"){
                              
            }else{
                 this.detail={
                    id: Mock.Random.guid(),
                    smalltitle: Mock.Random.cword(4,8) + " " + Mock.Random.cword(4,8),
                    essay:[{id:Mock.Random.guid(),content:Mock.Random.cword(4,8) + " " + Mock.Random.cword(4,8)}
                    ,{id:Mock.Random.guid(),content:Mock.Random.cword(4,8) + " " + Mock.Random.cword(4,8)}
                    ,{id:Mock.Random.guid(),content:Mock.Random.cword(4,8) + " " + Mock.Random.cword(4,8)}
                    ,{id:Mock.Random.guid(),content:Mock.Random.cword(4,8) + " " + Mock.Random.cword(4,8)}
                 ]
                 };
            }
        },
        getRandomAssess () {
            for(var a = 0; a < Mock.Random.integer(5, 10); a ++){
                this.assess.push(
                    {
                        id: Mock.Random.guid(),
                        url: Mock.Random.image("35x35",Mock.Random.color()),
                        username: Mock.Random.character() + "***" + Mock.mock('@string("lower", 1, 3)'),
                        day: Mock.mock('@date("yyyy-MM-dd")'),
                        content: Mock.Random.cparagraph(3, 5)
                    }
                )
            }
        }
    }
}