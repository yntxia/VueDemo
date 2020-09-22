<template>
    <div id="data">
        <el-container>
            <el-aside width="200px">
                <el-menu
                :default-active="this.$route.path"
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="/basicData">
                    <i class="el-icon-location"></i>
                    <span slot="title">基础数据</span>
                </el-menu-item>
                <el-menu-item index="/user">
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="/page">
                    <i class="el-icon-document"></i>
                    <span slot="title">分页组件</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default{
        name:'',
        data(){
            return{
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>

</style>