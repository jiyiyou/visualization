<template>
    <div class="home" id="home">
        <div class="flex">
            <div class="left_bigcont" id="left_bigcont">
                <div class="page_box">
<!--                        <PageBanner :datas='addCardData("getBanner", 0) ' id="BannerT" :class="{actives:getActive=='BannerT'}"/>-->
<!--                        <PageTitle :datas='addCardData("getTitle", 0)' id="Title0" :class="{actives:getActive=='Title0'}"/>-->
<!--                        <PageList :datas='addCardData("getList", 0)' id="List" :class="{actives:getActive=='List'}"></PageList>-->
<!--                        <PageTitle :datas='addCardData("getTitle", 1)' id="Title1" :class="{actives:getActive=='Title1'}"/>-->
<!--                        <PageSwiper :datas='addCardData("getSwiper", 0)'    id="SwiperList" :class="{actives:getActive=='SwiperList'}"/>-->
                    <div class="add_card" v-for="(item,index) in getCard||[]">
                        <component :is="item.name " :datas='addCardData(item.datas,item.num) ' :id="`${item.editName}${ item.num }`"   :class="{actives:getActive==`${item.editName}${ item.num }`}"></component>
                    </div>

                </div>
            </div>
            <div class="control ">
                <p class="control_title" style="position: relative">操作面板  <el-button type="primary" plain @click="submitPage" style="position: absolute;bottom:8px;right:10px  " size="small">装修完成</el-button></p>
                <div class="flex">
                    <div class="list">
<!--                        <p :class="{active:getActive=='BannerT'}" @click="changeBtn('BannerT','BannerT' ,0)">banner</p>-->
<!--                        <p :class="{active:getActive=='Title0'}" @click="changeBtn('Title','Title0',0)">大标题</p>-->
<!--                        <p :class="{active:getActive=='List'}" @click="changeBtn('List','List',0)">专辑列表</p>-->
<!--                        <p :class="{active:getActive=='Title1'}" @click="changeBtn('Title','Title1',1)">大标题</p>-->
<!--                        <p :class="{active:getActive=='SwiperList'}" @click="changeBtn('SwiperList','SwiperList',0)">-->
<!--                            轮播商品</p>-->
                        <div class="add_card p" :class="{active:getActive==`${item.editName}${ item.num }`}"
                           v-for="(item,index) in getCard||[]"
                           @click="changeBtn(item.editName, `${item.editName}${ item.num }` ,item.num)">
                            {{item.title}}
                        <i class="el-icon-delete" @click="reomve(item.editName,item.num)"></i>
                            </div>
                        <div :class="{active:getActive=='AddCard'}" class="p"  @click="changeBtn('AddCard','AddCard',0)">添加卡片</div>


                    </div>
                    <div class="edit_box">
                        <component :is="componentsName||''" :key="theKey"></component>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="图片银行" :visible.sync="getDialogImgVisible.active" @close="closeDialogImg" class="imgBankBox">
            <div class="flex">
                <div class="item" v-for="item in imgBank " @click="imgBankClick(item.img)"><img :src="item.img" alt=""><p>{{item.name}}</p></div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import PageBanner from "./pageComponents/BannerP"
    import PageList from "./pageComponents/List"
    import PageTitle from "./pageComponents/Title"
    import PageSwiper from "./pageComponents/Swipers"
    import PageCustom from "./pageComponents/Custom"
    import AddCard from "./components/AddCard"

    import BannerT from "./components/BannerT"
    import List from "./components/List"
    import SwiperList from "./components/SwiperList"
    import Custom from "./components/Custom"
    import Title from "./components/Title"
    import bannerimg from "../images/banner.png"

    export default {
        name: 'Home',
        data() {
            return {
                dialogImgVisible: this.$store.state.dialogImgVisible,
                visible:false,
                theKey: Date.now().valueOf(),
                input: "",
                componentsName: "",
                bannerimg,
                cardList: {
                    PageBanner: 0,
                    PageList: 0,
                    PageTitle: 0,
                    PageSwiper: 0,
                },
                imgBank:[{img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603424813609&di=b6fe308db23822f01884eee4b62885c4&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F70%2F91%2F01300000261284122542917592865.jpg" ,name:"news1"},
                    {img:"https://bpic.588ku.com//back_origin_min_pic/20/10/01/1bc46c61c903a38b68dc1f3c8eb80ee9.jpg",name:"news2"},
                    {img:"http://xb.member.com/upload/C_21/file/20201009/769e415d88ba02770e8e2720f1c1b31a.png",name:"news3"},
                    {img:"http://xb.member.com/upload/C_21/file/20201009/f2f71f0f17d23fa59d21673e28de3c5b.png",name:"news4"},
                ]
                // addCard:this.getCard
            }
        },

        components: {
            Custom,
            BannerT,
            List,
            Title,
            AddCard,
            SwiperList,
            PageBanner,
            PageList,
            PageTitle,
            PageSwiper,
            PageCustom
        },
        mounted() {
            let jsonData= [
                    {name:"PageBanner",title:"banner",editName:"BannerT",datas:"getBanner",num:Date.now().valueOf()* Math.random(),storeName:"banner"},
                    {name:"PageTitle",title:"大标题",editName:"Title",datas:"getTitle",num:Date.now().valueOf()* Math.random(),storeName:"title"},
                    {name:"PageList",title:"专辑列表",editName:"List",datas:"getList",num:Date.now().valueOf()* Math.random(),storeName:"list"},
                    {name:"PageTitle",title:"大标题",editName:"Title",datas:"getTitle",num:Date.now().valueOf()* Math.random(),storeName:"title"},
                    {name:"PageSwiper",title:"轮播商品",editName:"SwiperList",datas:"getSwiper",num:Date.now().valueOf()* Math.random(),storeName:"swiper"}
                ]
            this.$store.state.addCard=jsonData
        },
        computed: {
            getDialogImgVisible:{
                get(){  return this.$store.state.dialogImgVisible },
                set(newValue){ this.$store.state.dialogImgVisible = newValue}
            },
            getCard() {
                return this.$store.state.addCard;
            },
            getActive() {
                return this.$store.state.navActive;
            },
            getBanner() {
                return this.$store.state.banner;
            },
            getList() {
                return this.$store.state.list;
            },
            getSwiper() {
                return this.$store.state.swiper;
            }
        },
        methods: {
            imgBankClick(src){
                // alert(src)
                let data=this.$store.state.dialogImgVisible
                data.imageUrl=src
                this.$store.commit('changimgBankSrc',data)
                this.$store.commit('changDialogImgVisible',{name:"",index:null,active:false})
            },
            closeDialogImg(){
                this.$store.commit('changDialogImgVisible',{name:"",index:null,active:false})
            },
            getData(data,num){
                let itemData
                data.map((item, index) => {
                    if (item.num == num) {
                        itemData = item
                    }
                })
                return itemData
            },
            addCardData(name, num) {
                switch (name) {
                    case "getBanner":
                        return this.getData(this.$store.state.banner,num);
                        break;
                    case "getList":
                        return this.getData(this.$store.state.list,num)
                        break;
                    case "getCustom":
                        return this.getData(this.$store.state.custom,num)
                        break;
                    case "getTitle":
                        return this.getData(this.$store.state.title,num)
                        break;
                    case "getSwiper":
                        return this.getData(this.$store.state.swiper,num)
                        break;

                }
            },
            changeBtn(name, nameActive, num) {
                this.theKey = Date.now().valueOf()
                this.componentsName = name
                this.cardList[name] = this.cardList[name] + 1
                window.sessionStorage.setItem("num", num);
                this.$store.commit('navActiveEdit', nameActive)
                if(document.getElementById( nameActive ))document.getElementById( nameActive ).scrollIntoView();
            },
            reomve(editName,num){
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.componentsName=null
                    this.$store.commit('navRemove', {editName:editName,num:num} )
                }).catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消删除'
                    // });
                });

            },
            submitPage(){
                let data=JSON.parse(JSON.stringify(this.$store.state))
                for(var item in data){
                    if(Object.prototype.toString.call(data[item])=="[object Array]" ){
                        data[item].filter(function (el) {
                            return el != "{ }";
                        });
                    }
                }
                 console.log(data)
                // this.$router.push({path: '/page'})
                let url="http://xb.jdxshow.com/"
                // window.location = url
                // window.open(url)
                console.log(document.getElementById("left_bigcont").innerHTML)
            }
        }

    }
