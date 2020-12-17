<template>
<div>
    <p class="list" v-for="(item,index) in cardList" @click="addCard(item)">{{item.title}}</p>

</div>
</template>

<script>
    export default {
        name: "AddCard",
        data(){
            return{
                num:1,
                theKey:Date.now().valueOf(),
                textarea:"",
                cardList:[
                    {name:"PageBanner",title:"banner",editName:"BannerT",datas:"getBanner",num:Date.now().valueOf(),storeName:"banner"},
                    {name:"PageTitle",title:"大标题",editName:"Title",datas:"getTitle",num:Date.now().valueOf(),storeName:"title"},
                    {name:"PageList",title:"专辑列表",editName:"List",datas:"getList",num:Date.now().valueOf(),storeName:"list"},
                    {name:"PageCustom",title:"自定义组件",editName:"Custom",datas:"getCustom",num:Date.now().valueOf(),storeName:"custom"},
                    {name:"PageSwiper",title:"轮播商品",editName:"SwiperList",datas:"getSwiper",num:Date.now().valueOf(),storeName:"swiper"}
                ]
            }
        },
        methods:{
            addCard(item){
                let card=JSON.parse(JSON.stringify(this.$store.state.addCard))
                let itemData=JSON.parse(JSON.stringify(item))
                itemData.num=Date.now().valueOf()
                card=[...card,item]
                this.$store.commit('addCard', itemData)
            }
        }
    }
</script>

<style scoped>
    @import '../index.css';
    .list{cursor: pointer}
</style>
