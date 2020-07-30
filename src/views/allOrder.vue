<template>
    <div>
        <!--        搜素-->
        <div class="search-box">
            <div class="search-title"><span class="iconfont icon-sousu"></span><span class="search">搜素</span></div>
            <el-input v-model="searchContent" placeholder="联系方式/用户名" style="width: 200px"></el-input>
            <div class="search-btn">搜素</div>
        </div>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                border
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="money"
                    label="人民币"
                    width="120">
            </el-table-column>
            <el-table-column
                    label="日期"
                    width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="orderCode"
                    label="订单编号"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <!--                    <el-button-->
                    <!--                            size="mini"-->
                    <!--                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">查看订单</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--        切换第几页-->
        <div style="text-align: center;padding: 15px 0">
            <Pagination background  layout="prev, pager, next" :total="pageTotal"></Pagination>
        </div>

        <!--        弹窗-->
        <Dialog title="查看订单详情" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
            </div>
        </Dialog>
    </div>
</template>

<script>
    import {Pagination,Dialog} from "element-ui";
    export default {
        name: 'allOrder',
        components:{
            Pagination,
            Dialog
        },
        data() {
            return {
                gridData:[],
                searchContent:'',
                pageTotal:1000,//总数
                dialogTableVisible: false,
                tableData: [{
                    money:'200',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    orderCode:'fasfsdfasdfsdafasdfs'
                }, {
                    money:'200',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    orderCode:'fasfsdfasdfsdafasdfs'
                }, {
                    money:'200',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    orderCode:'fasfsdfasdfsdafasdfs'
                }, {
                    money:'200',
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    orderCode:'fasfsdfasdfsdafasdfs'
                }, {
                    money:'200',
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    orderCode:'fasfsdfasdfsdafasdfs'
                }, {
                    money:'200',
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    orderCode:'fasfsdfasdfsdafasdfs'
                }, {
                    money:'200',
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    orderCode:'fasfsdfasdfsdafasdfs'
                }],
                multipleSelection: []
            };
        },
        created() {
            // this.getData();
        },
        methods:{
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index,row);
                this.dialogTableVisible = true
            },
            pageChange:function (index) {
                window.console.log(index)
                //window.console.log(index)
                // this.pageCurrent = index
                // let start = (index-1)*10
                // let self =this
                // getArticleList({
                //     start: start,
                //     size: 10,
                //     plate: 0,
                //     type: this.tagType,
                //     token:getToken()
                // }).then(res=>{
                //     self.articleListData = res.data.data.data
                //     self.pageTotal = Math.ceil(res.data.data.total/10)*10
                // })
            }
        }
    };
</script>

<style scoped lang="scss">
    .search-box{
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
        .search{
            font-size: 16px;
            color: #343A49;
            margin: 0 12px 0 6px;
        }
        .iconfont{
            color: #595959;
            font-size: 18px;
        }
        .search-btn{
            height: 30px;
            width: 56px;
            line-height: 30px;
            text-align: center;
            background-color: #66B98D;
            border-radius: 6px;
            font-size: 14px;
            color: #FFFFFF;
            cursor: pointer;
            margin-left: 20px;
        }
    }
</style>
