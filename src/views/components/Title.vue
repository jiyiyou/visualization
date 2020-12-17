<template>
    <div>
        <el-form  label-position="top" label-width="80px"  size="mini" >
            <el-form-item label="标题">
                <el-input v-model="text.val" placeholder=""></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Title",
        data(){
            return{
                text:{val:"",num:""}

            }
        },
        created() {
            let num=window.sessionStorage.getItem( "num" )
            let itemData
            this.$store.state.title.map((item,index)=>{
                if(item.num&&item.num==num ){
                    this.text  = item
                    itemData=2
                }
            })
            this.text.num=num
            // if(itemData!=2){this.banner=[...this.banner,this.form]}
            this.$store.commit('titleEdit',this.text)
        },
        methods:{
            submitText(){
                this.$store.commit('titleEdit',this.text)
            }
        }
    }
</script>

<style scoped>

</style>
