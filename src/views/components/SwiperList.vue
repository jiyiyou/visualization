<template>
    <div class="app_box">
        <el-form size="mini" :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px"
                 class="demo-dynamic"  label-position="top">
            <el-form-item  label="每排个数"  >
                <el-input  v-model="dynamicValidateForm.numPage"   ></el-input >
            </el-form-item>
            <el-collapse   >
                <el-collapse-item title="图片" :name="index" v-for="(domain, index) in dynamicValidateForm.domains">
                    <el-form-item :label="'图片'" :prop="'domains.' + index + '.value'"  >
                        <p class="upload-box" ><img :src="domain.imageUrl" alt=""><span @click="uploadImgBox({name:['swiper','domains'],index:index,active:true})" class="upload-i-box"><i></i><i></i></span> <span class="up-img-bg" v-if="domain.imageUrl"><i class="el-icon-delete" @click="deleImg({name:['swiper','domains'],index:index })"></i></span></p>
                    </el-form-item>
                    <el-form-item
                            :label="'内容'"
                            :prop="'domains.' + index + '.value'"
                    >
                        <el-input v-model="domain.value"></el-input>
                        <el-button @click.prevent="removeDomain(domain)" style="float: right;margin-top: 20px" type="primary" plain>删除</el-button>
                    </el-form-item>
                </el-collapse-item>
            </el-collapse>

            <el-form-item style="margin-top: 20px;text-align: right">
                <el-button @click="addDomain">添加图片</el-button>
                <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    import {uploadImgBox,deleImg} from "../../config/utils"
    export default {
        name: "swiperList",
        data() {
            return {
                uploadData: {type: 1},
                headers: {Authorization:"UjMAdghiVCpa7AG3U4YH5ADmWfYG6AukUfZT6lXDU4dX4gLGAMNXKVoyAjtbMgk1BGFcZgU6X2ZSZgNo"},
                dynamicValidateForm: {
                    domains: [
                        { value: '',fileListimg:[],imageUrl:"",key: Date.now(), },
                        { value: '',fileListimg:[],imageUrl:"",key: Date.now()+1, },
                        { value: '',fileListimg:[],imageUrl:"",key: Date.now()+2, },
                        { value: '',fileListimg:[],imageUrl:"",key: Date.now()+3, }
                    ],
                    numPage:2
                } ,
                imageUrl:""
            };
        },
        mounted(){
            // if( !this.$store.state.swiper.domains.length<1){
            //     this.dynamicValidateForm=this.$store.state.swiper
            // }
            // this.$store.commit('swiperEdit',this.dynamicValidateForm  )

            let num=window.sessionStorage.getItem( "num" )
            let itemData
            this.$store.state.swiper.map((item,index)=>{
                if(item.num&&item.num==num ){
                    this.dynamicValidateForm=item
                    console.log("66666",item)
                    itemData=2
                }
            })
            this.dynamicValidateForm.num=num
            // if(itemData!=2){this.banner=[...this.banner,this.form]}
            this.$store.commit('swiperEdit',this.dynamicValidateForm)


        },
        methods: {
            uploadImgBox(data){
                uploadImgBox(data)
            },
            deleImg(data){
                deleImg(data)
            },
            handleRemoveimg(file, fileList) {
                this.imageUrl = ""
            },
            handleSuccessimg(response, file, fileList,index) {
                // alert(index)
                // this.imageUrl = response.data.url
                this.dynamicValidateForm.domains[index].imageUrl=response.data.url
                // this.$store.state.banner=response.data.url

            },
            uploadImg(){
                Promise.resolve(
                    this.$axios.get(`http://xb.admin.com/admin/Common/upload`)
                ).then((res) => {

                })
            },
            submitForm(formName) {
                this.$store.commit('listEdit',this.dynamicValidateForm  )
                // this.$refs[formName].validate((valid) => {
                //     if (valid) {
                //         // alert('submit!');
                //     } else {
                //         return false;
                //     }
                // });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
                this.$store.commit('swiperEdit',this.dynamicValidateForm  )
            },
            addDomain() {
                    this.dynamicValidateForm.domains.push({
                        value: '',
                        imageUrl:"",
                        key: Date.now(),
                        fileListimg:[]
                    });
            }
        }
    }
</script>

<style scoped>
    @import '../index.css';
    .el-form {
        width: 100% !important;
    }

    .el-form--label-top .el-form-item__label {
        padding: 0 !important;
    }
    .avatar-uploader   {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;width: 178px!important;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .app_box>>>.el-collapse-item__header{background-color: #f1f1f1!important;padding-left: 6px;box-sizing: border-box}
    .app_box>>>.el-collapse-item.is-active{border: 2px solid #f1f1f1;}
    .app_box>>>.el-collapse-item__content{padding: 8px;box-sizing: border-box}
    .app_box>>>.el-form--label-top .el-form-item__label{padding: 0!important;}
</style>
