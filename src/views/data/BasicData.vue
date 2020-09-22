<template>
    <div id="basicData">
        <mark-down v-model="content" @change="change" ref="myQuillEditor"></mark-down>
    </div>
</template>
<script>
    import MarkDown from "@/components/MarkDown.vue";
    export default{
        name:'',
        components: {
            MarkDown //注册tuieditor富文本编辑器组件
        },
        data(){
            return{
                content: "aaaaa"
            }
        },
        watch: {
            content: function (nval, oval) {
                alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!')
            }
        },
        methods: {
           change(value, render){
               console.log(value)
           }
        }
    }
</script>
<style scoped>
#show-content{
  padding:25px;
}
</style>