</script>
<style scoped>

    .left_bigcont{background-color: #f6f6f6}
    .page_box{background-color: #fff;padding: 1px;box-sizing: border-box}
    .page_box .f-box{width: 96%;margin: 0 auto}
    .left_bigcont{width: calc(100% - 520px);padding: 10px 18px;box-sizing: border-box;height: 100vh;  overflow-y: auto;}
    .control{width:520px;    height: 100vh; overflow-y: auto;}
    /*.control .flex{margin-top: 20px}*/
    .control_title{background-color: #f1f1f1;line-height: 50px ;font-size: 16px; padding: 0 10px; text-align: center;margin: 0}
    .control .list{background-color: #f1f1f1;height: 100vh;border-right:1px solid #c5cddb;border-left:1px solid #c5cddb;position: relative }
    .control .list .p{border: 1px solid #c5cddb;border-right:unset;border-left:unset;margin: 0;line-height: 50px;font-size: 16px;border-bottom: 1px solid #f1f1f1;width: 160px;cursor: pointer;transition: all .2s;padding-left: 20px;box-sizing: border-box}
    .control .list .p:last-child{border-bottom:1px solid #c5cddb; }
    .control .list .p:hover{color: #8bc34a}
    .control .list .p.active{color: #8bc34a;border-left: 2px solid #8bc34a;box-sizing: border-box;background-color: #fff;width: calc(100% + 1px);}
    .banner img{display: block;width: 100%;}
    .page_box .titleAll{margin-top: 40px}
    .edit_box{width: calc(100% - 170px);padding: 20px 10px 0 0; box-sizing: border-box}
    .swiper-button-prev:after, .swiper-button-next:after{content: ""!important;}
    .swiper-button-next, .swiper-button-prev{width:40px!important;height:40px!important;}
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev { background-size: 40px 40px;opacity: 0 ;transition: all .4s }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next{ background-size: 40px 40px;opacity: 0;transition: all .4s }
    .swiper-container:hover .swiper-button-prev, .swiper-container-rtl .swiper-button-next{opacity: 1}
    .swiper-container:hover .swiper-button-next, .swiper-container-rtl .swiper-button-prev{opacity: 1}
    .actives{border: 2px solid #8bc34a}
    .add_card{position: relative}
    .add_card i{display: none;position: absolute;right: 10px;top:34%;z-index: 9999999}
    .add_card:hover i{display: inline-block;}
    .imgBankBox .item{width: 24%;text-align: center;cursor: pointer;transition: all .4s;margin-bottom: 15px}
    .imgBankBox .item img{display: block;width: 100%;margin-bottom: 10px}
    .imgBankBox .item:hover{ box-shadow: 0 0 15px 2px #e4e5e6;}
    .imgBankBox .item.active{ box-shadow: 0 0 15px 2px #e4e5e6;}
</style>
<style lang="scss" scoped>
</style>
