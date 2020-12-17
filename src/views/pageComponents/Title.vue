<template>
    <div class="titleAll  "><div class="flex"><i></i> <span>{{title.val?title.val:"Hot Products"}}</span><i></i></div></div>
</template>

<script>
    export default {
        name: "Title",
        props:["datas"],
        data(){
            return{
                title:""
            }
        },
        watch:{
            datas:function (a,b) {
                this.title=a
            }
        }
    }
</script>

<style scoped>
.titleAll{margin-bottom: 40px}
</style>
