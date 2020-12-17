<template>
    <div> <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="text.textarea">
    </el-input>
<!--        <el-button type="primary" plain @click="submitText">确认</el-button>-->
    </div>
</template>

<script>
    export default {
        name: "Custom",
        data(){
            return{
                text:{textarea:"",num:""}

            }
        },
        created() {
            let num=window.sessionStorage.getItem( "num" )
            let itemData
            this.$store.state.custom.map((item,index)=>{
                if(item.num&&item.num==num ){
                    this.text  = item
                    itemData=2
                }
            })
            this.text.num=num
            // if(itemData!=2){this.banner=[...this.banner,this.form]}
            this.$store.commit('customEdit',this.text)
        },
        methods:{
            submitText(){
                this.$store.commit('customEdit',this.text)
            }
        }
    }
</script>

<style scoped>

</style>
