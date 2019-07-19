import Mock from 'mockjs'
export default{
    data(){
        return {
            imgs:[
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/home/p1.png')
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/home/p2.png')
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/home/p3.png')
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/home/p4.png')
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/home/p5.png')
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/home/p6.png')
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/home/p7.png')
                },
                {
                    id:Mock.Random.guid(),
                    url:require('@/assets/imgs/home/p8.png')
                }  
            ]
        }
        
    }
}