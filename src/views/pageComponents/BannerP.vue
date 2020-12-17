<template>
    <div class="banner"> <img :src="srcs &&srcs.imageUrl!=''?srcs.imageUrl:bannerimg" alt="" :title="srcs?srcs.title:''">  </div>

</template>

<script>
    import bannerimg from "../../assets/nopage.png"
    export default {
        name: "BannerP",
        props: ["datas"],
        watch:{
            datas: function (a, b) {
                console.log("66666666666666666666666",a)
                this.srcs=a
            },
        },
        data(){
            return{
                bannerimgs:"../../assets/logo.png",
                bannerimg,
                srcs:null
            }
        }
    }
</script>

<style scoped>
    .banner{text-align: center;display: flex; align-items:center; justify-content:center;}
.banner img{display: block;max-width: 100%}
</style>
