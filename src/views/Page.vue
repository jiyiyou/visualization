<template>
  <div>
<div v-html="text"></div>
  </div>
</template>

<script>
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:2000,
    autoplayDisableOnInteraction: false,
    loop:true,
  });
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default {
    name: "Page",
    data(){
      return{
        text:'<div data-v-fae5bece="" class="page_box"><div data-v-fae5bece="" class="add_card"><div data-v-4eefb1d8="" data-v-fae5bece="" class="banner" id="BannerT1400854906649.787"><img data-v-4eefb1d8="" src="/img/banner.1dad6868.png" alt="" title=""></div></div><div data-v-fae5bece="" class="add_card"><div data-v-4bb2fec8="" data-v-fae5bece="" class="titleAll  " id="Title1291626482478.4734"><div data-v-4bb2fec8="" class="flex"><i data-v-4bb2fec8=""></i> <span data-v-4bb2fec8="">Hot Products</span><i data-v-4bb2fec8=""></i></div></div></div><div data-v-fae5bece="" class="add_card"><div data-v-462cb35e="" data-v-fae5bece="" class="section3 f-box" id="List1527424866839.9224"><div data-v-462cb35e="" class="flex"><div data-v-462cb35e="" class="item"><span data-v-462cb35e="" class="sec3_img_boxs"><img data-v-462cb35e="" src="/img/sec3.da58046b.png" alt=""></span><p data-v-462cb35e="" class="self-ellipsis-1">Mulberry leaf moisturizing lotion</p></div><div data-v-462cb35e="" class="item"><span data-v-462cb35e="" class="sec3_img_boxs"><img data-v-462cb35e="" src="/img/sec3.da58046b.png" alt=""></span><p data-v-462cb35e="" class="self-ellipsis-1">Mulberry leaf moisturizing lotion</p></div><div data-v-462cb35e="" class="item"><span data-v-462cb35e="" class="sec3_img_boxs"><img data-v-462cb35e="" src="/img/sec3.da58046b.png" alt=""></span><p data-v-462cb35e="" class="self-ellipsis-1">Mulberry leaf moisturizing lotion</p></div><div data-v-462cb35e="" class="item"><span data-v-462cb35e="" class="sec3_img_boxs"><img data-v-462cb35e="" src="/img/sec3.da58046b.png" alt=""></span><p data-v-462cb35e="" class="self-ellipsis-1">Mulberry leaf moisturizing lotion</p></div></div></div></div><div data-v-fae5bece="" class="add_card"><div data-v-4bb2fec8="" data-v-fae5bece="" class="titleAll  " id="Title1101155305241.1277"><div data-v-4bb2fec8="" class="flex"><i data-v-4bb2fec8=""></i> <span data-v-4bb2fec8="">Hot Products</span><i data-v-4bb2fec8=""></i></div></div></div><div data-v-fae5bece="" class="add_card"><div data-v-b33db82a="" data-v-fae5bece="" id="SwiperList1407477015138.4182" class=""><div data-v-b33db82a="" class="swiper-container swiper swiper-container-initialized swiper-container-horizontal"><div class="swiper-wrapper" style="transition: all 0ms ease 0s; transform: translate3d(-653px, 0px, 0px);"><div data-v-b33db82a="" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="3" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide" data-swiper-slide-index="2" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="3" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div><div data-v-b33db82a="" class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 187.667px; margin-right: 30px;"><div data-v-b33db82a="" class="item"><div data-v-b33db82a="" class="img-box"><img data-v-b33db82a="" src="/img/sec8.9d72019a.png" alt=""></div><p data-v-b33db82a=""> No. 1 in the home ranking </p></div></div></div><div data-v-b33db82a="" class="swiper-pagination"></div><div data-v-b33db82a="" class="swiper-button-prev"></div><div data-v-b33db82a="" class="swiper-button-next"></div></div></div></div></div>',
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
        // text:{val:"",num:""}

      }
    },
    created() {
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

</style>
