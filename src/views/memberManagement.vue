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
                    label="日期"
                    width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="用户名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="联系方式"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="购买数量"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        <!--        切换第几页-->
        <div style="text-align: center;padding: 15px 0">
            <Pagination background layout="prev, pager, next" :total="pageTotal"></Pagination>
        </div>
    </div>
</template>

<script>
    import {Pagination} from "element-ui";
    export default {
        name: 'memberManagement',
        components:{
            Pagination
        },
        data() {
            return {
                searchContent:'',
                pageTotal:1000,//总数
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:'151545454545',
                    number:'2'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:'151545454545',
                    number:'2'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:'151545454545',
                    number:'2'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:'151545454545',
                    number:'2'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:'151545454545',
                    number:'2'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:'151545454545',
                    number:'2'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone:'151545454545',
                    number:'2'
                }],
                multipleSelection: []
                // query: {
                //     address: '',
                //     name: '',
                //     pageIndex: 1,
                //     pageSize: 10
                // },
                // tableData: [],
                // multipleSelection: [],
                // delList: [],
                // editVisible: false,
                // pageTotal: 0,
                // form: {},
                // idx: -1,
                // id: -1
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
                this.tableData.splice(index,1)
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
        },
        // methods: {
//         // 获取 easy-mock 的模拟数据
//         getData() {
//             fetchData(this.query).then(res => {
//                 console.log(res);
//                 this.tableData = res.list;
//                 this.pageTotal = res.pageTotal || 50;
//             });
//         },
//         // 触发搜索按钮
//         handleSearch() {
//             this.$set(this.query, 'pageIndex', 1);
//             this.getData();
//         },
//         // 删除操作
//         handleDelete(index, row) {
//             // 二次确认删除
//             this.$confirm('确定要删除吗？', '提示', {
//                 type: 'warning'
//             })
//                 .then(() => {
//                     this.$message.success('删除成功');
//                     this.tableData.splice(index, 1);
//                 })
//                 .catch(() => {});
//         },
//         // 多选操作
//         handleSelectionChange(val) {
//             this.multipleSelection = val;
//         },
//         delAllSelection() {
//             const length = this.multipleSelection.length;
//             let str = '';
//             this.delList = this.delList.concat(this.multipleSelection);
//             for (let i = 0; i < length; i++) {
//                 str += this.multipleSelection[i].name + ' ';
//             }
//             this.$message.error(`删除了${str}`);
//             this.multipleSelection = [];
//         },
//         // 编辑操作
//         handleEdit(index, row) {
//             this.idx = index;
//             this.form = row;
//             this.editVisible = true;
//         },
//         // 保存编辑
//         saveEdit() {
//             this.editVisible = false;
//             this.$message.success(`修改第 ${this.idx + 1} 行成功`);
//             this.$set(this.tableData, this.idx, this.form);
//         },
//         // 分页导航
//         handlePageChange(val) {
//             this.$set(this.query, 'pageIndex', val);
//             this.getData();
//         }
//     }
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
    /*.handle-box {*/
    /*    margin-bottom: 20px;*/
    /*}*/

    /*.handle-select {*/
    /*    width: 120px;*/
    /*}*/

    /*.handle-input {*/
    /*    width: 300px;*/
    /*    display: inline-block;*/
    /*}*/
    /*.table {*/
    /*    width: 100%;*/
    /*    font-size: 14px;*/
    /*}*/
    /*.red {*/
    /*    color: #ff0000;*/
    /*}*/
    /*.mr10 {*/
    /*    margin-right: 10px;*/
    /*}*/
    /*.table-td-thumb {*/
    /*    display: block;*/
    /*    margin: auto;*/
    /*    width: 40px;*/
    /*    height: 40px;*/
    /*}*/
</style>
