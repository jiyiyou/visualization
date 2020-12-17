<template>
    <div>
        <el-form size="mini"   ref="dynamicValidateForm" label-width="60px"
                 class="demo-dynamic"  >
            <el-form-item :label="'title'"  >
                <el-input  v-model="form.title" ></el-input >
            </el-form-item>
            <el-form-item  label="图片"  >
                <p class="upload-box" ><img :src="form.imageUrl" alt=""><span @click="uploadImgBox({name:'banner',index:0,active:true})" class="upload-i-box"><i></i><i></i></span> <span class="up-img-bg" v-if="form.imageUrl"><i class="el-icon-delete" @click="deleImg({name: 'banner' ,index:0 })"></i></span></p>

                <!--        <el-upload-->
                <!--                class="avatar-uploader"-->
                <!--                 action="http://xb.admin.com/admin/Common/upload"-->
                <!--                :show-file-list="false"-->
                <!--                :headers=headers-->
                <!--                :data=uploadData-->
                <!--                accept=".jpg,.jpeg,.png,.PNG,.JPG"-->
                <!--                :on-success="handleSuccessimg"-->
                <!--                :on-remove="handleRemoveimg">-->
                <!--            <img v-if="form.url" :src="form.url" class="avatar">-->
                <!--            <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                <!--        </el-upload>-->
            </el-form-item>

            <!--        <el-button type="primary" size="mini" @click="submitForm " style="float: right; width: 100%">提交</el-button>-->
        </el-form>
    </div>

</template>

<script>
    import {uploadImgBox,deleImg} from "../../config/utils"
    export default {
        name: "BannerT",
        data(){
            return{
                input:"",
                imageUrl:"",
                form:{imageUrl:"",title:"",num:0},
                fileListimg: [],
                uploadData: {type: 1},
                headers: {Authorization:"UjMAdghiVCpa7AG3U4YH5ADmWfYG6AukUfZT6lXDU4dX4gLGAMNXKVoyAjtbMgk1BGFcZgU6X2ZSZgNo"},
                dataList:this.$store.state.banner,
                num:window.sessionStorage.getItem( "num" ),
                banner:JSON.parse(JSON.stringify(this.$store.state.banner))
            }
        },
        components:{
            //
        },
        created(){
            // this.$forceUpdate()
            let num=window.sessionStorage.getItem( "num" )
            let itemData
            this.$store.state.banner.map((item,index)=>{
                if(item.num&&item.num==num&&item.imageUrl!=""){
                    this.form = item
                    itemData=2
                }
            })
            this.form.num=num
            // if(itemData!=2){this.banner=[...this.banner,this.form]}
            this.$store.commit('bannerEdit',this.form)
        }
        ,
        mounted(){

        },
        methods:{
            uploadImgBox(data){
                uploadImgBox(data)
            },
            deleImg(data){
                deleImg(data)
            },
            handleRemoveimg(file, fileList) {
                this.form.imageUrl = ""
            },
            handleSuccessimg(response, file, fileList) {
                // this.dataList[this.num].url= response.data.url
                let num=window.sessionStorage.getItem( "num" )
                this.form.imageUrl = response.data.url

                // this.$store.state.banner=response.data.url

            },
            submitForm(){
                this.$store.commit('bannerEdit', this.form)
            },
            // uploadImg(){
            //     Promise.resolve(
            //         this.$axios.get(`http://xb.admin.com/admin/Common/upload`)
            //     ).then((res) => {
            //
            //     })
            // }

        }
    }
</script>

<style scoped>
    @import '../index.css';
    .avatar-uploader   {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;width: 126px!important;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 126px;
        height: 126px;
        line-height: 126px;
        text-align: center;
    }
    .avatar {
        width: 126px;
        height: 126px;
        display: block;
    }
</style>
