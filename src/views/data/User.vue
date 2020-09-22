<template>
    <div id="user">
        <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        style="width: 100%">
            <el-table-column
                prop="id"
                label="id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="age"
                label="年龄">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataTotal">
        </el-pagination>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        name:'',
        data(){
            return{
                tableData: [],
                currentPage:1,
                dataTotal:0,
                pageSize:10
            }
        },
        created(){
            var that = this;
            axios.post("/user/list").then(function(res) {
                console.log(res)
                that.tableData=res.data.data;
                that.dataTotal=that.tableData.length;
            })
        
        },
        methods:{
            handleClick(row) {
                console.log(row);
            } 
        }
    }
</script>
<style scoped>

</style>