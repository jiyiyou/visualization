<template>
    <div class="section3 f-box">
    <div class="flex">
    <div class="item" v-for="(item,index) in dataLists ?dataLists.domains:4">
        <span class="sec3_img_boxs"><img :src='item.imageUrl&&item.imageUrl!=""?item.imageUrl:nopage' alt=""></span>
        <p class="self-ellipsis-1">{{item.value&&item.value!=""?item.value:"Mulberry leaf moisturizing lotion"}}</p>
    </div>
    </div>
    </div>
</template>

<script>
    import urla from "../../images/sec3.png"
    import nopage from "../../assets/nopage.png"
    export default {
        name: "List",
        props: ["url","value","datas" ],
        watch:{
            url: function (a, b) {
                this.url=a
            },
            value: function (a, b) {
                this.value=a
            },
            datas: function (a, b) {
                this.dataLists=a
            },
        },
        data(){
            return{
                urla,
                nopage,
                dataLists:null
            }
        },

    }
</script>

<style scoped>
.sec3_img_boxs{height:255px;overflow: hidden;   display: flex;  align-items: center; /*垂直居中*/ justify-content: center; /*水平居中*/}
    .flex .item{width: 24%}
.section3 .item span{margin-top: 0!important;}
</style>
