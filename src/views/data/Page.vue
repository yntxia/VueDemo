<template>
    <div id="page">
        <page-table
            :data="data"
            :cols="cols"
            :page="true"
            >
            <el-table-column
            fixed="right"
            label="操作"
            align="center">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="info" size="mini">查看</el-button>
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button @click="deleteRow(scope.row)" type="danger" size="mini">删除</el-button>
            </template>
            </el-table-column>
        </page-table>
        <page-table
            :data="data"
            :cols="cols"
            :page="true"
            :limit="[1,2,3,4]"
            >
            <el-table-column
            fixed="right"
            label="操作"
            align="center">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="info" size="mini">查看</el-button>
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button @click="deleteRow(scope.row)" type="danger" size="mini">删除</el-button>
            </template>
            </el-table-column>
        </page-table>
    </div>
</template>
<script>
    import PageTable from './components/PageTable.vue'
    export default{
        name:'',
        data(){
            return{
                data:[
                    {id:"1",name:"张三",age:20},
                    {id:"2",name:"李四",age:20},
                    {id:"3",name:"王五",age:20},
                ],
                cols:[
                    {prop:"id",label:"id"},
                    {prop:"name",label:"姓名"},
                    {prop:"age",label:"年龄"},
                ]
            }
        },
        components: {
            PageTable
        },
        methods:{
            handleClick(row) {
                console.log(row);
                this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                dangerouslyUseHTMLString: true
                });
            },
            deleteRow(row) {
               console.log(row);
            } 
        }
    }
</script>
<style scoped>

</style>