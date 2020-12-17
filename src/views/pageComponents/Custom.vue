<template>
    <div>
        <div v-html="textarea.textarea"></div>

    </div>
</template>

<script>
    export default {
        name: "Custom",
        props: ["datas"],
        watch:{
            datas: function (a, b) {
                this.textarea=a
            },
        },
        data(){
            return{
                textarea:{textarea:"",num:""}
            }
        }
    }
</script>

<style scoped>

</style>
