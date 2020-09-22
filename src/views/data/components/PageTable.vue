<template>
    <div id="page-table">
        <el-table
        :data="renderData"
        style="width: 100%">
            <el-table-column v-for="(val,index) in cols" :prop="val.prop" :label="val.label"></el-table-column>
            <slot></slot>
        </el-table>
        <el-pagination
        v-if="page"
        :page-sizes="limit"
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
                pageSize:1
            }
        },
        created(){
            var that = this;
            if(that.data.length>0){
                that.tableData=that.data;
                that.dataTotal=that.tableData.length;
            }else{
                axios.post(that.url).then(function(res) {
                    console.log(res)
                    that.tableData=res.data.data;
                    that.dataTotal=that.tableData.length;
                })
            }
            that.pageSize=that.limit[0]
        },
        updated(){
            that.pageSize=that.limit[0]
        },
        props:{
            url:{
                type:String,
                default:""
            },
            data:{
                type:Array,
                default:()=>[]
            },
            cols:{
                type:Array,
                default:()=>[]
            },
            page:{
                type:Boolean,
                default:false
            },
            limit:{
                type:Array,
                default:()=>[10, 20, 30, 40, 50, 100]
            }
        },
        computed:{
            renderData:function(){
                if(this.page){
                    return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
                }else{
                    return this.tableData
                }
            }
        }
    }
</script>
<style scoped>

</style>