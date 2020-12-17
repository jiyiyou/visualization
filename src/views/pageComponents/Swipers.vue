<template>
    <div>
        {{dataLists.numPage}}
        <swiper class="swiper" :options="swiperOption" ref="hits">
            <swiper-slide v-for="(item,index) in dataLists.domains&&dataLists.domains.length>1?dataLists.domains:4"   >
                <div class="item">
                    <div class="img-box"><img :src=' item.imageUrl&&item.imageUrl!=""?item.imageUrl:nopage ' alt=""></div>
                    <p> {{item.value&&item.value!=""?item.value:'No. 1 in the home ranking '}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
            <div class="swiper-button-next" slot="button-next" @click="next"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    import sec8 from "../../images/sec8.png"
    import nopage from "../../assets/nopage.png"
    let swiperNum=2
    export default {
        name: "Swipers",
    props: ["datas"],
        watch:{
            datas: function (a, b) {
            this.dataLists=a
                this.swiperOption.slidesPerView=this.dataLists.numPage
                // this.swiperNum=a.numPage
                // this.swiperOption.update()
                // swiper.destroy()
                console.log("---------------------",a.numPage)
        },
    },
        data(){
            return{
                sec8,
                nopage,
                swiperNum:3,
                dataLists:[],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup:1,
                    loop: true,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    // autoplay: {
                    //     delay:  500,
                    //     disableOnInteraction: false
                    // },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },

        components:{ Swiper, SwiperSlide, },
        mounted(){
        },
        methods:{
            prev(){
                this.$refs.hits.$swiper.slidePrev();
            },
            next(){
                this.$refs.hits.$swiper.slideNext();
            },
        }
    }
</script>

<style scoped>
    .swiper-button-prev:after, .swiper-button-next:after{content: ""!important;}
    .swiper-button-next, .swiper-button-prev{width:40px!important;height:40px!important;}
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev { background-size: 40px 40px;opacity: 0 ;transition: all .4s }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next{ background-size: 40px 40px;opacity: 0;transition: all .4s }
    .swiper-container:hover .swiper-button-prev, .swiper-container-rtl .swiper-button-next{opacity: 1}
    .swiper-container:hover .swiper-button-next, .swiper-container-rtl .swiper-button-prev{opacity: 1}
</style>
