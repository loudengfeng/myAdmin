<template>
    <div class="sidebar">
        <el-menu
                class="sidebar-el-menu"
                :default-active="onRoutes"
                :collapse="collapse"
                background-color="#343a49"
                text-color="#bfcbd9"
                active-text-color="#66B98D"
                unique-opened
                router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon" class="iconfont"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index"> {{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }} </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon" class="iconfont"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from './bus';
    export default {
        name:'Sidebar',
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'icon-zhuye',
                        index: 'index',
                        title: '系统首页'
                    },
                    {
                        icon: 'icon-B',
                        index: 'memberManagement',
                        title: '会员管理'
                    },
                    {
                        icon: 'icon-B',
                        index: '3',
                        title: '订单管理',
                        subs:[
                            {
                                index:'allOrder',
                                title:'全部订单'
                            },{
                                index:'customerService',
                                title:'售后管理'
                            }
                        ]
                    },
                    {
                        icon: 'icon-B',
                        index: 'shopUpper',
                        title: '商品上架'
                    },
                    {
                        icon: 'icon-B',
                        index: 'shopManagement',
                        title: '商品管理'
                    },
                    {
                        icon: 'icon-B',
                        index: 'teamManagement',
                        title: '团队管理'
                    },
                    {
                        icon: 'icon-B',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        icon: 'icon-B',
                        index: '9',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: '9-2',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    }
                                ]
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'icon-B',
                        index: 'icon',
                        title: '自定义图标'
                    },
                    {
                        icon: 'icon-B',
                        index: 'charts',
                        title: 'schart图表'
                    },
                    {
                        icon: 'icon-B',
                        index: '6',
                        title: '拖拽组件',
                        subs: [
                            {
                                index: 'drag',
                                title: '拖拽列表'
                            },
                            {
                                index: 'dialog',
                                title: '拖拽弹框'
                            }
                        ]
                    },
                    {
                        icon: 'icon-B',
                        index: 'i18n',
                        title: '国际化功能'
                    },
                    {
                        icon: 'icon-B',
                        index: '7',
                        title: '错误处理',
                        subs: [
                            {
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                index: '404',
                                title: '404页面'
                            }
                        ]
                    },
                    {
                        icon: 'icon-B',
                        index: '/donate',
                        title: '支持作者'
                    }
                ]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
                bus.$emit('collapse-content', msg);
            });
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>

<style scoped>
    .iconfont{
        font-size: 16px;
        margin-right: 5px;
    }
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar > ul {
        height: 100%;
        background-color: #343a49 !important;
    }
    .el-menu-item.is-active {
        color: #fff !important;
        background-color: #66b98d !important;
    }
</style>
